<template>
  <div id="app">
    <!-- 设置路由组件的视图位置 -->
      <router-view></router-view>
      <!-- 并放置非路由组件 -->
      <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
import 'mint-ui/lib/style.min.css'
import FooterGuide from '@/components/FooterGuide/FooterGuide.vue'
export default {
  name: 'App',
  components: {
    FooterGuide
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import "common/stylus/font.styl";
  /** 整个应用组件的样式**/
  #app
    width 100%
    height 100%
    background #f5f5f5
</style>
