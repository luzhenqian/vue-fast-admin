<template>
  <el-table v-loading="loading" :data="list" v-bind="$attrs">
    <slot />
  </el-table>
</template>

<script>
export default {
  name: 'FaDataGrid',
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    },
    loading: {
      type: Boolean,
      default: () => {
        return false
      }
    }
  },
  data() {
    return {
    }
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
