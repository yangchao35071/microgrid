<template>
    <div class="faultbg">
        <div class="faulthead">
        </div>
        <div class="faultbody">
            <Row class-name="faultrow1">
                <span>
                    开始时间
                </span>
                <span>
                    <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
                </span>
                 
                <span>
                    结束时间
                </span>
                <span>
                    <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
                </span>
                <span>
                    <Button type="primary">查询</Button>
                    <Button type="primary">重置</Button>
                </span>
            </Row>
            <Row class-name="faultrow2">
                

                 <Col span="6"
                    v-for="item in faultList"
                    :key="item.id" class="faultmodel">
                    <p class="faultname">{{item.title}}</p>
                    <Row type="flex" justify="center" align="middle" style="padding:0px"> 
                        <Col span="7">    
                            <div class="faultEcharts">
                                <annular :id="item.id"
                                        :seriesData="item.totalList"
                                        :colorList="colorList"
                                        :pieRadius="pieRadius"
                                        :titleText="item.total"
                                        :fontColor="fontColor"
                                        :titSize="titSize"></annular>
                            </div>
                        </Col>   
                        <Col span="7">     
                            
                            <Row class-name="">
                                <Col span="24"
                                        v-for="item1 in item.totalList"
                                        :key="item1.id" style="padding-bottom">
                                    <span style="color:86d1ff,fontsize:14px">{{item1.name}}:</span>
                                    <span :style="{'color':item1.color,'paddingLeft':'6px',}">{{item1.value}}</span>
                                </Col>
                            </Row>   
                            
                        </Col>
                        
                    </Row>  

                    <Row style="padding:15px">                     
                        <div v-if="item.childList.length != 0" class="childtable">
                            <Table  border :show-header="showHeader"  :columns="columns2" :data="item.childList" ></Table>  
                        </div>
                    
                    </Row>

                </Col> 

            </Row>
            <Row class-name="faultrow3">
                <p class="faulticon">微网告警总计</p>
                <div class="faultalarm">
                    <Table  height=300 border :columns="columns1" :data="data1" ></Table>  
                </div>
                <!--第三行 页码 -->
                <Row type="flex" justify="end" class-name="page">                    
                    <Page :total="Pagedata.pageTotal" 
                            :current="Pagedata.pageNum" 
                            :page-size="Pagedata.pageSize" 
                            :page-size-opts="Pagedata.pageSizeOpts" 
                            show-sizer show-total 
                            placement="top" 
                            @on-change="handlePage" 
                            @on-page-size-change='handlePageSize'>
                    </Page>
                </Row>
            </Row>
        </div> 
        <div class="faultfoot">
        </div> 
    </div>
