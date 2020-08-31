import List from '../components/List/index'
import ListField from '@/components/List/ListField'
import Filters from '@/components/List/Filters'
import FilterField from '@/components/List/FilterField'
import Actions from '@/components/List/Actions'
import Delete from '@/components/List/Delete'

import Create from '@/components/Create'
import CreateField from '@/components/Create/CreateField'

import Edit from '@/components/Edit'
import EditField from '@/components/Edit/EditField'

import _request from './request'

const components = [
  List,
  ListField,
  Filters,
  FilterField,
  Actions,
  Delete,
  Create,
  CreateField,
  Edit,
  EditField
]

function install(Vue, options) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })

  const { request } = options

  Vue.prototype.$request = request || _request
}

export default {
  install,
  List,
  ListField,
  Filters,
  FilterField,
  Actions,
  Delete,
  Create,
  CreateField,
  Edit,
  EditField
}
