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
      <el-table-column label="账户" prop="id" align="center" width="200px">
        <template slot-scope="{row}">
          <span>{{ row.user_code }}</span>
        </template>
      </el-table-column>
      <el-table-column label="角色" prop="id" align="center" width="200px">
        <template slot-scope="{row}">
          <span>{{ row.role_name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="昵称" prop="id" align="center" width="200px">
        <template slot-scope="{row}">
          <span>{{ row.user_name }}</span>
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
          <el-button size="mini" type="danger" @click="handleDelete(row,$index)">
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
        :rules="rules"
        :model="temp"
        label-position="left"
        label-width="70px"
        style="width: 400px; margin-left:50px;"
      >
        <el-form-item label="角色" prop="role_id">
          <el-select v-model="temp.role_id" class="filter-item" placeholder="请选择角色">
            <el-option
              v-for="item in roleList"
              :key="item.id"
              :label="item.role_name"
              :value="item.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="账户" prop="user_code">
          <el-input v-model="temp.user_code" />
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input v-model="temp.pass" />
        </el-form-item>
        <el-form-item label="昵称" prop="user_name">
          <el-input v-model="temp.user_name" />
        </el-form-item>

      </el-form>
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
    adminUserDel,
    adminUserList,
    adminUserSave,
    getHospitalList,
    getMedicinesList,
    getRecordsList,
    roleList
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
            tableKey: 0,
            list: null,
            total: 0,
            listLoading: true,
            listQuery: {
                page: 1,
                page_size: 20,
                limit: 20,
                importance: undefined,
                title: undefined,
                type: undefined,
                sort: '+id'
            },
            importanceOptions: [1, 2, 3],
            calendarTypeOptions,
            roleList: [],
            sortOptions: [{ label: 'ID Ascending', key: '+id' }, { label: 'ID Descending', key: '-id' }],
            statusOptions: ['published', 'draft', 'deleted'],
            showReviewer: false,
            temp: {
                user_code: '', pass: '', role_id: '', user_name: ''
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
                role_id: [{ required: true, message: '角色为必选项', trigger: 'blur' }],
                user_code: [{ required: true, message: '账号为必填项', trigger: 'blur' }],
                pass: [{ required: true, message: '密码为必填项', trigger: 'blur' }],
                user_name: [{ required: true, message: '昵称为必填项', trigger: 'blur' }]
            },
            downloadLoading: false
        }
    },
    created() {
        this.getList()
        roleList().then(res => {
            this.roleList = res.data.list
            // this.calendarTypeOptions = res.data.list.map(item=>{
            //     item.key = item.id
            //     item.display_name = item.role_name
            // })
            console.log(res)
        })
    },
    methods: {
        viewHospitalDetails(row) {
            this.$router.push({
                path: '/hospital/details?t=' + Date.now()
            })
        },
        getList() {
            this.listLoading = true
            adminUserList(this.listQuery).then(res => {
                this.listLoading = false
                this.list = res.data.list
                this.total = res.data.pagination.total_num

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
                this.$refs['dataForm'].clearValidate()
            })
        },
        createData() {
            adminUserSave(this.temp).then(res => {
                if (res.code === '000') {
                    this.dialogFormVisible = false

                    this.$notify({
                        title: '成功',
                        message: res.msg,
                        type: 'success',
                        duration: 2000
                    })
                } else {
                    this.$notify({
                        title: '失败',
                        message: res.msg,
                        type: 'error',
                        duration: 2000
                    })
                }
            })
        },
        handleUpdate(row) {
            console.log(row)
            this.temp = row
            // this.temp = Object.assign({}, row) // copy obj
            // this.temp.timestamp = new Date(this.temp.timestamp)
            this.dialogStatus = 'update'
            this.dialogFormVisible = true
            // this.$nextTick(() => {
            //     this.$refs['dataForm'].clearValidate()
            // })
        },
        updateData() {
            adminUserSave(this.temp).then(res => {
                if (res.code === '000') {
                    this.dialogFormVisible = false

                    this.$notify({
                        title: '成功',
                        message: res.msg,
                        type: 'success',
                        duration: 2000
                    })
                } else {
                    this.$notify({
                        title: '失败',
                        message: res.msg,
                        type: 'error',
                        duration: 2000
                    })
                }
            })
        },
        handleDelete(row, index) {
            adminUserDel(row).then(res => {
                if (res.code === '000') {
                    this.dialogFormVisible = false
                    this.$notify({
                        title: '成功',
                        message: res.msg,
                        type: 'success',
                        duration: 2000
                    })
                } else {
                    this.$notify({
                        title: '失败',
                        message: res.msg,
                        type: 'error',
                        duration: 2000
                    })
                }
            })

            this.list.splice(index, 1)
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
