import Vue from 'vue'

/**
 * 创建
 * @param {Object} provider 请求配置对象
 * @param {Object} data 创建数据
 */
async function create(provider, data) {
  if (data) provider.data = data
  return await Vue.prototype.$request(provider)
}

export default create
