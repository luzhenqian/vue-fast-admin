<template>
  <div style='padding: 12px;'>
    <slot name="filters" />
    <fa-data-grid :list="list || iList" :loading="loading" v-bind="$attrs">
      <slot name="default" />
      <slot name="actions" />
    </fa-data-grid>
    <fa-pagination
      v-if="usePagination"
      style="text-align: right;"
      :page-size="pageSize || iPageSize"
      :total="total || iTotal"
      :size-change="onSizeChange"
      :current-change="onCurrentChange"
    />
  </div>
</template>

<script>
// import { find } from '../../fast-request'
import DataGrid from './DataGrid'
import Pagination from './Pagination'
import Filters from './Filters/Filters'
export default {
  name: 'FaList',
  components: {
    [DataGrid.name]: DataGrid,
    [Pagination.name]: Pagination,
    [Filters.name]: Filters
  },
  props: {
    // 是否使用分页
    usePagination: {
      type: Boolean,
      default: true
    },
    // 填充数据
    list: {
      type: Array,
      default: undefined
    },
    // 数据源 url
    dataProvider: {
      type: [Object, String],
      default: undefined
    },
    // 总条数
    total: {
      type: Number,
      default: undefined
    },
    // 每页条数
    pageSize: {
      type: Number,
      default: undefined
    },
    // 当前页数
    pageNumber: {
      type: Number,
      default: undefined
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
      iList: [],
      iTotal: 0,
      iPageSize: 10,
      iPageNumber: 1,
      loading: false
    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    // 加载数据
    async loadData() {
      // 开始 loading
      this.loading = true
      // 处理 provider
      let provider = Object.create(null)
      if (typeof this.dataProvider === 'string') {
        provider.url = this.dataProvider
        provider.method = 'GET'
      } else if (typeof this.dataProvider === 'object') {
        await this.requestProcess(this.dataProvider)
        provider = this.dataProvider
      }
      try {
        const res = await this.responseProcess(await this.$find(provider))
        this.setData(res)
        this.$emit('success', res)
      } catch (e) {
        // 触发 error 事件
        this.$emit('error', e)
      } finally {
        this.loading = false
        // 无论成功失败，都会触发 loaded 事件
        this.$emit('loaded')
      }
    },
    // 提供给子组件刷新数据
    refreshData(data) {
      this.setData(data)
    },
    // 通过事件通知父组件
    setData(data) {
      // 区别父组件是否传入 list
      if (this.list !== undefined) {
        this.$emit('update:list', this.responseProcess(data.data || data))
      } else {
        this.iList = this.responseProcess(data.data || data)
      }
      if (this.total !== undefined) {
        this.$emit('update:total', data.total)
      } else {
        this.iTotal = data.total
      }
    },
    // 改变每页大小的回调函数
    onSizeChange(pageSize) {
      if (this.pageSize !== undefined) {
        this.$emit('update:pageSize', pageSize)
      } else {
        this.iPageSize = pageSize
      }
      this.loadData()
    },
    // 改变页码的回调函数
    onCurrentChange(currentPage) {
      if (this.pageNumber !== undefined) {
        this.$emit('update:pageNumber', currentPage)
      } else {
        this.iPageNumber = currentPage
      }
      this.loadData()
    }
  }
}
</script>
