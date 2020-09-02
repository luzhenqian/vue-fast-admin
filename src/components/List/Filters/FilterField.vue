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
    }
  },
  data() {
    return {
      hasSlot: false
    }
  },
  created() {
    if (!this.$parent.$parent.form) {
      this.$parent.$parent.form = {}
    }
  },
  mounted() {
    this.hasSlot = 'default' in this.$slots
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
