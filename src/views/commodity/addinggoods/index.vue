<template>
  <div class="addinggoods">
    <el-card shadow="hover" header="添加商品">
      <el-form
        ref="form"
        :model="form"
        label-width="80px"
        :rules="rules"
        class="demo-form"
      >
        <el-form-item label="商品编号" prop="id">
          <el-input v-model="form.id"></el-input>
        </el-form-item>
        <el-form-item label="商品名称" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="商品描述" prop="desc">
          <el-input v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label="商品分类">
          <el-cascader
            v-model="value"
            :options="options"
            @change="handleChange"
          ></el-cascader>
        </el-form-item>

        <img-upload class="img_upload"></img-upload>
        <!-- 添加规格 -->
        <el-button
          class="add_standard"
          type="button"
          @click="dialogFormVisible = true"
          >添加规格</el-button
        >
        <data-table
          class="data_table"
          @deleteFormat="deleteFormat"
          :format="form.format"
        ></data-table>
        <el-dialog title="添加规格" :visible.sync="dialogFormVisible">
          <el-form :model="newFormat">
            <el-form-item label="规格" :label-width="formLabelWidth">
              <el-input
                v-model="newFormat.format"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="包装费" :label-width="formLabelWidth">
              <el-input-number
                v-model="newFormat.packagingFee"
                @change="packagingFeeChange"
                :min="0"
                :max="10"
              ></el-input-number>
            </el-form-item>
            <el-form-item label="价格" :label-width="formLabelWidth">
              <el-input-number
                v-model="newFormat.price"
                @change="priceChange"
                :min="0"
              ></el-input-number>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="addFormat">确 定</el-button>
          </div>
        </el-dialog>
        <!--  -->
        <el-form-item class="data_button">
          <el-button type="primary" @click="onSubmit('form')">添加</el-button>
          <el-button @click="resetForm('form')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import ImgUpload from '@/components/imgupload/index.vue'
import DataTable from './datatable/index.vue'

export default {
  components: {
    ImgUpload,
    DataTable
  },
  data () {
    return {
      form: {
        id: '',
        name: '',
        desc: '',
        category: '',
        format: [
          {
            format: '',
            packagingFee: 0,
            price: 0
          }
        ]
      },
      // 规格
      newFormat: {
        format: '',
        packagingFee: 0,
        price: 0
      },
      // 分类
      value: '',
      options: [
        {
          value: 'zhinan',
          label: '指南',
          children: [
            {
              value: 'shejiyuanze',
              label: '设计原则'
            },
            {
              value: 'daohang',
              label: '导航'
            }
          ]
        },
        {
          value: 'zujian',
          label: '组件',
          children: [
            {
              value: 'basic',
              label: 'Basic'
            },
            {
              value: 'form',
              label: 'Form'
            },
            {
              value: 'data',
              label: 'Data'
            },
            {
              value: 'notice',
              label: 'Notice'
            },
            {
              value: 'navigation',
              label: 'Navigation'
            },
            {
              value: 'others',
              label: 'Others'
            }
          ]
        },
        {
          value: 'ziyuan',
          label: '资源',
          children: [
            {
              value: 'axure',
              label: 'Axure Components'
            },
            {
              value: 'sketch',
              label: 'Sketch Templates'
            },
            {
              value: 'jiaohu',
              label: '组件交互文档'
            }
          ]
        }
      ],
      // 表单验证
      rules: {
        id: [
          { required: true, message: '请输入商品编号', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        name: [{ required: true, message: '请输入商品名称', trigger: 'blur' }],
        desc: [{ required: true, message: '请输入商品描述', trigger: 'blur' }]
      },
      // 表单宽度
      formLabelWidth: '120px',
      dialogFormVisible: false
    }
  },
  methods: {
    onSubmit (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    // 分类
    handleChange (value) {
      console.log(value)
    },
    // 计数器
    packagingFeeChange (value) {
      console.log(value)
    },
    priceChange (value) {
      console.log(value)
    },
    // 添加规格
    addFormat () {
      this.dialogFormVisible = false
      this.form.format.push(this.newFormat)
      this.newFormat = {
        format: '',
        packagingFee: 0,
        price: 0
      }
    },
    // 删除规格
    deleteFormat (index) {
      this.form.format.splice(index, 1)
    }
  }
}
</script>

<style lang="less" scoped>
.img_upload {
  margin: 0 0 20px 80px;
}
.add_standard {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin: 20px 0;
}
.data_table {
  margin: 0 0 10px 0;
}
.el-card {
  width: 58.33333%;
  min-width: 400px;
  margin: 0 auto;
  .el-form {
    position: relative;
    .data_button {
      margin: 40px 0 0 0;
      /deep/.el-form-item__content {
        margin: 0 0 0 0 !important;
        text-align: center;
      }
    }
  }
}
</style>
