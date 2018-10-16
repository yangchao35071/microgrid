<template>
    <div class="airConditioningLoad">
        <div class="acBot">
            <div style="height:3%;"></div>
            <!-- <Tabs type="card">
                <TabPane label="功率和电价曲线">
                    <linear id="acLinear"></linear>
                </TabPane>
                <TabPane label="月平谷峰电量柱状图">
                    <columnar id="acColumnar"></columnar>
                </TabPane>
            </Tabs> -->
            <ul class="acTabUl">
                <li class="acTabBtns"
                    v-for="(item,index) in acTabLists"
                    :key="item.id"
                    :class="{acTabBtnsActive : item.activeClass}"
                    @click="acTabsAcitve(index)">
                    <span>{{item.name}}</span>    
                </li>
            </ul>
            <div class="acTabContent">
                <ul class="acTabContentUl" :style="{left:tabLeft}">
                    <li class="acTabContentLi">
                        <linear id="acLinear"></linear>
                    </li>
                    <li class="acTabContentLi">
                        <columnar id="acColumnar"></columnar>
                    </li>
                </ul>
            </div>
        </div>
        <div class="acTop">
            <div class="actTop">
                <!-- <div class="actTitle">
                    <p>充电桩负荷</p>
                </div> -->
            </div>
            <div class="actMiddle">
                <!-- ////////////////////////////充电桩信息卡片/////////////////////////// -->
                <div class="actCard">
                    <div class="actCardChild">
                        <div class="actCardLeft">
                            <span>
                                <!-- <img src="../../assets/icon/air.png" alt="" class="actImgUrl"> -->
                            </span>
                        </div>
                        <div class="actCardRight">
                            <p><span>ID:</span><span>001</span></p>
                            <p><span>状态:</span><span class="actCardState">正常</span></p>
                            <p><span>当前功率:</span><span class="actCardNum">25.8&nbsp;<b class="actCardUnit">kW</b></span></p>
                        </div>
                    </div>
                    <p class="actCardNull"></p>
                </div>
                <div class="actCard">
                    <div class="actCardChild">
                        <div class="actCardLeft">
                            <span>
                                <!-- <img src="../../assets/icon/air.png" alt="" class="actImgUrl"> -->
                            </span>
                        </div>
                        <div class="actCardRight">
                            <p><span>ID:</span><span>001</span></p>
                            <p><span>状态:</span><span class="actCardState">正常</span></p>
                            <p><span>当前功率:</span><span class="actCardNum">25.8&nbsp;<b class="actCardUnit">kW</b></span></p>
                        </div>
                    </div>
                    <p class="actCardNull"></p>
                </div>
                <div class="actCard">
                    <div class="actCardChild">
                        <div class="actCardLeft">
                            <span>
                                <!-- <img src="../../assets/icon/air.png" alt="" class="actImgUrl"> -->
                            </span>
                        </div>
                        <div class="actCardRight">
                            <p><span>ID:</span><span>001</span></p>
                            <p><span>状态:</span><span class="actCardState">正常</span></p>
                            <p><span>当前功率:</span><span class="actCardNum">25.8&nbsp;<b class="actCardUnit">kW</b></span></p>
                        </div>
                    </div>
                    <p class="actCardNull"></p>
                </div>
                <div class="actCard">
                    <div class="actCardChild">
                        <div class="actCardLeft">
                            <span>
                                <!-- <img src="../../assets/icon/air.png" alt="" class="actImgUrl"> -->
                            </span>
                        </div>
                        <div class="actCardRight">
                            <p><span>ID:</span><span>001</span></p>
                            <p><span>状态:</span><span class="actCardState">正常</span></p>
                            <p><span>当前功率:</span><span class="actCardNum">25.8&nbsp;<b class="actCardUnit">kW</b></span></p>
                        </div>
                    </div>
                    <p class="actCardNull"></p>
                </div>
                <div class="actCard">
                    <div class="actCardChild">
                        <div class="actCardLeft">
                            <span>
                                <!-- <img src="../../assets/icon/air.png" alt="" class="actImgUrl"> -->
                            </span>
                        </div>
                        <div class="actCardRight">
                            <p><span>ID:</span><span>001</span></p>
                            <p><span>状态:</span><span class="actCardState">正常</span></p>
                            <p><span>当前功率:</span><span class="actCardNum">25.8&nbsp;<b class="actCardUnit">kW</b></span></p>
                        </div>
                    </div>
                    <p class="actCardNull"></p>
                </div>
                <div class="actCard">
                    <div class="actCardChild">
                        <div class="actCardLeft">
                            <span>
                                <!-- <img src="../../assets/icon/air.png" alt="" class="actImgUrl"> -->
                            </span>
                        </div>
                        <div class="actCardRight">
                            <p><span>ID:</span><span>001</span></p>
                            <p><span>状态:</span><span class="actCardState">正常</span></p>
                            <p><span>当前功率:</span><span class="actCardNum">25.8&nbsp;<b class="actCardUnit">kW</b></span></p>
                        </div>
                    </div>
                    <p class="actCardNull"></p>
                </div>
                <div class="actCard">
                    <div class="actCardChild">
                        <div class="actCardLeft">
                            <span>
                                <!-- <img src="../../assets/icon/air.png" alt="" class="actImgUrl"> -->
                            </span>
                        </div>
                        <div class="actCardRight">
                            <p><span>ID:</span><span>001</span></p>
                            <p><span>状态:</span><span class="actCardState">正常</span></p>
                            <p><span>当前功率:</span><span class="actCardNum">25.8&nbsp;<b class="actCardUnit">kW</b></span></p>
                        </div>
                    </div>
                    <p class="actCardNull"></p>
                </div>
                <div class="actCard">
                    <div class="actCardChild">
                        <div class="actCardLeft">
                            <span>
                                <!-- <img src="../../assets/icon/air.png" alt="" class="actImgUrl"> -->
                            </span>
                        </div>
                        <div class="actCardRight">
                            <p><span>ID:</span><span>001</span></p>
                            <p><span>状态:</span><span class="actCardState">正常</span></p>
                            <p><span>当前功率:</span><span class="actCardNum">25.8&nbsp;<b class="actCardUnit">kW</b></span></p>
                        </div>
                    </div>
                    <p class="actCardNull"></p>
                </div>
                <div class="actCard">
                    <div class="actCardChild">
                        <div class="actCardLeft">
                            <span>
                                <!-- <img src="../../assets/icon/air.png" alt="" class="actImgUrl"> -->
                            </span>
                        </div>
                        <div class="actCardRight">
                            <p><span>ID:</span><span>001</span></p>
                            <p><span>状态:</span><span class="actCardState">正常</span></p>
                            <p><span>当前功率:</span><span class="actCardNum">25.8&nbsp;<b class="actCardUnit">kW</b></span></p>
                        </div>
                    </div>
                    <p class="actCardNull"></p>
                </div>
                <div class="actCard">
                    <div class="actCardChild">
                        <div class="actCardLeft">
                            <span>
                                <!-- <img src="../../assets/icon/air.png" alt="" class="actImgUrl"> -->
                            </span>
                        </div>
                        <div class="actCardRight">
                            <p><span>ID:</span><span>001</span></p>
                            <p><span>状态:</span><span class="actCardState">正常</span></p>
                            <p><span>当前功率:</span><span class="actCardNum">25.8&nbsp;<b class="actCardUnit">kW</b></span></p>
                        </div>
                    </div>
                    <p class="actCardNull"></p>
                </div>
                <!-- ////////////////////////////充电桩信息卡片/////////////////////////// -->
            </div>
            <div class="actBot">
                <Page :total="100" show-sizer />
            </div>
        </div>
        
    </div>
