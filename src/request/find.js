import Vue from 'vue'

/**
 * 查找
 * @param {Object} provider 请求配置对象
 * @param {Object} data 查询条件
 */
async function find(provider, data) {
  if (data) {
    provider.data = data
    provider.params = data
  }
  return await Vue.prototype.$request(provider)
}

export default find
