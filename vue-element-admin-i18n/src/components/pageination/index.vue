<template>
  <div class="pagination">
    <el-row>
      <el-col :span="24" :style="{textAlign:position}">
        <el-pagination :current-page="page" :page-sizes="[10, 20, 30, 50]" :page-size="size" layout="total, sizes, prev, pager, next, jumper" :total="total" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
    props: {
        page: {
            type: Number,
            default: 1
        },
        total: {
            type: Number,
            default: 0
        },
        position: {
            type: String,
            default: 'center'
        },
        size: {
            type: Number,
            default: 10
        }
    },
    methods: {
        handleSizeChange(val) {
            this.$emit('handleSizeChange', val)
        },
        handleCurrentChange(val) {
            this.$emit('handleCurrentChange', val)
        }
    }
}
</script>
<style lang="less" scoped>
.pagination{
    padding: 10px 20px;
}

</style>

