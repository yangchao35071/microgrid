<template>
    <div class="energyManagement">
        <div>
            <span>当前微网状态</span>
            <div class="content">
                <span>当前运行状态<i>并网</i></span>
                <span>当前运行模式<i>{{MenuText}}</i></span>
            </div>
            <foldLine id="chart1" style="height:35%;"
                        :seriesData="needData.powerCurve.seriesData"
                        :colorList="needData.powerCurve.colorList"
                        :titleText="needData.powerCurve.titleText"></foldLine>
            <br />
            <foldLine id="chart2" style="height:35%;"
                        :seriesData="needData.balanceCurve.seriesData"
                        :colorList="needData.balanceCurve.colorList"
                        :titleText="needData.balanceCurve.titleText"></foldLine>
        </div>
    </div>
</template>

<script>

    import foldLine from '@/echarts/foldLine.vue'

    export default {
        components: {
            foldLine
        },
        data() {
            return {
                MenuText:'',


                //  需求响应
                needData:{
                    //  功率曲线
                    powerCurve:{
                        titleText:'功率曲线',
                        seriesData:[
                            {
                                xAxis:['0:00', '12:00', '23:59'],
                                yAxis:{
                                    name: 'MW',
                                    list: [
                                        {
                                            name:'',
                                            gradualChange:true, // 渐变色
                                            lineType: 'solid',  // 'dotted'虚线 'solid'实线
                                            color:['#cc33ff','#034ba2'],
                                            data:[3, 2, 4]
                                        }
                                    ]
                                }
                            }
                        ],
                        colorList:['#02ccff']
                    },
                    //  源储荷平衡曲线
                    balanceCurve:{
                        titleText:'源储荷平衡曲线',
                        seriesData:[
                            {
                                xAxis:['0:00', '12:00', '23:59'],
                                yAxis:{
                                    name: 'MW',
                                    list: [
                                        {
                                            name:'电源',
                                            gradualChange:false,
                                            lineType: 'dotted',
                                            data:[220, 282, 201]
                                        },
                                        {
                                            name:'储能',
                                            gradualChange:false,
                                            lineType: 'solid',
                                            data:[2220, 22, 110]
                                        },
                                        {
                                            name:'负荷',
                                            gradualChange:false,
                                            lineType: 'solid',
                                            data:[524, 963, 12]
                                        }
                                    ]
                                }
                            }
                        ],
                        colorList:['#02ccff','#00cc33','#ffc763']
                    }
                }

            }
        },
        methods: {
            getAllData: function() {
                this.MenuText = '需求响应';
            }
        },
        mounted(){
            this.getAllData();
        }
    }    
</script>

<style scoped lang="scss">
    .energyManagement{
        width: 100%;
        height: 100%;
        padding: 37px 28px 40px 3px;
        background: url(../../assets/index/right-bg.png) no-repeat;
        background-size: 100% 100%;
        &>div{
            width: 100%;
            height: 100%;
            padding: 32px 50px 0 45px;
            background-color: rgba(0,39,86,.8);
            &>span{
                height: 35px;
                line-height: 35px;
                display: inline-block;
                padding: 0 50px 0 20px;
                margin-bottom: 25px;
                color: #b3ebff;
                background: url(../../assets/index/title-bg.png) no-repeat;
                background-size: 100% 100%;
            }
            .content{
                height: 35px;
                line-height: 30px;
                margin-bottom: 30px;
                span{
                    &:first-child{
                        margin-right: 30px;
                    }
                    i{
                        height: 35px;
                        display: inline-block;
                        padding: 0 15px;
                        color: #f7931e;
                        margin-left: 10px;
                        border: 1px solid #00ffff;
                    }
                }
            }
        }
    }
</style>