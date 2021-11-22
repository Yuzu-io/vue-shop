<template>
  <div class="productlist">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="商品名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="商品描述">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
            <el-form-item label="销售量">
              <span>{{ props.row.sales }}</span>
            </el-form-item>
            <el-form-item label="商品分类">
              <span>{{ props.row.category }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="商品编号" prop="id"> </el-table-column>
      <el-table-column label="商品名称" prop="name"> </el-table-column>
      <el-table-column label="描述" prop="desc"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <edit-product
      :dialogFormVisible.sync="dialogFormVisible"
      @isDialogFormVisible="dialogFormVisible = $event"
    ></edit-product>
  </div>
</template>

<script>
import EditProduct from './editproduct/index.vue'
export default {
  components: {
    EditProduct
  },
  data () {
    return {
      tableData: [
        {
          id: '12987122',
          name: '好滋好味鸡蛋仔',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          sales: 123,
          category: '江浙小吃、小吃零食'
        },
        {
          id: '12987122',
          name: '好滋好味鸡蛋仔',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          sales: 123,
          category: '江浙小吃、小吃零食'
        },
        {
          id: '12987122',
          name: '好滋好味鸡蛋仔',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          sales: 123,
          category: '江浙小吃、小吃零食'
        },
        {
          id: '12987122',
          name: '好滋好味鸡蛋仔',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          sales: 123,
          category: '江浙小吃、小吃零食'
        }
      ],
      dialogFormVisible: false
    }
  },
  methods: {
    handleEdit (index, row) {
      console.log(index, row)
      this.dialogFormVisible = true
    },
    handleDelete (index, row) {
      this.$confirm('是否删除此商品?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    }
  }
}
</script>

<style lang="less" scoped>
.expand {
}
/deep/.demo-table-expand {
  font-size: 0;
  margin: 0 0 0 60px;
}
/deep/.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
/deep/.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
