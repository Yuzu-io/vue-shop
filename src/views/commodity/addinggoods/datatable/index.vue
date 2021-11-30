<template>
  <div class="data_table">
    <el-table :data="format" :border="true" size="medium" style="width: 540px">
      <el-table-column label="规格">
        <template slot-scope="scope">
          <span>{{ scope.row.format }}</span>
        </template>
      </el-table-column>
      <el-table-column label="包装费">
        <template slot-scope="scope">
          <span>{{ scope.row.packagingFee }}</span>
        </template>
      </el-table-column>
      <el-table-column label="价格">
        <template slot-scope="scope">
          <span>{{ scope.row.price }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    format: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      // tableData: [
      //   {
      //     format: '大杯',
      //     packagingFee: 1,
      //     price: 12
      //   },
      //   {
      //     format: '小杯',
      //     packagingFee: 1,
      //     price: 8
      //   }
      // ]
    }
  },
  methods: {
    handleDelete (index, row) {
      this.$emit('deleteFormat', index)
    }
  }
}
</script>

<style lang="less" scoped>
.el-table {
  margin: 0 auto;
}
</style>
