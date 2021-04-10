<template>
    <div id="app">
        <testCom></testCom>
        <Tree></Tree>

        <!-- <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>

        <router-view></router-view> -->
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


