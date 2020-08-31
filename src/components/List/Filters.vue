<template>
  <el-form size="small" :inline="true">
    <slot />
    <el-form-item>
      <el-button @click="search">搜索</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import request from '@/utils/request'
export default {
  name: 'FaFilters',
  props: {
    // 数据源 url
    dataProvider: {
      type: [Object, String],
      default: undefined
    },
    // 搜索表单
    form: {
      type: Object,
      default: undefined
    },
    // 处理数据
    process: {
      type: Function,
      default: (data) => {
        return data
      }
    }
  },
  data() {
    return {
    }
  },
  created() {},
  mounted() {
  },
  methods: {
    async search() {
      this.$parent.loading = true
      try {
        let res
        Object.keys(this.form).forEach(key => {
          if (!this.form[key]) {
            delete this.form[key]
          }
        })
        if (typeof this.dataProvider === 'string') {
          res = await request(`${this.dataProvider}`, {
            data: this.form,
            params: this.form
          })
        } else if (typeof this.dataProvider === 'object') {
          const { url, method } = this.dataProvider
          res = await request(url, {
            method,
            data: this.form,
            params: this.form
          })
        }
        this.$parent.refreshData(this.process(res))
      } finally {
        this.$parent.loading = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