</template>
<script>
import echarts from 'echarts'
import annular from '@/echarts/annular.vue'
export default {
    components:{
        annular,
    },
    data(){
        return{
            showHeader: false,//不显示表头
            // data2: [
            //     {
            //         name: '光伏系统',
            //         abnormal: '异常18',
            //         fault: '故障20',
            //     },
            //     {
            //         name: '柴发系统',
            //         abnormal: '异常18',
            //         fault: '故障20',
            //     },
            // ],

            colorList: ['#fdeb7b', '#f9821a'], //逆变器采集器状态颜色
            pieRadius: ['98%', '80%'], //环形比例
            fontColor:'#c1e7ff', //环形中间字体颜色
            titSize:'16',
            //初始化页码d，data里面初始化
            Pagedata:{
                pageTotal: 0,//为总条数0
                pageNum: 1, //当前页1
                pageSize: 10, //每页显示10条
                pageSizeOpts:[10, 20, 30, 40],
            },  
            
            faultList:[
                {
                    title:'微网总计',
                    id:'1',
                    total:'100',
                    totalList:[
                        {
                            name:'异常',
                            value:20,
                            color:'#fdeb7b'
                        },
                        {
                            name:'故障',
                            value:80,
                            color:'#f9821a'
                        }
                    ],
                    childList:[
                        
                    ]   
                },
                {
                    title:'光伏系统',
                    id:'2',
                    total:'100',
                    totalList:[
                        {
                            name:'异常',
                            value:20,
                            color:'#fdeb7b'
                        },
                        {
                            name:'故障',
                            value:80,
                            color:'#f9821a'
                        }
                    ],
                    childList:[
                        {
                            name: '光伏系统',
                            abnormal: '异常18',
                            fault: '故障20',
                        },
                        {
                            name: '柴发系统',
                            abnormal: '异常18',
                            fault: '故障20',
                        },
                        {
                            name: '冷热三联供',
                            abnormal: '异常18',
                            fault: '故障10',
                        },
                    ]
                },
                {
                    title:'储能系统',
                    id:'3',
                    total:'100',
                    totalList:[
                        {
                            name:'异常',
                            value:20,
                            color:'#fdeb7b'
                        },
                        {
                            name:'故障',
                            value:80,
                            color:'#f9821a'
                        }
                    ],  
                    childList:[
                        {
                            name: '锂电池系统',
                            abnormal: '异常18',
                            fault: '故障20',
                        },
                        {
                            name: '铅炭电池系统',
                            abnormal: '异常18',
                            fault: '故障20',
                        },
                        
                    ]
                },
                {
                    title:'负荷系统',
                    id:'4',
                    total:'100',
                    totalList:[
                        {
                            name:'异常',
                            value:20,
                            color:'#fdeb7b'
                        },
                        {
                            name:'故障',
                            value:80,
                            color:'#f9821a'
                        }
                    ], 
                    childList:[
                        {
                            name: '充电桩系统',
                            abnormal: '异常18',
                            fault: '故障20',
                        },
                        {
                            name: '空调系统',
                            abnormal: '异常18',
                            fault: '故障20',
                        },
                        {
                            name: '老化系统',
                            abnormal: '异常18',
                            fault: '故障20',
                        },
                    ] 
                },
            ],
            columns1: [
                {
                    title: '系统名称',
                    key: 'systemName'
                },
                {
                    title: '子系统名称',
                    key: 'childName'
                },
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
                },
                {
                    title: '恢复时间',
                    key: 'recoveryTime'
                },
                {
                    title: '处理状态',
                    key: 'processTtatus'
                }
            ],
            data1: [
                {
                    systemName:'发电系统',
                    childName:'光伏发电',               
                    deviceName: '1#方阵1#逆变器',
                    alarmInfo: '电压异常',
                    alarmLevel: '1',
                    happenTime: '2016-10-03 10：14：02',
                    recoveryTime:'2016-10-13 10：14：02',
                    processTtatus:'未确认',
                },
                {
                    systemName:'发电系统',
                    childName:'光伏发电',               
                    deviceName: '1#方阵1#逆变器',
                    alarmInfo: '电压异常',
                    alarmLevel: '1',
                    happenTime: '2016-10-03 10：14：02',
                    recoveryTime:'2016-10-13 10：14：02',
                    processTtatus:'未确认',
                },
                {
                    systemName:'发电系统',
                    childName:'光伏发电',               
                    deviceName: '1#方阵1#逆变器',
                    alarmInfo: '电压异常',
                    alarmLevel: '1',
                    happenTime: '2016-10-03 10：14：02',
                    recoveryTime:'2016-10-13 10：14：02',
                    processTtatus:'未确认',
                },
                {
                    systemName:'发电系统',
                    childName:'光伏发电',               
                    deviceName: '1#方阵1#逆变器',
                    alarmInfo: '电压异常',
                    alarmLevel: '1',
                    happenTime: '2016-10-03 10：14：02',
                    recoveryTime:'2016-10-13 10：14：02',
                    processTtatus:'未确认',
                },
                {
                    systemName:'发电系统',
                    childName:'光伏发电',               
                    deviceName: '1#方阵1#逆变器',
                    alarmInfo: '电压异常',
                    alarmLevel: '1',
                    happenTime: '2016-10-03 10：14：02',
                    recoveryTime:'2016-10-13 10：14：02',
                    processTtatus:'未确认',
                },
                {
                    systemName:'发电系统',
                    childName:'光伏发电',               
                    deviceName: '1#方阵1#逆变器',
                    alarmInfo: '电压异常',
                    alarmLevel: '1',
                    happenTime: '2016-10-03 10：14：02',
                    recoveryTime:'2016-10-13 10：14：02',
                    processTtatus:'未确认',
                },
            ],
        }

    },
    computed: {
        columns2 () {
            let columns = [];        
            columns.push({
                title: 'Name',
                key: 'name',
                minWidth:100,
            });
            columns.push({
                title: 'Abnormal',
                key: 'abnormal',
                className: 'demo-table-info-column'
            
            });
            columns.push({
                title: 'Fault',
                key: 'fault', 
                className: 'table-info-column2'
            });
            return columns;
        }
    },
    methods:{
        //页码部分
        //页码改变，取到pageNum和pageSize
        handlePage(value) {
            this.Pagedata.pageNum = value;
            //this.stationList= []; 
            //this.queryStaList();
        },
        //每页条数改变
        handlePageSize(value) {
            
            this.Pagedata.pageSize = value;
           // this.stationList= [];                
           // this.queryStaList();
        },

    },
    mounted(){

    }
}
</script>
<style lang="scss">
.faultbg{
    width: 100%;
    height: 100%;
    border: 1px solid red;
    background: url(../../assets/index/right-bg.png) no-repeat;
    background-size: 100% 100%;
    .faulthead{
        width: 100%;
        height: 5%;
    }
    .faultfoot{
        width: 100%;
        height: 5%;
    }
    .faultbody{
        height: 90%;
        margin:0px 25px 0px 5px;
        border:1px solid green;
        background: #032954;
        padding:20px;
        .faultrow1{
            height:60px;
            //  时间控件
            .ivu-date-picker{
                span.ivu-date-picker-cells-cell-disabled, 
                span.ivu-date-picker-cells-cell-disabled:hover{
                    background: #032954;
                }
                .ivu-input{
                    width: 11rem;//200
                    background-color: #001c3e;
                    color: #c1e7ff;
                    border: 1px solid #0771B9;
                    &:focus{
                        box-shadow:none;
                        background-color: #001c3e;
                    }
                    &:hover{
                        background-color: #034ba2;
                    }
                }
                // 输入搜多框placeholder颜色改变
                ::-webkit-input-placeholder {
                    /* WebKit browsers */
                    color: #86D1FF;
                }
                :-moz-placeholder {
                    /* Mozilla Firefox 4 to 18 */
                    color: #86D1FF;
                }
                ::-moz-placeholder {
                    /* Mozilla Firefox 19+ */
                    color: #86D1FF;
                }
                :-ms-input-placeholder {
                    /* Internet Explorer 10+ */
                    color: #86D1FF;
                }
                .ivu-icon-ios-calendar-outline:before{
                    color: #86D1FF;
                }
            } 
        }
        .faultrow2{
            height:40%;
            background: #002148;
            padding:15px;
            .faultmodel{
                height:100%;
                border-right: 1px solid #063b6d;
                .faultname{
                // width: 50%;
                 text-align:center;
                 padding-bottom: 15px;
                }
                .faultEcharts{
                    width:104px;
                    height:104px;
                    //width:100%;
                    // height:34%;
                }
                .childtable{
                    
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
                                height: 30px;
                                font-size: 14px;
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
                                font-size:16px;
                                font-weight:100;
                            }
                            .ivu-table-body{
                                td{
                                    background-color:#001c3e;
                                }
                                
                                .ivu-table-row{
                                    // .demo-table-info-cell-yc{
                                    //     span{
                                    //         color:#ffeb7f;
                                    //     }
                                    // }
                                    // .demo-table-info-cell-gz{
                                    //     span{
                                    //         color:#fb6a37;
                                    //     }
                                    // }
                                    .demo-table-info-column{
                                        span{                                        
                                            color: #ffcc00;
                                        }
                                    }
                                    .table-info-column2{                                        
                                        span{                                        
                                            color: #fb6a37;
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
  
            .faultmodel:nth-child(4n) {
                border-right: 0;
            }
        }
        .faultrow3{
            height:52%;

            .faulticon{
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
            .faultalarm{
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
                            height: 48px;
                            font-size: 14px;
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
                            font-size:16px;
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
            .page{
                font-size: 14px;
                color:#c1e7ff;
                //padding:0 0 0 0;
                
                //页码框 
                .ivu-page-prev,.ivu-page-item,.ivu-page-next,.ivu-page-item-jump-next,.ivu-page-item-jump-prev,.ivu-select-selection,
                {
                    background-color: #001c3e;
                    border: 1px solid #0771B9;
                                
                }
                //页码框的字体 .ivu-select-item ,选择每页几条的字体
                .ivu-page-item a,.ivu-page-next a, .ivu-page-prev a，.ivu-page-item-jump-next:after,.ivu-page-item-jump-prev:after,{
                    color:#c1e7ff;
                    //font-size:14px;
                }
            
                //展开条数框
                .ivu-select-dropdown{
                    background-color: #001c3e;
                }
                //展开条数框 字体
                .ivu-select-selection,.ivu-select-item,.ivu-select-selected-value{
                    color:#c1e7ff;
                    font-size: 14px;
                }
                //展开条数框 鼠标悬浮在单个一条时的颜色
                .ivu-select-item:hover{
                    background-color: #032954;  
                }
                //当前页高亮
                .ivu-page-item-active{
                    background-color: #034ba2;  
                }            
                //点击过程中的左右箭头颜色,条数后面上下箭头 
                .ivu-icon-ios-arrow-left,.ivu-icon-ios-arrow-right,.ivu-select-arrow{
                    color:#c1e7ff;
                }       
                
            }
        }
    }
}
</style>
