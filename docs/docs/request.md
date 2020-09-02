---
id: request
title: http 请求函数 request
sidebar_label: request
slug: /request
---

默认的 request 是基于 axios 封装的，但是并不会处理鉴权认证等问题。

您可以在 Vue.use 加载 vue-fast-admin 的时候传入的 options 中附带 request 属性。

如果传入了 request 属性的话，就不会加载默认的 request。
