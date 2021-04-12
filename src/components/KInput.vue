<template>
    <div>
        <input v-bind="$attrs" :value="value" @input="onInput" />
    </div>
</template>

<script>
import emmter from '@/mixins/emmter'
export default {
    inheritAttrs: false,
    data() {
        return {}
    },
    mixins: [emmter],
    props: {
        value: {
            type: String,
            default: ''
        }
    },
    methods: {
        onInput(e) {
            this.$emit('input', e.target.value)

            // this.$parent.$emit('validate')

            this.dispatch('validate')
        }
    },
    mounted() { }
};
</script>

<style scoped>
</style>
