<template>
   <div class="pvbg">
        <!--头部分-->
        <div class="pvhead">
        </div>
        <!--内容部分-->
        <div class="pvbody">
            <!--第一行指标-->
            <Row class-name="pvrow1">
                <Col span="8">
                    <Row type="flex" justify="center" align="middle" style="padding:10px">
                        <Col span="8" style="text-align:center">
                           <!-- <i-Circle :percent="50" :size="50"  dashboard>
                                <span class="demo-circle-inner" style="font-size:10px">50%</span>
                            </i-Circle>-->
                            <i-Circle :percent="80" 
                                      :size="50" 
                                      trail-width="7" 
                                      stroke-width="7" 
                                      trail-color="#38567c" 
                                      stroke-color="#33e271">
                                <span  style="font-size:14px;color:#33e271">80%</span>
                            </i-Circle>

                            <P>
                                <span class="pv-value">12.4</span>
                                <span class="pv-unit">MW</span> 
                            </P>
                            <p>
                                <span class="pv-name">出力比率</span> 
                            </p>
                        </Col>
                        <Col span="8" style="text-align:center">
                            <div id="main"> 
                            </div>
                            <P>
                                <span class="pv-value">12.4</span>
                                <span class="pv-unit">MW</span> 
                            </P>
                            <p>
                                <span class="pv-name">当前功率</span> 
                            </p>
                        </Col>
                        <Col span="8" style="text-align:center">
                        
                            <img src="@/assets/powerGenertion/install.png"> 
                            <P>
                                <span class="pv-value">12.4</span>
                                <span class="pv-unit">MW</span> 
                            </P>
                            <p>
                                <span class="pv-name">装机容量</span> 
                            </p>
                        </Col>
                    </Row>
                </Col>
                <Col span="8" class="pv-line">
                    <Row>
                        <Col span="12"
                             v-for="item in electricList" 
                             :key="item.id" class="electric">
                            <span class="pv-name">{{item.name}}</span>
                            <span class="pv-value">{{item.value}}</span>
                            <span class="pv-unit">{{item.unit}}</span>
                        </Col>
                    </Row>                                       
                </Col>
                <Col span="8" class="pv-income">
                    <Row  >
                        <Col span="12"
                             v-for="item in incomeList" 
                             :key="item.id" class="electric">
                            <span class="pv-name">{{item.name}}</span>
                            <span class="pv-value">{{item.value}}</span>
                            <span class="pv-unit">{{item.unit}}</span>
                        </Col>
                    </Row> 
                </Col>
            </Row>
            <!--第二行图 -->
            <Row class-name="pvrow2">
                <Col span="8">
                    <p class="pvicon">当日告警统计</p>
                    <Row type="flex" justify="center" align="middle" style="padding-top:30px">
                        <Col span="10">
                            <div id="alarmchart"> 
                            </div>
                        </Col>
                        <Col span="10">
                            <Col 
                            v-for="item in alarmList" 
                            :key="item.id" style="padding-bottom:15px ">
                            <span style="color:#86d1ff;font-size:16px">{{item.name}}</span>
                            <span :style="{'color':item.color,'font-size':'14px',}">{{item.value}}</span>  
                            </Col>  
                        </Col>
                    </Row>
                </Col>
                <Col span="16" class="chartbar" style="text-align:center">
                
                    <Tabs type="card" style="text-align:center">
                        <TabPane label="当日辐照度和功率曲线">
                        
                            <div id="echartline"> 
                            </div>
                        </TabPane>
                        <TabPane label="发电量及收入柱状图">
                            
                            <div id="echartu"> 
                            </div>
                        </TabPane>
                    </Tabs>
                   
                </Col>
            </Row>
            <!--第三行图-->
            <Row class-name="pvrow3">
                <Col span="8">
                    <p class="pvicon">设备信息</p>
                    <Row class="inv-state">
                        <p class="pv-inv">逆变器</p>
                        <Col span="8">                               
                            <img src="@/assets/powerGenertion/inv.png">  
                        </Col>  
                        <Col span="16">
                            <Row type="flex" justify="center" align="middle">
                                <Col span="20" style="padding-bottom:5px;"> 
                                    总数：{{invStateList.total}}
                                </Col>  
                                <Col span="10"
                                    v-for="item in invStateList.statelist" 
                                    :key="item.id" class="state">
                                    <span>{{item.status_name}}</span>
                                    <span :style="{'color':item.color,'font-size':'14px',}">{{item.value}}</span>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>

                <Col span="16" class="pvalarm">
                    <p class="alarmicon">告警信息</p>                    
                    <Table  height=200 border :columns="columns1" :data="data1" ></Table>                    
                </Col>
            </Row>
        </div>
        <!--脚部分-->
        <div class="pvfoot">
        </div>
   </div>
