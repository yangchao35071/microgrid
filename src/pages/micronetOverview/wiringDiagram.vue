<template>
    <div class="wiringDiagram">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="width:100%;height:100%;">
            <!-- <polygon points="100,10 40,180 190,60 10,60 160,180"
            style="fill:lime;stroke:purple;stroke-width:5;fill-rule:evenodd;" /> -->
            <g>
                <rect x="0" y="100" width="190" height="5" ry="0" style="fill:#ffff00;width:100%;"/>
            </g>
        </svg>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {

        },
        mounted(){

        }
    }
</script>

<style scoped lang="scss">
    .wiringDiagram{
        width: 100%;
        height: 100%;
        padding: 50px;
        background: url(../../assets/index/right-bg.png) no-repeat;
        background-size: 100% 100%;
    }
</style>