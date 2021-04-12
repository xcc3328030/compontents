export default {
    methods: {
        dispatch(eventName, data) {
            let parent = this.$parent
            // 查找父元素
            while (parent) {
                parent.$emit(eventName, data)
                parent = parent.$parent
            }
        }
    }
}