</template>
<script>
import echarts from 'echarts'
export default {
    data(){
        return{
            electricList:[
                {
                    name:'当日发电量',
                    value:123.45,
                    unit:'度',
                },
                {
                    name:'当月发电量',
                    value:123.45,
                    unit:'万度',
                },
                {
                    name:'当年发电量',
                    value:123.45,
                    unit:'万度',
                },
                {
                    name:'累计发电量',
                    value:123.45,
                    unit:'万度',
                },
            ],
            incomeList:[
                {
                    name:'当日收入',
                    value:678.89,
                    unit:'元',
                },
                {
                    name:'当月收入',
                    value:678.89,
                    unit:'万元',
                },
                {
                    name:'当年收入',
                    value:678.89,
                    unit:'万元',
                },
                {
                    name:'累计收入',
                    value:678.89,
                    unit:'万元',
                },
            ],
            invStateList:{
                total:4, //设备总数                           
                statelist:[
                    {
                        status_name:'正常运行：',
                        value:1,
                        color:'#8bd477'
                    },
                    {
                        status_name:'正常停机：',
                        value:2,
                        color:'#ffeb7f'
                    },
                    {
                        status_name:'故障停机：',
                        value:3,
                        color:'#fb6a37'
                    },
                    
                    {
                        status_name:'通讯中断：',
                        value:4,
                        color:'#bbc1dd'
                    }
                ]   
            },
            alarmList:[
                {
                    name:'异常：',
                    value:3,
                    color:'#fee97e'
                },
                
                {
                    name:'故障：',
                    value:4,
                    color:'#f8831a'
                }
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
            //告警环形图
            var myChart = echarts.init(document.getElementById("alarmchart"));
            let options = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                // legend: {
                //     orient: 'vertical',
                //     x: 'left',
                //     data:['异常','故障']
                // },
                series: [
                    {
                        name:'',
                        type:'pie',
                        radius: ['60%', '80%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                position: 'center'
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        color:['#fee97e', '#f8831a'], //环的颜色
                        // data:[
                        //     {value:3, name:'异常'},
                        //     {value:4, name:'故障'},                         
                        // ]
                    
                        data: [{
                            value: '4',
                            name: '异常',
                            itemStyle: {
                                normal: {
                                    color: '#fee97e',
                                }
                            },
                            // label: {
                            //     normal: {
                            //         // formatter: '{d} %',
                            //         textStyle: {
                            //             fontSize: 14,
                            //             fontWeight: 5,
                            //             color: '#f8831a',
                            //         }
                            //     }
                            // }
                        },
                        {
                            value: 3,
                            name: '故障',
                            itemStyle: {
                                normal: {
                                    color: '#f8831a',
                                }
                            },
                            
                            label: {
                                normal: {
                                    formatter: 5 + '',
                                    textStyle: {
                                        fontSize: 20,
                                        color: '#33e271'
                                    }
                                },

                            }
                        }
                        ]
                    },
                ]
            };
            myChart.setOption(options);

            //仪表盘
            var myChart1 = echarts.init(document.getElementById('main'));
            var option = {
                tooltip : {
                    formatter: "{a} <br/>{b} : {c}%"
                },               
                series: [
                    {
                        name: '当前功率',
                        type: 'gauge',
                        min: 0,
                        max: 100,
                        startAngle: 180,
                        endAngle: 0,
                        
                        radius: '100%',
                        axisLine: { // 坐标轴线
                            show:true,                                    
                            lineStyle: {       // 属性lineStyle控制线条样式
                                width: 5,
                                //color:[[0.5, '#06d391'], [1, '#d2ff19']],
                                color: [
                                    [
                                        1, new echarts.graphic.LinearGradient(
                                        0, 0, 1, 0, [{
                                            offset: 0,
                                            color: '#06d391'
                                        },
                                        {
                                            offset: 1,
                                            color: '#d2ff19'
                                        }
                                        ]
                                        )
                                    ],
                                    // [
                                    //     1, '#d2ff19'
                                    // ]
                                ]
                            },
                        },
                        axisLabel:{
                            show:false,
                        },
                        axisTick: {            // 坐标轴小标记
                            show:false,
                            // length: 10,        // 属性length控制线长
                            // lineStyle: {       // 属性lineStyle控制线条样式
                            //     color: 'auto'
                            // }
                        },
                        splitLine: {           // 分隔线
                            show:false,
                            // length: 10,         // 属性length控制线长
                            // lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            //     color: 'auto'
                            // }
                        },
                        title : {
                            // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                           // fontWeight: 'bolder',
                            // fontSize: 5,
                            // fontStyle: 'italic'
                            show:false,
                        },
                        pointer: {
                            width:2,
                            
                        },
                        itemStyle:{
                            color:'#fbb018',//指针颜色
                            //borderColor:'#06d391',
                        },
                        detail: {
                            show: false
                        },
                        //detail: {formatter:'{value}%'},
                        data: [{value: 30, name: ''}]
                    }
                ]
            };
            myChart1.setOption(option);

            // setInterval(function () {
            //     option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
            //     myChart1.setOption(option, true);
            // },2000);
          
            ///
            //柱状图
            var dataAxis = ['9.1', '9.2', '9.3', '9.4', '9.5', '9.6','9.7', '9.8', '9.9', '9.10', '9.11', '9.12', '9.13', '9.14',
            '9.15', '9.16', '9.17', '9.18', '9.19', '9.20', '9.21', '9.22', '9.23', '9.24'
            , '9.25', '9.26', '9.27', '9.28', '9.29', '9.30'];
            var data1 = [10, 52, 70, 98, 36, 77, 89,84,32,65,10, 52, 70, 98, 36, 77, 89,84,32,65,10, 52, 70, 98, 36, 77, 89,84,32,65];
            var data2 = [10, 52, 100, 150, 200, 250, 300,350,400,430,10, 52, 100, 150, 200,,10, 52, 100, 150, 200,,10, 52, 100, 150, 200,];
            var myChart2 = echarts.init(document.getElementById('echartu'));
            var colors1 = ['#02ccff', '#ffe763'];
            let option2 = {
                color: ['#3398DB'],
                tooltip : {
                    trigger: 'axis',
                    axisPointer : { // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    data:['当日发电量','当日收入'],
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                calculable : true,
                xAxis : [
                    {
                        type : 'category',
                        data : dataAxis,
                        axisTick: {
                            alignWithLabel: true,
                            interval:2,
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#5793f3'
                            }
                        },
                    }
                ],
                yAxis : [
                    {
                        type: 'value',
                        name: '万度',
                        min: 0,
                        max: 300,
                        position: 'left',
                        splitLine:{
                            show: false, 
                        },//去除网格线
                        axisLine: {
                            lineStyle: {
                                color: colors1[0]
                            }
                        },
                        axisLabel: {
                            formatter: '{value} '
                        }
                    },
                    {
                        type: 'value',
                        name: '万元',
                        min: 0,
                        max: 300,
                        position: 'right',
                        splitLine:{
                            show: false, 
                        },//去除网格线
                        axisLine: {
                            lineStyle: {
                                color: colors1[1]
                            }
                        },
                        axisLabel: {
                            formatter: '{value} '
                        }
                    },
                ],
                series : [
                    {
                        name:'当日发电量',
                        type:'bar',
                        barWidth: '20%',
                        yAxis: 1,
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        {offset: 0, color: '#00f6ff'},
                                        {offset: 1, color: '#02ccff'}
                                    ]
                                )
                            },
                        },
                        data:data1
                    },
                    {                     
                        name:'当日收入',
                        type:'bar',
                        barWidth: '20%',
                        yAxis: 1,
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
                        data:data2
                    }
                    
                ]
            };
            // 使用刚指定的配置项和数据显示图表。
             myChart2.setOption(option2);
            ///  
            //折线图
            var myChart4 = echarts.init(document.getElementById('echartline'));
            var colors = ['#cc33ff', '#ffe763'];
            let option4 = {
                tooltip : {
                    trigger: 'axis',
                    axisPointer : { // 坐标轴指示器，坐标轴触发有效
                        type : 'cross', // 默认为直线，可选为：'line' | 'shadow'
  
                    }
                },
                legend: {
                    data:['辐照度','功率'],
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
                    data: ['1', '3', '6', '9', '12', '15', '18'],
                    axisTick: {
                        alignWithLabel: true,
                        //interval:2,
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#5793f3'
                        }
                    },
                },
                // yAxis: {                    
                //     type: 'value'
                // },
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
                    series : [
                    
                    {                     
                        name:'功率',
                        type:'line',
                        smooth: true,
                        lineWidth: '2px',
                        //yAxis: 1,
                        yAxisIndex: 0,
                        itemStyle: {
                            normal: {
                                color: '#cc33ff',
                            },
                        }, 
                        data: [820, 932, 901, 934, 1290, 1330, 1320],                      
                        //data:data4
                    },
                    {
                        name:'辐照度',
                        type:'line',
                        smooth: true,
                        lineWidth: '2px',
                    // yAxis: 1,
                        yAxisIndex: 1,
                        itemStyle: {
                            normal: {
                                color: '#ffe763',
                            },
                        },
                        data: [100, 200, 300, 400, 500, 600, 700],
                        //data:data3
                    }
                ]
            };
            myChart4.setOption(option4);
            //折线图
        },
    },
    mounted(){
        this.chart();
    }
    
}
</script>

