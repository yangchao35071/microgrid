<template>
    <div class="chargingPileLoad">
        <div class="cpTop">
            <div class="cpIncomeBox">
                <span v-for="(item,index) in cpTopData"
                    :key="item.id"
                    class="cpIncome">
                    {{item.name}}
                    <span class="cpIncomeNum">{{item.money}}</span>
                    {{item.unit}}                
                </span>
            </div>
        </div>
        <div class="cpMiddle">
            <div class="cpmTop">
                <!-- <div class="cpmTitle">
                    <p>充电桩负荷</p>
                </div> -->
            </div>
            <div class="cpmMiddle">
                <!-- ////////////////////////////充电桩信息卡片/////////////////////////// -->
                <div class="cpmCard">
                    <div class="cpmCardChild">
                        <div class="cpmCardLeft">
                            <span>
                                <!-- <img src="../../assets/icon/charging.png" alt="" class="cpmImgUrl"> -->
                            </span>
                        </div>
                        <div class="cpmCardRight">
                            <p><span>ID:</span><span>001</span></p>
                            <p><span>状态:</span><span class="cpmCardState">正常</span></p>
                            <p><span>当前功率:</span><span class="cpmCardNum">25.8&nbsp;<b class="cpmCardUnit">kW</b></span></p>
                        </div>
                    </div>
                    <p class="cpmCardNull"></p>
                </div>
                <div class="cpmCard">
                    <div class="cpmCardChild">
                        <div class="cpmCardLeft">
                            <span>
                                <!-- <img src="../../assets/icon/charging.png" alt="" class="cpmImgUrl"> -->
                            </span>
                        </div>
                        <div class="cpmCardRight">
                            <p><span>ID:</span><span>001</span></p>
                            <p><span>状态:</span><span class="cpmCardState">正常</span></p>
                            <p><span>当前功率:</span><span class="cpmCardNum">25.8&nbsp;<b class="cpmCardUnit">kW</b></span></p>
                        </div>
                    </div>
                    <p class="cpmCardNull"></p>
                </div>
                <div class="cpmCard">
                    <div class="cpmCardChild">
                        <div class="cpmCardLeft">
                            <span>
                                <!-- <img src="../../assets/icon/charging.png" alt="" class="cpmImgUrl"> -->
                            </span>
                        </div>
                        <div class="cpmCardRight">
                            <p><span>ID:</span><span>001</span></p>
                            <p><span>状态:</span><span class="cpmCardState">正常</span></p>
                            <p><span>当前功率:</span><span class="cpmCardNum">25.8&nbsp;<b class="cpmCardUnit">kW</b></span></p>
                        </div>
                    </div>
                    <p class="cpmCardNull"></p>
                </div>
                <div class="cpmCard">
                    <div class="cpmCardChild">
                        <div class="cpmCardLeft">
                            <span>
                                <!-- <img src="../../assets/icon/charging.png" alt="" class="cpmImgUrl"> -->
                            </span>
                        </div>
                        <div class="cpmCardRight">
                            <p><span>ID:</span><span>001</span></p>
                            <p><span>状态:</span><span class="cpmCardState">正常</span></p>
                            <p><span>当前功率:</span><span class="cpmCardNum">25.8&nbsp;<b class="cpmCardUnit">kW</b></span></p>
                        </div>
                    </div>
                    <p class="cpmCardNull"></p>
                </div>
                <div class="cpmCard">
                    <div class="cpmCardChild">
                        <div class="cpmCardLeft">
                            <span>
                                <!-- <img src="../../assets/icon/charging.png" alt="" class="cpmImgUrl"> -->
                            </span>
                        </div>
                        <div class="cpmCardRight">
                            <p><span>ID:</span><span>001</span></p>
                            <p><span>状态:</span><span class="cpmCardState">正常</span></p>
                            <p><span>当前功率:</span><span class="cpmCardNum">25.8&nbsp;<b class="cpmCardUnit">kW</b></span></p>
                        </div>
                    </div>
                    <p class="cpmCardNull"></p>
                </div>
                <div class="cpmCard">
                    <div class="cpmCardChild">
                        <div class="cpmCardLeft">
                            <span>
                                <!-- <img src="../../assets/icon/charging.png" alt="" class="cpmImgUrl"> -->
                            </span>
                        </div>
                        <div class="cpmCardRight">
                            <p><span>ID:</span><span>001</span></p>
                            <p><span>状态:</span><span class="cpmCardState">正常</span></p>
                            <p><span>当前功率:</span><span class="cpmCardNum">25.8&nbsp;<b class="cpmCardUnit">kW</b></span></p>
                        </div>
                    </div>
                    <p class="cpmCardNull"></p>
                </div>
                <div class="cpmCard">
                    <div class="cpmCardChild">
                        <div class="cpmCardLeft">
                            <span>
                                <!-- <img src="../../assets/icon/charging.png" alt="" class="cpmImgUrl"> -->
                            </span>
                        </div>
                        <div class="cpmCardRight">
                            <p><span>ID:</span><span>001</span></p>
                            <p><span>状态:</span><span class="cpmCardState">正常</span></p>
                            <p><span>当前功率:</span><span class="cpmCardNum">25.8&nbsp;<b class="cpmCardUnit">kW</b></span></p>
                        </div>
                    </div>
                    <p class="cpmCardNull"></p>
                </div>
                <div class="cpmCard">
                    <div class="cpmCardChild">
                        <div class="cpmCardLeft">
                            <span>
                                <!-- <img src="../../assets/icon/charging.png" alt="" class="cpmImgUrl"> -->
                            </span>
                        </div>
                        <div class="cpmCardRight">
                            <p><span>ID:</span><span>001</span></p>
                            <p><span>状态:</span><span class="cpmCardState">正常</span></p>
                            <p><span>当前功率:</span><span class="cpmCardNum">25.8&nbsp;<b class="cpmCardUnit">kW</b></span></p>
                        </div>
                    </div>
                    <p class="cpmCardNull"></p>
                </div>
                <div class="cpmCard">
                    <div class="cpmCardChild">
                        <div class="cpmCardLeft">
                            <span>
                                <!-- <img src="../../assets/icon/charging.png" alt="" class="cpmImgUrl"> -->
                            </span>
                        </div>
                        <div class="cpmCardRight">
                            <p><span>ID:</span><span>001</span></p>
                            <p><span>状态:</span><span class="cpmCardState">正常</span></p>
                            <p><span>当前功率:</span><span class="cpmCardNum">25.8&nbsp;<b class="cpmCardUnit">kW</b></span></p>
                        </div>
                    </div>
                    <p class="cpmCardNull"></p>
                </div>
                <div class="cpmCard">
                    <div class="cpmCardChild">
                        <div class="cpmCardLeft">
                            <span>
                                <!-- <img src="../../assets/icon/charging.png" alt="" class="cpmImgUrl"> -->
                            </span>
                        </div>
                        <div class="cpmCardRight">
                            <p><span>ID:</span><span>001</span></p>
                            <p><span>状态:</span><span class="cpmCardState">正常</span></p>
                            <p><span>当前功率:</span><span class="cpmCardNum">25.8&nbsp;<b class="cpmCardUnit">kW</b></span></p>
                        </div>
                    </div>
                    <p class="cpmCardNull"></p>
                </div>
                <!-- //////////////////////////////////////////////////////////// -->
            </div>
            <div class="cpmBot">
                <Page :total="100" show-sizer />
            </div>
        </div>
        <div class="cpBot">
            <div style="height:5%;"></div>
            <!-- <Tabs type="card" >
                <TabPane label="功率和电价曲线">
                    <linear id="cpLinear"></linear>
                </TabPane>
                <TabPane label="月平谷峰电量柱状图">
                    <columnar id="cpColumnar"></columnar>
                </TabPane>
            </Tabs> -->
            <ul class="cpTabUl">
                <li class="cpTabBtns"
                    v-for="(item,index) in cpTabLists"
                    :key="item.id"
                    :class="{cpTabBtnsActive : item.activeClass}"
                    @click="cpTabsAcitve(index)">
                    <span>{{item.name}}</span>    
                </li>
            </ul>
            <div class="cpTabContent">
                <ul class="cpTabContentUl" :style="{left:tabLeft}">
                    <li class="cpTabContentLi">
                        <linear id="cpLinear"></linear>
                    </li>
                    <li class="cpTabContentLi">
                        <columnar id="cpColumnar"></columnar>
                    </li>
                </ul>
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
            //充电桩负荷日月年收入统计
            cpTopData:[
                {
                    name:'当日收入',
                    money:200.02,
                    unit:'元'
                },
                {
                    name:'当月收入',
                    money:0.74,
                    unit:'万元'
                },
                {
                    name:'当年收入',
                    money:4.45,
                    unit:'万元'
                },
                {
                    name:'累计收入',
                    money:6.34,
                    unit:'万元'
                },
            ],
            //tab按钮内容
            cpTabLists:[
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
    methods:{
        cpTabsAcitve(index){
            this.tabLeft = -index * 100 + '%';
            for(let i=0;i<this.cpTabLists.length;i++){
                if(index == i){
                    this.cpTabLists[i].activeClass = true;
                } else {
                    this.cpTabLists[i].activeClass = false;
                }
            }
        }
    }
}
</script>

