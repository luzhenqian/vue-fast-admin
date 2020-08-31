<template>
  <el-table-column label="操作" fixed="right" v-bind="$attrs">
    <template slot-scope="scope">
      <slot :row="scope.row" />
    </template>
  </el-table-column>
</template>

<script>
export default {
  name: 'FaActions',
  props: {
    // 删除
    dataProvider: {
      type: [Object, String],
      default: undefined
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
</style>
