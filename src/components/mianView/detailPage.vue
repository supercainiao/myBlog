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
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fdddddddddddddddddddddddddddddddddddddddddd
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fdddddddddddddddddddddddddddddddddddddddddd
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fdddddddddddddddddddddddddddddddddddddddddd
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fdddddddddddddddddddddddddddddddddddddddddd
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fdddddddddddddddddddddddddddddddddddddddddd
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fdddddddddddddddddddddddddddddddddddddddddd
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fdddddddddddddddddddddddddddddddddddddddddd
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fdddddddddddddddddddddddddddddddddddddddddd
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fdddddddddddddddddddddddddddddddddddddddddd
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fdddddddddddddddddddddddddddddddddddddddddd
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fdddddddddddddddddddddddddddddddddddddddddd
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fdddddddddddddddddddddddddddddddddddddddddd
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fdddddddddddddddddddddddddddddddddddddddddd
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fdddddddddddddddddddddddddddddddddddddddddd
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fdddddddddddddddddddddddddddddddddddddddddd
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fdddddddddddddddddddddddddddddddddddddddddd
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fdddddddddddddddddddddddddddddddddddddddddd
        </article>
        <footer>
            <div id="comment">
                <div class="comment">评论</div>
                <div class="commentGroup" @click="focusInput" style="padding-bottom:3rem;">
                    <input class="insert" type="text" v-model="commentText">
                    <div style="right:1.333rem;position:absolute;margin-top:0.7rem;">
                        <mt-button class="submitButton" :style="{'background-color': ison ? '#26a2ff' : '#95c3e6'}" type="primary" size="small">评论</mt-button>
                    </div>
                </div>
            </div>
            <div class="commentList">
                <div class="commentItem">
                    <div>
                        <div style="display: flex;">
                            <div class="userIcon">
                                <img src="../../assets/img/colorIcon.png" alt="">
                            </div>
                            <div class="commentText">
                                <span style="font-size:15px;display:inline-block;">title</span>
                                <span class="contentText">xxxxxxxxxxxxxxxxxxxxxxxsssssssssssssssssssssssssss</span>
                            </div>
                        </div>
                    </div>
                   
                    <div class="commentButton clearfix">
                        <span class="leftTime">2019</span>
                        <span class="rightButton clearfix">
                            <img class="commentZan" src="../../assets/img/awesome.png"></img>
                            <img class="comentReply clickOther" @click="replyToComment" src="../../assets/img/repy.png"></img>
                            <span class="clickOther" style="vertical-align:text-bottom;font-size:12px;" @click="replyToComment">回复</span>
                        </span>
                    </div>
                    <div class="replyInput fr replyItems clickOther" v-show="replyShow">
                        <input type="text" ref="replyInput" class="insert replyInsert clickOther" v-model="replyContent">
                        <mt-button class="submitButton replyButton clickOther" @click="replySubmit" :style="{'background-color': ison ? '#26a2ff' : '#95c3e6'}" type="primary" size="small">评论</mt-button>
                    </div>
                    <div class="sub-comment-list fr clearfix"><!-- 回复 回复列表  -->
                        <div class="replyItems">
                            <div>
                                <span class="replyavatar" :style="{backgroundImage: 'url(' + defaultavatar + ')'}"></span>
                                <div class="infoblock">
                                    <div class="replyname">xxxxx</div>
                                </div>
                            </div>
                            <br>
                            <div class="articlereply">
                                dsndnsodnsiondisoooooooooooooooo
                                dsmpdsmpooooooo
                                dspod
                            </div>
                        </div>
                    </div>
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
            replyContent:'',
            replyShow:false,
            avatarList:[
                
            ]
        }
    },
    computed:{
        ison() {
            return this.commentText.trim('.commentItem');
        }
    },
    components:{
        loginHeader
    },
    mounted (){
        $(document).click(e => {
            if(!$(e.target).hasClass('clickOther'))
                this.replyShow = false;
            
        })
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
        },
        replyToComment(e){
            this.replyShow = true;
        },
        replySubmit() {

        }
    }
}
</script>

<style scoped>
    .replyButton{
        margin-left: 70%;
        margin-top: 0.625rem;
    }
    input.replyInsert{
        /* border-radius: 0.3125rem; */
        width: 90%;
    }
    input[type=text]:focus{ border: 1px solid #AFECAB; }
    .replyInput{
        width: 16.25rem;
        margin: 1rem 0;
        padding: 0 0 0 1rem;
        background-color: #fafbfc;
        border-radius: 3px;
        height: 5.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: nowrap;
        flex-direction: column;
    }
    .replyItems{
        padding: 0.625rem 0 0.625rem 0;
    }
    .articlereply{
        word-wrap: break-word;
        font-size: 12px;
    }
    .replyavatar{
        margin-right: 0.9375rem;
        float: left;
        display: block;
        width: 1.5625rem;
        height: 1.5625rem;
        border-radius: 50%;
        background-size: 1.5625rem 1.5625rem;
    }
    .replyname{
        font-size: 12px;
    }
    .sub-comment-list{
        width: 16.25rem;
        margin: 1rem 0;
        padding: 0 0 0 1rem;
        background-color: #fafbfc;
        border-radius: 3px;
    }
    .commentZan{
        height: 16px;
        width: 16px;
    }
    .comentReply{
         height: 16px;
        width: 16px;
        margin-left: 2.5rem;
    }
    .commentButton{
       position: relative;
       padding: 0.75rem 0 0.75rem 0;
    }
    .rightButton{
        float: right;
    }
    .rightButton span{
        font-size: 12px;
        color:#8a9aa9;
    }
    .leftTime{
        float: left;
        font-size: 13px;
        color: #8a9aa9;
    }
    .contentText{
        font-size:14px;
        display:inline-block;
        word-break: break-all;
    }
    .commentText{
        display: inline;
    }
    .userIcon{
        height: 2.125rem;
        width: 2.125rem;
        display: inline;
    }
    .commentItem{
        
        border-bottom: 1px solid rgba(178,186,194,.15);
    }
    .userIcon img{
        height: 2.125rem;
        width: 2.125rem;
        border-radius: 50%;
    }
    .submitButton{
        height: 28px;
    }
    .insert{
        width: 100%;
        height: 2rem;
        padding: 0.5rem;
        border-radius: 0.3125rem;
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