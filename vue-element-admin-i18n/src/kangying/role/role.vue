<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input
        v-model="listQuery.title"
        :placeholder="'医院名称'"
        style="width: 200px;"
        class="filter-item"
        @keyup.enter.native="handleFilter"
      />
      <el-select
        v-model="listQuery.importance"
        :placeholder="'医院等级'"
        clearable
        style="width: 200px"
        class="filter-item"
      >
        <el-option v-for="item in importanceOptions" :key="item" :label="item" :value="item" />
      </el-select>

      <el-button v-waves class="filter-item" type="primary" @click="handleFilter">
        搜索
      </el-button>
      <el-button
        class="filter-item"
        style="margin-left: 10px;"
        type="primary"
        @click="handleCreate"
      >
        重置
      </el-button>
      <el-button
        v-waves
        :loading="downloadLoading"
        class="filter-item"
        type="primary"
        style="float:right;"
        @click="handleCreate"
      >
        添加
      </el-button>
    </div>

    <el-table
      :key="tableKey"
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%;"
      @sort-change="sortChange"
    >
      <el-table-column label="ID" prop="id" align="center" width="200px">
        <template slot-scope="{row}">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="角色分类" min-width="150px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.role_name }}</span>

        </template>
      </el-table-column>
      <el-table-column label="角色状态" width="110px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.role_status ? '启用' : '禁用' }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        align="center"
        width="330"
        class-name="small-padding fixed-width"
      >
        <template slot-scope="{row,$index}">
          <el-button type="primary" size="mini" @click="handleUpdate(row)">
            编辑
          </el-button>
          <el-button v-if="row.status!='deleted'" size="mini" type="danger" @click="handleDelete(row,$index)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getList"
    />

    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form
        ref="dataForm"
        label-position="left"
        label-width="70px"
        style="width: 400px; margin-left:50px;"
      >
        <el-form-item label="角色名称" prop="title">
          <el-input v-model="role_name" />
        </el-form-item>
        <el-form-item label="角色ID" prop="title">
          <el-input v-model="role_id" disabled />
        </el-form-item>
      </el-form>

      <el-tree
        ref="tree"
        :data="nodeList"
        show-checkbox
        node-key="id"
        :default-expanded-keys="[1]"
        :default-checked-keys="node_ids"
        :props="defaultProps"
        @check-change="treeChange"
      />

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">
          {{ $t('table.cancel') }}
        </el-button>
        <el-button type="primary" @click="dialogStatus==='create'?createData():updateData()">
          {{ $t('table.confirm') }}
        </el-button>
      </div>
    </el-dialog>

    <el-dialog :visible.sync="dialogPvVisible" title="Reading statistics">
      <el-table :data="pvData" border fit highlight-current-row style="width: 100%">
        <el-table-column prop="key" label="Channel" />
        <el-table-column prop="pv" label="Pv" />
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogPvVisible = false">{{ $t('table.confirm') }}</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { fetchList, fetchPv, createArticle, updateArticle } from '@/api/article'
import waves from '@/directive/waves' // waves directive
import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import {
    getHospitalList,
    getMedicinesList,
    getRecordsList,
    nodeList,
    roleAdd,
    roleDetail,
    roleList, roleUpdate
} from '@/api/kangying-https'

const calendarTypeOptions = [
    { key: 'CN', display_name: 'China' },
    { key: 'US', display_name: 'USA' },
    { key: 'JP', display_name: 'Japan' },
    { key: 'EU', display_name: 'Eurozone' }
]

// arr to obj, such as { CN : "China", US : "USA" }
const calendarTypeKeyValue = calendarTypeOptions.reduce((acc, cur) => {
    acc[cur.key] = cur.display_name
    return acc
}, {})

