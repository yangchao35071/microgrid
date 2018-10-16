<template>
    <div class="runningDiagram">
        <Tabs value="name1">
            <!-- 运行状态 -->
            <TabPane label="运行状态" name="name1" class="runningState">
                <Col style="width:35%;margin-right:1%;">
                    <div class="stateLeftTop">
                        <span>基本信息</span>
                        <table>
                            <tbody>
                                <tr v-for="(item,index) in this.tabbody"
                                    :key="index">
                                    <td>{{item.name}}</td>
                                    <td>{{item.value}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- 并网点实时交换功率曲线 -->
                    <foldLine id="switchingPowerChart" style="height:30%;margin:5% 0;"
                                            :seriesData="this.switchingPowerList.seriesData"
                                            :colorList="this.switchingPowerList.colorList"
                                            :titleText="this.switchingPowerList.titleText"></foldLine>
                    <!-- 功率和电价曲线 -->
                    <div id="powerPrice" style="height:40%;"></div>
                </Col>
                <Col style="width:64%;">
                    <div class="stateRight">
                        <Col span="24" v-for="(item,index) in this.list"
                                        :key="index">
                            <Col span="6">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td colspan="2" style="text-align:center;">{{item.formList.name}}</td>
                                        </tr>
                                        <tr v-for="(i,j) in item.formList.list"
                                            :key="j">
                                            <td>{{i.name}}</td>
                                            <td><i style="color:#00ffff;">{{i.value}}</i>{{i.company}}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Col>
                            <Col span="18">
                                <foldLine :id="index" style="height:100%;"
                                            :seriesData="item.chartList.seriesData"
                                            :colorList="item.chartList.colorList"
                                            :titleText="item.chartList.titleText"></foldLine>
                            </Col>
                        </Col>
                    </div>
                </Col>
            </TabPane>
            <!-- 电能质量 -->
            <TabPane label="电能质量" name="name2" class="powerQuality">
                <Col class="left">
                    <div class="leftTop">
                        <table>
                            <tbody>
                                <tr v-for="(item,index) in this.tabbody"
                                    :key="index">
                                    <td>{{item.name}}</td>
                                    <td>{{item.value}}</td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <tbody>
                                <tr v-for="(item,index) in this.tabbody"
                                    :key="index">
                                    <td>{{item.name}}</td>
                                    <td>{{item.value}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- 电压曲线 -->
                    <foldLine id="voltageCurve" style="height:40%;"
                                            :seriesData="this.voltageCurveList.seriesData"
                                            :colorList="this.voltageCurveList.colorList"
                                            :titleText="this.voltageCurveList.titleText"></foldLine>
                    <!-- 功率因数 -->
                    <foldLine id="powerFactor" style="height:40%;"
                                            :seriesData="this.powerFactorList.seriesData"
                                            :colorList="this.powerFactorList.colorList"
                                            :titleText="this.powerFactorList.titleText"></foldLine>
                </Col>
                <Col class="right">
                    <!-- 谐波分析 -->
                    <div id="harmonic" style="height:30%;"></div>
                    <!-- 有功功率曲线 -->
                    <foldLine id="activePower" style="height:35%;"
                                            :seriesData="this.activePowerList.seriesData"
                                            :colorList="this.activePowerList.colorList"
                                            :titleText="this.activePowerList.titleText"></foldLine>
                    <!-- 无功功率曲线 -->
                    <foldLine id="reactivePower" style="height:35%;"
                                            :seriesData="this.reactivePowerList.seriesData"
                                            :colorList="this.reactivePowerList.colorList"
                                            :titleText="this.reactivePowerList.titleText"></foldLine>
                </Col>
            </TabPane>
        </Tabs>
    </div>
</template>

<script>

    import echarts from 'echarts';
    import foldLine from '@/echarts/foldLine.vue';
    import oddstyle from '@/css/oddstyle.scss';

    export default {
        components: {
            foldLine
        },
        data() {
            return {
                tabbody: [
                    {
                        name: '运行状态',
                        value: '并网',
                    },
                    {
                        name: '运行模式',
                        value: '负荷响应',
                    },
                    {
                        name: '当前可离网运行时间',
                        value: '4.23h',
                    }
                ],
                // 并网点实时交换功率曲线
                switchingPowerList: {
                    titleText:'并网点实时交换功率曲线',
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
                                        data:[-3, 2, 4]
                                    }
                                ]
                            }
                        }
                    ],
                    colorList:['#02ccff']
                },
                // 运行状态右边数据
                list:[
                    {
                        // 表格数据
                        formList:{
                            name: '光伏系统',
                            list:[
                                {
                                    name: '装机容量',
                                    value: '2',
                                    company: 'MW'
                                },
                                {
                                    name: '运行状态',
                                    value: '充电',
                                    company: ''
                                },
                                {
                                    name: '当前功率',
                                    value: '1.2',
                                    company: 'MW'
                                },
                                {
                                    name: '出力比率',
                                    value: '60',
                                    company: '%'
                                },
                            ]
                        },
                        // 图表数据
                        chartList:{
                            titleText:'光伏系统功率预测和检测曲线',
                            seriesData:[
                                {
                                    xAxis:['0:00', '12:00', '23:59'],
                                    yAxis:{
                                        name: 'MW',
                                        list: [
                                            {
                                                name:'实测曲线',
                                                gradualChange:false,
                                                lineType: 'solid',
                                                data:[220, 282, 201]
                                            },
                                            {
                                                name:'预测曲线',
                                                gradualChange:false,
                                                lineType: 'dotted',
                                                data:[524, 963, 12]
                                            }
                                        ]
                                    }
                                }
                            ],
                            colorList:['#02ccff','#ffc763']
                        }
                    },
                    {
                        // 表格数据
                        formList:{
                            name: '光伏系统',
                            list:[
                                {
                                    name: '装机容量',
                                    value: '2',
                                    company: 'MW'
                                },
                                {
                                    name: '运行状态',
                                    value: '充电',
                                    company: ''
                                },
                                {
                                    name: '当前功率',
                                    value: '1.2',
                                    company: 'MW'
                                },
                                {
                                    name: '出力比率',
                                    value: '60',
                                    company: '%'
                                },
                            ]
                        },
                        // 图表数据
                        chartList:{
                            titleText:'光伏系统功率预测和检测曲线',
                            seriesData:[
                                {
                                    xAxis:['0:00', '12:00', '23:59'],
                                    yAxis:{
                                        name: 'MW',
                                        list: [
                                            {
                                                name:'实测曲线',
                                                gradualChange:false,
                                                lineType: 'solid',
                                                data:[220, 282, 201]
                                            },
                                            {
                                                name:'预测曲线',
                                                gradualChange:false,
                                                lineType: 'dotted',
                                                data:[524, 963, 12]
                                            }
                                        ]
                                    }
                                }
                            ],
                            colorList:['#02ccff','#ffc763']
                        }
                    },
                    {
                        // 表格数据
                        formList:{
                            name: '光伏系统',
                            list:[
                                {
                                    name: '装机容量',
                                    value: '2',
                                    company: 'MW'
                                },
                                {
                                    name: '运行状态',
                                    value: '充电',
                                    company: ''
                                },
                                {
                                    name: '当前功率',
                                    value: '1.2',
                                    company: 'MW'
                                },
                                {
                                    name: '出力比率',
                                    value: '60',
                                    company: '%'
                                },
                            ]
                        },
                        // 图表数据
                        chartList:{
                            titleText:'光伏系统功率预测和检测曲线',
                            seriesData:[
                                {
                                    xAxis:['0:00', '12:00', '23:59'],
                                    yAxis:{
                                        name: 'MW',
                                        list: [
                                            {
                                                name:'实测曲线',
                                                gradualChange:false,
                                                lineType: 'solid',
                                                data:[220, 282, 201]
                                            },
                                            {
                                                name:'预测曲线',
                                                gradualChange:false,
                                                lineType: 'dotted',
                                                data:[524, 963, 12]
                                            }
                                        ]
                                    }
                                }
                            ],
                            colorList:['#02ccff','#ffc763']
                        }
                    },
                    {
                        // 表格数据
                        formList:{
                            name: '光伏系统',
                            list:[
                                {
                                    name: '装机容量',
                                    value: '2',
                                    company: 'MW'
                                },
                                {
                                    name: '运行状态',
                                    value: '充电',
                                    company: ''
                                },
                                {
                                    name: '当前功率',
                                    value: '1.2',
                                    company: 'MW'
                                },
                                {
                                    name: '出力比率',
                                    value: '60',
                                    company: '%'
                                },
                            ]
                        },
                        // 图表数据
                        chartList:{
                            titleText:'光伏系统功率预测和检测曲线',
                            seriesData:[
                                {
                                    xAxis:['0:00', '12:00', '23:59'],
                                    yAxis:{
                                        name: 'MW',
                                        list: [
                                            {
                                                name:'实测曲线',
                                                gradualChange:false,
                                                lineType: 'solid',
                                                data:[220, 282, 201]
                                            },
                                            {
                                                name:'预测曲线',
                                                gradualChange:false,
                                                lineType: 'dotted',
                                                data:[524, 963, 12]
                                            }
                                        ]
                                    }
                                }
                            ],
                            colorList:['#02ccff','#ffc763']
                        }
                    }
                ],


                
                // 电压曲线
                voltageCurveList:{
                    titleText:'电压曲线',
                    seriesData:[
                        {
                            xAxis:['0:00', '12:00', '23:59'],
                            yAxis:{
                                name: 'KV',
                                list: [
                                    {
                                        name:'',
                                        gradualChange:false, // 渐变色
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
                // 功率因数
                powerFactorList:{
                    titleText:'功率因数',
                    seriesData:[
                        {
                            xAxis:['0:00', '12:00', '23:59'],
                            yAxis:{
                                name: '',
                                list: [
                                    {
                                        name:'',
                                        gradualChange:false, // 渐变色
                                        lineType: 'solid',  // 'dotted'虚线 'solid'实线
                                        color:['#cc33ff','#034ba2'],
                                        data:[1, 3, 2]
                                    }
                                ]
                            }
                        }
                    ],
                    colorList:['#02ccff']
                },



                // 有功功率曲线
                activePowerList:{
                    titleText:'有功功率曲线',
                    seriesData:[
                        {
                            xAxis:['0:00', '12:00', '23:59'],
                            yAxis:{
                                name: 'MW',
                                list: [
                                    {
                                        name:'',
                                        gradualChange:false, // 渐变色
                                        lineType: 'solid',  // 'dotted'虚线 'solid'实线
                                        color:['#cc33ff','#034ba2'],
                                        data:[3, 2, 4]
                                    }
                                ]
                            }
                        }
                    ],
                    colorList:['#ffe763']
                },
                // 无功功率曲线
                reactivePowerList:{
                    titleText:'无功功率曲线',
                    seriesData:[
                        {
                            xAxis:['0:00', '12:00', '23:59'],
                            yAxis:{
                                name: 'kVar',
                                list: [
                                    {
                                        name:'',
                                        gradualChange:false, // 渐变色
                                        lineType: 'solid',  // 'dotted'虚线 'solid'实线
                                        color:['#cc33ff','#034ba2'],
                                        data:[3, 2, 4]
                                    }
                                ]
                            }
                        }
                    ],
                    colorList:['#ffe763']
                },
            }
        },
        methods: {
            //  并网点实时交换功率曲线
            curveCharts: function() {
                
                let myChart = echarts.init(document.getElementById("powerPrice"));

                let option = {
                    title: {
                        text: '功率和电价曲线',
                        left: 'center',
                        top: 'top',
                        textStyle: {
                            fontSize: 16,
                            fontWeight:'normal',
                            color: '#b3ebff'
                        }
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer:{     //  图表上的线
                            type: 'line',
                            lineStyle: {
                                color:'#005384'
                            }
                        },
                        padding:0,
                        textStyle:{
                            color:'#b3ebff',
                            fontSize:14
                        },
                        formatter: function(data) {
                            let res = '<div style="background-color:rgba(0,26,58,.6);border:1px solid #0289bf;padding:10px;">';
                            for (let i = 0; i < data.length; i++) {
                                res += data[i].seriesName + "：<span style='color:#02ccff;'>" + data[i].value + "</span>" + "MW" + "<br />"
                            }
                            res += "时间" + "：<span style='color:#02ccff;'>" + data[0].name + "</span>"
                            res += '</div>';
                            return res;
                        }
                    },
                    color:['#02ccff','#ffe763'],
                    legend: {
                        data:['电价', '功率'],
                        // x: 'right',
                        top: '30px',
                        textStyle:{
                            fontWeight:'normal',
                            color:'#2587d0'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        axisTick: {
                            show:false,
                            alignWithLabel: true
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#005384'
                            },
                        },
                        axisLabel:{
                            show:true,
                            textStyle: {
                                color: '#2587d0'
                            }
                        },
                        data: ['0.00', '12.00', '23.59']
                    },
                    yAxis:  [
                        {
                            name:'MW',
                            nameTextStyle: {
                                color:'#2587d0'
                            },
                            type:'value',
                            axisLine: {
                                lineStyle: {
                                    color: '#005384'
                                }
                            },
                            splitLine: {
                                show: false
                            },
                            axisLabel:{
                                show:true,
                                textStyle: {
                                    color: '#2587d0'
                                }
                            },
                            axisTick: {
                                show:false
                            }
                        },
                        {
                            name:'元',
                            nameTextStyle: {
                                color:'#ffe763'
                            },
                            type:'value',
                            axisLine: {
                                lineStyle: {
                                    color: '#ffe763'
                                }
                            },
                            splitLine: {
                                show: false
                            },
                            axisLabel:{
                                show:true,
                                textStyle: {
                                    color: '#ffe763'
                                }
                            },
                            axisTick: {
                                show:false
                            }
                        }
                    ],
                    series: [
                        {
                            name:'功率',
                            type:'line',
                            symbol:'none',
                            step: false,
                            smooth: true,
                            data:[120, 132, 101]
                        },
                        {
                            name:'电价',
                            type:'line',
                            yAxisIndex:1,
                            symbol:'none',
                            step: 'middle',
                            data:[3, 5, 2]
                        }
                    ]
                };
                myChart.setOption(option);
            },
            // 谐波分析
            harmonicCharts: function() {

                let myChart = echarts.init(document.getElementById("harmonic"));

                let option = {
                    title: {
                        text: '谐波分析',
                        left: 'center',
                        top: 'top',
                        textStyle: {
                            fontSize: 16,
                            fontWeight:'normal',
                            color: '#b3ebff'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis : {
                        type: 'category',
                        // boundaryGap: false,
                        axisTick: {
                            show:false,
                            alignWithLabel: true
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#005384'
                            },
                        },
                        axisLabel:{
                            show:true,
                            textStyle: {
                                color: '#2587d0'
                            }
                        },
                        data: ['1', '2', '3', '4', '5', '6', '7']
                    },
                    yAxis : [
                        {
                            show: false,
                            name:'MW',
                            nameTextStyle: {
                                color:'#2587d0'
                            },
                            type:'value',
                            axisLine: {
                                lineStyle: {
                                    color: '#005384'
                                }
                            },
                            splitLine: {
                                show: false
                            },
                            axisLabel:{
                                show:true,
                                textStyle: {
                                    color: '#2587d0'
                                }
                            },
                            axisTick: {
                                show:false
                            }
                        }
                    ],
                    series : [
                        {
                            type:'bar',
                            barWidth: '30',
                            itemStyle: {
                                normal: {
                                    label : {
                                        show: true,
                                        position: 'top',
                                        color: '#02ccff',
                                        formatter: function(data) {
                                            let res = data.value + '%';
                                            return res;
                                        }
                                    },
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#02ccff'
                                    }, {
                                        offset: 1,
                                        color: '#0aedb7'
                                    }])
                                }
                            },
                            data:[100, 520, 200, 334, 390, 330, 220]
                        }
                    ]
                };
                myChart.setOption(option);
            }
        },
        mounted(){
            this.curveCharts();
            this.harmonicCharts();
        }
    }
</script>

<style scoped lang="scss">
    .runningDiagram{
        width: 100%;
        height: 100%;
        padding: 50px 40px 60px 8px;
        background: url(../../assets/index/right-bg.png) no-repeat;
        background-size: 100% 100%;
        &>div{
            width: 100%;
            height: 100%;
            color: #b3ebff;
            .runningState{
                &>div{
                    height: 100%;
                    float: left;
                    background-color: rgba(0,39,86,.8);
                    .stateLeftTop{
                        padding: 0px 32px;
                        height: 20%;
                        span{
                            line-height: 50px;
                        }
                        td{
                            &:last-child{
                                width: 60%;
                                color: #f7931c;
                            }
                        }
                    }
                    .stateRight{
                        height: 100%;
                        padding: 30px;
                        &>div{
                            height: 24%;
                            margin-bottom: 1%;
                            &:last-child{
                                margin: 0;
                            }
                            &>div{
                                height: 100%;
                                table{
                                    height: 100%;
                                    tr{
                                        height: initial;
                                        line-height: initial;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            .powerQuality{
                &>div{
                    height: 100%;
                    float: left;
                    background-color: rgba(0,39,86,.8);
                }
                .left{
                    width:49.5%;
                    margin-right:1%;
                    padding: 50px 30px;
                    .leftTop{
                        height: 20%;
                    }
                    table{
                        width: 48%;
                        float: left;
                        margin-right: 4%;
                        &:last-child{
                            margin: 0;
                        }
                    }
                }
                .right{
                    width:49.5%;
                    padding: 10px 30px 50px;
                }
            }
        }
        // 表格
        table{
            width: 100%;
            font-size: 14px;
            border-collapse: collapse;
            border: 1px solid #002954;
            background: #002148;
            tr{
                height: 30px;
                line-height: 30px;
                td{
                    padding-left: 10px;
                    border:  1px solid #002954;
                }
            }
        }
    }
</style>