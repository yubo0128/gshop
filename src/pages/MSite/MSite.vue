<template>
    <div>
        <mt-header title="地址">
            <router-link to="/" slot="left">
                <mt-button class="icosd">
                    <img src="../../../static/images/headss.png" alt="">
                </mt-button>
            </router-link>
            <mt-button slot="right" class="dlzc"><a href="">登陆</a> | <a href="">注册</a> </mt-button>
        </mt-header>
        <mt-swipe :auto="4000" class="foodentry">
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
        </mt-swipe>
      <shoplist></shoplist>
    </div>
</template>
<script>
  import shoplist from '@/components/ShopList/ShopList.vue'
export default {
    data () {
        return {
            selected:'msite'
        }
    },
    methods: {
        xuanz:function(num) {
            console.log(num)
        }
    },
  components:{
    shoplist
  }
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
</style>
