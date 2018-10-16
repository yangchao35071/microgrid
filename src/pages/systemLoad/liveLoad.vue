<template>
    <div class="liveLoad">
        <div class="liTop">
            <div class="liTopCon">
                <div class="liKind"
                    v-for="(item,index) in productionType"
                    :key="item.id">
                    <span class="liKindLeft"
                          :style="{background:'url(' + item.imgUrl + ') no-repeat',backgroundSize:'80% 100%'}">
                        <!-- <img :src="item.imgUrl" class="liIcon"/> -->
                    </span>
                    <span class="liKindRight">
                        <div class="liKindState">
                            <span class="liStateLeft">{{item.name1}}</span>
                            <span class="liStateRight">{{item.value1}}&nbsp;<span>{{item.unit1}}</span></span>
                        </div>
                        <div class="liKindState">
                            <span class="liStateLeft">{{item.name2}}</span>
                            <span class="liStateRight">{{item.value2}}&nbsp;<span>{{item.unit2}}</span></span>
                        </div>
                    </span>
                </div>
            </div>
        </div>
        <div class="liNull"></div>
        <div class="liBot">
            <div style="height:3%;"></div>
            <!-- <Tabs type="card">
                <TabPane label="功率和电价曲线">
                    <linear id="liLinear"></linear>
                </TabPane>
                <TabPane label="月平谷峰电量柱状图">
                    <columnar id="liColumnar"></columnar>
                </TabPane>
            </Tabs> -->
            <ul class="liTabUl">
                <li class="liTabBtns"
                    v-for="(item,index) in liTabLists"
                    :key="item.id"
                    :class="{liTabBtnsActive : item.activeClass}"
                    @click="liTabsAcitve(index)">
                    <span>{{item.name}}</span>    
                </li>
            </ul>
            <div class="liTabContent">
                <ul class="liTabContentUl" :style="{left:tabLeft}">
                    <li class="liTabContentLi">
                        <linear id="liLinear"></linear>
                    </li>
                    <li class="liTabContentLi">
                        <columnar id="liColumnar"></columnar>
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
            productionType:[
                {
                    imgUrl:require('@/assets/icon/dormOne.png'),
                    name1:'一期宿舍当前功率',
                    name2:'一期宿舍当前日用电量',
                    value1:0.25,
                    value2:0.25,
                    unit1:'kW',
                    unit2:'万度'
                },
                {
                    imgUrl:require('@/assets/icon/dormTwo.png'),
                    name1:'二期宿舍当前功率',
                    name2:'二期宿舍当前日用电量',
                    value1:0.25,
                    value2:0.25,
                    unit1:'kW',
                    unit2:'万度'
                },
                {
                    imgUrl:require('@/assets/icon/diningRoom.png'),
                    name1:'二期办公楼当前功率',
                    name2:'二期办公楼当前日用电量',
                    value1:0.25,
                    value2:0.25,
                    unit1:'kW',
                    unit2:'万度'
                },
            ],
            //tab按钮内容
            liTabLists:[
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
        liTabsAcitve(index){
            this.tabLeft = -index * 100 + '%';
            for(let i=0;i<this.liTabLists.length;i++){
                if(index == i){
                    this.liTabLists[i].activeClass = true;
                } else {
                    this.liTabLists[i].activeClass = false;
                }
            }
        }
    }
}
</script>

<style lang="scss">
.liveLoad{
    width:100%;
    height:100%;
    .liTop{
        height:20%;
        background-color:rgba(1, 38, 90, .8);
        filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#CD01265A', endColorstr='#CD01265A'); /* IE6,IE7 */
        -ms-filter:"progid:DXImageTransform.Microsoft.gradient(startColorstr='#CD01265A', endColorstr='#CD01265A')"; /* IE8 */
        &::before{
            content:'';
            display:block;
            width:100%;
            height:10%;
        }
        .liTopCon{
            width:100%;
            height:80%;
            overflow: hidden;
            .liKind{
                width:30%;
                height:100%;
                float:left;
                padding-left:1%;
                @media screen and (max-width:1390px){
                    width:33.333%;
                }
                .liKindLeft{
                    width:30%;
                    height:100%;
                    float:left;
                }
                .liKindRight{
                    width:70%;
                    height:100%;
                    float:left;
                    padding:3% 0 3% 0;
                    font-size:16px;
                    color:#b3ebff;
                    @media screen and (max-width:1775px){
                        font-size:14px;
                    }
                    @media screen and (max-width:1366px){
                        font-size:12px;
                    }
                    @media screen and (max-height:700px){
                        font-size:14px;
                    }
                    @media screen and (max-height:635px) {
                        font-size:12px;
                    }
                    .liKindState{
                        width:100%;
                        height:50%;
                        display: table;
                        .liStateLeft{
                            width:60%;
                            display: table-cell; 
                            vertical-align: middle;
                        }
                        .liStateRight{
                            width:40%;
                            text-align:center;
                            display: table-cell; 
                            vertical-align: middle;
                            font-weight: 600;
                            color:#00ffff;
                            span{
                                font-weight: 400;
                                color:#b3ebff;
                            }
                        }
                    }
                }
            }
        }
        &::after{
            content:'';
            width:100%;
            height:10%;
        }
    }
    .liNull{
        height:0.5%;
    }
    .liBot{
        height:79.5%;
        background-color:rgba(1, 38, 90, .5);
        filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#20001265A', endColorstr='#20001265A'); /* IE6,IE7 */
        -ms-filter:"progid:DXImageTransform.Microsoft.gradient(startColorstr='#20001265A', endColorstr='#20001265A')"; /* IE8 */
        .liTabUl{
            width:454px;
            height:6%;
            margin:0 auto;
            border-radius:5px;
            overflow: hidden;
            border:1px solid #0061d6;
            @media screen and (max-width: 1366px){
                width:400px;
            }
            @media screen and (max-height: 786px){
                height:8%;
            }
            .liTabBtns{
                width:50%;
                height:105%;
                display:inline-table;
                background-color:#02365e;
                cursor:pointer;
                span{
                    display:table-cell;
                    vertical-align: middle;
                    text-align:center;
                    font-size:16px;
                    @media screen and (max-width: 1366px){
                        font-size:14px;
                    }
                    @media screen and (max-height: 786px){
                        font-size:14px;
                    }
                }
            }
            .liTabBtnsActive{
                color:#b3ebff;
                background-color:#0061d6;
            }
        }
        .liTabContent{
            width:100%;
            height:93%;
            overflow: hidden;
            position: relative;
            @media screen and (max-width:1366px) and (max-height: 786px){
                height:81%;
            }
            .liTabContentUl{
                position: absolute;
                top:0;
                width:200%;
                height:100%;
                transition:left .3s;
                -webkit-transition:left .3s;
                -moz-transition:left .3s;
                -o-transition:left .3s;
                .liTabContentLi{
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
