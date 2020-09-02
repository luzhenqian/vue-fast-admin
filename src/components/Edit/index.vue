<template>
  <div v-loading="loading" style="padding: 12px; max-width: 600px;">
    <slot name="edit" />
    <el-form
      ref="form"
      :model="data"
      label-width="80px"
      v-bind="$attrs"
    >
      <slot name="default" />
      <el-form-item>
        <el-button type="primary" @click="_edit">保存</el-button>
        <el-button v-if="reset" @click="_reset">重置</el-button>
        <!-- <el-button v-if="clear" @click="_clear">清空</el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'FaEdit',
  props: {
    // 提交数据的 url
    dataProvider: {
      type: [Object, String],
      default: undefined
    },
    // 数据
    data: {
      type: Object,
      default: () => { return {} }
    },
    // 是否显示重置按钮
    reset: {
      type: Boolean,
      default: false
    },
    // 是否显示清空按钮
    clear: {
      type: Boolean,
      default: false
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
  data() {
    return {
      loading: false
    }
  },
  methods: {
    async _edit() {
      // 校验
      this.$refs.form.validate(async(valid) => {
        if (valid) {
          // 校验通过，开始加载
          this.loading = true
          // 处理 provider
          let provider
          if (typeof this.dataProvider === 'string') {
            provider.url = this.dataProvider
            provider.method = 'POST'
          } else if (typeof this.dataProvider === 'object') {
            await this.requestProcess(this.dataProvider)
            provider = this.dataProvider
          }
          try {
            const res = await this.responseProcess(await this.$edit(provider, this.data))
            // 触发 success 事件
            this.$emit('success', res)
          } catch (e) {
            // 触发 error 事件
            this.$emit('error', e)
          } finally {
            this.loading = false
            // 无论成功失败，都会触发 loaded 事件
            this.$emit('edited')
          }
        } else {
          return false
        }
      })
    },
    _reset() {
      this.$emit('update:data', {})
    }
  }
}
</script>
