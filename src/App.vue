<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { getLocalStorage } from './utils/auth'

export default {
  watch: {
    $route (to, from) {
      if (to.meta.Authority) {
        if (getLocalStorage('JwtToken')) {
          if (!this.$store.state.user.id) {
            const data = JSON.parse(getLocalStorage('JwtToken'))
            this.$store.commit('login', data)
          }
          this.$router.push(this.$route)
        } else {
          this.$router.replace('/login')
        }
      } else {
        this.$router.push(this.$route)
      }
    }
  }
}
</script>

<style lang="less">
@import url('./style/reset.min.css');

// #nprogress .bar {
//   background: red !important; //进度条自定义颜色
// }
</style>
