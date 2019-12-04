<template>
<div>
    <loginHeader class="loginHeader"></loginHeader>
    <div class="detail">
        <header class="clearfix">
            <span class="avatar" :style="{backgroundImage: 'url(' + defaultavatar + ')'}"></span>
            <div class="infoblock">
                <div class="name">xxxxx</div>
                <div class="time">2019年12月04日</div>
            </div>
        </header>
        <article class="article">
            fsidfbiudsfbidsufbdsifhdsiufds
            fdsnofdosifndsoifnsdof
            fmdsofmosdfnodsfnoidsfniodsnfffffffdiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
            dnsffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fdddddddddddddddddddddddddddddddddddddddddddddddddnbgggggggggggggggggggggggggggggfjjjjjjjjjjjjjjjjjjjjjjjjjjjjgfrrrrrr
        </article>
        <footer>
            <div class="comment">评论</div>
            <div class="commentGroup" @click="focusInput" style="padding-bottom:3rem;">
                <input class="insert" type="text" v-model="commentText">
                <div style="right:1.333rem;position:absolute;margin-top:0.7rem;">
                    <mt-button class="submitButton" :style="{'background-color': ison ? '#26a2ff' : '#95c3e6'}" type="primary" size="small">评论</mt-button>
                </div>
            </div>
        </footer>
    </div>
</div>
</template>

<script>
import loginHeader from '../loginHeader'
import $ from 'jquery'
import * as defaultavatar from '../../assets/img/defaultavatar.png'
export default {
    data() {
        return {
            defaultavatar:defaultavatar,
            submit:false,
            commentText:'',
            avatarList:[
                
            ]
        }
    },
    computed:{
        ison() {
            return this.commentText.trim();
        }
    },
    components:{
        loginHeader
    },
    methods:{
        focusInput(e) {
            $('.commentGroup').find('.insert').focus();
        },
        showComment() {
            this.submit = true;
        },
        hideComment() {
            this.submit = false;
        }
    }
}
</script>

<style scoped>
    .submitButton{
        height: 28px;
    }
    .insert{
        width: 100%;
        height: 2rem;
        padding: 0.5rem;
    }
    .commentGroup{
        margin: 1.25rem 1rem;
        /* display: flex; */
        position: relative;
        padding: 1rem 1.333rem;
        background-color: #fafbfc;
        border-radius: 3px;
    }
    .comment{
        color: #8a9aa9;
        font-size: 16px;
        font-weight: 400;
        text-align: center;
        padding: 1.67rem 0 5px;
    }
    .article{
        word-wrap: break-word;
    }
   .clearfix:after{
        content:"";				
        height:0;				
        line-height:0;			
        display:block;			
        visibility:hidden;		
        clear:both;				
    }
    .clearfix{
        zoom:1;					
    }
    .infoblock{
        float: left;
    }
    .name {
        display: inline-block;
        font-size: 18px;
        font-weight: 700;
        color: #333;

    }
    .time{
        /* display: inline-block; */
        font-size: 12px;
        color: #909090;
    }
    .detail{
        padding: 1.5rem;
    }
   .avatar{
       margin-right: 0.9375rem;
       float: left;
       display: block;
       width: 2.5625rem;
       height: 2.5625rem;
       border-radius: 50%;
       background-size:2.5625rem 2.5625rem;
   }
</style>