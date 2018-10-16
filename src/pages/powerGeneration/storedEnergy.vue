<template>
    <div class="storebg">
        <div class="storehead">
        </div>
        <div class="storebody">
            <Row class-name="storerow1">
                <Col span="8" class-name="stcol1">
                    <div class="info1">
                        <p class="ionbg">基本信息</p>
                        <Row >
                            <Col span="12"
                                v-for="item in baseinfoList"
                                :key="item.id" >                        
                                <Row type="flex" justify="center" align="middle" style="padding:0px">                                
                                    <Col span="8">
                                        <div class="deviceimg">
                                            <img :src="item.src"/>  
                                        </div>                                                  
                                    </Col>
                                    <Col span="8">  
                                        <div>                                                           
                                            <span class="base-value">{{item.value}}</span>
                                            <span class="base-unit">{{item.unit}}</span>  
                                        </div>
                                        <span class="base-name">{{item.name}}</span>                                    
                                    </Col>
                                </Row>
                            </Col>
                        </Row>    
                    </div>
                    <div class="info2">
                        <p class="ionbg">充放电指标</p>
                        <Row>
                            <Col span="7"
                                 v-for="item in chargeList"
                                 :key="item.id" class="charge">
                                 <span class="charge-name">{{item.name}}</span>
                                 <div>
                                    <span class="charge-value">{{item.value}}</span>
                                    <span class="charge-unit">{{item.unit}}</span>
                                 </div>
                            </Col>
                        </Row>
                    </div>
                    <div class="info3">
                        <p class="ionbg">经济指标</p>
                        <Row>
                            <Col span="6"
                                 v-for="item in economyList"
                                 :key="item.id" class="charge">
                                 <span class="charge-name">{{item.name}}</span>
                                 <div>
                                    <span class="charge-value">{{item.value}}</span>
                                    <span class="charge-unit">{{item.unit}}</span>
                                 </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col span="15" class-name="stcol2">
                    <div class="chart1">
                        <p class="">功率和电价曲线</p>
                        <div id="linechart">
                        </div>
                    </div>
                    <div class="chart1">
                        <p class="">充放电和收益柱状图</p>
                        <div id="barchart">
                        </div>
                    </div>
                    
                </Col>
            </Row>
            <Row class-name="storerow2">
                <Col span="8" class-name="stcol1">
                    <p class="deviceicon">设备信息</p>
                    <Row style="height:100%">
                        <Col span="12"
                             v-for="item in deviceList"
                             :key="item.id" class-name="device1">
                            <p class="title">{{item.title}}</p>                           
                            <Row type="flex" justify="center" align="middle" style="padding: 5px 10px">                                
                                <Col span="9">
                                    <div class="deviceimg">
                                        <img :src="item.src"/>  
                                    </div>                                                  
                                </Col>
                                <Col span="9">
                                    <Row>
                                        <Col span="24"
                                                v-for="item1 in item.datalist"
                                                :key="item1.id" >
                                        <span >{{item1.name}}</span>                        
                                        <span :style="{'color':item1.color}" class="">{{item1.value}}</span>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                </Col>
                <Col span="15" class-name="stcol2">
                    <p class="deviceicon">告警信息</p>
                    <div class="alarm">
                        <Table  height=200 border :columns="columns1" :data="data1" ></Table>  
                    </div>
                </Col>
            </Row>
        </div> 
        <div class="storefoot">
        </div>                   
    </div>
