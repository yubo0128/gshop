<template>
  <section class="shoplist">
    <!--第一个-->
    <section class="index-container" v-for="(item, index) in shops" :key="index">
      <div class="index-shopInfo">
        <div class="logo-container">
          <div class="logo-main">
            <img src="./images/maoc.jpg" alt="" class="logo-logo">
          </div>
        </div>
        <div class="index-main">
          <section class="index-line_2">
            <h3 class="index-shopname"><span>传奇冒菜（两江幸福广场店）</span></h3>
            <ul class="index-supportWrap">
              <span class="index-omit">...</span>
            </ul>
          </section>
          <section class="index-line_2">
            <div class="index-rateWrap_39dWx_g">
              <div class="Rating-wrapper_TYbDrku_0 index-stars_vPkk9Vv">
                <div class="Rating-gray_1kpffd5_0">
                  <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTU0LjAxNyA4LjA3MmwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNTMuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0tNDggMEwzLjQ2NSA5LjYzM2MtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBMNy41NSAzLjM1MmwyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNkw4LjQ5NyA2LjI2OWwuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0wxNy42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDI5LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNDEuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2eiIgZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+" alt="">
                </div>
                <div class="Rating-actived_GBtiHkB_0" style="width: 80%;">
                  <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeTI9IjUwJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkRFMDAiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRkZCMDAwIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNNTQuMDE3IDguMDcybC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1My42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bS00OCAwTDMuNDY1IDkuNjMzYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDUuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMEw3LjU1IDMuMzUybDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2TDguNDk3IDYuMjY5bC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDE3LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMMjkuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w0MS42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6IiBmaWxsPSJ1cmwoI2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=" alt="">
                </div>
              </div>
              <span>4</span>
              <span>月售39单</span>
            </div>
          </section>
          <section class="index-line_2">
            <div class="index-moneylimit_2fCq9W5">
              <span>¥38起送</span>
              <span>配送费¥3</span>
            </div>
            <div class="index-timedistanceWrap_2Dp_kzY">
              <span class="index-distanceWrap_1EPAlti">290m</span>
              <span>29分钟</span>
            </div>
          </section>
        </div>
      </div>

      <div class="index-activityWrap">
        <section class="index-tagLine_1rJw_lq">
          <span class="mini-tag-tag_3Tm_6bw_0 index-tag_3oprLi5">麻辣烫<span style="color: rgb(102, 102, 102)" class="index-tagGhost_1KCu_KY mini-tag-ghost_3DwLU8E_0">麻辣烫</span></span>
          <span class="mini-tag-tag_3Tm_6bw_0 index-tag_3oprLi5">品质联盟<span style="color: rgb(51, 51, 51);
    border-color: rgb(221, 221, 221);" class="index-tagGhost_1KCu_KY mini-tag-ghost_3DwLU8E_0">品质联盟</span></span>
          <span class="index-recommendTag__2apOBL">
                            <img src="./images/tb.png" alt="">
                            <span>口碑人气好店</span>
                        </span>
        </section>
        <span><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgLjI1TDI4MCAwIiBzdHJva2U9IiNDQ0MiIHN0cm9rZS13aWR0aD0iLjUiIGZpbGw9Im5vbmUiIHN0cm9rZS1kYXNoYXJyYXk9IjEiLz48L3N2Zz4=" class="index-dashedline_7B79b3W"></span>
        <section class="index-activities_25AUDsx">
          <div class="index-activityList_1wvwwUY">
            <div class="index-actRow_2f_uNNA">
                                <span class="index-iconWrap_1xJuKaY">
                                    <span class="index-icon_1fBCxBk" style="background-color: rgb(112, 188, 70);">首</span>
                                </span>
              <span class="index-desc_JLha7Vr">新用户下单立减16元</span>
            </div>
            <div class="index-actRow_2f_uNNA">
                                <span class="index-iconWrap_1xJuKaY">
                                    <span class="index-icon_1fBCxBk" style="background-color: rgb(240, 115, 115);">减</span>
                                </span>
              <span class="index-desc_JLha7Vr">满50减2，满80减3，满100减4</span>
            </div>
            <div class="index-actRow_2f_uNNA" style="display:none;">
                                <span class="index-iconWrap_1xJuKaY">
                                    <span class="index-icon_1fBCxBk" style="background-color: rgb(153, 153, 153);">保</span>
                                </span>
              <span class="index-desc_JLha7Vr">该商户食品安全已由国泰产险承担，食品安全有保障</span>
            </div>
          </div>
          <div class="index-activityBtn_tMk-e1C" @click="xuanz(this)">
            <span>5个活动</span>
            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjOTk5IiBkPSJNNC41NzcgNS40MjNjLjc5Ljc3IDIuMDczLjc2NyAyLjg1NyAwbDQuMTItNC4wMjZDMTIuMzQ1LjYyNSAxMi4wOSAwIDEwLjk4NSAwSDEuMDI3Qy0uMDc3IDAtLjMzLjYzLjQ1NyAxLjM5N2w0LjEyIDQuMDI2eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+" class="">
          </div>
        </section>
      </div>
    </section>
    <!--第一个结束-->
    
  </section>
