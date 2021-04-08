<template>
    <div>
        <ul>
            <item class="item" :model="treeData"></item>
        </ul>
    </div>
</template>

<script>
import Item from './item'
export default {
    data() {
        return {
            treeData: {
                title: '全栈架构师',
                children: [
                    {
                        title: 'java架构师'
                    },
                    {
                        title: 'js高级',
                        children: [
                            {
                                title: 'es6'
                            },
                            {
                                title: 'css'
                            },
                        ]
                    }
                ]
            }
        }
    },
    components: {
        Item
    },
    methods: {

    },
    mounted() {

    }
}
</script>

<style scoped>
</style>
