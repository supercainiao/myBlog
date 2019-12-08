<template>
    <div class="header">
        <router-link to="/search">
            <i class="search">
                <img src="../assets/img/search.png" alt="">
            </i>
        </router-link>
        <span class="middleFont" @click="routerMianView">SuperCainiao</span>
        <router-link to="/user/login">
            <i class="login">
                <img src="../assets/img/load.png" alt="">
            </i>
        </router-link>
    </div>
</template>
<script>

export default {
    methods:{
        routerMianView() {
            this.$router.push({name:'recommend'});
        },
        search() {
            
        }
    }
     
}
</script>

<style scoped>
    .header{
        width: 100%;
        height: 3rem;
        box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.1), 0 1px rgba(0,0,0,0.1);
        background: #fafafa;
        position: relative;
    }
    .search{
        position: absolute;
        top:50%;
        left:1.875rem;
        width: 1.25rem;
        height: 1.25rem;
        transform:translate(-50%,-50%);
        text-align: center;
    }
    .login{
        position: absolute;
        top:50%;
        right:0.625rem;
        width: 1.25rem;
        height: 1.25rem;
        transform:translate(-50%,-50%);
        text-align: center;
    }
    .login img,.search img{
        width: 100%;
        height: 100%;
        vertical-align: initial;
    }
    .middleFont{
        cursor: pointer;
        position: absolute;
        top:50%;
        left: 50%;
        transform:translate(-50%,-50%);
        text-align: center;
        font-weight: bold;
        color: #009a61;
    }
    
</style>