<style lang="scss">
.chargingPileLoad{
    width:100%;
    height:100%;
    .cpTop{
        height:8%;
        background-color:rgba(1, 38, 90, .8);
        filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#CD01265A', endColorstr='#CD01265A'); /* IE6,IE7 */
        -ms-filter:"progid:DXImageTransform.Microsoft.gradient(startColorstr='#CD01265A', endColorstr='#CD01265A')"; /* IE8 */
        margin-bottom:1px;
        padding-left:2%;
        position: relative;
        .cpIncomeBox{
            display:inline-block;
            width:100%;
            height:30px;
            line-height:30px;
            position: absolute;
            top:50%;
            margin-top:-15px;
            .cpIncome{
                color:#afeaff;
                font-size:18px;
                margin-right:3%;
                @media screen and (max-width:1366px) and (max-height: 786px){
                        font-size:16px;
                    }
                .cpIncomeNum{
                    font-size:24px;
                    color:#00ffff;
                    margin-left:2%;
                    font-weight: 600;
                    @media screen and (max-width:1366px) and (max-height: 786px){
                        font-size:20px;
                    }
                }
            }
        }
    }
    .cpMiddle{
        height:46%;
        background-color:rgba(1, 38, 90, .8);
        filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#CD01265A', endColorstr='#CD01265A'); /* IE6,IE7 */
        -ms-filter:"progid:DXImageTransform.Microsoft.gradient(startColorstr='#CD01265A', endColorstr='#CD01265A')"; /* IE8 */
        margin-bottom:1px;
        padding-left:2%;
        padding-right:1%;
        .cpmTop{
            height:3%;
        }
        .cpmMiddle{
            height: 81%;
            overflow: hidden;
            .cpmCard{
                width:19.5%;
                height:50%;
                // background:yellowgreen;
                float:left;
                margin-right:0.5%;
                .cpmCardChild{
                    width:100%;
                    height:95%;
                    border:1px solid #0061f6;
                    border-radius:10px;
                    display:inline-table;
                    background-color:rgba(0, 29, 63, .8);
                    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#001d3f', endColorstr='#001d3f'); /* IE6,IE7 */
                    -ms-filter:"progid:DXImageTransform.Microsoft.gradient(startColorstr='#001d3f', endColorstr='#001d3f')"; /* IE8 */
                    .cpmCardLeft{
                        width:40%;
                        height:100%;
                        text-align:center;
                        display:table-cell;
                        vertical-align: middle;
                        span{
                            width:70%;
                            height:60%;
                            display:inline-block;
                            background:url(../../assets/icon/charging.png) no-repeat;
                            background-size:100% 100%;
                            // .cpmImgUrl{
                            //     width:100%;
                            // }
                        }
                    }
                    .cpmCardRight{
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
                            .cpmCardState{
                                color:#2fc78a
                            }
                            .cpmCardNum{
                                color:#00ffff;
                                .cpmCardUnit{
                                    color:#b3ebff;
                                    font-weight: 400;
                                }
                            }
                        }
                    }
                }
                .cpmCardNull{
                    height:5%;
                }
            }
        }
        .cpmBot{
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
    .cpBot{
        height:46%;
        background-color:rgba(1, 38, 90, .8);
        filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#CD01265A', endColorstr='#CD01265A'); /* IE6,IE7 */
        -ms-filter:"progid:DXImageTransform.Microsoft.gradient(startColorstr='#CD01265A', endColorstr='#CD01265A')"; /* IE8 */
        padding-left:1%;
        padding-right:1%;
        .cpTabUl{
            width:454px;
            height:10%;
            margin:0 auto;
            border-radius:5px;
            overflow: hidden;
            border:1px solid #0061d6;
            @media screen and (max-width: 1366px){
                width:400px;
            }
            @media screen and (max-height: 786px){
                height:14%;
            }
            .cpTabBtns{
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
            .cpTabBtnsActive{
                color:#b3ebff;
                background-color:#0061d6;
            }
        }
        .cpTabContent{
            width:100%;
            height:85%;
            overflow: hidden;
            position: relative;
            @media screen and (max-width:1366px) and (max-height: 786px){
                height:81%;
            }
            .cpTabContentUl{
                position: absolute;
                top:0;
                width:200%;
                height:100%;
                transition:left .3s;
                -webkit-transition:left .3s;
                -moz-transition:left .3s;
                -o-transition:left .3s;
                .cpTabContentLi{
                    float:left;
                    width:calc(100% / 2);
                    height:100%;
                }
            }
        }
        //tab页签样式
        .ivu-tabs{
            .ivu-tabs-bar{
                width:454px;
                height:30px;
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
                                    line-height:27.5px;
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
