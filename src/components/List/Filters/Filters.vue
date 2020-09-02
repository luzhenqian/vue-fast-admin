<template>
  <el-form size="small" :inline="true">
    <slot />
    <el-form-item>
      <el-button @click="search">搜索</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
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
      default: () => { return {} }
    },
    // 处理返回数据
    responseProcess: {
      type: Function,
      default: (data) => {
        return data
      }
    },
    // 处理发送前的数据
    requestProcess: {
      type: Function,
      default: (data) => {
        return data
      }
    }
  },
  methods: {
    // 搜索
    async search() {
      // 开始 loading
      this.$parent.loading = true
      // 处理空数据
      Object.keys(this.form).forEach(key => {
        if (!this.form[key]) {
          delete this.form[key]
        }
      })
      // 处理 provider
      let provider = Object.create(null)
      if (typeof this.dataProvider === 'string') {
        provider.url = this.dataProvider
        provider.method = 'GET'
        provider.data = this.form
        provider.params = this.form
        await this.requestProcess(provider)
      } else if (typeof this.dataProvider === 'object') {
        await this.requestProcess(this.dataProvider)
        provider = this.dataProvider
      }
      try {
        const res = await this.responseProcess(await this.$find(provider))
        // 调用父组件的刷新数据函数
        this.$parent.refreshData(this.responseProcess(res))
        this.$emit('success', res)
      } catch (e) {
        // 触发 error 事件
        this.$emit('error', e)
      } finally {
        this.$parent.loading = false
        // 无论成功失败，都会触发 loaded 事件
        this.$emit('loaded')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
