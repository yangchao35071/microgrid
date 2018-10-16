<template>
    <div class="operatingCondition">
        <div class="onTop"></div>
        <div class="ocCenter">
            <!-- <Tabs type="card" :value="name">
                <TabPane label="总负荷" name='name1'>
                    <overallLoad></overallLoad>
                </TabPane>
                <TabPane label="充电桩负荷" name='name2'>
                    <chargingPileLoad></chargingPileLoad>
                </TabPane>
                <TabPane label="空调负荷" name='name3'>
                    <airConditioningLoad></airConditioningLoad>
                </TabPane>
                <TabPane label="生产负荷" name='name4'>
                    <productionLoad></productionLoad>
                </TabPane>
                <TabPane label="办公负荷" name='name5'>
                    <workLoad></workLoad>
                </TabPane>
                <TabPane label="生活负荷" name='name6'>
                    <liveLoad></liveLoad>
                </TabPane>
            </Tabs> -->
            <ul class="ocTabsOuter">
                <li class="ocTabsLists"
                    v-for="(item,index) in tabLists"
                    @click="ocTabsAcitve(index)"
                    :class="{ocTablistsActive : item.activeClass}">
                    <span>{{item.name}}</span>
                </li>
            </ul>
            <div class="ocTabsContent">
                <ul class="ocTabsContentUl" :style="{left:tabLeft}">
                    <li class="octabsContentLi">
                       <overallLoad></overallLoad>
                    </li>
                    <li class="octabsContentLi">
                        <chargingPileLoad></chargingPileLoad>
                    </li>
                    <li class="octabsContentLi">
                        <airConditioningLoad></airConditioningLoad>
                    </li>
                    <li class="octabsContentLi">
                        <productionLoad></productionLoad>
                    </li>
                    <li class="octabsContentLi">
                        <workLoad></workLoad>
                    </li>
                    <li class="octabsContentLi">
                        <liveLoad></liveLoad>
                    </li>
                </ul>
            </div>
        </div>
        <div class="onBot"></div>
    </div>
</template>

<script>
import overallLoad from "./overallLoad";//总负荷组件
import chargingPileLoad from "./ChargingPileLoad";//充电桩负荷组件
import airConditioningLoad from "./airConditioningLoad";//空调负荷组件
import productionLoad from "./productionLoad";//生产负荷组件
import workLoad from "./workLoad";//办公负荷组件
import liveLoad from "./liveLoad";//生活负荷组件
export default {
    components: {
        overallLoad,
        chargingPileLoad,
        airConditioningLoad,
        productionLoad,
        workLoad,
        liveLoad
    },
    data () {
        return {
            tabLists:[
                {
                    name:'总负荷',
                    activeClass:true
                },
                {
                    name:'充电桩负荷',
                    activeClass:false
                },
                {
                    name:'空调负荷',
                    activeClass:false
                },
                {
                    name:'生产负荷',
                    activeClass:false
                },
                {
                    name:'办公负荷',
                    activeClass:false
                },
                {
                    name:'生活负荷',
                    activeClass:''
                },
            ],
            tabLeft:0
        }
    },
    methods: {
        ocTabsAcitve(index){
            this.tabLeft = -index * 100 + '%';
            for(let i=0;i<this.tabLists.length;i++){
                if(index == i){
                    this.tabLists[i].activeClass = true;
                } else {
                    this.tabLists[i].activeClass = false;
                }
            }
        }
    }
}
</script>

<style lang="scss">
.operatingCondition{
    width:100%;
    height:100%;
    padding:0 2.2% 0 0.8%;
    background:url(../../assets/index/right-bg.png) no-repeat;
    background-size:100% 100%;
    .onTop{
       height:4.5%; 
    }
    .ocCenter{
        width:100%;
        height:90.5%;
        .ocTabsOuter{
            height:5%;
            border-bottom:1px solid #02cbff;
            @media screen and (max-height: 786px){
                height:7%;
            }
            .ocTabsLists{
                width:160px;
                height:100%;
                display:inline-table;
                border:1px solid #005385;
                border-bottom:none;
                background-color:#02365e;
                cursor:pointer;
                span{
                    display:table-cell;
                    vertical-align: middle;
                    text-align: center;
                    font-size:16px;
                    color:#b3ebff;
                    @media screen and (max-width:1366px) and (max-height: 786px){
                        font-size:14px;
                    }
                }
            }
            .ocTablistsActive{
                border-color:#02cbff;
                background-color:#0061d6;
            }
        }
        .ocTabsContent{
            width:100%;
            height:95%;
            overflow: hidden;
            position: relative;
            @media screen and (max-height: 786px){
                height:93%;
            }
            .ocTabsContentUl{
                position: absolute;
                top:0;
                // left:0%;
                width:600%;
                height:100%;
                transition:left .3s;
                -webkit-transition:left .3s;
                -moz-transition:left .3s;
                -o-transition:left .3s;
                .octabsContentLi{
                    float:left;
                    width:calc(100% / 6);
                    height:100%;
                }
            }
        }
        //tab样式
        .ivu-tabs{
            height:100%;
            .ivu-tabs-bar{
                height:40px;
                border-color:#02cbff;
                margin:0;
                .ivu-tabs-nav-container{
                    height:100%;
                    .ivu-tabs-nav-wrap{
                        height:100%;
                        .ivu-tabs-nav-scroll{
                            height:100%;
                            .nav-text{
                                width:100%;
                                height:100%;
                                .ivu-tabs-tab{
                                    width:160px;
                                    height:100%;
                                    line-height:37.5px;
                                    font-size:16px;
                                    color:#b3ebff;
                                    border-radius:0;
                                    margin-right:0;
                                    text-align:center;
                                    background-color:#02365e;
                                    border-color:#005385;
                                    padding:0;
                                }
                                .ivu-tabs-tab-active{
                                    border-color:#02cbff;
                                    background:#0061d6;
                                }
                            }
                        }
                    }
                }
            }
            .ivu-tabs-content{
                height:94.5%;
                // .ivu-tabs-tabpane{
                //     width:100%;
                //     height:100%;
                //     background:green;
                // }
            }
        }
    }
    .onBot{
        height:5%
    }
}
</style>
