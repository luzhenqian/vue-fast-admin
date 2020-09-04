---
id: list
title: 列表 List
sidebar_label: List
slug: /
---

# API

## FaList

`fa-list` 是对 `el-table` 的一层封装，让我们更加便捷的实现数据的展示。除了 `props` 以外，如果需要传递其他 `el-table` 的 `props`，可以直接传递给 `fa-list`，这些属性最终会透传到 `el-table` 上。

### 示例

```html
<template>
  <fa-list data-provider="/test/users">
    <fa-list-field prop="name" label="姓名" />
    <fa-list-field prop="title" label="职务" />
  </fa-list>
</template>
```

### PROPS

| 属性名              | 类型       | 默认值         | 说明                                                                                             |
| ------------------- | ---------- | -------------- | ------------------------------------------------------------------------------------------------ |
| `dataProvider`      | `string`   | `object`       | ''                                                                                               | 请求的数据接口。如果是字符串直接填写路径，如果是对象的话包含 `request` 所需要的选项 |
| `list`              | `Array`    | []             | 列表数据，子组件中通过 `$emit` 触发，所以需要 `.sync` 修饰符                                     |
| `total`             | `number`   | 0              | 列表数据的条数，子组件中通过 `$emit` 触发，所以需要 `.sync` 修饰符                               |
| `pageSize`          | `number`   | 10             | 每一页呈现的数据条数，子组件中通过 `$emit` 触发，所以需要 `.sync` 修饰符                         |
| `currentPageNumber` | `number`   | 1              | 当前的页数，子组件中通过 `$emit` 触发，所以需要.sync 修饰符                                      |
| `requestProcess`    | `Function` | `data => data` | 请求前的数据处理函数，默认参数为 provider 上下文，可以直接修改 provider 中的属性，不需要返回数据 |
| `responseProcess`   | `Function` | `data => data` | 返回数据的处理函数，默认参数为 `res`，需要返回一个新的数据作为列表渲染数据                       |

### SLOTS

| 插槽名    | 说明                                             |
| --------- | ------------------------------------------------ |
| `filters` | 过滤条件（搜索条件），只能支持 `fa-filters` 组件 |
| `actions` | 表格操作                                         |
| `default` | 默认插槽，只会解析 `fa-list-field` 组件          |

### EVENTS

| 事件名    | 说明                                       | 参数                        |
| --------- | ------------------------------------------ | --------------------------- |
| `success` | 列表渲染成功时会触发该事件                 | `data:Array <any>` 列表数据 |
| `error`   | 列表渲染失败时会触发该事件                 | `e:Error` 错误信息          |
| `loaded`  | 无论成功与否，列表渲染结束时都会触发该事件 |

## FaListField

`fa-list-field` 是对 `el-table-column` 的封装，它可以更快速的实现数据的显示。

### PROPS

| 属性名  | 类型     | 默认值  | 说明                 |
| ------- | -------- | ------- | -------------------- |
| `prop`  | `string` | ''      | 列所对应的对象属性名 |
| `label` | `string` | ''      | 列名                 |
| `type`  | `'text'` | `'url'` | 'text'               | 当前列的属性，`text` 纯文本展示，`url` 会渲染为 `a` 标签 |

### SLOTS

| 插槽名    | 说明                             |
| --------- | -------------------------------- |
| `default` | 默认插槽，用于自定义展示列的数据 |

## FaFilters

`fa-filters` 用于快速创建过滤表单。

### 示例

```html
<template>
  <fa-list data-provider="/test/users">
    <fa-filters slot="filters" data-provider="/test/users">
      <fa-filter-field field="name" label="姓名" />
      <fa-filter-field field="title" label="职务" />
    </fa-filters>
    <fa-list-field prop="name" label="姓名" />
    <fa-list-field prop="title" label="职务" />
  </fa-list>
</template>
```

### PROPS

| 属性名            | 类型       | 默认值       | 说明                                                                                   |
| ----------------- | ---------- | ------------ | -------------------------------------------------------------------------------------- |
| `dataProvider`    | `string`   | `object`     | ''                                                                                     | 请求的数据接口。如果是字符串直接填写路径，如果是对象的话包含 `request` 所需要的选项，默认使用 `POST` 方式请求 |
| `form`            | `object`   | {}           | 查询条件                                                                               |
| `requestProcess`  | `function` | `data=>data` | 请求参数的数据处理函数，参数为请求参数对象，返回值为处理后的请求参数对象               |
| `responseProcess` | `function` | `data=>data` | 返回值的数据处理函数，参数为 `res`。返回值为处理后的数据，直接被应用到 `list` 的渲染中 |

### SLOTS

| 插槽名    | 说明                                      |
| --------- | ----------------------------------------- |
| `default` | 默认插槽，只会解析 `fa-filter-field` 组件 |

### EVENTS

| 事件名    | 说明                       | 参数                        |
| --------- | -------------------------- | --------------------------- |
| `error`   | 列表渲染失败时会触发该事件 | `e:Error` 错误信息          |
| `success` | 列表渲染成功时会触发该事件 | `data:Array <any>` 列表数据 |
| `loaded`  | 列表渲染结束时会触发该事件 |                             |

## FaFilterField

`fa-filter-field` 是对 `el-form-item` 的封装。

### PROPS

| 属性名  | 类型     | 默认值 | 说明                                                 |
| ------- | -------- | ------ | ---------------------------------------------------- |
| `field` | `string` | ''     | 字段名，会双向绑定到 `fa-filters` 组件内的 `form` 上 |
| `label` | `string` | ''     | 用于页面展示的字段名                                 |

### SLOTS

| 插槽名    | 说明                                                                                |
| --------- | ----------------------------------------------------------------------------------- |
| `default` | 默认插槽，默认是 `el-input`，如果需要渲染其它组件，可以自行传入，比如 `el-select`。 |

## FaActions

`fa-actions` 用于快速创建表单的操作。

### 示例

```html
<template>
  <fa-list data-provider="/test/users">
    <fa-actions slot="actions">
      <div slot-scope="scope">
        <fa-delete data-provider="/test/users" :row="scope.row" />
      </div>
    </fa-actions>
    <fa-list-field prop="name" label="姓名" />
    <fa-list-field prop="title" label="职务" />
  </fa-list>
</template>
```

### SLOTS

| 插槽名    | 说明       |
| --------- | ---------- |
| `default` | 默认插槽。 |

## FaDelete

`fa-delete` 用于快速创建对某行数据的删除操作。

### PROPS

| 属性名         | 类型     | 默认值      | 说明            |
| -------------- | -------- | ----------- | --------------- |
| `dataProvider` | `string` | `object`    | ''              | 请求的数据接口。如果是字符串直接填写路径，如果是对象的话包含 `request` 所需要的选项，默认使用 `DELETE` 方式请求 |
| `row`          | `object` | `undefined` | 当前 `row` 对象 |

### SLOTS

| 插槽名    | 说明                                                            |
| --------- | --------------------------------------------------------------- |
| `default` | 默认插槽，默认是 「删除」，如果需要渲染其它组件，可以自行传入。 |

### EVENTS

| 事件名    | 说明                                 | 参数                   |
| --------- | ------------------------------------ | ---------------------- |
| `error`   | 删除失败时会触发该事件               | `e:Error` 错误信息     |
| `success` | 删除成功时会触发该事件               | `e:Error` 错误信息     |
| `deleted` | 无论成功与否，删除结束时会触发该事件 | `id: string` 删除 `id` |
