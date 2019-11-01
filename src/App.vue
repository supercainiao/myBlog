<template>
  <div id="app">
    <loginHeader v-show="!isLogOrRegister" class="loginHeader"></loginHeader>
    <swipe v-show="!isLogOrRegister" class="myAppSwipe"></swipe> 
    <navigation v-show="!isLogOrRegister" class="navigation"></navigation>
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
    isLogOrRegister() {
      return this.$route.path === '/user/login' || this.$route.path === '/user/register'  
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
            console.log(to);
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
