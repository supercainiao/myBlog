<template>
    <div class="new-list">
        <div class="new-item">
            <div class="item-title">
                <h4>xxxxxx</h4>
            </div>
            <div class="article" >
                dsadaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                snsiadha
            </div>
            <div class="article-info" id="infoItems">
                <span class="box1">
                    <img style="margin-bottom: 1px;" src="../../assets/img/awesome.png" alt="" srcset="">
                    <span>56</span>
                </span>
                <span class="box">
                    <img src="../../assets/img/comment2.png" alt="" srcset="">
                    <span>12</span>
                </span>
                <span class="info">xxxxx</span>
                <span class="info">11：30</span>
            </div>

        </div>


        <div class="new-item">
            <div class="item-title">
                <h4>dsfweefv</h4>
            </div>
            <div class="article" >
                dcvgbvdfgvdsws
                asdasdas
                snsiadha
            </div>
            <div class="article-info" id="infoItems">
                <span class="box1">
                    <img style="margin-bottom: 1px;" src="../../assets/img/awesome.png" alt="" srcset="">
                    <span>56</span>
                </span>
                <span class="box">
                    <img src="../../assets/img/comment2.png" alt="" srcset="">
                    <span>12</span>
                </span>
                <span class="info">xxxxx</span>
                <span class="info">11：30</span>
            </div>

        </div>
        
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .info{
        color: #b2bac2;
        vertical-align: bottom;
    }
    #infoItems>>>img{
        width: 1rem;
        height: 1rem;
        vertical-align: text-bottom;
    }
    .box1 {
        border: 1px solid #edeeef;
        display: inline-block;
        width: 3.5rem;
        height: 1.125rem;
        vertical-align: middle;
        text-align: center;
        color: #b2bac2;
    }
    .box {
        border: 1px solid #edeeef;
        display: inline-block;
        width: 3.5rem;
        height: 1.125rem;
        margin-left: -0.3125rem;
        vertical-align: middle;
        text-align: center;
        color: #b2bac2;
        
    }
    .article-info{
        color: #666;
        font-size: 13px;
    }
    .item-title{
        font-size: 18px;
        margin-bottom: 0.3125rem;
        margin-top:0.3125rem;
    }
    .new-item{
        padding: 0 0 0.9375rem 0;
    }
    .article{
        margin-bottom: 0.9375rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        line-height: 1.5;
        color: #888;
        font-size: 13px
    }
    .new-list{
        padding: 0 0.9375rem 0.9375rem 0.9375rem;
    }
</style>