<template>
    <mt-tabbar v-model="selected" fixed>
        <mt-tab-item id="msite">
            <img slot="icon" src="../../../static/images/waimaiindex.png" v-if="this.selected == 'msite'">
            <img slot="icon" src="../../../static/images/waimai.png" v-else>
            外卖
        </mt-tab-item>
        <mt-tab-item id="order">
            <img slot="icon" src="../../../static/images/orderindex.png" v-if="this.selected == 'order'">
            <img slot="icon" src="../../../static/images/order.png" v-else>
            搜索
        </mt-tab-item>
        <mt-tab-item id="search">
            <img slot="icon" src="../../../static/images/profileindex.png" v-if="this.selected == 'profile'">
            <img slot="icon" src="../../../static/images/profile.png" v-else>
            订单
        </mt-tab-item>
        <mt-tab-item id="profile">
            <img slot="icon" src="../../../static/images/searchindex.png" v-if="this.selected == 'search'">
            <img slot="icon" src="../../../static/images/search.png" v-else>
            我的
        </mt-tab-item>
    </mt-tabbar>
</template>
<script>
export default {
    data () {
        return {
            selected:'msite'
        }
    },
    watch: {
        selected:function (val, oldVal) { 
            switch (val) {
                case 'msite':
                    this.$router.replace({ path: '/msite' })
                    break
                case 'order':
                    this.$router.replace({ path: '/order' })
                    break
                case 'profile':
                    this.$router.push({ path: '/profile' })
                    break
                case 'search':
                    this.$router.push({ path: '/search' })
                    break
                default:
                    this.$router.replace({ path: '/msite' })
                    break
            }
        }
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
</style>
