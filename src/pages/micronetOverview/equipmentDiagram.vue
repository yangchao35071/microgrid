<template>
    <div class="equipmentDiagram">
        <div>
            <ul>
                <li v-for="(item,index) in this.list"
                    :key="index">
                    <span :style="{ color: item.color}">{{item.name}}</span>
                    <div v-for="(i,j) in item.children"
                        :key="j"
                        :style="{ border: item.borderColor}">
                        <p>{{i.name}}</p>
                        <div>
                            <Col span="12">
                                <img src="@/assets/icon/inverter.png">
                                <!-- <img v-bind:src="i.imgPath"> -->
                            </Col>
                            <Col span="12">
                                <span v-for="(k,l) in i.menu"
                                        :key="l">
                                        {{k.name}}：
                                        <i :style="{ color: k.color}">{{k.value}}</i>
                                </span>
                            </Col>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list:[]
            }
        },
        methods: {

            //  获取所有数据
            getAllData: function() {
                this.list = [
                    {
                        name: '光伏系统',
                        color: '#ff9900',
                        borderColor: '1px solid #ff9900',
                        children: [
                            {
                                name: '逆变器',
                                imgPath : '',
                                menu: [
                                    {
                                        name: '全部',
                                        value: 4
                                    },
                                    {
                                        name: '正常运行',
                                        value: 2,
                                        color: '#00ff00'
                                    },
                                    {
                                        name: '正常停机',
                                        value: 0,
                                        color: '#ffff00'
                                    },
                                    {
                                        name: '故障停机',
                                        value: 0,
                                        color: '#ff9900'
                                    },
                                    {
                                        name: '通讯中断',
                                        value: 0,
                                        color: '#4e7d91'
                                    }
                                ]
                            },
                            {
                                name: '汇流箱',
                                imgPath : '',
                                menu: [
                                    {
                                        name: '全部',
                                        value: 4
                                    },
                                    {
                                        name: '通讯正常',
                                        value: 20,
                                        color: '#00ff00'
                                    },
                                    {
                                        name: '通讯异常',
                                        value: 2,
                                        color: '#ffff00'
                                    },
                                    {
                                        name: '避雷器异常',
                                        value: 21,
                                        color: '#ff9900'
                                    },
                                    {
                                        name: '电流异常',
                                        value: 1,
                                        color: '#4e7d91'
                                    }
                                ]
                            },
                            {
                                name: '箱变',
                                imgPath : '',
                                menu: [
                                    {
                                        name: '全部',
                                        value: 4
                                    },
                                    {
                                        name: '正常',
                                        value: 1,
                                        color: '#00ff00'
                                    },
                                    {
                                        name: '故障',
                                        value: 1,
                                        color: '#ff9900'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: '柴发系统',
                        color: '#00cc00',
                        borderColor: '1px solid #00cc00',
                        children: [
                            {
                                name: '发电机',
                                imgPath : '',
                                menu: [
                                    {
                                        name: '全部',
                                        value: 4
                                    },
                                    {
                                        name: '正常',
                                        value: 1,
                                        color: '#00ff00'
                                    },
                                    {
                                        name: '故障',
                                        value: 1,
                                        color: '#ff9900'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: '储能系统',
                        color: '#02ccff',
                        borderColor: '1px solid #02ccff',
                        children: [
                            {
                                name: '锂电池',
                                imgPath : '',
                                menu: [
                                    {
                                        name: '全部',
                                        value: 4
                                    },
                                    {
                                        name: '正常',
                                        value: 1,
                                        color: '#00ff00'
                                    },
                                    {
                                        name: '故障',
                                        value: 1,
                                        color: '#ff9900'
                                    }
                                ]
                            },
                            {
                                name: 'PCS',
                                imgPath : '',
                                menu: [
                                    {
                                        name: '全部',
                                        value: 4
                                    },
                                    {
                                        name: '正常运行',
                                        value: 2,
                                        color: '#00ff00'
                                    },
                                    {
                                        name: '正常停机',
                                        value: 0,
                                        color: '#ffff00'
                                    },
                                    {
                                        name: '故障停机',
                                        value: 0,
                                        color: '#ff9900'
                                    },
                                    {
                                        name: '通讯中断',
                                        value: 0,
                                        color: '#4e7d91'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: '负荷系统',
                        color: '#ffe763',
                        borderColor: '1px solid #ffe763',
                        children: [
                            {
                                name: '空调',
                                imgPath : '',
                                menu: [
                                    {
                                        name: '全部',
                                        value: 4
                                    },
                                    {
                                        name: '正常运行',
                                        value: 2,
                                        color: '#00ff00'
                                    },
                                    {
                                        name: '正常停机',
                                        value: 0,
                                        color: '#ffff00'
                                    },
                                    {
                                        name: '故障停机',
                                        value: 0,
                                        color: '#ff9900'
                                    },
                                    {
                                        name: '通讯中断',
                                        value: 0,
                                        color: '#4e7d91'
                                    }
                                ]
                            },
                            {
                                name: '充电桩',
                                imgPath : '',
                                menu: [
                                    {
                                        name: '全部',
                                        value: 4
                                    },
                                    {
                                        name: '正常运行',
                                        value: 2,
                                        color: '#00ff00'
                                    },
                                    {
                                        name: '正常停机',
                                        value: 0,
                                        color: '#ffff00'
                                    },
                                    {
                                        name: '故障停机',
                                        value: 0,
                                        color: '#ff9900'
                                    },
                                    {
                                        name: '通讯中断',
                                        value: 0,
                                        color: '#4e7d91'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: '中央控制器',
                        color: '#6666ff',
                        borderColor: '1px solid #6666ff',
                        children: [
                            {
                                name: '控制器',
                                imgPath : '',
                                menu: [
                                    {
                                        name: '全部',
                                        value: 4
                                    },
                                    {
                                        name: '正常运行',
                                        value: 2,
                                        color: '#00ff00'
                                    },
                                    {
                                        name: '正常停机',
                                        value: 0,
                                        color: '#ffff00'
                                    },
                                    {
                                        name: '故障停机',
                                        value: 0,
                                        color: '#ff9900'
                                    },
                                    {
                                        name: '通讯中断',
                                        value: 0,
                                        color: '#4e7d91'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: '本地测控装置',
                        color: '#00ffff',
                        borderColor: '1px solid #00ffff',
                        children: [
                            {
                                name: '测控装置',
                                imgPath : '',
                                menu: [
                                    {
                                        name: '全部',
                                        value: 4
                                    },
                                    {
                                        name: '正常运行',
                                        value: 2,
                                        color: '#00ff00'
                                    },
                                    {
                                        name: '正常停机',
                                        value: 0,
                                        color: '#ffff00'
                                    },
                                    {
                                        name: '故障停机',
                                        value: 0,
                                        color: '#ff9900'
                                    },
                                    {
                                        name: '通讯中断',
                                        value: 0,
                                        color: '#4e7d91'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        mounted(){
            this.getAllData();
        }
    }
</script>

<style scoped lang="scss">
    .equipmentDiagram{
        width: 100%;
        height: 100%;
        padding: 80px 50px 80px 50px;
        background: url(../../assets/index/right-bg.png) no-repeat;
        background-size: 100% 100%;
        &>div{
            &>ul{
                &>li{
                    margin-bottom: 20px;
                    display: inline-block;
                    &>span{
                        font-weight: bold;
                        margin-bottom: 10px;
                        display: block;
                    }
                    &>div{
                        width:364px;
                        height: 180px;
                        margin-right: 30px;
                        display: inline-block;
                        border-radius: 5px;
                        padding: 15px;
                        background:rgba(0,39,86,.4);
                        &>p{
                            height: 30px;
                            display: inline-block;
                        }
                        &>div{
                            width: 100%;
                            height: calc(100% - 30px);
                            &>div{
                                height: 100%;
                            }
                        }
                        span{
                            display: block;
                            font-size: 14px;
                        }
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
            }
        }
    }
</style>