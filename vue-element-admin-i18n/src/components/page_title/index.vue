<template>
  <div class="page_title">
    <span class="page_title_name">
      <b>{{ title }}</b>
    </span>
    <slot name="center" />
    <span class="page_title_btn">
      <slot />
    </span>
  </div>
</template>
<script>
export default {
    name: 'PageTitle',
    props: {
        title: {
            type: String,
            default: ''
        }
    }
}
</script>
<style lang="less" scoped>
.page_title{
    display: flex;
    background: #fff;
	height: 50px;
	justify-content: space-between;
    line-height: 50px;
    margin-left: 20px;
    margin-right: 20px;
    border-bottom: 2px solid #ebebeb;
    font-size: 14px;
    .page_title_name{

        b{
            display: inline-block;
            height: 50px;
            line-height: 50px;
            color: #b81b22;
            border-bottom: 2px solid #b81b22;
            font-size: 14px;
            font-family: "微软雅黑";
        }
    }
}
</style>

