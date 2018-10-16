<template>
    <div class="overallLoad">
        <div class="olLeft">
            <div class="olNull1"></div>
            <p class="olTitle">每种负荷用电比率</p>
            <div class="olNull2"></div>
            <div class="olEcharts">
                <annular id="one"
                         :seriesData="seriesData"
                         :colorList="colorList"
                         :pieRadius="pieRadius"
                         :titleText="titleText"
                         :fontColor="fontColor"
                         :titSize="titSize"></annular>
            </div>
            <div class="olNull3"></div>
            <Row class="olClassify">
                <div class="olRow"
                     v-for="(item,index) in annularArray"
                     :key="item.id">
                    <span class="olText">
                        <span class="olSquare" :style="{background:item.color}"></span>
                        {{item.rate + item.name}}
                    </span>
                </div>
            </Row>
            <div class="olNull4"></div>
            <div class="olAllKWH">
                当月总用电量&nbsp;:&nbsp;<span>0.25</span>&nbsp;万度
            </div>
        </div>
        <div class="olRight">
            <div class="olRightTop">
                <linear id="linear1"></linear>
            </div>
            <div class="olRightBot">
                <columnar id="columnar1"></columnar>
            </div>
        </div>
    </div>
</template>

<script>
import annular from '@/echarts/annular.vue'
import linear from '@/echarts/linear.vue'
import columnar from '@/echarts/columnar.vue'
export default {
    components: {
        annular,
        linear,
        columnar
    },
    data () {
        return {
            annularArray:[],//环形图总数据数组
            seriesData:[],//环形图各类型的值
            colorList:[],//环形图各类型的颜色
            annularName:[],//环形图各类型的名称
            pieRadius:['100%','80%'],//环形图内外环大小比例
            titleText:'564654654',
            fontColor:'#b3ecff',
            titSize:'18'
        }
    },
    methods: {
        getAnnularData(){
            let annularData = [
                {
                    name:'空调',
                    value:120,
                    color:'#2fc88a'
                },
                {
                    name:'充电桩',
                    value:255,
                    color:'#ff9900'
                },
                {
                    name:'生活负荷',
                    value:330,
                    color:'#ffcccc'
                },
                {
                    name:'生产负荷',
                    value:450,
                    color:'#ffcc66'
                },
                {
                    name:'办公负荷',
                    value:225,
                    color:'#ffff99'
                },
                {
                    name:'其他',
                    value:52,
                    color:'#d5ebf7'
                },
            ]
            let data = [] , color = [] , name = [] , allValue = 0 , objArr = []
            for(let i=0;i<annularData.length;i++){
                for(let k=0;k<annularData.length;k++){
                    allValue += annularData[k].value
                }
                data.push(annularData[i].value);
                color.push(annularData[i].color);
                name.push(annularData[i].name);

                let obj = {}
                obj.name = annularData[i].name;
                obj.rate = Math.round(annularData[i].value / allValue * 100) + '%';
                obj.color= annularData[i].color;
                objArr.push(obj);
            }
            this.seriesData = data;
            this.colorList = color;
            this.annularText = name;
            this.annularArray = objArr;
            this.titleText = '当前功率\n\n1.53MW';
        },
    },
    mounted () {
        this.getAnnularData()
    }
}
</script>

<style lang="scss">
.overallLoad{
    width:100%;
    height:100%;
    .olLeft{
        width:19%;
        height:100%;
        background-color:rgba(1, 38, 90, .8);
        filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#CD01265A', endColorstr='#CD01265A'); /* IE6,IE7 */
        -ms-filter:"progid:DXImageTransform.Microsoft.gradient(startColorstr='#CD01265A', endColorstr='#CD01265A')"; /* IE8 */
        margin-right:1%;
        float: left;
        .olNull1{
            height:3%;
        }
        .olNull2{
            height:8%;
        }
        .olNull3{
            height:9%;
        }
        .olNull4{
            height:5%;
        }
        .olTitle{
            text-align:center;
            font-size:16px;
            font-weight: 600;
            color:#b3ebff;
            @media screen and (max-width:1366px) and (max-height: 786px){
                font-size:14px;
            }
        }
        .olEcharts{
            width:100%;
            height:24%;
        }
        .olClassify{
            width:100%;
            .olRow{
                width:50%;
                float:left;
                font-size:14px;
                @media screen and (max-width:1600px){
                    width:100%;
                    font-size:12px;
                }
                .olText{
                    padding-left:20%;
                    display:inline-block;
                    text-align:left;
                    color:#86beda;
                    @media screen and (max-width:1600px){
                        padding-left:30%;
                    }
                    .olSquare{
                        display:inline-block;
                        width:10px;
                        height:10px;
                        background:red;
                        margin-right:10px;
                    }
                }
            }
        }
        .olAllKWH{
            text-align:center;
            color:#b3ecff;
            font-size:14px;
            font-weight: 600;
            @media screen and (max-width:1366px) and (max-height: 786px){
                font-size:12px;
            }
            span{
                color:#00f6ff;
                font-size:18px;
                @media screen and (max-width:1366px) and (max-height: 786px){
                    font-size:16px;
                }
            }
        }
    }
    .olRight{
        width:80%;
        height:100%;
        float: left;
        .olRightTop{
            width:100%;
            height:50%;
            padding-top:20px;
            margin-bottom:2px;
            background-color:rgba(1, 38, 90, .8);
            filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#CD01265A', endColorstr='#CD01265A'); /* IE6,IE7 */
            -ms-filter:"progid:DXImageTransform.Microsoft.gradient(startColorstr='#CD01265A', endColorstr='#CD01265A')"; /* IE8 */
        }
        .olRightBot{
            width:100%;
            height:50%;
            padding-top:20px;
            background-color:rgba(1, 38, 90, .8);
            filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#CD01265A', endColorstr='#CD01265A'); /* IE6,IE7 */
            -ms-filter:"progid:DXImageTransform.Microsoft.gradient(startColorstr='#CD01265A', endColorstr='#CD01265A')"; /* IE8 */
        }
    }
}
</style>

