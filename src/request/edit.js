import Vue from 'vue'

/**
 * 编辑
 * @param {Object} provider 请求配置对象
 * @param {Object} data 编辑数据
 */
async function edit(provider, data) {
  if (data) provider.data = data
  return await Vue.prototype.$request(provider)
}

export default edit
