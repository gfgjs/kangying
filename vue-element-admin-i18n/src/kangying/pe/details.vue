<template>
    <div class="content" v-html="this.$route.query.desc"></div>
</template>

<script>
export default {
    name: 'articleDetails',
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
