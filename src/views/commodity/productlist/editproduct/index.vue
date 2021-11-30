<template>
  <el-dialog
    title="修改商品信息"
    :visible.sync="getDialogFormVisible"
    @close="closedialog"
  >
    <el-form :model="form">
      <el-form-item label="商品编号" :label-width="formLabelWidth">
        <el-input v-model="form.id" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="商品名称" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="商品描述" :label-width="formLabelWidth">
        <el-input v-model="form.desc" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="商品分类" :label-width="formLabelWidth">
        <el-cascader
          v-model="value"
          :options="options"
          @change="handleChange"
        ></el-cascader>
      </el-form-item>

      <img-upload class="img_upload"></img-upload>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="isDialogFormVisible">取 消</el-button>
      <el-button type="primary" @click="isDialogFormVisible">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import ImgUpload from '@/components/imgupload/index.vue'

export default {
  components: {
    ImgUpload
  },
  props: {
    dialogFormVisible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      dialog: false,
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
      // 选中的商品
      form: {
        id: '',
        name: '',
        desc: '',
        category: ''
      },
      // 表单宽度
      formLabelWidth: '120px'
    }
  },
  computed: {
    getDialogFormVisible: {
      get () {
        return this.dialogFormVisible
      },
      set (dialog) {
        this.dialog = dialog
      }
    }
  },
  methods: {
    isDialogFormVisible () {
      this.$emit('isDialogFormVisible', false)
    },
    closedialog () {
      this.$emit('isDialogFormVisible', false)
    },
    // 分类
    handleChange (value) {
      console.log(value)
    }
  }
}
</script>

<style lang="less" scoped>
.img_upload {
  margin-left: 50px;
}
</style>
