<template>
    <div class="micronetOverview">
        <Col class="left">
            <Row class="left_top">
                <span>光伏自用率</span>
                <div>
                    <i-circle :percent="80"
                                stroke-color="#33e271"
                                trail-color="#38567c">
                        <span class="demo-Circle-inner" style="font-size:18px">80%</span>
                    </i-circle>
                </div>
                <span>电量自平衡度</span>
                <div>
                    <i-circle :percent="80"
                                stroke-color="#fbb03b"
                                trail-color="#38567c">
                        <span class="demo-Circle-inner" style="font-size:18px">80%</span>
                    </i-circle>
                </div>
            </Row>
            <Row class="left_cen">
                <p>经济运行</p>
                <ul>
                    <li>
                        <span>当日收入</span>
                        <Row><i>0.11</i>万元</Row>
                    </li>
                    <li>
                        <span>当日收入</span>
                        <Row><i>0.11</i>万元</Row>
                    </li>
                    <li>
                        <span>当日收入</span>
                        <Row><i>0.11</i>万元</Row>
                    </li>
                    <li>
                        <span>当日收入</span>
                        <Row><i>0.11</i>万元</Row>
                    </li>
                    <li>
                        <span>当日收入</span>
                        <Row><i>0.11</i>万元</Row>
                    </li>
                    <li>
                        <span>当日收入</span>
                        <Row><i>0.11</i>万元</Row>
                    </li>
                    <li>
                        <span>当日收入</span>
                        <Row><i>0.11</i>万元</Row>
                    </li>
                </ul>
            </Row>
            <Row class="left_bottom">
                <p>节能减排</p>
                <Col span="8">
                    <img src="@/assets/micronetOverview/u115.png">
                    <span>COz</span>
                    <Row><i>3.5</i>t</Row>
                </Col>
                <Col span="8">
                    <img src="@/assets/micronetOverview/u117.png">
                    <span>节约煤</span>
                    <Row><i>3.5</i>t</Row>
                </Col>
                <Col span="8">
                    <img src="@/assets/micronetOverview/u119.png">
                    <span>减伐树</span>
                    <Row><i>3.5</i>万棵</Row>
                </Col>
            </Row>
        </Col>
        <Col class="center">
            <ul>
                <li v-for="(item,index) in this.list"
                    :key="index">
                    <div :class=" 'map_tip_'+index+'' ">
                        <Row>
                            <span>{{item.title}}</span>
                            <span>{{item.subtitle}}</span>
                        </Row>
                        <ul>
                            <li v-for="(i,j) in item.list"
                                :key="j">
                                <span>{{i.name}}&nbsp;&nbsp;&nbsp;<i>{{i.value}}</i></span>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
            <Row>
                <Col span="6">
                    <img src="@/assets/micronetOverview/sunlight.png" alt="">
                    <span>辐射量&nbsp;<i style="color:#fbac17;">750</i>&nbsp;j/m²</span>
                </Col>
                <Col span="6">
                    <img src="@/assets/micronetOverview/wind-speed.png" alt="">
                    <span>风速&nbsp;<i style="color:#00ff00;">3</i>&nbsp;m/s</span>
                </Col>
                <Col span="6">
                    <img src="@/assets/micronetOverview/temperature.png" alt="">
                    <span>温度&nbsp;<i style="color:#00cfff;">23</i>&nbsp;℃</span>
                </Col>
                <Col span="6">
                    <img src="@/assets/micronetOverview/humidity.png" alt="">
                    <span>相对湿度&nbsp;<i style="color:#00ffff;">45.2</i>&nbsp;%</span>
                </Col>
            </Row>
        </Col>
        <Col class="right">
            <Col class="right_top">
                <p>运行参数</p>
                <ul>
                    <li>
                        <span>运行状态</span>
                        <span>并网</span>
                    </li>
                    <li>
                        <span>运行状态</span>
                        <span>并网</span>
                    </li>
                    <li>
                        <span>运行状态</span>
                        <span>并网</span>
                    </li>
                    <li>
                        <span>运行状态</span>
                        <span>并网</span>
                    </li>
                    <li>
                        <span>运行状态</span>
                        <span>并网</span>
                    </li>
                </ul>
            </Col>
            <Col class="right_cen">
                <Row>
                    <span>并网点年交换电量比率<i>35.35</i>MW</span>
                    <span>并网点当前交换功率<i>35.35</i>MW</span>
                </Row>
                <p>并网点实时交换功率曲线</p>
                <div id="curveChart"></div>
            </Col>
            <Col class="right_bot">
                <p>能耗排名</p>
                <ul>
                    <li>
                        <Col span="6">
                            充电桩系统
                        </Col>
                        <Col span="13">
                            <Progress :percent="75" hide-info />
                        </Col>
                        <Col span="5" style="text-align: center;font-size:14px;">
                            12345
                        </Col>
                    </li>
                    <li>
                        <Col span="6">
                            空调系统
                        </Col>
                        <Col span="13">
                            <Progress :percent="20" hide-info />
                        </Col>
                        <Col span="5" style="text-align: center;font-size:14px;">
                            12345
                        </Col>
                    </li>
                    <li>
                        <Col span="6">
                            空调系统
                        </Col>
                        <Col span="13">
                            <Progress :percent="20" hide-info />
                        </Col>
                        <Col span="5" style="text-align: center;font-size:14px;">
                            12345
                        </Col>
                    </li>
                    <li>
                        <Col span="6">
                            空调系统
                        </Col>
                        <Col span="13">
                            <Progress :percent="20" hide-info />
                        </Col>
                        <Col span="5" style="text-align: center;font-size:14px;">
                            12345
                        </Col>
                    </li>
                    <li>
                        <Col span="6">
                            空调系统
                        </Col>
                        <Col span="13">
                            <Progress :percent="20" hide-info />
                        </Col>
                        <Col span="5" style="text-align: center;font-size:14px;">
                            12345
                        </Col>
                    </li>
                    <li>
                        <Col span="6">
                            空调系统
                        </Col>
                        <Col span="13">
                            <Progress :percent="20" hide-info />
                        </Col>
                        <Col span="5" style="text-align: center;font-size:14px;">
                            12345
                        </Col>
                    </li>
                </ul>
            </Col>
        </Col>
    </div>