export default {
    name: 'Hospital',
    components: { Pagination },
    directives: { waves },
    filters: {
        statusFilter(status) {
            const statusMap = {
                published: 'success',
                draft: 'info',
                deleted: 'danger'
            }
            return statusMap[status]
        },
        typeFilter(type) {
            return calendarTypeKeyValue[type]
        }
    },
    data() {
        return {
            nodeList: [],
            node_ids: [],
            role_id: '',
            role_name: '',
            tree: [{
                id: 1,
                label: '一级 1',
                children: [{
                    id: 4,
                    label: '二级 1-1',
                    children: [{
                        id: 9,
                        label: '三级 1-1-1'
                    }, {
                        id: 10,
                        label: '三级 1-1-2'
                    }]
                }]
            }, {
                id: 2,
                label: '一级 2',
                children: [{
                    id: 5,
                    label: '二级 2-1'
                }, {
                    id: 6,
                    label: '二级 2-2'
                }]
            }, {
                id: 3,
                label: '一级 3',
                children: [{
                    id: 7,
                    label: '二级 3-1'
                }, {
                    id: 8,
                    label: '二级 3-2'
                }]
            }],
            defaultProps: {
                children: 'children',
                label: 'node_name'
            },
            tableKey: 0,
            list: null,
            total: 0,
            listLoading: true,
            listQuery: {
                page: 1,
                limit: 20,
                page_size: 20,
                importance: undefined,
                title: undefined,
                type: undefined,
                sort: '+id'
            },
            importanceOptions: [1, 2, 3],
            calendarTypeOptions,
            sortOptions: [{ label: 'ID Ascending', key: '+id' }, { label: 'ID Descending', key: '-id' }],
            statusOptions: ['published', 'draft', 'deleted'],
            showReviewer: false,
            temp: {
                id: undefined,
                importance: 1,
                remark: '',
                timestamp: new Date(),
                title: '',
                type: '',
                status: 'published'
            },
            dialogFormVisible: false,
            dialogStatus: '',
            textMap: {
                update: 'Edit',
                create: 'Create'
            },
            dialogPvVisible: false,
            pvData: [],
            rules: {
                type: [{ required: true, message: 'type is required', trigger: 'change' }],
                timestamp: [{ type: 'date', required: true, message: 'timestamp is required', trigger: 'change' }],
                title: [{ required: true, message: 'title is required', trigger: 'blur' }]
            },
            downloadLoading: false
        }
    },
    created() {
        this.getList()

        nodeList().then(res => {
            this.nodeList = res.data.list
            console.log(res)
        })
    },
    methods: {
        treeChange() {
            console.log(this.$refs.tree.getCheckedKeys())
        },
        getCheckedNodes() {
            console.log(this.$refs.tree.getCheckedNodes())
        },
        getCheckedKeys() {
            console.log(this.$refs.tree.getCheckedKeys())
        },
        viewHospitalDetails(row) {
            this.$router.push({
                path: '/hospital/details?t=' + Date.now()
            })
        },
        createData() {
            if (!this.role_name) {
                this.$notify({
                    title: '提示',
                    message: '角色名称为必填项',
                    type: 'error',
                    duration: 2000
                })
                return
            }
            roleAdd({ node_ids: this.$refs.tree.getCheckedKeys(), role_name: this.role_name }).then(res => {
                if (res.code === '000') {

                    this.dialogFormVisible = false

                    this.$notify({
                        title: '成功',
                        message: res.msg,
                        type: 'success',
                        duration: 2000
                    })
                }
                console.log(res)
            })
        },
        handleUpdate(row) {
            this.resetTemp()

            this.dialogStatus = 'update'
            this.dialogFormVisible = true
            this.$nextTick(() => {
                this.$refs.tree.setCheckedKeys([])

                roleDetail({ role_id: row.id }).then(res => {
                    console.log(res)
                    this.node_ids = res.data.node_ids
                    this.role_name = res.data.role_name
                    this.role_id = row.id
                })
            })
            this.$nextTick(() => {
                this.$refs['dataForm'].clearValidate()
            })
        },
        updateData() {
            roleUpdate({
                role_id: this.role_id,
                node_ids: this.$refs.tree.getCheckedKeys(),
                role_name: this.role_name
            }).then(res => {
                console.log(res)

                if (res.code === '000') {

                    this.dialogFormVisible = false
                    this.$notify({
                        title: '成功',
                        message: res.msg,
                        type: 'success',
                        duration: 2000
                    })
                }
            })
        },
        getList() {
            this.listLoading = true
            roleList(this.listQuery).then(res => {
                this.listLoading = false
                this.list = res.data.list
                this.total = res.data.count

                // Just to simulate the time of the request
                // setTimeout(() => {
                //     this.listLoading = false
                // }, .5 * 1000)
            })
        },
        handleFilter() {
            this.listQuery.page = 1
            this.getList()
        },
        handleModifyStatus(row, status) {
            this.$message({
                message: '操作成功',
                type: 'success'
            })
            row.status = status
        },
        sortChange(data) {
            const { prop, order } = data
            if (prop === 'id') {
                this.sortByID(order)
            }
        },
        sortByID(order) {
            if (order === 'ascending') {
                this.listQuery.sort = '+id'
            } else {
                this.listQuery.sort = '-id'
            }
            this.handleFilter()
        },
        resetTemp() {
            this.node_ids = []
            this.role_name = ''
            this.role_id = ''

            this.temp = {
                id: undefined,
                importance: 1,
                remark: '',
                timestamp: new Date(),
                title: '',
                status: 'published',
                type: ''
            }
        },
        handleCreate() {
            this.resetTemp()

            this.dialogStatus = 'create'
            this.dialogFormVisible = true

            this.$nextTick(() => {
                this.$refs.tree.setCheckedKeys([])
                //
                // roleDetail({ role_id: row.id }).then(res => {
                //     console.log(res)
                //     this.node_ids = res.data.node_ids
                //     this.role_name = res.data.role_name
                //     this.role_id = row.id
                // })
            })

            this.$nextTick(() => {
                this.$refs['dataForm'].clearValidate()
            })
        },

        handleDelete(row, index) {
            this.$notify({
                title: '成功',
                message: '删除成功',
                type: 'success',
                duration: 2000
            })
            this.list.splice(wenzhen, 1)
        },
        handleFetchPv(pv) {
            fetchPv(pv).then(response => {
                this.pvData = response.data.pvData
                this.dialogPvVisible = true
            })
        },
        handleDownload() {
            this.downloadLoading = true
            import('@/vendor/Export2Excel').then(excel => {
                const tHeader = ['timestamp', 'title', 'type', 'importance', 'status']
                const filterVal = ['timestamp', 'title', 'type', 'importance', 'status']
                const data = this.formatJson(filterVal)
                excel.export_json_to_excel({
                    header: tHeader,
                    data,
                    filename: 'table-list'
                })
                this.downloadLoading = false
            })
        },
        formatJson(filterVal) {
            return this.list.map(v => filterVal.map(j => {
                if (j === 'timestamp') {
                    return parseTime(v[j])
                } else {
                    return v[j]
                }
            }))
        },
        getSortClass: function(key) {
            const sort = this.listQuery.sort
            return sort === `+${key}` ? 'ascending' : 'descending'
        }
    }
}
</script>
