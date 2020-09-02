import Vue from 'vue'

/**
 * 删除
 * @param {Object} provider 请求配置对象
 * @param {string} id 删除 ID
 */
async function del(provider, id) {
  // 标准的 RESTful API 的 delete 方法不允许附带 body 体
  if (id) provider.url += `/${id}`
  return await Vue.prototype.$request(provider)
}

export default del
