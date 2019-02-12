<template>
    <div style="overflow-y: hidden;">
        <mt-header :title="address.name">
            <router-link to="/" slot="left">
                <mt-button class="icosd">
                    <img src="../../../static/images/headss.png" alt="">
                </mt-button>
            </router-link>
            <mt-button slot="right" class="dlzc"><a href="">登陆</a> | <a href="">注册</a> </mt-button>
        </mt-header>
       <!-- <mt-swipe :auto="4000" class="foodentry">
            <mt-swipe-item>
                <ul>
                    <li><a href=""><img src="./images/1.png" alt=""><span class="title">地方菜系</span></a></li>
                    <li><a href=""><img src="./images/2.png" alt=""><span class="title">麻辣烫</span></a></li>
                    <li><a href=""><img src="./images/3.png" alt=""><span class="title">速食简餐</span></a></li>
                    <li><a href=""><img src="./images/4.png" alt=""><span class="title">地方小吃</span></a></li>
                    <li><a href=""><img src="./images/5.png" alt=""><span class="title">大牌惠吃</span></a></li>
                    <li><a href=""><img src="./images/6.png" alt=""><span class="title">米粉面馆</span></a></li>
                    <li><a href=""><img src="./images/7.png" alt=""><span class="title">包子粥店</span></a></li>
                    <li><a href=""><img src="./images/8.png" alt=""><span class="title">炸鸡炸串</span></a></li>
                    <li><a href=""><img src="./images/9.png" alt=""><span class="title">汉堡披萨</span></a></li>
                    <li><a href=""><img src="./images/10.png" alt=""><span class="title">鸭脖卤味</span></a></li>
                </ul>
            </mt-swipe-item>
            <mt-swipe-item>
                <ul>
                    <li><a href=""><img src="./images/11.png" alt=""><span class="title">美食</span></a></li>
                    <li><a href=""><img src="./images/12.png" alt=""><span class="title">午餐</span></a></li>
                    <li><a href=""><img src="./images/13.png" alt=""><span class="title">商超便利</span></a></li>
                    <li><a href=""><img src="./images/14.png" alt=""><span class="title">水果</span></a></li>
                    <li><a href=""><img src="./images/15.png" alt=""><span class="title">医药健康</span></a></li>
                    <li><a href=""><img src="./images/16.png" alt=""><span class="title">鲜花绿植</span></a></li>
                    <li><a href=""><img src="./images/17.png" alt=""><span class="title">厨房生鲜</span></a></li>
                    <li><a href=""><img src="./images/18.png" alt=""><span class="title">跑腿代购</span></a></li>
                    <li><a href=""><img src="./images/19.png" alt=""><span class="title">甜品饮品</span></a></li>
                    <li><a href=""><img src="./images/20.png" alt=""><span class="title">签到领红包</span></a></li>
                </ul>
            </mt-swipe-item>
        </mt-swipe>-->
            <!--首页导航轮播图-->
        <nav class="msite_nav">
        <!-- swiper的容器div -->
        <div class="swiper-container">
            <!-- swiper的包裹层div -->
            <div class="swiper-wrapper">
                <!-- swiper的轮播div -->
                <div class="swiper-slide" v-for="(pages,index) in categorysArr" :key="index">
                    <a href="javascript:" class="link_to_food" v-for="(data,index) in pages" :key="index">
                        <div class="food_container">
                            <img :src="baseImageUrl+data.image_url">
                            <!-- <img src="./images/20.png" alt=""> -->
                        </div>
                        <span>{{data.title}}</span>
                    </a>
                </div>
            </div>
            <!-- swiper轮播图圆点 -->
            <div class="swiper-pagination"></div>
        </div>
        <!-- <img src="./images/msite_back.svg" alt="back" v-else> -->
        </nav>
        <shoplist></shoplist>
    </div>
</template>
<script>
import Swiper from 'swiper'
// 同时引入swiper的css文件
import 'swiper//dist/css/swiper.min.css'

import shoplist from '@/components/ShopList/ShopList.vue'
import {mapState} from 'vuex'
export default {
    data () {
        return {
            selected:'msite',
            baseImageUrl: "https://fuss10.elemecdn.com"
        }
    },
    methods: {
        xuanz:function(num) {
            console.log(num)
        }
    },
    components:{
        shoplist
    },
    computed: {
        ...mapState(['address','categorys']),
        //根据categorys 一维数组生成一个2维数组
        categorysArr (){
            const {categorys} = this
            //准备空的二维数组
            const arr = []
            let minArr = []
            if(!categorys){
                return;
            }
            // 遍历categorys
            categorys.forEach(data => {
                if (minArr.length === 8){
                    minArr = []
                }
                if(minArr.length ===0) {
                    arr.push(minArr)  
                }
                minArr.push(data)
            });
            return arr
        }
    },
    watch: {
        categorys (value){
            //界面更新立即创建 swiper 对象
            this.$nextTick(() => {
                // 一旦完成界面更新, 立即执行回调
                new Swiper('.swiper-container', {
                autoplay: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
                })
            })
            
        }
    },
    mounted() { 
        //发送请求
        this.$store.dispatch('getCategorys') 
        this.$store.dispatch('getShops')
    },
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.icosd img
    width: 30px
    height: 30px
.dlzc a
    color: #fff
.foodentry
    overflow: hidden
    height: 4.42rem
    height: 44.2vw
    background-color: #fff
    text-align: center
    a
        position: relative
        float: left
        margin-top: .293333rem
        margin-top: 2.933333vw
        width: 20%
        img
            width: 1.066667rem
            width: 10.666667vw
            height: 1.066667rem
            height: 10.666667vw
            vertical-align: top
        .title
            display: block
            margin-top: .133333rem
            margin-top: 1.333333vw
            color: #666
            font-size: .32rem
    .mint-swipe-indicator
        margin: 0 .066667rem
        margin: 0 .666667vw
        width: .24rem
        width: 2.4vw
        height: .04rem
        height: .4vw
        border-radius: 0
    .mint-swipe-indicator.is-active
        width: .24rem
        width: 2.4vw
        background-color: #00a6ff
.msite_nav
    bottom-border-1px(#e4e4e4)
    margin-top 2px
    height 200px
    background #fff
    .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
            width 100%
            height 100%
            .swiper-slide
                display flex
                justify-content center
                align-items flex-start
                flex-wrap wrap
                .link_to_food
                    width 25%
                .food_container
                    display block
                    width 100%
                    text-align center
                    padding-bottom 10px
                    font-size 0
                    img
                        display inline-block
                        width 50px
                        height 50px
                span
                    display block
                    width 100%
                    text-align center
                    font-size 13px
                    color #666
            .swiper-pagination
            >span.swiper-pagination-bullet-active
                background #02a774
</style>