</template>

<script>

    import echarts from 'echarts';
    import oddstyle from '@/css/oddstyle.scss';

    export default {
        data() {
            return {
                list:[
                    {
                        title:'储能系统',
                        subtitle:'',
                        list:[
                            {
                                name:'容量配置',
                                value:'1MW/1MWh'
                            },
                            {
                                name:'运行状态',
                                value:'充电'
                            },
                            {
                                name:'电池电量',
                                value:'35.22%'
                            },
                            {
                                name:'充放电功率',
                                value:'456.22KW'
                            }
                        ]
                    },{
                        title:'负荷系统',
                        subtitle:'一期办公楼负荷',
                        list:[
                            {
                                name:'空调当前功率',
                                value:'256.32KW'
                            },
                            {
                                name:'办公室当前功率',
                                value:'256.32KW'
                            },
                        ]
                    },{
                        title:'负荷系统',
                        subtitle:'充电桩',
                        list:[
                            {
                                name:'总台数',
                                value:'16'
                            },
                            {
                                name:'工作台数',
                                value:'12'
                            },
                            {
                                name:'当前功率',
                                value:'235.32KW'
                            },
                            {
                                name:'当日收入',
                                value:'0.23万元'
                            }
                        ]
                    },{
                        title:'光伏系统',
                        subtitle:'',
                        list:[
                            {
                                name:'装机容量',
                                value:'2MWp'
                            },
                            {
                                name:'当前功率',
                                value:'1.6MW'
                            },
                            {
                                name:'当日发电量',
                                value:'245.32度'
                            },
                            {
                                name:'累计发电量',
                                value:'2.42万度'
                            }
                        ]
                    },{
                        title:'负荷系统',
                        subtitle:'生产负荷',
                        list:[
                            {
                                name:'一期车间当前功率',
                                value:'256.32KW'
                            },
                            {
                                name:'二期车间当前功率',
                                value:'256.32KW'
                            }
                        ]
                    },{
                        title:'负荷系统',
                        subtitle:'生活负荷',
                        list:[
                            {
                                name:'宿舍当前功率',
                                value:'256.32KW'
                            },
                            {
                                name:'餐厅当前功率',
                                value:'256.32KW'
                            }
                        ]
                    },{
                        title:'负荷系统',
                        subtitle:'二期办公楼负荷',
                        list:[
                            {
                                name:'空调当前功率',
                                value:'256.32KW'
                            },
                            {
                                name:'办公室当前功率',
                                value:'256.32KW'
                            }
                        ]
                    }
                ]
             }
        },
        methods: {
            //  交换功率曲线图
            curveCharts: function() {
                
                let myChart = echarts.init(document.getElementById("curveChart"));

                let option = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer:{
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

                            let res = '<div style="background-color:rgba(0,26,58,.6);border:1px solid #0289bf;padding:10px;">'+"功率：" + data[0].value + "MW" + "<br />" + "时间：" + data[0].name+'</div>';

                            return res;
                        }
                    },
                    grid: {
                        top:'20%',
                        left: '5%',
                        right: '5%',
                        bottom: '5%'
                    },
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                        axisLine:{
                            lineStyle:{
                                color:'#005384'
                            }
                        },
                        axisTick:{
                            show:false
                        },
                        splitLine:{
                            show:false
                        },
                        axisLabel:{
                            show:false
                        }
                    },
                    yAxis: {
                        name : 'MW',
                        type: 'value',
                        axisLine:{
                            lineStyle:{
                                color:'#005384'
                            }
                        },
                        axisTick:{
                            show:false
                        },
                        splitLine:{
                            show:false
                        },
                        splitNumber:2
                    },
                    series: [{
                        type: 'line',
                        itemStyle: {  
                            color:{
                                colorStops: [{
                                    offset: 0, color: '#fcee21' // 0% 处的颜色
                                }, {
                                    offset: 0.5, color: '#c1272d' // 50% 处的颜色
                                }, {
                                    offset: 1, color: '#fcee21' // 100% 处的颜色
                                }]
                            }
                        },
                        data: [-1, 1, 2, -1, 1],
                        smooth: true
                    }]
                };

                myChart.setOption(option);
            }
        },
        mounted(){
            this.curveCharts();
        }
    }

