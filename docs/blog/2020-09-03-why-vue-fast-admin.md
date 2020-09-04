---
slug: why-vue-fast-admin
title: 为什么需要 vue-fast-admin？
author: 卢振千
author_title: vue-fast-admin 维护者
author_url: https://github.com/luzhenqian
author_image_url: https://avatars1.githubusercontent.com/u/33050549?s=60&v=4
tags: [vue-fast-admin]
---

现在已经有很多 `Vue` 的组件库，为什么还需要 `vue-fast-admin`？

<!--truncate-->

## vue-fast-admin 不是一个样式组件库或者功能组件库。

`vue-fast-admin` 是一个用于快速构建 To B 系统中数据展示和数据提交的组件库。它可以在使用最少代码的情况下渲染出表格和表单等组件。

## vue-fast-admin 的核心是简化请求和渲染。

开发一个表格，传统的做法往往有如下几步：

1. 编写 `api` 请求函数。

2. 在 `template` 中创建表格和分页模板。

3. 在 `data` 中声明数据。

4. 在 `methods` 中创建请求数据方法、每页显示条数改变方法、当前页数改变方法。

5. 在 `create` 或者 `mounted` 生命周期中发起请求，并将数据赋值给 `data` 中声明的数据。

6. 在 `watch` 中监听分页相关变化，重新请求数据。

整个过程相对繁琐，用代码来做一个简单的实现。

编写 `api` 请求函数。

```js
// user.js
import request from "@/utils/request";

async function getUsers(pageSize, pageNumber) {
  return await request({
    url: "/users",
    method: "GET",
    data: { pageSize, pageNumber },
  });
}

export { getUsers };
```

编写 `vue` 组件。

```html
<template>
  <div>
    <el-table :data="data">
      <el-table-column prop="name" label="姓名" />
      <el-table-column prop="title" label="职务" />
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageNumber"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
  import { getUsers } from "@/api/user";

  export default {
    data: () => ({ users: [], total: 0, pageSize: 10, pageNumber: 1 }),
    methods: {
      async loadUsers() {
        const { data, total } = await getUsers(this.pageSize, this.pageNumber);
        this.users = data;
        this.total = total;
      },
      handleSizeChange(val) {
        this.pageSize = val;
      },
      handleCurrentChange(val) {
        this.pageNumber = val;
      },
    },
    created() {
      this.loadUsers();
    },
    watch: {
      pageSize() {
        this.loadUsers();
      },
      pageNumber() {
        this.loadUsers();
      },
    },
  };
</script>
```

而上面这些事情，`vue-fast-admin` 仅需要 6 行代码就可以做到。

```html
<template>
  <fa-list
    data-provider="https://5f3b4c4afff8550016ae5218.mockapi.io/api/test/users"
  >
    <fa-list-field prop="name" label="姓名" />
    <fa-list-field prop="title" label="职务" />
  </fa-list>
</template>
```

它会将流程简化为如下步骤：

1. 在 `template` 中创建表格模板。

2. 指定 `data-provider`。

简化代码，聚焦业务。就是 `vue-fast-admin` 的意义。

感谢阅读！
