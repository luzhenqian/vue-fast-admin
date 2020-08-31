<template>
  <el-table-column v-if="type==='text'" v-bind="$attrs" />
  <el-table-column v-else-if="type==='url'" v-bind="$attrs">
    <template #default="scope">
      <a :href="scope.row[$attrs.prop]" target="view_window">{{ scope.row[$attrs.prop] }}</a>
    </template>
  </el-table-column>
</template>

<script>
export default {
  name: 'FaListField',
  props: {
    // 类型 text|url
    type: {
      type: String,
      default: 'text'
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
