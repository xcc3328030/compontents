<template>
    <div>
        <label v-if="label">{{ label }}</label>
        <slot></slot>
        <p v-if="errorMessage">{{ errorMessage }}</p>
    </div>
</template>

<script>
import Schema from 'async-validator'
export default {
    data() {
        return {
            errorMessage: '',
        }
    },
    props: {
        label: {
            type: String,
            default: '',
        },
        prop: String,
    },
    inject: ['form'],
    mounted() {
        this.$on('validate', () => {
            this.validate()
        })
    },
    methods: {
        validate() {
            // 1.获取校验规则
            const rules = this.form.rules[this.prop]

            const value = this.form.model[this.prop]

            // 2.获取数据
            const desc = {
                [this.prop]: rules,
            }
            const validator = new Schema(desc)
            let obj = { [this.prop]: value }
            return validator.validate(obj, (errors) => {
                console.log(errors)
                if (errors) {
                    this.errorMessage = errors[0].message
                } else {
                    this.errorMessage = ''
                }
            })
        },
    },
}
</script>

<style scoped>
</style>
