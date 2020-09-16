<template>
    <div class="app-container">
        <div class="filter-container" v-if="0">
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
            <el-table-column label="ID" prop="id" align="center" width="100px">
                <template slot-scope="{row}">
                    <span>{{ row.id }}</span>
                </template>
            </el-table-column>
            <el-table-column label="缩略图" prop="id" align="center" width="200px">
                <template slot-scope="{row}">
                    <img :src="row.thumb" style="max-height: 100px;max-width: 100px;" alt="">
                </template>
            </el-table-column>
            <el-table-column label="套餐编号" width="150px" align="center">
                <template slot-scope="{row}">
                    <span>{{ row.id }}</span>
                </template>
            </el-table-column>
            <el-table-column label="套餐名称" width="150px">
                <template slot-scope="{row}">
                    <span>{{ row.main_title }}</span>
                </template>
            </el-table-column>
            <el-table-column label="主题" min-width="150px" align="flex-start">
                <template slot-scope="{row}">
                    <span>{{ row.sub_title }}</span>
                </template>
            </el-table-column>
            <el-table-column label="价格" min-width="150px" align="flex-start">
                <template slot-scope="{row}">
                    <span>{{ row.price }}</span>
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
        <el-dialog fullscreen :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
            <el-form
                ref="dataForm"
                :rules="rules"
                :model="temp"
                label-position="left"
                label-width="70px"
                style="width: 100%;"
            >
                <el-form-item style="width: 20%;" label="ID" prop="title">
                    <el-input v-model="temp.id" disabled/>
                </el-form-item>
                <el-form-item style="width: 20%;" label="套餐名" prop="title">
                    <el-input v-model="temp.main_title"/>
                </el-form-item>
                <el-form-item style="width: 20%;" label="主题" prop="title">
                    <el-input v-model="temp.sub_title"/>
                </el-form-item>
                <el-form-item style="width: 20%;" label="价格" prop="title">
                    <el-input v-model="temp.price"/>
                </el-form-item>
                <el-form-item>
                    <img :src="temp.thumb" alt="" style="max-width: 100px;max-height: 100px;">
                    <el-upload
                        class="upload-demo"
                        action="https://app.loopyun.com/v1/p/upload_img"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-remove="beforeRemove"
                        multiple
                        :data="{'user': 'kangying'}"
                        name="img"
                        :limit="1"
                        :on-success="imgUploadSuccess"
                        :on-exceed="handleExceed"
                        :file-list="fileList">
                        <el-button size="small" type="primary">点击上传</el-button>
                        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                </el-form-item>
                <el-form-item style="width: 100%;">
                    <tinymce :height="500" style="width: 80%;" v-model="temp.desc" id='tinymce-ky'></tinymce>
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
import { adminPeDel, adminPeList, adminPeSave, getHospitalList, getPesList, getRecordsList } from '@/api/kangying-https'
import tinymce from '@/components/Tinymce/index'

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
    name: 'article',
    components: { Pagination, tinymce },
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
            richtext: '',
            fileList: [],
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
            sortOptions: [{ label: 'ID Ascending', key: '+id' }, { label: 'ID Descending', key: '-id' }],
            statusOptions: ['published', 'draft', 'deleted'],
            showReviewer: false,
            temp: {
                desc: '',
                main_title: '',
                price: '',
                sub_title: '',
                thumb: ''
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
                // type: [{ required: true, message: 'type is required', trigger: 'change' }],
                // timestamp: [{ type: 'date', required: true, message: 'timestamp is required', trigger: 'change' }],
                // title: [{ required: true, message: 'title is required', trigger: 'blur' }]
            },
            downloadLoading: false
        }
    },
    created() {
        this.getList()
    },
    methods: {
        imgUploadSuccess(res) {
            this.temp.thumb = res.data
        },
        handleRemove(file, fileList) {
            console.log(file, fileList)
        },
        handlePreview(file) {
            console.log(file)
        },
        handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
        },
        beforeRemove(file, fileList) {
            return this.$confirm(`确定移除 ${file.name}？`)
        },
        viewHospitalDetails(row) {
            this.$router.push({
                path: '/pe/details?t=' + Date.now(),
                query: { desc: row.desc }
            })
        },
        getList() {
            this.listLoading = true
            adminPeList(this.listQuery).then(res => {
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
                desc: '',
                main_title: '',
                price: '',
                sub_title: '',
                thumb: ''
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

            adminPeSave(this.temp).then(res => {
                if (res.code === '000') {
                    this.dialogFormVisible = false
                    this.list.unshift(this.temp)
                }
                this.$notify({
                    title: '提示',
                    message: res.msg,
                    type: 'success',
                    duration: 2000
                })
            })

            // this.$refs['dataForm'].validate((valid) => {
            //     if (valid) {
            //         this.temp.id = parseInt(Math.random() * 100) + 1024 // mock a id
            //         this.temp.author = 'vue-element-admin'
            //         createArticle(this.temp).then(() => {
            //             this.list.unshift(this.temp)
            //             this.dialogFormVisible = false
            //             this.$notify({
            //                 title: '成功',
            //                 message: '创建成功',
            //                 type: 'success',
            //                 duration: 2000
            //             })
            //         })
            //     }
            // })
        },
        handleUpdate(row) {
            this.temp = Object.assign({}, row) // copy obj
            this.temp.timestamp = new Date(this.temp.timestamp)
            this.dialogStatus = 'update'
            this.dialogFormVisible = true
            this.$nextTick(() => {
                this.$refs['dataForm'].clearValidate()
            })
        },
        updateData() {
            adminPeSave(this.temp).then(res => {
                if (res.code === '000') {
                    this.dialogFormVisible = false
                    const index = this.list.findIndex(v => v.id === this.temp.id)
                    this.list.splice(index, 1, this.temp)
                    // this.list.unshift(this.temp)
                }
                this.$notify({
                    title: '提示',
                    message: res.msg,
                    type: 'success',
                    duration: 2000
                })
            })
            // this.$refs['dataForm'].validate((valid) => {
            //     if (valid) {
            //         const tempData = Object.assign({}, this.temp)
            //         tempData.timestamp = +new Date(tempData.timestamp) // change Thu Nov 30 2017 16:41:05 GMT+0800 (CST) to 1512031311464
            //         updateArticle(tempData).then(() => {
            //
            //             this.dialogFormVisible = false
            //             this.$notify({
            //                 title: '成功',
            //                 message: '更新成功',
            //                 type: 'success',
            //                 duration: 2000
            //             })
            //         })
            //     }
            // })
        },
        handleDelete(row, index) {
            this.$alert('确认删除吗？', '提示', {
                confirmButtonText: '确定',
                callback: action => {
                    if(action === 'confirm'){
                        adminPeDel(row).then(res=>{
                            if(res.code === '000'){
                                this.list.splice(index, 1)
                            }
                            this.$notify({
                                title: '提示',
                                message: res.msg,
                                type: 'success',
                                duration: 2000
                            })
                        })
                    }
                }
            })
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
