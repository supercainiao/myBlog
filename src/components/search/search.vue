<template>

    <div id="search">
        <loginHeader class="loginHeader"></loginHeader>
        <mt-search
            v-model="value"
            cancel-text="取消"
            placeholder="搜索">
        </mt-search>
        <mt-button type="primary">primary</mt-button>
    </div>
</template>

<script>
import loginHeader from '../loginHeader'
export default {
    data() {
        return {
            value:'',
            result:[
                'aaa'
                ,'bbb'
            ]
        }
    },
    components:{
        loginHeader
    }
}
</script>
<style scoped>
    #search>>>.mint-searchbar {
        border: 1px solid #ddd;
        border-radius: 10px;
    }
</style>