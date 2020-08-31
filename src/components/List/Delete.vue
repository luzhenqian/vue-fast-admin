<template>
  <el-button type="text" @click="_del">删除</el-button>
</template>

<script>
import { del } from '../fast-request'
export default {
  name: 'FaDelete',
  props: {
    // 删除
    dataProvider: {
      type: [Object, String],
      default: undefined
    },
    // 删除
    row: {
      required: true,
      type: Object,
      default: undefined
    }
  },
  data() {
    return {
    }
  },
  created() {},
  mounted() {},
  methods: {
    _del() {
      let dataProvider = this.dataProvider
      if (typeof this.dataProvider === 'string') {
        dataProvider = {
          url: dataProvider,
          method: 'DELETE'
        }
      }
      del(dataProvider, this.row.id)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
