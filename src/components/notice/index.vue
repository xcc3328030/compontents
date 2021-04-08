<template>
    <div v-if="isShow">
        <h3>{{ title }}</h3>
        <p>{{ message }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isShow: false
        }
    },
    props: {
        title: {
            type: String,
            default: ''
        },
        message: {
            type: String,
            default: ''
        },
    },
    methods: {
        show() {
            this.isShow = true
        },
        hide() {
            this.isShow = false
            this.remove()
        }
    },
    mounted() {

    }
}
</script>

<style scoped>
</style>
