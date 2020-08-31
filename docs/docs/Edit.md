---
id: edit
title: 列表 List
sidebar_label: Edit
slug: /edit
---

### 代码示例

```html
<template>
  <fa-list data-provider="/test/users">
    <fa-list-field prop="name" label="姓名" />
    <fa-list-field prop="title" label="职务" />
  </fa-list>
</template>
```

# API

## FaList

fa-list 是对 el-table 的一层封装，让我们更加便捷的实现 CRUD 操作。除了 props 以外，如果需要传递其他 el-table 的 props，可以直接传递给 fa-list，这些属性最终会透传到 el-table 上。

### PROPS

| 属性名            | 类型             | 默认值 | 说明                                                                              |
| ----------------- | ---------------- | ------ | --------------------------------------------------------------------------------- |
| dataProvider      | string \| object | ''     | 请求的数据接口。如果是字符串直接填写路径，如果是对象的话包含 request 所需要的选项 |
| list              | Array            | []     | 列表数据，子组件中通过 \$emit 触发，所以需要.sync 修饰符                          |
| total             | number           | 0      | 列表数据的条数，子组件中通过 \$emit 触发，所以需要.sync 修饰符                    |
| pageSize          | number           | 10     | 每一页呈现的数据条数，子组件中通过 \$emit 触发，所以需要.sync 修饰符              |
| currentPageNumber | number           | 1      | 当前的页数，子组件中通过 \$emit 触发，所以需要.sync 修饰符                        |
| usePagination     | boolean          | true   | 是否显示分页                                                                      |

### SLOTS

| 插槽名  | 说明                                           |
| ------- | ---------------------------------------------- |
| filters | 过滤条件（搜索条件），只能支持 fa-filters 组件 |
| default | 默认插槽，只会解析 fa-list-field 组件          |

### EVENTS

| 事件名 | 说明                       | 参数                       |
| ------ | -------------------------- | -------------------------- |
| error  | 列表渲染失败时会触发该事件 | e:Error 错误信息           |
| loaded | 列表渲染结束时会触发该事件 | data:Array <any\> 列表数据 |

## FaListField

fa-list-field 是对 el-table-column 的封装，它可以更快速的实现数据的显示。

### PROPS

| 属性名 | 类型          | 默认值 | 说明                                               |
| ------ | ------------- | ------ | -------------------------------------------------- |
| prop   | string        | ''     | 列所对应的对象属性名                               |
| label  | string        | ''     | 列名                                               |
| type   | 'text'\|'url' | 'text' | 当前列的属性，text 纯文本展示，url 会渲染为 a 标签 |

### SLOTS

| 插槽名  | 说明                             |
| ------- | -------------------------------- |
| default | 默认插槽，用于自定义展示列的数据 |

## FaFilters

fa-filters 用于快速创建过滤表单。

### PROPS

| 属性名          | 类型             | 默认值     | 说明                                                                              |
| --------------- | ---------------- | ---------- | --------------------------------------------------------------------------------- |
| dataProvider    | string \| object | ''         | 请求的数据接口。如果是字符串直接填写路径，如果是对象的话包含 request 所需要的选项 |
| form            | object           | {}         | 查询条件                                                                          |
| requestProcess  | function         | data=>data | 请求参数的数据处理函数，参数为请求参数对象，返回值为处理后的请求参数对象          |
| responseProcess | function         | data=>data | 返回值的数据处理函数，参数为 res.返回值为处理后的数据，直接被应用到 list 的渲染中 |

### SLOTS

| 插槽名  | 说明                                    |
| ------- | --------------------------------------- |
| default | 默认插槽，只会解析 fa-filter-field 组件 |

### EVENTS

| 事件名 | 说明                       | 参数                       |
| ------ | -------------------------- | -------------------------- |
| error  | 列表渲染失败时会触发该事件 | e:Error 错误信息           |
| loaded | 列表渲染结束时会触发该事件 | data:Array <any\> 列表数据 |

## FaFilterField

fa-filters 用于快速创建过滤表单。

### PROPS

| 属性名 | 类型   | 默认值 | 说明                                             |
| ------ | ------ | ------ | ------------------------------------------------ |
| field  | string | ''     | 字段名，会双向绑定到 fa-filters 组件内的 form 上 |

### SLOTS

| 插槽名  | 说明                                                                        |
| ------- | --------------------------------------------------------------------------- |
| default | 默认插槽，默认是 el-input，如果需要渲染其它组件，可以传入，比如 el-select。 |
