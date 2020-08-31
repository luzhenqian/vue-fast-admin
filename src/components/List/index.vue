<template>
  <div class="l-datagrid">
    <slot name="filters" />
    <fa-data-grid :list="list || iList" :loading="loading">
      <slot name="default" />
      <slot name="actions" />
    </fa-data-grid>
    <fa-pagination
      v-if="usePagination"
      class="l-pagination"
      :page-size="pageSize || iPageSize"
      :total="total || iTotal"
      :size-change="onSizeChange"
      :current-change="onCurrentChange"
    />
  </div>
</template>

<script>
import request from '@/utils/request'
import DataGrid from './DataGrid'
import Pagination from './Pagination'
import Filters from './Filters'
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
      iList: [],
      iTotal: 0,
      iPageSize: 10,
      iPageNumber: 1,
      loading: false
    }
  },
  created() {},
  mounted() {
    this.loadData()
  },
  methods: {
    async loadData() {
      this.loading = true
      try {
        let res
        if (typeof this.dataProvider === 'string') {
          // const res = await request(`${this.dataProvider}?pageSize=${pageSize}&pageNumber=${pageNumber}`)
          res = await request(`${this.dataProvider}`)
        }
        this.setData(res)
      } finally {
        this.loading = false
      }
    },

    setData(data) {
      if (this.list !== undefined) {
        this.$emit('update:list', this.process(data.data || data))
      } else {
        this.iList = this.process(data.data || data)
      }
      if (this.total !== undefined) {
        this.$emit('update:total', data.total)
      } else {
        this.iTotal = data.total
      }
    },

    refreshData(data) {
      this.setData(data)
    },

    onSizeChange(pageSize) {
      if (this.pageSize !== undefined) {
        this.$emit('update:pageSize', pageSize)
      } else {
        this.iPageSize = pageSize
      }

      console.log('每页数量:', pageSize)
      this.loadData()
    },

    onCurrentChange(currentPage) {
      if (this.pageNumber !== undefined) {
        this.$emit('update:pageNumber', currentPage)
      } else {
        this.iPageNumber = currentPage
      }
      console.log('当前页码:', currentPage)
      this.loadData()
    }
  }
}
</script>

<style lang="scss" scoped>
.l-datagrid {
 padding: 12px;
}

.l-pagination {
  text-align: right;
}
</style>
