---
id: create
title: 创建表单 Create
sidebar_label: Create
slug: /create
---

# API

## FaCreate

fa-create 是对 el-form 的一层封装，让我们更加便捷的实现数据的创建操作。除了文档中列举的 props 以外，如果需要传递其他 el-form 的 props，可以直接传递给 fa-create，这些属性最终会透传到 el-form 上。

### PROPS

| 属性名          | 类型             | 默认值       | 说明                                                                                                                     |
| --------------- | ---------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------ |
| dataProvider    | string \| object | ''           | 请求的数据接口。如果是字符串直接填写路径，如果是对象的话包含 request 所需要的选项。如果是字符串，默认的请求方式是 POST。 |
| data            | object           | {}           | 表格数据，子组件中通过 \$emit 触发，所以需要.sync 修饰符                                                                 |
| reset           | boolean          | false        | 是否开启重置模式，如果设置为 true，会出现重置按钮                                                                        |
| requestProcess  | Function         | data => data | 请求前的数据处理函数，默认参数为 provider 上下文，可以直接修改 provider 中的属性，不需要返回数据                         |
| responseProcess | Function         | data => data | 返回数据的处理函数，默认参数为 res，需要返回一个新的数据作为列表渲染数据                                                 |

### SLOTS

| 插槽名  | 说明                                    |
| ------- | --------------------------------------- |
| default | 默认插槽，只会解析 fa-create-field 组件 |
| title   | 顶部标题                                |
| actions | 除创建、重置外的其他操作                |

### EVENTS

| 事件名  | 说明                   | 参数                |
| ------- | ---------------------- | ------------------- |
| success | 创建成功时会触发该事件 | data:any 接口返回值 |
| error   | 创建失败时会触发该事件 | e:Error 错误信息    |
| created  | 创建结束时会触发该事件 |                     |

## FaCreateField

fa-create-field 是对 el-form-item 的封装，它可以更快速的实现数据的录入。

如果不传入 slot ，默认渲染 el-input。

### PROPS

| 属性名 | 类型   | 默认值 | 说明                   |
| ------ | ------ | ------ | ---------------------- |
| field  | string | ''     | 该录入项所对应的属性名 |
| label  | string | ''     | 显示在界面上的字段名   |

### SLOTS

| 插槽名  | 说明                             |
| ------- | -------------------------------- |
| default | 默认插槽，用于自定义展示列的数据 |
