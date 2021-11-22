<template>
  <div class="navmenu">
    <el-menu
      :default-active="handRoute"
      class="el-menu-vertical-demo"
      background-color="#304156"
      text-color="#BFCBD9"
      active-text-color="#409EFF"
      @select="handleSelect"
      @open="handleOpen"
      @close="handleClose"
      :collapse="shrink"
    >
      <el-menu-item index="/home">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <!-- 商品 -->
      <el-submenu index="/commodity">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span slot="title">商品</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/commodity/productlist">商品列表</el-menu-item>
          <el-menu-item index="/commodity/addinggoods">添加商品</el-menu-item>
          <el-menu-item index="/commodity/categories">商品分类</el-menu-item>
          <el-menu-item index="/commodity/producttypes">商品类型</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 订单 -->
      <el-submenu index="/addingdata">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span slot="title">订单</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/addingdata/addshop">订单列表</el-menu-item>
          <el-menu-item index="/addingdata/addinggoods">订单设置</el-menu-item>
          <el-menu-item index="/addingdata/addinggoods">退货申请处理</el-menu-item>
          <el-menu-item index="/addingdata/addinggoods">退货原因设置</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 设置 -->
      <el-submenu index="/settings">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span slot="title">设置</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/settings/adminsettings">管理员设置</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      // console.log(key, keyPath)
      this.$router.push(key)
    },
    handleOpen (key, keyPath) {
      // console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      // console.log(key, keyPath)
    }
  },
  computed: {
    shrink () {
      return this.$store.getters.shrink
    },
    handRoute () {
      return this.$route.path.split('/index')[0]
    }
  }
}
</script>

<style lang="less" scoped>
.navmenu {
  height: 100vh;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
}

.el-menu {
  border: none;
  text-align: left;
  /deep/.el-menu-item-group__title {
    padding: 0 !important;
  }
}
.el-submenu .el-menu-item {
  background-color: #1f2d3d !important;
}
.el-submenu .el-menu-item:hover {
  background-color: #001528 !important;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
// 二级菜单被选中是的样式
.is-active > .el-submenu__title {
  i,
  span {
    color: #f4f4f5 !important;
  }
}
</style>
