<template>
    <div id="app">
        <testCom></testCom>
        <Tree></Tree>
    </div>
</template>

<script>
import testCom from './components'
import Tree from './components/tree'
export default {
    name: "App",
    components: {
        testCom,
        Tree
    }
};
</script>


