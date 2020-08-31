<template>
  <div v-loading="loading" class="l-edit-wrap">
    <slot name="edit" />
    <el-form
      ref="form"
      :model="data"
      label-width="80px"
      v-bind="$attrs"
    >
      <slot name="default" />
      <el-form-item>
        <el-button type="primary" @click="edit">保存</el-button>
        <el-button v-if="reset" @click="_reset">重置</el-button>
        <!-- <el-button v-if="clear" @click="_clear">清空</el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import request from '@/utils/request'
export default {
  name: 'FaEdit',
  props: {
    // 提交数据的 url
    dataProvider: {
      type: [Object, String],
      default: undefined
    },
    // 数据
    data: {
      type: Object,
      default: () => { return {} }
    },
    // 是否显示重置按钮
    reset: {
      type: Boolean,
      default: false
    },
    // 是否显示清空按钮
    clear: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      loading: false
    }
  },
  methods: {
    async edit() {
      this.$refs.form.validate(async(valid) => {
        if (valid) {
          this.loading = true
          try {
            const data = this.data
            if (typeof this.dataProvider === 'string') {
              await request(this.dataProvider, {
                method: 'POST',
                data
              })
            } else if (typeof this.dataProvider === 'object') {
              const { url, method } = this.dataProvider
              await request(url, {
                method,
                data
              })
            }
          } finally {
            this.loading = false
          }
        } else {
          return false
        }
      })
    },
    _reset() {
      this.$emit('update:data', {})
    }
  }
}
</script>

<style>
.l-edit-wrap{
  padding: 12px;
  max-width: 600px;
}
</style>
