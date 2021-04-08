<template>
    <div>
        <Form :model="model" :rules="rules" ref="loginForm">
            <FormItem label="用户名" prop="username">
                <KInput v-model="model.username" type="text"></KInput>
            </FormItem>

            <FormItem label="密码" prop="password">
                <KInput v-model="model.password" type="password"></KInput>
            </FormItem>

            <FormItem>
                <KChecked v-model="model.checked"></KChecked>
            </FormItem>

            <FormItem>
                <button @click="onLogin">登录</button>
            </FormItem>
        </Form>
        {{ model }}
    </div>
</template>

<script>
import KInput from './KInput'
import FormItem from './FormItem'
import Form from './Form'
import KChecked from './KChecked'
export default {
    data() {
        return {
            model: {
                username: 'jark',
                password: '',
                checked: false
            },
            rules: {
                username: [{ required: true, message: '用户名必填' }],
                password: [{ required: true, message: '密码必填' }],
            }
        }
    },
    components: {
        KInput,
        FormItem,
        Form,
        KChecked
    },
    methods: {
        onLogin() {
            this.$refs.loginForm.validate(isValid => {
                if (isValid) {
                    alert('登录！！！')
                } else {
                    alert('有错！！！')
                }
            })
        }
    },
    mounted() {

    }
}
</script>

<style scoped>
</style>
