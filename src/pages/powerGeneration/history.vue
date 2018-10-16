<template>
    <div class="hisbg">
        <div class="histhead">
        </div>
        <div class="hisbody">
            <Row class-name="hisrow1">22
            </Row>
            <Row class-name="hisrow2">23
            </Row>
        </div>
        <div class="hisfoot">
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
.hisbg{
    width: 100%;
    height: 100%;
    border: 1px solid red;
    background: url(../../assets/index/right-bg.png) no-repeat;
    background-size: 100% 100%;
    .histhead{
        width: 100%;
        height: 5%;
    }
    .hisfoot{
        width: 100%;
        height: 5%;
    }
    .hisbody{
        height: 90%;
        margin:0px 25px 0px 5px;
        border:1px solid green;
        //background: #032954;
        //padding:20px;
        .hisrow1{
            height:59%;
            background: #032954;
            margin-bottom: 8px;
        }
        .hisrow2{
            height:40%;
            background: #032954;
        }
        
    }
}
</style>
