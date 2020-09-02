<template>
  <div v-loading="loading" style="padding: 12px; max-width: 600px;">
    <slot name="title" />
    <el-form ref="form" :model="data" label-width="80px" v-bind="$attrs">
      <slot name="default" />
      <el-form-item>
        <el-button type="primary" @click="_create">创建</el-button>
        <el-button v-if="reset" @click="_reset">重置</el-button>
      </el-form-item>
      <slot name="actions" />
    </el-form>
  </div>
</template>

<script>
export default {
  name: "FaCreate",
  props: {
    // 数据源 url
    dataProvider: {
      type: [Object, String],
      default: undefined,
    },
    // 数据
    data: {
      type: Object,
      default: () => {
        return {};
      },
    },
    // 重置数据
    reset: {
      type: Boolean,
      default: false,
    },
    // 处理返回数据
    responseProcess: {
      type: Function,
      default: () => (data) => data,
    },
    // 处理发送前的数据
    requestProcess: {
      type: Function,
      default: () => (data) => data,
    },
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    async _create() {
      // 校验
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          // 校验通过，开始加载
          this.loading = true;
          let provider;
          // const data = this.data
          if (typeof this.dataProvider === "string") {
            provider.url = this.dataProvider;
            provider.method = "POST";
          } else if (typeof this.dataProvider === "object") {
            await this.requestProcess(this.dataProvider);
            provider = this.dataProvider;
          }
          try {
            const res = await this.responseProcess(
              await this.$create(provider, this.data)
            );
            this.$emit("success", res);
          } catch (e) {
            // 触发 error 事件
            this.$emit("error", e);
          } finally {
            this.loading = false;
            // 无论成功失败，都会触发 loaded 事件
            this.$emit("created");
          }
        } else {
          return false;
        }
      });
    },
    _reset() {
      this.$emit("update:data", {});
      // this.data = {}
    },
  },
};
</script>
