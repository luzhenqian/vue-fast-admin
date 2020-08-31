<template>
  <el-pagination
    layout="total, sizes, prev, pager, next, jumper"
    :total="total"
    :page-size="pageSize"
    @size-change="sizeChange"
    @current-change="currentChange"
  />
</template>

<script>
export default {
  name: 'FaPagination',
  props: {
    total: {
      default: 0,
      type: Number
    },
    pageSize: {
      default: 10,
      type: Number
    },
    sizeChange: {
      type: Function,
      default: () => () => {}
    },
    currentChange: {
      type: Function,
      default: () => () => {}
    }
  },
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>

</style>
