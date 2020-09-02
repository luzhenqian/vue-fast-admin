<template>
  <el-button type="text" :disabled="deleting" @click="_del">
    <slot v-if="hasSlot" />
    <div v-else>删除</div>
  </el-button>
</template>

<script>
export default {
  name: 'FaDelete',
  props: {
    // 删除
    dataProvider: {
      type: [Object, String],
      default: undefined
    },
    // 当前行的数据
    row: {
      required: true,
      type: Object,
      default: undefined
    }
  },
  data() {
    return {
      hasSlot: false,
      deleting: false
    }
  },
  mounted() {
    this.hasSlot = 'default' in this.$slots
  },
  methods: {
    // 加载数据
    async _del() {
      // 开始 loading
      this.deleting = true
      // 处理 provider
      let provider = Object.create(null)
      if (typeof this.dataProvider === 'string') {
        provider.url = this.dataProvider
        provider.method = 'DELETE'
      } else if (typeof this.dataProvider === 'object') {
        await this.requestProcess(this.dataProvider)
        provider = this.dataProvider
      }
      let res
      try {
        const { id } = this.row
        if (!id) {
          console.log('row does not have an id field')
          return
        }
        provider.params = { id }
        res = await this.responseProcess(await this.$del(provider))
        this.$emit('success', res)
      } catch (e) {
        // 触发 error 事件
        this.$emit('error', e)
      } finally {
        this.$emit('deleted')
        this.deleting = false
      }
    }
  }
}
</script>
