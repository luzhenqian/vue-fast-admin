import List from './components/List/index'
import ListField from './components/List/ListField'
import Filters from './components/List/Filters/Filters'
import FilterField from './components/List/Filters/FilterField'
import Actions from './components/List/Actions/Actions'
import Delete from './components/List/Actions/Delete'

import Create from './components/Create'
import CreateField from './components/Create/CreateField'

import Edit from './components/Edit'
import EditField from './components/Edit/EditField'

import _request from './request'
import _moment from 'moment'
import _find from './request/find'
import _create from './request/create'
import _edit from './request/edit'
import _del from './request/del'

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

function install(Vue, options = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })

  const {
    request,
    moment,
    find,
    create,
    edit,
    del
  } = options

  if (request) {
    Vue.prototype.$request = request
  } else {
    Vue.prototype.$request = _request
  }

  if (moment) {
    Vue.prototype.$moment = moment
  } else {
    Vue.prototype.$moment = _moment
  }

  find ? Vue.prototype.$find = find : Vue.prototype.$find = _find
  create ? Vue.prototype.$create = create : Vue.prototype.$create = _create
  edit ? Vue.prototype.$edit = edit : Vue.prototype.$edit = _edit
  del ? Vue.prototype.$del = del : Vue.prototype.$del = _del

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
