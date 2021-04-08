<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    provide() {
        return {
            form: this
        }
    },
    data() {
        return {};
    },
    props: {
        model: {
            type: Object,
            require: true
        },
        rules: {
            type: Object,
        }
    },
    components: {},
    methods: {
        validate(cb) {
            const tasks = this.$children
                .filter(item => item.prop)
                .map(item => item.validate())
            Promise.all(tasks)
                .then(() => { cb(true) })
                .catch(() => cb(false))
        }
    }
};
</script>

<style scoped>
</style>