</script>

<style scoped lang="scss">
    .micronetOverview{
        width: 100%;
        height: 100%;
        padding: 10px;
        background: url(../../assets/index/111839729187311707.png) no-repeat;
        background-size: 100% 100%;
        &>div{
            height: 100%;
            float: left;
        }
        .left{
            width: 16%;
            padding-top: 2%;
            .left_top{
                margin-bottom: 10px;
                text-align: center;
                span{
                    margin-bottom: 5px;
                    display: block;
                }
                &>div{
                    background: url(../../assets/micronetOverview/circle-bg.png) no-repeat;
                    background-size: 100% 100%;
                    width:94px;
                    height:94px;
                    margin: 0 auto;
                    margin-bottom: 15px;
                    &>div{
                        width: 70px !important;
                        height: 70px !important;
                        margin-top: 12px;
                    }
                }
            }
            .left_cen{
                p{
                    text-align: center;
                    height: 50px;
                    line-height: 10px;
                    background: url(../../assets/index/title2-bg.png) no-repeat;
                    background-size: 100% 100%;
                }
                li{
                    padding: 0 10px;
                    line-height: 34px;
                    height: 34px;
                    margin-bottom:8px; 
                    color: #6ac6e2;
                    background: rgba(1,27,58,.5);
                    div{
                        float: right;
                    }
                }
            }
            .left_bottom{
                text-align: center;
                img{
                    width: 100%;
                    max-width: 50px;
                }
                span{
                    display: block;
                }
                p{
                    height: 50px;
                    line-height: 10px;
                    background: url(../../assets/index/title2-bg.png) no-repeat;
                    background-size: 100% 100%;
                }
            }
        }
        .center{
            width: 58%;
            &>ul>li>div{
                &>div{
                    span{
                        &:first-child{
                            color: #b3ebff;
                            font-weight: bold;
                        }
                        &:last-child{
                            color: #00ffff;
                            font-weight: bold;
                        }
                    }
                }
                &>ul{
                    li{
                        line-height: 100%;
                        span{
                            font-size: 14px;
                            color: #6ac6e2;
                            i{
                                color: #00ffff;
                            }
                        }
                    }
                }
            }
            &>div{
                position: absolute;
                bottom: 11%;
                // width: 100%;
                padding: 0.7% 3%;
                background: rgba(1,27,58,.4);
                border-radius: 30px;
                margin: 0 8%;
                img{
                    width: 10%;
                    vertical-align: middle;
                    display: inline-block;
                }
                i{
                    font-size: 18px;
                }
            }
            .map_tip_0{
                width: 28%;
                height: 17%;
                position: absolute;
                top: 23%;
                left: 4%;
                padding: 10px 0 0 15px;
                background: url(../../assets/micronetOverview/map-tip-0.png) no-repeat;
                background-size: 100% 100%;
                ul{
                    padding-top: 7%;
                }
            }
            .map_tip_1{
                width: 30%;
                height: 16%;
                position: absolute;
                top: 59%;
                left: 56%;
                padding: 15px 0px 0px 55px;
                background: url(../../assets/micronetOverview/map-tip-1.png) no-repeat;
                background-size: 100% 100%;
                ul{
                    padding-top: 7%;
                }
            }
            .map_tip_2{
                width: 27%;
                height: 16%;
                position: absolute;
                top: 56%;
                left: 15%;
                padding: 7px 0 0 55px;
                background: url(../../assets/micronetOverview/map-tip-2.png) no-repeat;
                background-size: 100% 100%;
                ul{
                    padding-top: 7%;
                }
            }
            .map_tip_3{
                width: 28%;
                height: 18%;
                position: absolute;
                top: 41%;
                left: 70%;
                padding: 10px 0 0 55px;
                background: url(../../assets/micronetOverview/map-tip-3.png) no-repeat;
                background-size: 100% 100%;
                ul{
                    padding-top: 7%;
                }
            }
            .map_tip_4{
                width: 28%;
                height: 15%;
                position: absolute;
                top: 30%;
                left: 34%;
                padding: 10px 0 0 15px;
                background: url(../../assets/micronetOverview/map-tip-4.png) no-repeat;
                background-size: 100% 100%;
                ul{
                    padding-top: 7%;
                }
            }
            .map_tip_5{
                width: 27%;
                height: 13%;
                position: absolute;
                top: 43%;
                left: 15%;
                padding: 10px 0 0 55px;
                background: url(../../assets/micronetOverview/map-tip-5.png) no-repeat;
                background-size: 100% 100%;
                ul{
                    padding-top: 7%;
                }
            }
            .map_tip_6{
                width: 27%;
                height: 20%;
                position: absolute;
                top: 19%;
                left: 62%;
                padding: 10px 0 0 15px;
                background: url(../../assets/micronetOverview/map-tip-6.png) no-repeat;
                background-size: 100% 100%;
                ul{
                    padding-top: 7%;
                }
            }
        }
        .right{
            width: 25%;
            p{
                text-align: center;
                height: 50px;
                line-height: 10px;
                background: url(../../assets/index/title2-bg.png) no-repeat;
                background-size: 100% 100%;
            }
            .right_top{
                height: 32%;
                padding: 10% 15px 0;
                li{
                    width: 31%;
                    float: left;
                    text-align: center;
                    margin-right: 3%;
                    margin-bottom: 2%;
                    padding: 3% 0;
                    background: url(../../assets/micronetOverview/parameter-bg.png) no-repeat;
                    background-size: 100% 100%;
                    &:nth-child(3n+0){
                        margin: 0;
                    }
                    span{
                        display: block;
                        &:last-child{
                            color: #76d5e5;
                            font-weight: bold;
                        }
                    }
                }
            }
            .right_cen{
                height: 41%;
                padding: 15px 0 0 15px;
                &>div:first-child{
                    margin-bottom: 20px;
                    span{
                        display: block;
                        margin-bottom: 10px;
                        i{
                            font-size: 18px;
                            color: #fbb03b;
                            margin-left: 10px;
                        }
                    }
                }
                #curveChart{
                    width: 100%;
                    height: 150px;
                }
            }
            .right_bot{
                height: 26%;
                padding: 15px 0 0 15px;
            }
        }
    }
</style>
