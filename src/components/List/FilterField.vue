<template>
  <el-form-item v-bind="$attrs">
    <slot v-if="hasSlot" />
    <el-input v-else v-model="$parent.$parent.form[field]" />
  </el-form-item>
</template>

<script>
export default {
  name: 'FaFilterField',
  props: {
    field: {
      type: String,
      default: ''
    },
    // 父组件的搜索表单
    form: {
      type: Object,
      default: () => { return {} }
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
      hasSlot: false
    }
  },
  created() {},
  mounted() {
    this.hasSlot = 'default' in this.$slots
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
