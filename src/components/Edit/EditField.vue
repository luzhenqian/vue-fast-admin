<template>
  <el-form-item v-bind="$attrs" :prop="field">
    <slot v-if="hasSlot" />
    <el-input
      v-else
      v-model="$parent.$parent.data[field]"
    />
  </el-form-item>
</template>

<script>
export default {
  name: 'FaEditField',
  props: {
    // 字段名
    field: {
      required: true,
      type: String,
      default: undefined
    }
  },
  data() {
    return {
      hasSlot: false
    }
  },
  mounted() {
    this.hasSlot = 'default' in this.$slots
  }
}
</script>
