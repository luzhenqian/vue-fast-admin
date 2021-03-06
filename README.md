<!-- ## :star: 特性

- 支持ES6+或TypeScript编写源码，编译生成生产代码
- 多环境支持（支持浏览器原生，支持AMD，CMD，支持Webpack，Rollup，fis等，支持Node）
- 集成[jsmini](https://github.com/jsmini)

> 注意: 如果不同时使用 `export` 与 `export default` 可打开 `legacy模式`，`legacy模式` 下的模块系统可以兼容 `ie6-8`，见rollup配置文件 -->
<!--
## :pill: 兼容性
单元测试保证支持如下环境：

| IE   | CH   | FF   | SF   | OP   | IOS  | Android   | Node  |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ----- |
| 6+   | 29+ | 55+  | 9+   | 50+  | 9+   | 4+   | 4+ |

**注意：编译代码依赖ES5环境，对于ie6-8需要引入[es5-shim](http://github.com/es-shims/es5-shim/)才可以兼容，可以查看[demo/demo-global.html](./demo/demo-global.html)中的例子**
 -->

<!-- ## :open_file_folder: 目录介绍

```
.
├── demo 使用demo
├── dist 编译产出代码
├── doc 项目文档
├── src 源代码目录
├── test 单元测试
├── CHANGELOG.md 变更日志
└── TODO.md 计划功能
``` -->

## :star: 简介

基于 Vue 和 Element-ui，面向后端工程师的快速开发组件库。

## :rocket: 使用者指南

通过 npm 安装。

```bash
npm install --save vue-fast-admin
```

引入 vue-fast-admin。

```js
import Vue from "vue";
import VueFastAdmin from "vue-fast-admin";

Vue.use(VueFastAdmin);
```

编写一个带有分页请求功能的 `table`。

```html
<template>
  <fa-list data-provider="https://5f3b4c4afff8550016ae5218.mockapi.io/api/test/users" >
    <fa-list-field prop="name" label="姓名" />
    <fa-list-field prop="title" label="职务" />
  </fa-list>
</template>
```

## :bookmark_tabs: 文档

[API](https://vue-fast-admin.luzhenqian.com/)

<!--
## :kissing_heart: 贡献者指南
首次运行需要先安装依赖

```bash
$ npm install
```

一键打包生成生产代码

```bash
$ npm run build
```

运行单元测试:

```bash
$ npm test
```

> 注意：浏览器环境需要手动测试，位于`test/browser`

修改 package.json 中的版本号，修改 README.md 中的版本号，修改 CHANGELOG.md，然后发布新版

```bash
$ npm run release
```

将新版本发布到npm

```bash
$ npm publish
```

## 贡献者列表

[contributors](https://github.com/15753140326@163.com/vue-fast-admin/graphs/contributors)

## :gear: 更新日志
[CHANGELOG.md](./CHANGELOG.md)

## :airplane: 计划列表
[TODO.md](./TODO.md) -->
