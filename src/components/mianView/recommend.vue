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
            <div class="article-info">
                <span>赞</span>
                <span>x'x'x</span>
                <span>11：30</span>
            </div>

        </div>
        
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
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