</template>

<script>
import linear from '@/echarts/linear.vue'
import columnar from '@/echarts/columnar.vue'
export default {
    components: {
        linear,
        columnar
    },
    data () {
        return {
            //tab按钮内容
            acTabLists:[
                {
                    name:'功率和电价曲线',
                    activeClass:true
                },
                {
                    name:'月平谷峰电量柱状图',
                    activeClass:false
                }
            ],
            tabLeft:0
        }
    },
    methods: {
        acTabsAcitve(index){
            this.tabLeft = -index * 100 + '%';
            for(let i=0;i<this.acTabLists.length;i++){
                if(index == i){
                    this.acTabLists[i].activeClass = true;
                } else {
                    this.acTabLists[i].activeClass = false;
                }
            }
        }
    }
}
</script>

<style lang="scss">
.airConditioningLoad{
    width:100%;
    height:100%;
    .acTop{
        height:46%;
        padding-left: 2%;
        padding-right:1%;
        background-color:rgba(1, 38, 90, .8);
        filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#CD01265A', endColorstr='#CD01265A'); /* IE6,IE7 */
        -ms-filter:"progid:DXImageTransform.Microsoft.gradient(startColorstr='#CD01265A', endColorstr='#CD01265A')"; /* IE8 */
        .actTop{
            height:3%;
        }
        .actMiddle{
            height: 81%;
            overflow: hidden;
            .actCard{
                width:19.5%;
                height:50%;
                float:left;
                margin-right:0.5%;
                .actCardChild{
                    width:100%;
                    height:95%;
                    border:1px solid #0061f6;
                    border-radius:10px;
                    display:inline-table;
                    background-color:rgba(0, 29, 63, .8);
                    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#001d3f', endColorstr='#001d3f'); /* IE6,IE7 */
                    -ms-filter:"progid:DXImageTransform.Microsoft.gradient(startColorstr='#001d3f', endColorstr='#001d3f')"; /* IE8 */
                    .actCardLeft{
                        width:40%;
                        height:100%;
                        text-align:center;
                        display:table-cell;
                        vertical-align: middle;
                        span{
                            width:70%;
                            height:60%;
                            display:inline-block;
                            background:url(../../assets/icon/air.png) no-repeat;
                            background-size:100% 100%;
                            // .actImgUrl{
                            //     width:100%;
                            // }
                        }
                    }
                    .actCardRight{
                        width:60%;
                        height:100%;
                        display:table-cell;
                        vertical-align: middle;
                        font-size:16px;
                        color:#b3ebff;
                        @media screen and (max-width:1600px){
                            font-size:14px;
                        }
                        @media screen and (max-width:1366px){
                            font-size:12px;
                        }
                        p{
                            width:100%;
                            display:inline-block;
                            span{
                                display:inline-block;
                                width:50%;
                            }
                            .actCardState{
                                color:#2fc78a
                            }
                            .actCardNum{
                                color:#00ffff;
                                .actCardUnit{
                                    color:#b3ebff;
                                    font-weight: 400;
                                }
                            }
                        }
                    }
                }
                .actCardNull{
                    height:5%;
                }
            }
        }
        .actBot{
            height:16%;
            padding-right:1%;
            text-align:right;
            position: relative;
            .ivu-page {
                height:30px;
                position:absolute;
                top:50%;
                right:0;
                margin-top:-15px;
                .ivu-page-total{
                    color:#c1e7ff;
                    font-size: 0.7rem;;
                }
                .ivu-page-item-active{
                    background-color:#2d8cf0 !important;
                    border-color:#2d8cf0 !important;
                }
                .ivu-page-prev,.ivu-page-item,.ivu-page-item-jump-prev,.ivu-page-item-jump-next,.ivu-page-next{
                    background-color:#001d3f;
                    border:1px solid #0671b9;
                    min-width:20px;
                    width:30px;
                    height:30px;
                    line-height:30px;
                    font-size:14px;
                    text-align: center;
                    a,i{
                        color:#aeebfe;
                        margin:0;
                    }
                }
                .ivu-page-options{
                    margin-left:10px;
                    height:30px;
                    .ivu-page-options-sizer{
                        height:100%;
                        .ivu-select{
                            height:100%;
                            .ivu-select-selection{
                                height:100%;
                                .ivu-select-selected-value{
                                    height:100%;
                                    line-height:28px;
                                }
                            }
                        }
                    }
                }
            }
            .ivu-select-selection{
                background-color:#001d3f;
                border:1px solid #0671b9;
                color:#aeebfe;
            }
            .ivu-select-dropdown{
                background-color:#001d3f;
                .ivu-select-dropdown-list{
                    .ivu-select-item-selected{
                        background-color:rgba(45,140,240,.9) !important;
                    }
                    .ivu-select-item{
                        color:#aeebfe;    
                        &:hover{
                            background-color:#072a4f;
                        }     
                    }
                }
            }
        }
    }
    .acBot{
        height:54%;
        padding-left:1%;
        margin-bottom:1px;
        padding-right:1%;
        background-color:rgba(1, 38, 90, .8);
        filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#CD01265A', endColorstr='#CD01265A'); /* IE6,IE7 */
        -ms-filter:"progid:DXImageTransform.Microsoft.gradient(startColorstr='#CD01265A', endColorstr='#CD01265A')"; /* IE8 */
        .acTabUl{
            width:454px;
            height:8%;
            margin:0 auto;
            border-radius:5px;
            overflow: hidden;
            border:1px solid #0061d6;
            @media screen and (max-width: 1366px){
                width:400px;
            }
            @media screen and (max-height: 786px){
                height:10%;
            }
            .acTabBtns{
                width:50%;
                height:100%;
                display:inline-table;
                background:#02365e;
                cursor:pointer;
                span{
                    display:table-cell;
                    vertical-align: middle;
                    text-align: center;
                    font-size:16px;
                    @media screen and (max-height: 786px){
                        font-size:14px;
                    }
                }
            }
            .acTabBtnsActive{
                color:#b3ebff;
                background-color:#0061d6;
            }
        }
        .acTabContent{
            width:100%;
            height:87%;
            overflow: hidden;
            position: relative;
            @media screen and (max-width:1366px) and (max-height: 786px){
                height:83%;
            }
            .acTabContentUl{
                position: absolute;
                top:0;
                width:200%;
                height:100%;
                transition:left .3s;
                -webkit-transition:left .3s;
                -moz-transition:left .3s;
                -o-transition:left .3s;
                .acTabContentLi{
                    float:left;
                    width:calc(100% / 2);
                    height:100%;
                }
            }
        }
        .ivu-tabs{
            .ivu-tabs-bar{
                width:454px;
                height:35px;
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
                                    line-height:32.5px;
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
</style>
