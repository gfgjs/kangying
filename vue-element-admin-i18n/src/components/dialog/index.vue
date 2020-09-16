<template>
  <div>
    <el-dialog :title="title" :visible.sync="dialogVisible" :width="width" :before-close="handleClose">
      <slot />
      <span slot="footer" class="dialog_footer">
        <div class="dialog_btn">
          <span v-if="isCancel" class="dialog_btn_cancel" @click="onHandleClose('cancel')">{{ cancelTxt }}</span>
          <span v-if="isComfirm" class="dialog_btn_comfirm" @click="onHandleClose('confirm')">{{ comfirmTxt }}</span>
        </div>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        width: {
            type: String,
            default: '440px'
        },
        dialogVisible: {
            type: Boolean,
            default: false
        },
        isCancel: {
            type: Boolean,
            default: true
        },
        isComfirm: {
            type: Boolean,
            default: true
        },
        cancelTxt: {
            type: String,
            default: '取消'
        },
        comfirmTxt: {
            type: String,
            default: '保存'
        }

    },
    methods: {
        onHandleClose(type) {
            this.$emit('closeDialog', type)
        },
        handleClose() {
            this.$emit('closeDialog', 'cancel')
        }
    }
}
</script>

<style lang="less" scoped>
  .dialog_btn{
    text-align: center;
    span{
        display: inline-block;
        width: 64px;
        height: 28px;
        text-align: center;
        border-radius: 3px;
        line-height: 28px;
        font-size: 12px;
        cursor: pointer;
    }
    span.dialog_btn_cancel{
        border:1px solid #ebebeb;
        color: #333333;
        margin-right: 20px;
    }
    span.dialog_btn_comfirm{
        background: #b81b22;
        color: #fff;
    }
  }

</style>
