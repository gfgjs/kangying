<template>
  <div>
    <h3>基本信息</h3>
    <div class="message-box">
      <div v-for="(item,index) in baseMessage" :key="index" class="message-row">
        <div class="title">{{ item.name }}</div>
        <input type="text" :value="item.value">
      </div>
    </div>
    <h3>详细信息</h3>
    <el-tabs v-model="activeTabKey" style="margin-top:15px;" type="border-card">
      <el-tab-pane v-for="item in tabMapOptions" :key="item.key" :label="item.label" :name="item.key">
        <keep-alive>
          <div v-if="activeTabKey==='desc'" class="hospital-desc">
            <textarea id="hospital-desc" name="" :disabled="editDescStatus" />
            <div class="buttons">
              <el-button type="default" @click="editDesc">编辑</el-button>
              <el-button type="primary" @click="saveDesc">保存</el-button>
            </div>
          </div>
        </keep-alive>
        <keep-alive>
          <div v-if="activeTabKey==='device'">大型设备</div>
        </keep-alive>
        <keep-alive>
          <div v-show="activeTabKey==='room'">
            <el-table
              :key="tableKey"
              v-loading=""
              :data="roomList"
              border
              fit
              highlight-current-row
              style="width: 100%;"
            >
              <el-table-column label="ID" prop="id" align="center" width="100px">
                <template slot-scope="{row}">
                  <span>{{ row.id }}</span>
                </template>
              </el-table-column>
              <el-table-column label="科室名称" align="center" width="100px">
                <template slot-scope="{row}">
                  <span>{{ row.name }}</span>
                </template>
              </el-table-column>
              <el-table-column label="科室主任" align="center" width="100px">
                <template slot-scope="{row}">
                  <span>{{ row.doctor }}</span>
                </template>
              </el-table-column>
              <el-table-column label="科室描述" align="center" width="100px">
                <template slot-scope="{row}">
                  <span>{{ row.desc }}</span>
                </template>
              </el-table-column>
              <el-table-column label="更新时间" align="center" width="100px">
                <template slot-scope="{row}">
                  <span>{{ row.time }}</span>
                </template>
              </el-table-column>
              <el-table-column label="状态" align="center" width="100px">
                <template slot-scope="{row}">
                  <span>{{ row.status ? '已启用' : '已禁用' }}</span>
                </template>
              </el-table-column>
              <el-table-column label="操作" align="center" width="100px">
                <template slot-scope="{row}">
                  <el-button v-if="row.status" type="danger">禁用</el-button>
                  <el-button v-else type="success">启用</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination' // secondary package based on el-pagination

export default {
    name: 'HospitalDetails',
    components: { Pagination },
    data() {
        return {
            editDescStatus: true,
            roomList: [
                { id: 1, name: '室内', doctor: '王医生', desc: '描述', time: '202020202020', status: true },
                { id: 1, name: '室内', doctor: '王医生', desc: '描述', time: '202020202020', status: false }
            ],
            tableKey: 0,
            baseMessage: {
                id: { name: 'ID', value: '1234' },
                hospital_name: { name: '医院名称', value: '大家医院' },
                hospital_level: { name: '医院级别', value: '三级甲等' },
                telephone: { name: '联系方式', value: '19022120231' },
                update_time: { name: '更新时间', value: '2010-20-20' },
                status: { name: '状态', value: 'true' },
                address: { name: '地址', value: '河北是' }
            },
            tabMapOptions: [
                { label: '医院介绍', key: 'desc' },
                { label: '科室设置', key: 'room' },
                { label: '大型设备', key: 'device' },
                { label: '重点学科管理', key: 'subject' }
            ],
            activeTabKey: 'desc'
        }
    },
    methods: {
        saveDesc() {
            this.editDescStatus = true
        },
        editDesc() {
            this.editDescStatus = false
        }
    }
}
</script>

<style scoped lang="scss">
h3 {
    padding-left: 10px;
    display: flex;
    align-items: center;
}

h3:before {
    display: block;
    content: '';
    width: 10px;
    background-color: #4A9FF9;
    height: 20px;
    margin-right: 10px;
}

.message-box {
    display: flex;
    flex-wrap: wrap;

    padding: 0 20px;

    .message-row {

        padding: 20px;
        display: flex;
        align-items: center;

        input {
            margin-left: 20px;
            border: none;
            border-bottom: 1px solid #4A9FF9;
            padding: 10px;
            width: 200px;
        }

        .title {
            width: 100px;
            display: flex;
            justify-content: space-between;
        }

        .title:after {
            content: '：'
        }

    }
}

.hospital-desc {
    display: flex;

    textarea {
        width: 500px;
        height: 300px;
        border: 1px solid #4A9FF9;
        padding: 10px;
    }

    .buttons {
        display: flex;
        flex-direction: column;
        align-items: center;

        .el-button {
            margin: 10px;
        }
    }
}
</style>
