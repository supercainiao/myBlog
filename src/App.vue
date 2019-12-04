<template>
  <div id="app">
    <div class="isShow" v-show="showHeader">
      <loginHeader class="loginHeader"></loginHeader>
      <swipe class="myAppSwipe"></swipe> 
      <navigation class="navigation"></navigation>
    </div>
    <router-view></router-view>
  </div>
</template> 

<script>
import $ from 'jquery';
import swipe from './components/Swipe.vue';
import loginHeader from './components/loginHeader.vue';
import navigation from './components/navigation.vue';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    swipe,
    loginHeader,
    navigation
  },
  computed:{
    showHeader() {
      // return this.$route.path === '/user/login' || this.$route.path === '/recommend/detailpage' || this.$route.path === '/user/register'  
      return this.$store.getters.isShowHeader;
    }
  },
  methods:{
    getJson(){
      $.ajax({
        url: 'http://localhost:3000/dd',
        dataType:'json',
        type:'GET',
        success:data => {
          console.log(data);
        },
        error: err => {
          console.log(err)
        }
      })
    }
  }, watch: {
        '$route' (to, from) {
            // let names = ['login','register','detailpage'];
            // if(names.includes(to.name))
            //   this.$store.commit('changeHeader',false);
            // else
            //   this.$store.commit('changeHeader',true);
            
            // console.log(to);
        }
    }
}
</script>

<style>
@import './common/common.css';
.navigation{
  padding: 0.9375rem;
}
.myAppSwipe{
  margin-top: 0.625rem;
  height: 9.375rem;
  margin-left: 0.9375rem;
}

</style>
