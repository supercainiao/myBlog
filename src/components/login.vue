<template>
    <div class="loginPannel">
        <div class="titlediv">
            <span class="middleFont" @click="routerMianView">SuperCainiao</span>
        </div>
        <div class="loginBox">
            <div class="header"><span class="logTips">{{isLogin ? '登陆' : '注册'}}</span></div>
            <div class="pannel-body">
                <div class="hidden"></div>
                <div class="form-group">
                    <label for="username" class="control-label">用户名</label>
                    <br/>
                    <input type="text" id="username" class="form-control" placeholder="请输入用户名">
                </div>
                <div class="form-group">
                    <label for="password" class="control-label">密码</label>
                    <span class="pull-right"><a href="#" tabindex="4" class="forgot">忘记密码</a></span>
                    <br/>
                    <input type="text" id="password" class="form-control" placeholder="请输入密码">
                </div>

                <div class="form-group submit-group" v-show="isLogin">
                    <button type="submit" class="login btn btn-primary pull-right pl20 pr20" tabindex="3" >登录
                    </button>
                </div>
                <div class="form-group submit-group" >
                    <button type="submit" @click="registerUser" :class="[isLogin ? 'register' : 'login' ]" tabindex="3" >注册
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isLogin: true
        }
    },
    mounted() {
        this.isLogin = this.$route.path === "/user/login";
    },
    computed:{
       
    },
    methods:{
        registerUser() {
            this.$router.push({ path: 'register' })
        },
        routerMianView() {
            this.$router.push({name:'recommend'});
        }
    },
    watch: {
        '$route' (to, from) {
            this.isLogin = this.$route.path === "/user/login";
        }
    }
}
</script>

<style scoped>
    .register:hover{
        background: #e6e6e6;
    }
    .register {
        margin-top: 2.5rem;
        outline: none;
        width: 100%;
        background-color: #ffffff;
        border-color: #DDDDDD;
        margin-bottom: 0;
        font-weight: normal;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        background-image: none;
        border: 1px solid transparent;
        white-space: nowrap;
        padding: 6px 12px;
        font-size: 14px;
        line-height: 1.42858;
        border-radius: 4px;
        border: 1px solid #DDDDDD;
    }
    .submit-group{
        margin-top: 2.8125rem;
    }
    .login:hover{
        background: #006741;
    }
    .login{
        outline: none;
        width: 100%;
        color: #fff;
        background-color: #009a61;
        border-color: #008151;
        margin-bottom: 0;
        font-weight: normal;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        background-image: none;
        border: 1px solid transparent;
        white-space: nowrap;
        padding: 6px 12px;
        font-size: 14px;
        line-height: 1.42858;
        border-radius: 4px;
    }
    .forgot{
        color: #009a61;
        text-decoration: none;
        font-family: -apple-system,"Helvetica Neue",Helvetica,Arial,"PingFang SC","Hiragino Sans GB","WenQuanYi Micro Hei","Microsoft Yahei",sans-serif;
        font-size: 14px;
        line-height: 1.42858;
        -webkit-font-smoothing: antialiased;
    }
    .forgot:hover{
        text-decoration:underline;
    }
    .pull-right{
        float: right;
    }
    .hidden{
        height: 0.9375rem;
    }
    .control-label{
        display: inline-block;
        max-width: 100%;
        margin-bottom: 0.3125rem;
        font-weight: bold;
        font-family: -apple-system,"Helvetica Neue",Helvetica,Arial,"PingFang SC","Hiragino Sans GB","WenQuanYi Micro Hei","Microsoft Yahei",sans-serif;
        font-size: 14px;
        line-height: 1.42858;
        color: #333;
        box-sizing: border-box;
    }
    .form-control{
        display: block;
        width: 100%;
        height: 2.125rem;
        padding: 0.375rem 0.75rem;
        font-size: 0.875rem;
        line-height: 1.42858;
        color: #555;
        background-color: #fff;
        background-image: none;
        border: 1px solid #ccc;
        border-radius: 4px;
        -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
        box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
        -webkit-transition: border-color ease-in-out 0.15s,box-shadow ease-in-out 0.15s;
        -o-transition: border-color ease-in-out 0.15s,box-shadow ease-in-out 0.15s;
        transition: border-color ease-in-out 0.15s,box-shadow ease-in-out 0.15s;
    }
    .form-group{
        margin-bottom: 0.9375rem;
    }
    .pannel-body{
        padding: 0.9375rem;
    }
    .header{
        height: 2.625rem;
        background: #F3F3F3;
        border-bottom: 1px solid #DDDDDD;
        vertical-align: center;
    }
    .logTips{
        line-height: 2.625rem;
        padding-left: 0.9375rem;
        
    }
    .loginPannel{
        /* background: #F3F3F3; */
        width: 100%;
        height: 100%;
        position: relative;
    }
    .loginBox{
        position: absolute;
        width: 21.5rem;
        height: 27.875rem;
        border-radius: 0.3125rem;
        margin-top: 3.0625rem;
        border: 1px solid #DDDDDD;
        left: 50%;
        transform: translate(-50%);
    }
    .titlediv{
        margin-top: 2.25rem;
        text-align: center;
    }
    .middleFont{
        
        font-size: larger;
        text-align: center;
        font-weight: bold;
        color: #009a61;
    }
</style>