<style lang="scss">
.pvbg{
    width: 100%;
    height: 100%;
    border: 1px solid red;
    background: url(../../assets/index/right-bg.png) no-repeat;
    background-size: 100% 100%;
    .pvhead{
        width: 100%;
        height: 5%;
    }
    .pvfoot{
        width: 100%;
        height: 5%;
    }
    .pvbody{
        height: 90%;
        margin:0px 25px 0px 5px;
        border:1px solid green;
        .pvrow1{
            height: 20%;
            background: #032954;
           
            //border: 1px solid red;
            .pv-name{
                font-size: 14px;
                color:#b3ebff;
                padding-right:6px;
                padding-left:10px;
            }
            .pv-value{
                font-size: 16px;
                color:#00ffff;
                font-weight: bold;
                padding-right:6px;
            }
            .pv-unit{
                font-size: 12px;
                color:#86d1ff;
            }
            #main{
                //width:100%;
                //padding:10px 0;
                height:60px;
            }
            img{
                    width: 70%;
                   // max-width: 50px;
                }
            .pv-line{
                height:100%;
                border-left: 1px solid #0061d6;
                border-right: 1px solid #0061d6;
                padding:12px; 
                .electric{
                    padding:8px 0;
                }               
                .pv-name{
                    font-size: 14px;
                    color:#b3ebff;
                    padding-right:6px;
                    padding-left:10px;
                }
                .pv-value{
                    font-size: 16px;
                    color:#00ffff;
                    font-weight: bold;
                    padding-right:6px;
                }
                .pv-unit{
                    font-size: 12px;
                    color:#86d1ff;
                }
            }
            .pv-income{
                padding:12px;
                .electric{
                    padding:8px 0;
                }                 
                .pv-name{
                    font-size: 14px;
                    color:#b3ebff;
                    padding-right:6px;
                    padding-left:10px;
                }
                .pv-value{
                    font-size: 16px;
                    color:#00ffff;
                    font-weight: bold;
                    padding-right:6px;
                }
                .pv-unit{
                    font-size: 12px;
                    color:#86d1ff;
                }
            }
        }
        .pvrow2{
            height: 35%;
            //border: 1px solid red;
            //border-top: 1px solid #0061d6;
            //border-bottom: 1px solid #0061d6;
            margin-top:1px;
            margin-bottom:1px;
            background: rgba(7,25,43,0.5);
            padding:14px 20px 20px 20px;
            .pvicon{
                background-image: url(../../assets/index/title-bg.png);
                background-size:auto 100%;
                background-repeat: no-repeat;
                line-height:35px;
                font-size:16px;
                color:#b3ebff;
                padding-left:10px;
            }
            #alarmchart{
                width:100%;
                height:115px;
            }
            #echartu{
                width:100%;
                height:150px;
            }
            #echartline{
                width:100%;
                height:150px;
            }
            .chartbar{
            .ivu-tabs{
                .ivu-tabs-bar{
                    width:25%;
                    height:12%;
                    margin:0 auto;
                    border:none;
                    .ivu-tabs-nav-container{
                        .ivu-tabs-nav-wrap{
                            .ivu-tabs-nav-scroll{
                                .nav-text{
                                    border-radius:5px;
                                    -moz-border-radius:5px ;
                                    -webkit-border-radius:5px;
                                    border:1px solid #0061d6;
                                    overflow:hidden;
                                    .ivu-tabs-tab{
                                        width:50%;
                                        line-height:30px;
                                        padding:0;
                                        border:0;
                                        font-size:16px;
                                    }
                                    .ivu-tabs-tab-active{
                                        border:0;
                                        background-color:#0061d6;
                                    }
                                }
                            }
                        }
                    }
                }
                .ivu-tabs-content{
                    height:85%;
                }
            }
            }
        }
        .pvrow3{
            height: 45%;
            background: #032954;
            padding:14px 20px 20px 20px;
            //border: 1px solid red;
            .pvicon{
                background-image: url(../../assets/index/title-bg.png);
                background-size:auto 100%;
                background-repeat: no-repeat;
                line-height:35px;
                font-size:16px;
                color:#c1e7ff;
                padding-left:10px;
            }
            .inv-state{
                margin:30px 10px;
                color:#c1e7ff;
                font-size: 14px;
                .pv-inv{
                    padding-left:10%;                                       
                }
                .state{
                    padding: 5px 5px 5px 0;  //这个无效                      
                }               
            }
            
            .pvalarm{
                //padding-bottom:12px;
                .alarmicon{
                    background-image: url(../../assets/powerGenertion/pv-alarm.png);
                    background-size:100% 100%;
                    background-repeat: no-repeat;
                    width:25%;
                    line-height:35px;
                    font-size:16px;
                    color:#c1e7ff;
                    text-align:center;
                    margin: 0 auto;
                    
                }
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
            
        }
    }
}
</style>

