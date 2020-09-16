<template>
    <div class="content" v-html="this.$route.query.desc"></div>
</template>

<script>
export default {
    name: 'peDetails',
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