</template>
<script>
import echarts from 'echarts'
export default {
    
    data(){
        return{
            chargeList:[
                {
                    name:'当日充电量',
                    value:123.45,
                    unit:'度',
                },
                {
                    name:'总充电量',
                    value:123.45,
                    unit:'万度',
                },
                {
                    name:'总充电时间',
                    value:123.45,
                    unit:'万小时',
                },
                {
                    name:'当日放电量',
                    value:123.45,
                    unit:'万度',
                },
                {
                    name:'总放电量',
                    value:123.45,
                    unit:'万度',
                },
                {
                    name:'总放电时间',
                    value:123.45,
                    unit:'万小时',
                },
            ],
            economyList:[
                {
                    name:'当日充电成本',
                    value:123.45,
                    unit:'万元',
                },
                {
                    name:'当月充电成本',
                    value:123.45,
                    unit:'万元',
                },
                {
                    name:'当年充电成本',
                    value:123.45,
                    unit:'万元',
                },
                {
                    name:'累计充电成本',
                    value:123.45,
                    unit:'万元',
                },
                {
                    name:'当日放电收入',
                    value:123.45,
                    unit:'万元',
                },
                {
                    name:'当月放电收入',
                    value:123.45,
                    unit:'万元',
                },
                {
                    name:'当年放电收入',
                    value:123.45,
                    unit:'万元',
                },
                {
                    name:'累计放电收入',
                    value:123.45,
                    unit:'万元',
                },
            ],
            deviceList:[
                {
                    title:'电池组',
                    src:require('@/assets/powerGenertion/lidianchi.png'),
                    datalist:[
                        {
                           name:'总数:',
                           value:7,
                           color:'#c1e7ff',
                        },
                        {
                           name:'正常:',
                           value:7,
                           color:'#00ff00',
                        },
                        {
                           name:'故障:',
                           value:7,
                           color:'#ffff00',
                        }
                    ]
                },
                {
                    title:'PCS',
                    src:require('@/assets/powerGenertion/pcs.png'),
                    datalist:[
                        {
                           name:'总数:',
                           value:28,
                           color:'#c1e7ff',
                        },
                        {
                           name:'正常运行:',
                           value:6,
                           color:'#00ff00',
                        },
                        {
                           name:'正常停机:',
                           value:8,
                           color:'#ffff00',
                        },
                        {
                           name:'故障停机:',
                           value:7,
                           color:'#ff9900',
                        },
                        {
                           name:'通讯中断:',
                           value:7,
                           color:'#b3ebff',
                        }
                    ]
                },
                {
                    title:'箱变',
                    src:require('@/assets/powerGenertion/xb.png'),
                    datalist:[
                        {
                           name:'总数:',
                           value:7,
                           color:'#c1e7ff',
                        },
                        {
                           name:'正常:',
                           value:4,
                           color:'#00ff00',
                        },
                        {
                           name:'故障:',
                           value:3,
                           color:'#ffff00',
                        }
                    ]
                }
            ],
            baseinfoList:[
                {
                    name:'装机容量',
                    src:require('@/assets/powerGenertion/pv.png'),
                    value:2,
                    unit:'MW', 
                },
                {
                    name:'电池组数',
                    src:require('@/assets/powerGenertion/zushu.png'),
                    value:10,
                    unit:'', 
                },
                {
                    name:'电池类型',
                    src:require('@/assets/powerGenertion/lidianchi.png'),
                    value:'磷酸铁锂',
                    unit:'', 
                },
                {
                    name:'PCS台数',
                    src:require('@/assets/powerGenertion/pcs.png'),
                    value:10,
                    unit:'', 
                },
            ],
            columns1: [
                {
                    title: '设备名称',
                    key: 'deviceName'
                },
                {
                    title: '告警信息',
                    key: 'alarmInfo'
                },
                {
                    title: '告警级别',
                    key: 'alarmLevel'
                },
                {
                    title: '发生时间',
                    key: 'happenTime'
                }
            ],
            data1: [
                {
                    deviceName: '1#方阵1#逆变器',
                    alarmInfo: '电压异常',
                    alarmLevel: '1',
                    happenTime: '2016-10-03 10：14：02'
                },
                {
                    deviceName: '2#方阵2#逆变器',
                    alarmInfo: '电压异常',
                    alarmLevel: '1',
                    happenTime: '2016-10-03 10：14：02'
                },
                {
                    deviceName: '2#方阵3#逆变器',
                    alarmInfo: '电压异常',
                    alarmLevel: '1',
                    happenTime: '2016-10-03 10：14：02'
                },
                {
                    deviceName: '4#方阵4#逆变器',
                    alarmInfo: '电压异常',
                    alarmLevel: '1',
                    happenTime: '2016-10-03 10：14：02'
                },
                {
                    deviceName: '2#方阵3#逆变器',
                    alarmInfo: '电压异常',
                    alarmLevel: '1',
                    happenTime: '2016-10-03 10：14：02'
                },
                {
                    deviceName: '4#方阵4#逆变器',
                    alarmInfo: '电压异常',
                    alarmLevel: '1',
                    happenTime: '2016-10-03 10：14：02'
                },
            ]
        }
    },
    methods:{
        chart:function(){
            //折线图
            var colors = ['#02ccff', '#ffe763'];
            var myChart = echarts.init(document.getElementById("linechart"));
            var option = {
                tooltip : {
                    trigger: 'axis',
                    axisPointer : { // 坐标轴指示器，坐标轴触发有效
                        type : 'cross', // 默认为直线，可选为：'line' | 'shadow'
  
                    }
                },
                legend: {
                    data:['功率','电价'],
                },
                grid: {
                    left: '2%',
                    right: '2%',
                    bottom: '0',
                    top: '8px',
                    containLabel: true
                },
                calculable : true,
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisLine: {
                        lineStyle: {
                            color: '#5793f3'
                        }
                    },
                },
                yAxis : [
                    {
                        type: 'value',
                        name: 'MW',
                        min: 0,
                        max: 1500,
                        position: 'left',
                        splitLine:{
                            show: false, 
                        },//去除网格线
                        axisLine: {
                            lineStyle: {
                                color: colors[0]
                            }
                        },
                        axisLabel: {
                            formatter: '{value} '
                        }
                    },
                    {
                        type: 'value',
                        name: 'W/m2',
                        min: 0,
                        max: 1500,
                        position: 'right',
                        splitLine:{
                            show: false, 
                        },//去除网格线
                        axisLine: {
                            lineStyle: {
                                color: colors[1]
                            }
                        },
                        axisLabel: {
                            formatter: '{value} '
                        }
                    },
                ],
                series: [
                    {                     
                        name:'功率',
                        type:'line',
                        smooth: true,
                        lineWidth: '2px',
                        //yAxis: 1,
                        yAxisIndex: 0,
                        itemStyle: {
                            normal: {
                                color: '#02ccff',
                            },
                        }, 
                        data: [820, 932, 901, 934, 1290, 1330, 1320],                      
                        //data:data4
                    },
                    // {
                    //     name:'Step Start',
                    //     data: [820, 932, 901, 934, 1290, 1330, 1320],
                    //     type: 'line',
                    //     smooth: true
                    // },
                    {
                        name:'电价',
                        type:'line',
                        step: 'start',
                        itemStyle: {
                            normal: {
                                color: '#ffe763',
                            },
                        }, 
                        data:[120, 132, 101, 134, 90, 230, 210]
                    },
                ]
            };
            myChart.setOption(option);
            //柱状图
            var myChart1 = echarts.init(document.getElementById("barchart"));
            var options = {
                title : {
                    //text: '某地区蒸发量和降水量',
                    //subtext: '纯属虚构'
                },
                tooltip : {
                    trigger: 'axis'
                },
                legend: {
                    data:['充电','放电']
                },
                
                calculable : true,
                xAxis : [
                    {
                        type : 'category',
                        data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                        axisLine: {
                        lineStyle: {
                            color: '#5793f3'
                        }
                    },
                    }
                    
                ],
                yAxis : [
                    {
                        type : 'value',
                        splitLine:{
                            show: false, 
                        },//去除网格线
                        axisLine: {
                            lineStyle: {
                                color: '#5793f3'
                            }
                        },
                    }
                ],
                series : [
                    {
                        name:'充电',
                        type:'bar',
                        data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        {offset: 0, color: '#d4ff94'},
                                        {offset: 1, color: '#00d496'}
                                    ]
                                )
                            },
                        },
                    },
                    {
                        name:'放电',
                        type:'bar',
                        data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        {offset: 0, color: '#fff18d'},
                                        {offset: 1, color: '#ff9900'}
                                    ]
                                )
                            },
                        },
                        
                    }
                ]
            };
            myChart1.setOption(options);
        }
    },
    mounted(){
        this.chart();
    }
}
</script>
<style lang="scss">
.storebg{
    width: 100%;
    height: 100%;
    border: 1px solid red;
    background: url(../../assets/index/right-bg.png) no-repeat;
    background-size: 100% 100%;
    .storehead{
        width: 100%;
        height: 5%;
    }
    .storefoot{
        width: 100%;
        height: 5%;
    }
    .storebody{
        height: 90%;
        margin:0px 25px 0px 5px;
        border:1px solid green;
        .storerow1{
            height:59%;
            //background: #032954;
            margin-bottom: 9px;
            .stcol1{
                width:35%;
                height:100%;
                //background: #032954;
                margin-right:1%;
                .info1{
                    height:32%;
                    background: #032954;
                    padding:6px 0 0 22px;
                    .ionbg{
                        background-image: url(../../assets/index/title-bg.png);
                        background-size:auto 100%;
                        background-repeat: no-repeat;
                        line-height:32px;
                        font-size:16px;
                        color:#c1e7ff;
                        padding-left:10px;
                    }
                    .deviceimg{
                        width:40px;
                    }
                    .deviceimg img{
                        max-width:40px;
                    }
                    .base-name{
                        font-size: 14px;
                        color:#affaff;
                        //padding-right:6px;
                        //padding-left:10px;
                    }
                    .base-value{
                        font-size: 16px;
                        color:#00ffff;
                        font-weight: bold;
                        padding-right:6px;
                    }
                    .base-unit{
                        font-size: 12px;
                        color:#86d1ff;
                    }
                   
                }
                .info2{
                    height:33%;
                    background: #032954;
                    margin:6px 0;
                    padding:6px 0 0 22px;
                    .ionbg{
                        background-image: url(../../assets/index/title-bg.png);
                        background-size:auto 100%;
                        background-repeat: no-repeat;
                        line-height:32px;
                        font-size:16px;
                        color:#c1e7ff;
                        padding-left:10px;
                    }
                    .charge-name{
                        font-size: 14px;
                        color:#b3ebff;
                        padding-left:10px;
                        text-align:left;
                    }
                    .charge-value{
                        font-size: 16px;
                        color:#00ffff;
                        font-weight: bold;
                        padding-left:10px;
                        padding-right:6px;
                        
                    }
                    .charge-unit{
                        font-size: 12px;
                        color:#86d1ff;
                    }
                    .charge {
                        border-right: 1px solid #0084d7;
                    }
                    .charge:nth-child(3n) {
                        border-right: 0;
                    }
                    // &::after{
                    //     display: block;
                    //     content:'';
                    //     height:2%;
                    //     background: #000;
                    // }
                }
                .info3{
                    height:32%;
                    background: #032954;
                    padding:6px 0 0 22px;
                    .ionbg{
                        background-image: url(../../assets/index/title-bg.png);
                        background-size:auto 100%;
                        background-repeat: no-repeat;                       
                        line-height:32px;
                        font-size:16px;
                        color:#c1e7ff;
                        padding-left:10px;
                    }
                    .charge-name{
                        font-size: 14px;
                        color:#b3ebff;
                        padding-left:10px;
                    }
                    .charge-value{
                        font-size: 16px;
                        color:#00ffff;
                        font-weight: bold;
                        padding-left:10px;
                        padding-right:6px;
                    }
                    .charge-unit{
                        font-size: 12px;
                        color:#86d1ff;
                    }
                    .charge {
                        border-right: 1px solid #0084d7;
                    }
                    .charge:nth-child(4n) {
                        border-right: 0;
                    }
                }
            }
            .stcol2{
                width:64%;
                height:100%;
                background: #032954;
                .chart1{
                    height:50%;
                    padding-top: 6px;
                    text-align:center;
                    font-weight: bold;
                    color: #c1e7ff;
                    font-size: 16px;
                    #linechart{
                        height:200px;
                        width:100%;
                    }
                    #barchart{
                        height:200px;
                        width:100%;
                    }
                }
                
                 
            }
        }
        .storerow2{
            height:40%;
            //background: #032954;
            .stcol1{
                width:35%;
                height:100%;
                background: #032954;
                margin-right:1%; 
                padding: 6px 0 16px 0;
                .deviceicon{
                    background-image: url(../../assets/powerGenertion/pv-alarm.png);
                    background-size:100% 100%;
                    background-repeat: no-repeat;
                    width:30%;
                    line-height:32px;
                    font-size:16px;
                    color:#c1e7ff;
                    text-align:center;
                    margin: 0 auto;  
                } 
                .device1{
                    font-size: 12px;
                    background: rgba(0,0,0,0.2);
                    height:46%;
                    width:45%;
                    margin:10px 10px 0 10px;
                    .deviceimg{
                        width:50px;
                    }
                    .deviceimg img{
                        max-width:50px;
                    }
                    .title{
                        font-size: 16px;
                        padding:5px 0 0 40px;
                    }
                }             

            }
            .stcol2{
                width:64%;
                height:100%;
                background: #032954;
                padding: 6px 15px 15px 15px;
                .deviceicon{
                    background-image: url(../../assets/powerGenertion/pv-alarm.png);
                    background-size:100% 100%;
                    background-repeat: no-repeat;
                    width:30%;
                    line-height:32px;
                    font-size:16px;
                    color:#c1e7ff;
                    text-align:center;
                    margin: 0 auto; 
                }
                .alarm{

                    margin-top:16px;
                    //表格样式
                    .ivu-table-wrapper{
                        border: 1px solid #02264f;
                        border-bottom:0;
                        border-right:0;
                        border-left:0;
                        // 表格出现加载层样式
                        .ivu-spin-fix{
                            border: 0 !important;
                            background:rgba(0,28,62,.4);
                        }
                        .ivu-table{
                            background-color: inherit;
                            .ivu-table-header th,
                            .ivu-table-body td{
                                height: 2.5rem;
                                font-size: 0.7rem;
                                color: #c1e7ff;
                                text-align: center;
                                background-color: #043f81;
                                border-right: 1px solid #02264f;
                                border-bottom: 1px solid #02264f;
                                &:first-child{
                                    border-left: 1px solid #02264f;
                                }
                            }
                            .ivu-table-header th{
                                font-size:0.8rem;
                                font-weight:100;
                            }
                            .ivu-table-body{
                                td{
                                    background-color:#001c3e;
                                }
                                
                                .ivu-table-row{
                                    .demo-table-info-cell-yc{
                                        span{
                                            color:#ffeb7f;
                                        }
                                    }
                                    .demo-table-info-cell-gz{
                                        span{
                                            color:#fb6a37;
                                        }
                                    }
                                }
                                .ivu-table-row-hover td{
                                    background: #072a4f;
                                }
                            }
                            .ivu-table-tip{
                                td{
                                    background-color:#002148;
                                    border-right:0;
                                    border-bottom:0;
                                }
                            }
                            .ivu-spin-fix{
                                background-color:#002148;
                            }
                        }
                        .ivu-table:before,
                        .ivu-table:after{
                            background-color: inherit;
                        }
                    }
                }
                // 
            }
            
        }
    }
}
</style>

