<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
    html,body{
        width:100%;
        height:100%;
    }
    #app {
        width: 100%;
        min-width: 1330px;
        max-width:1920px;
        height: 100%;
        min-height:600px;
        max-height:1200px;
        font-family: '微软雅黑';
        font-size: 16px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #b3ebff;
    }
</style>
