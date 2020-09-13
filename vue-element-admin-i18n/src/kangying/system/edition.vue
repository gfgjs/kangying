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
                <el-option v-for="item in importanceOptions" :key="item" :label="item" :value="item"/>
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
            <el-table-column label="平台" min-width="150px" align="center">
                <template slot-scope="{row}">
                    <span>{{ row.app_type == 1 ? '用户端' : '医生端' }}</span>
                </template>
            </el-table-column>
            <el-table-column label="APP链接" min-width="150px" align="flex-start">
                <template slot-scope="{row}">
                    <span>{{ row.apk_link }}</span>
                </template>
            </el-table-column>
            <el-table-column label="创建时间" min-width="150px" align="flex-start">
                <template slot-scope="{row}">
                    <span>{{ row.create_time }}</span>
                </template>
            </el-table-column>
            <el-table-column label="描述" min-width="150px" align="flex-start">
                <template slot-scope="{row}">
                    <span>{{ row.version_desc }}</span>
                </template>
            </el-table-column>
            <el-table-column label="版本号" min-width="150px" align="flex-start">
                <template slot-scope="{row}">
                    <span>{{ row.version_code }}</span>
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
                    <el-button v-if="row.status!='draft'" size="mini" @click="handleModifyStatus(row,'draft')">
                        禁用
                    </el-button>
                    <el-button type="success" size="mini" @click="viewHospitalDetails(row)">
                        详情
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
                :rules="rules"
                :model="temp"
                label-position="left"
                label-width="70px"
                style="width: 400px; margin-left:50px;"
            >
                <el-form-item label="平台" prop="app_type">
                    <el-select v-model="temp.app_type" class="filter-item" placeholder="请选择平台">
                        <el-option
                            v-for="item in app_pat"
                            :key="item.key"
                            :label="item.display_name"
                            :value="item.key"
                        />
                    </el-select>
                </el-form-item>
                <el-form-item label="链接" prop="apk_link">
                    <el-input v-model="temp.apk_link"/>

                    <!--                    <el-date-picker v-model="temp.app_link" type="datetime" placeholder="Please pick a date"/>-->
                </el-form-item>
                <el-form-item label="ID" prop="id">
                    <el-input v-model="temp.id" :disabled="dialogStatus!=='create'"/>
                </el-form-item>
                <el-form-item label="版本" prop="version">
                    <el-input v-model="temp.version"/>
                </el-form-item>
                <el-form-item label="版本号" prop="version_code">
                    <el-input v-model="temp.version_code"/>
                </el-form-item>
                <el-form-item label="描述" prop="version_desc">
                    <el-input v-model="temp.version_desc"/>
                </el-form-item>
                <!--                <el-form-item :label="$t('table.importance')">-->
                <!--                    <el-rate-->
                <!--                        v-model="temp.importance"-->
                <!--                        :colors="['#99A9BF', '#F7BA2A', '#FF9900']"-->
                <!--                        :max="3"-->
                <!--                        style="margin-top:8px;"-->
                <!--                    />-->
                <!--                </el-form-item>-->
                <!--                <el-form-item :label="$t('table.remark')">-->
                <!--                    <el-input-->
                <!--                        v-model="temp.remark"-->
                <!--                        :autosize="{ minRows: 2, maxRows: 4}"-->
                <!--                        type="textarea"-->
                <!--                        placeholder="Please input"-->
                <!--                    />-->
                <!--                </el-form-item>-->
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
                <el-table-column prop="key" label="Channel"/>
                <el-table-column prop="pv" label="Pv"/>
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
import { getHospitalList, getMedicinesList, getRecordsList, getVersionList, saveAppVersion } from '@/api/kangying-https'

const calendarTypeOptions = [
    { key: '1', display_name: '用户端' },
    { key: '2', display_name: '医生' }
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
                limit: 20,
                importance: undefined,
                title: undefined,
                type: undefined,
                sort: '+id'
            },
            importanceOptions: [1, 2, 3],
            calendarTypeOptions,
            app_pat: [
                { key: '1', display_name: '用户端' },
                { key: '2', display_name: '医生' }
            ],
            sortOptions: [{ label: 'ID Ascending', key: '+id' }, { label: 'ID Descending', key: '-id' }],
            statusOptions: ['published', 'draft', 'deleted'],
            showReviewer: false,
            temp: {
                apk_link: '',
                app_type: '',
                // create_time: "0000-00-00 00:00:00",
                id: undefined,
                version: '',
                version_code: '',
                version_desc: ''
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
                app_type: [{ required: true, message: '平台为必选', trigger: 'change' }],
                timestamp: [{ type: 'date', required: true, message: 'timestamp is required', trigger: 'change' }],
                title: [{ required: true, message: 'title is required', trigger: 'blur' }],
                apk_link: [{ required: true, message: '链接为必填', trigger: 'blur' }],
                id: [{ required: true, message: 'id为必填', trigger: 'blur' }],
                version: [{ required: true, message: '版本为必填', trigger: 'blur' }],
                version_code: [{ required: true, message: '版本号为必填', trigger: 'blur' }],
                version_desc: [{ required: true, message: '描述为必填', trigger: 'blur' }]
            },
            downloadLoading: false
        }
    },
    created() {
        this.getList()
    },
    methods: {
        viewHospitalDetails(row) {
            this.$router.push({
                path: '/hospital/details?t=' + Date.now()
            })
        },
        getList() {
            this.listLoading = true
            getVersionList(this.listQuery).then(res => {
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

            saveAppVersion(this.temp).then(res => {
                console.log(res)
                if (res.code === '000') {
                    this.$notify({
                        title: '成功',
                        message: res.msg,
                        type: 'success',
                        duration: 2000
                    })
                }
            })

            return
            this.$refs['dataForm'].validate((valid) => {
                if (valid) {
                    this.temp.id = parseInt(Math.random() * 100) + 1024 // mock a id
                    this.temp.author = 'vue-element-admin'
                    createArticle(this.temp).then(() => {
                        this.list.unshift(this.temp)
                        this.dialogFormVisible = false
                        this.$notify({
                            title: '成功',
                            message: '创建成功',
                            type: 'success',
                            duration: 2000
                        })
                    })
                }
            })
        },
        handleUpdate(row) {
            row.app_type = row.app_type + ''
            this.temp = Object.assign({}, row) // copy obj
            this.temp.timestamp = new Date(this.temp.timestamp)
            this.dialogStatus = 'update'
            this.dialogFormVisible = true
            this.$nextTick(() => {
                this.$refs['dataForm'].clearValidate()
            })
        },
        updateData() {
            saveAppVersion(this.temp).then(res => {
                console.log(res)
                if (res.code === '000') {
                    this.$notify({
                        title: '成功',
                        message: res.msg,
                        type: 'success',
                        duration: 2000
                    })
                }
            })
            return
            this.$refs['dataForm'].validate((valid) => {
                if (valid) {
                    const tempData = Object.assign({}, this.temp)
                    tempData.timestamp = +new Date(tempData.timestamp) // change Thu Nov 30 2017 16:41:05 GMT+0800 (CST) to 1512031311464
                    updateArticle(tempData).then(() => {
                        const index = this.list.findIndex(v => v.id === this.temp.id)
                        this.list.splice(wenzhen, 1, this.temp)
                        this.dialogFormVisible = false
                        this.$notify({
                            title: '成功',
                            message: '更新成功',
                            type: 'success',
                            duration: 2000
                        })
                    })
                }
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
