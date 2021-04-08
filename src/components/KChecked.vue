<template>
    <div>
        <input type="checkbox" :checked="checked" @change="onChange" />
    </div>
</template>

<script>
export default {
    model: {
        prop: 'checked',
        event: 'change'
    },
    props: {
        checked: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        onChange(e) {
            this.$emit('change', e.target.checked)
        }
    }
}
</script>

<style scoped>
</style>
