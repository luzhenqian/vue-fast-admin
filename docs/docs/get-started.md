---
id: get-started
title: 开始使用
sidebar_label: 开始使用
slug: /get-started
---

## 安装

### 先决条件

#### Vue

支持 Vue 2.x。

#### Element-ui

至少 2.13.2，vue-fast-admin 依赖了 Element 中的如下组件，如果是引入完整的 Element 则不需要关心这些。如果是按需引入的话，需要把这些组件都引入到项目中。

| 组件名          |
| --------------- |
| el-table        |
| el-table-column |
| el-form         |
| el-form-column  |
| el-input        |

#### 打包构建工具

vue-fast-admin 不需要单独的打包构建工具配置（比如 webpack），它仅仅是导出了一些 vue 组件。可以打包构建 element-ui 的项目就可以处理这些组件。

### 安装 vue-fast-admin

```bash
npm install vue-fast-admin
```

### 引入 vue-fast-admin

虽然支持按需引入，但不推荐。因为 vue-fast-admin 提供的所有的组件几乎都非常有用，所以十分推荐完整引入。

```javascript
import Vue from "vue";
import VueFastAdmin from "vue-fast-admin";

Vue.use(VueFastAdmin);
```

### 全局配置

在引入 vue-fast-admin 时，可以传入一个全局配置对象。

它支持如下字段：

| 字段名  | 说明                                                                                                                                                                                                                                    |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| request | 用于发起 http 的函数，vue-fast-admin 内部会提供一个基于 axios 实现的函数。将其绑定到 Vue.prototype.\$request 上，实例中通过 this.\$request 使用。但是推荐传入一个自己的 request 函数。因为默认的 request 并不会处理认证鉴权之类的东西。 |
| moment  | 默认是 moment 库，将其绑定到 Vue.prototype.\$moment 上，实例中通过 this.\$moment 使用。如果项目中有安装 moment，可以传入 moment。                                                                                                       |
| find    | 请求函数，list 会使用改函数。                                                                                                                                                                                                           |
| create  | 创建函数。                                                                                                                                                                                                                              |
| edit    | 编辑函数。                                                                                                                                                                                                                              |
| del     | 删除函数。                                                                                                                                                                                                                              |

### 创建第一个页面

首先你需要有一个 api。

我们提供了一个用户列表的接口：https://5f3b4c4afff8550016ae5218.mockapi.io/api/test/users

它的返回值是这样的：

```json
{
  "code": 20000,
  "message": "",
  "total": 10890,
  "data": [
    {
      "id": "1",
      "createdAt": "2020-08-19T15:01:49.819Z",
      "name": "Leanna Metz",
      "title": "Liaison"
    },
    {
      "id": "2",
      "createdAt": "2020-08-19T11:53:00.352Z",
      "name": "Orrin Kreiger",
      "title": "Producer"
    },
    {
      "id": "3",
      "createdAt": "2020-08-19T13:47:23.501Z",
      "name": "Jordane Carroll",
      "title": "Manager"
    },
    {
      "id": "4",
      "createdAt": "2020-08-19T02:08:45.477Z",
      "name": "Madyson Kutch",
      "title": "Technician"
    },
    {
      "id": "5",
      "createdAt": "2020-08-20T00:22:28.636Z",
      "name": "Johnnie McDermott",
      "title": "Specialist"
    }
  ]
}
```

其中 data 属性用于渲染列表，total 属性用于分页。

在 vue 项目中的视图中创建一个视图组件。传统的目录结构一般是 /src/views/xxx.vue。

```html
<template>
  <fa-list data-provider="https://5f3b4c4afff8550016ae5218.mockapi.io/api/test/users">
    <fa-list-field prop="name" label="姓名" />
    <fa-list-field prop="title" label="职务" />
  </fa-list>
</template>
```

然后将这个页面配置到 vue-router 的配置表中，在浏览器就可以看到这个页面了。
