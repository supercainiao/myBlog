<template>
    <div>
    <div class="nav">
        <router-link :class="{'nav-list':true, 'active':current == '/', 'active':current == '/recommend'}" to="/">
            <img class="imgIcon" src="../assets/img/tuijian.png" alt="">
            <span class="detail">推荐</span>
        </router-link>
        <router-link :class="{'nav-list':true, 'active':current == '/hot'}" to="/hot">
            <img class="imgIcon" src="../assets/img/hot.png" alt="">
            <span class="detail">热门</span>
        </router-link>
        <router-link :class="{'nav-list':true, 'active':current == '/new'}" to="/new">
            <img class="imgIcon" src="../assets/img/newest.png" alt="">
            <span class="detail">最新</span>
        </router-link>
        <router-link :class="{'nav-list':true, 'active':current == '/video'}" to="/video">
            <img class="imgIcon" src="../assets/img/video.png" alt="">
            <span class="detail">视频</span>
        </router-link>
        
    </div>
    <div class="split"></div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            current:'/'
        }
    },
    mounted() {
        this.current = this.$route.path;
    },
    computed:{
       
    },
    methods:{
 
    },
    watch: {
        '$route' (to, from) {
            this.current = this.$route.path;
        }
    }
}
</script>
<style scoped>
    .split {
        width: 100%;
        height: 1px;
        background: #cecaca;
        margin-top: 0.5rem;
    }
    .nav{
        display: flex;
    }
    a.active{
        background: #009A61;
        color: aliceblue;
    }
    div .active:hover{
        background: #009A61;
        color: aliceblue;
    }
    .nav-list{
        flex:1;
        height: 2.1875rem;
        border-radius: 0.3125rem;
        text-align: center;
        color: #757575;
    }
    .nav-list:hover{
        background: rgba(0,154,97,0.08);
    }
    .detail{
        line-height: 2.1875rem;
        margin-left: 0.3125rem;
        font-size: 13px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        
    }
    .imgIcon {
        line-height: 2.1875rem;
        width: 1.25rem;
        height: 1.25rem;
        vertical-align: text-bottom
    }
    .nav{

    }
</style>