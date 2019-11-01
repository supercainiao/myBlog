<template>
    <mt-swipe class="myWrapSwipe" :auto="4000" :show-indicators="true">
        <mt-swipe-item>
            <img class="swipeImage" src="../assets/img/timg.jpg" alt="" srcset="">
        </mt-swipe-item>
        <mt-swipe-item>
            <img class="swipeImage" src="../assets/img/u=139762700,2632292915&fm=26&gp=0.jpg" alt="" srcset="">
        </mt-swipe-item>
        <mt-swipe-item>
            <img class="swipeImage" src="../assets/img/u=3048803431,2921638494&fm=26&gp=0.jpg" alt="" srcset="">
        </mt-swipe-item>
    </mt-swipe>
</template>
<script>
// import { Swipe, SwipeItem } from 'mint-ui';

export default {

}
</script>

<style scoped>
    .swipeImage{
        width: 100%;
        height: 100%;
        border-radius: 0.5rem;
    }
    .myWrapSwipe{
        border-radius: 0.5rem;
        width: 21.5625rem;
    }
    .myWrapSwipe >>> .mint-swipe-indicator{
        width: 0.625rem;
        height: 0.625rem;
        opacity: 0.2;
        margin: 0 0.375rem;
    }
</style>
