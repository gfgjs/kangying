<template>
  <div class="content" v-html="this.$route.query.desc" />
</template>

<script>
export default {
    name: 'ArticleDetails',
    data() {
        return {}
    },
    mounted() {
        console.log(this.$route)
    }
}
</script>

<style scoped>

</style>
