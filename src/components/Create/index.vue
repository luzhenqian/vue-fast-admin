<template>
  <div v-loading="loading" class="l-create-wrap">
    <slot name="create" />
    <el-form
      ref="form"
      :model="data"
      label-width="80px"
      v-bind="$attrs"
    >
      <slot name="default" />
      <el-form-item>
        <el-button type="primary" @click="create">创建</el-button>
        <el-button v-if="reset" @click="_reset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import request from '@/utils/request'
// import Axios from 'axios'
export default {
  name: 'FaCreate',
  props: {
    // 数据源 url
    dataProvider: {
      type: [Object, String],
      default: undefined
    },
    // 数据
    data: {
      type: Object,
      default: () => { return {} }
    },
    // 数据
    reset: {
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
    async create() {
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
              // TODO: 代理只支持 get
              // await Axios.post('http://localhost:9527/dev-api/test/users', data)
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
      // this.data = {}
    }
  }
}
</script>

<style>
.l-create-wrap{
  padding: 12px;
  max-width: 600px;
}
</style>