</template>
<script>
import {mapState} from "vuex"
export default {
  computed: {
    ...mapState(['shops'])
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .shoplist
    padding-bottom: .9rem
  .index-container
    position: relative
    border-bottom: .013333rem solid #eee
    border-bottom: .133333vw solid #eee
    background-color: #fff
    color: #666
    padding: .4rem 0
    padding: 4vw 0
    list-style: none
    font-size: .293333rem
    line-height: normal
    .index-shopInfo
      display: -webkit-flex
      display: -webkit-box
      display: -ms-flexbox
      display: flex
      -webkit-justify-content: flex-start
      -webkit-box-pack: start
      -ms-flex-pack: start
      justify-content: flex-start
      -webkit-align-items: stretch
      -webkit-box-align: stretch
      -ms-flex-align: stretch
      align-items: stretch
      padding: 0 .266667rem
      padding: 0 2.666667vw
      .logo-container
        position: relative
        -webkit-flex: none
        -webkit-box-flex: 0
        -ms-flex: none
        flex: none
        z-index: 0
      .logo-main
        position: relative
        width: 1.733333rem
        width: 17.333333vw
        height: 1.733333rem
        height: 17.333333vw
        .logo-logo
          -webkit-box-sizing: border-box
          box-sizing: border-box
          display: block
          width: 100%
          height: 100%
          border-radius: .053333rem
          border-radius: .533333vw
          border: .013333rem solid rgba(0,0,0,.08)
          border: .133333vw solid rgba(0,0,0,.08)
    .index-main
      -webkit-flex-grow: 1
      -webkit-box-flex: 1
      -ms-flex-positive: 1
      flex-grow: 1
      -webkit-flex-direction: column
      -webkit-box-orient: vertical
      -webkit-box-direction: normal
      -ms-flex-direction: column
      flex-direction: column
      -webkit-user-select: none
      -moz-user-select: none
      -ms-user-select: none
      user-select: none
      padding-left: .266667rem
      padding-left: 2.666667vw
      .index-line_2
        margin-bottom: .1rem
        display: flex;
        -webkit-justify-content: space-between;
      .index-line_2, .index-main
        display: -webkit-flex
        display: -webkit-box
        display: -ms-flexbox
        display: flex
        -webkit-justify-content: space-between
        -webkit-box-pack: justify
        -ms-flex-pack: justify
        justify-content: space-between
        overflow: hidden
      .index-line_2, .index-shopname
        clear: both
        -webkit-align-items: center
        -webkit-box-align: center
        -ms-flex-align: center
        align-items: center
        .index-shopname
          float: left
          display: -webkit-flex
          display: -webkit-box
          display: -ms-flexbox
          display: flex
          margin: 0
          padding: 0
          color: #333
          font-weight: 700
          font-size: .4rem
          overflow: hidden
          span
            overflow: hidden
            text-overflow: ellipsis
            white-space: nowrap
            font-weight: 700;
        .index-supportWrap
          float: right
          display: -webkit-flex
          display: -webkit-box
          display: -ms-flexbox
          display: flex
          -webkit-align-items: center
          -webkit-box-align: center
          -ms-flex-align: center
          align-items: center
          margin-left: .266667rem
          margin-left: 2.666667vw
        .index-rateWrap_39dWx_g
          display: -webkit-flex
          display: -webkit-box
          display: -ms-flexbox
          display: flex
          -webkit-align-items: center
          -webkit-box-align: center
          -ms-flex-align: center
          align-items: center
          .index-rate_WsK58g8, .index-stars_vPkk9Vv
            margin-right: .106667rem
            margin-right: 1.066667vw
          .Rating-wrapper_TYbDrku_0
            position: relative
            overflow: hidden
            display: inline-block
            vertical-align: middle
            .Rating-actived_GBtiHkB_0, .Rating-gray_1kpffd5_0
              display: -webkit-flex
              display: -webkit-box
              display: -ms-flexbox
              display: flex
              .Rating-actived_GBtiHkB_0 img, .Rating-gray_1kpffd5_0 img
                width: 1.493333rem
                width: 14.933333vw
                height: .266667rem
                height: 2.666667vw
                -webkit-flex: none
                -webkit-box-flex: 0
                -ms-flex: none
                flex: none
                max-width: none
          .Rating-actived_GBtiHkB_0, .Rating-gray_1kpffd5_0
            display: -webkit-flex
            display: -webkit-box
            display: -ms-flexbox
            display: flex
          .Rating-actived_GBtiHkB_0
            position: absolute
            top: 0
            left: 0
            overflow: hidden
      .index-moneylimit_2fCq9W5
        display: -webkit-flex
        display: -webkit-box
        display: -ms-flexbox
        display: flex
        -webkit-align-content: center
        -ms-flex-line-pack: center
        align-content: center
        span:nth-of-type(2)
          overflow: hidden
          max-width: 2.666667rem
          max-width: 26.666667vw
          text-overflow: ellipsis
          white-space: nowrap
        span+span:before
          margin: 0 .017067rem
          margin: 0 .170667vw
          margin: 0 .08rem
          margin: 0 .8vw
          color: #ddd
          content: "|"
      .index-timedistanceWrap_2Dp_kzY
        display: -webkit-flex
        display: -webkit-box
        display: -ms-flexbox
        display: flex
        -webkit-align-items: center
        -webkit-box-align: center
        -ms-flex-align: center
        align-items: center
        color: #999
        span:after
          margin: 0 .017067rem
          margin: 0 .170667vw
          margin: 0 .08rem
          margin: 0 .8vw
          color: #ddd
          content: "|"
    .index-activityWrap
      padding-left: 2.266667rem
      padding-left: 22.666667vw
      .mini-tag-tag_3Tm_6bw_0
        position: relative
        font-size: .266667rem
        color: transparent
        white-space: nowrap
      .index-tag_3oprLi5
        padding: 0 .106667rem
        padding: 0 1.066667vw
      .mini-tag-ghost_3DwLU8E_0
        position: absolute
        left: 0
        top: 0
        right: -100%
        bottom: -100%
        -webkit-transform: scale(.5)
        transform: scale(.5)
        -webkit-transform-origin: 0 0
        transform-origin: 0 0
        font-size: .533333rem
      .index-tagGhost_1KCu_KY
        text-align: center
        border: .026667rem solid #ddd
        border: .266667vw solid #ddd
        border-radius: .053333rem
        border-radius: .533333vw
        padding: 0 .213333rem
        padding: 0 2.133333vw
      .index-recommendTag__2apOBL
        display: -webkit-flex
        display: -webkit-box
        display: -ms-flexbox
        display: inline-block
        -webkit-align-items: center
        -webkit-box-align: center
        -ms-flex-align: center
        align-items: center
        border-radius: .013333rem
        border-radius: .133333vw
        font-size: .266667rem
        color: #666
        height: .4rem
        height: 4vw
        padding: 0 .106667rem
        padding: 0 1.066667vw
        color: #e8470b
        img
          margin-top: .04rem
          margin-top: .4vw
          height: .266667rem
          height: 2.666667vw
          width: .266667rem
          width: 2.666667vw
          margin-right: .08rem
          margin-right: .8vw
  .index-tagLine_1rJw_lq, .index-tagsSlot_3bpWx9O
    margin: .266667rem .266667rem 0 0
    margin: 2.666667vw 2.666667vw 0 0
  .index-dashedline_7B79b3W
    width: 100%
    height: .013333rem
    height: .133333vw
  .index-activities_25AUDsx
    position: relative
    -webkit-justify-content: space-between
    -webkit-box-pack: justify
    -ms-flex-pack: justify
    justify-content: space-between
    -webkit-align-content: stretch
    -ms-flex-line-pack: stretch
    align-content: stretch
    overflow: hidden
    display: flex
    .index-activityList_1wvwwUY
      -webkit-flex: 1
      -webkit-box-flex: 1
      -ms-flex: 1
      flex: 1
      padding-right: .266667rem
      padding-right: 2.666667vw
      overflow: hidden
      .index-actRow_2f_uNNA
        display: -webkit-flex
        display: -webkit-box
        display: -ms-flexbox
        display: flex
        -webkit-align-items: center
        -webkit-box-align: center
        -ms-flex-align: center
        align-items: center
        font-size: .293333rem
        line-height: .48rem
        line-height: 4.8vw
        .index-iconWrap_1xJuKaY
          display: inline-block
          position: relative
          margin-right: .16rem
          margin-right: 1.6vw
          height: .373333rem
          height: 3.733333vw
          width: .373333rem
          width: 3.733333vw
          vertical-align: middle
        .index-icon_1fBCxBk
          position: absolute
          left: 0
          top: 0
          z-index: 0
          height: .746667rem
          height: 7.466667vw
          width: .746667rem
          width: 7.466667vw
          font-size: .56rem
          color: #fff
          display: -webkit-flex
          display: -webkit-box
          display: -ms-flexbox
          display: flex
          -webkit-align-items: center
          -webkit-box-align: center
          -ms-flex-align: center
          align-items: center
          -webkit-justify-content: center
          -webkit-box-pack: center
          -ms-flex-pack: center
          justify-content: center
          border-radius: .106667rem
          border-radius: 1.066667vw
          -webkit-transform: scale(.5)
          transform: scale(.5)
          -webkit-transform-origin: 0 0
          transform-origin: 0 0
        .index-desc_JLha7Vr
          display: inline-block
          -webkit-flex: 1
          -webkit-box-flex: 1
          -ms-flex: 1
          flex: 1
          overflow: hidden
          white-space: nowrap
          text-overflow: ellipsis
          vertical-align: middle
    .index-activityBtn_tMk-e1C
      padding: .08rem .266667rem 0 0
      padding: .8vw 2.666667vw 0 0
      color: #999
      text-align: right
      font-size: .266667rem
      line-height: 1
      span
        vertical-align: middle
      img
        width: .173333rem
        width: 1.733333vw
        opacity: .9
        margin-left: .106667rem
        margin-left: 1.066667vw
        -webkit-transition: all .3s ease-in-out
        transition: all .3s ease-in-out
        -webkit-transform: rotate(0deg)
        transform: rotate(0deg)
        fill: currentColor
        will-change: transform
        vertical-align: middle
        position: relative
        z-index: 1
      img.index-open_33dKeGm
        -webkit-transform: rotate(180deg)
        transform: rotate(180deg)
</style>
