<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="admin" label="管理员用户" width="180"> </el-table-column>
    <el-table-column prop="date" label="注册日期" width="180"> </el-table-column>
    <el-table-column prop="address" label="地址" width="180"> </el-table-column>
    <el-table-column prop="authority" label="权限"> </el-table-column>
  </el-table>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        {
          admin: 123,
          date: '2016-05-02',
          address: '上海市',
          authority: '管理员'
        },
        {
          admin: 123,
          date: '2016-05-04',
          address: '上海市',
          authority: '管理员'
        },
        {
          admin: 123,
          date: '2016-05-01',
          address: '上海市',
          authority: '管理员'
        },
        {
          admin: 123,
          date: '2016-05-03',
          address: '上海市',
          authority: '管理员'
        }
      ]
    }
  }
}
</script>

<style>

</style>
