# Vue学习项目合集

本项目包含3个Vue学习练习，涵盖Vue Router路由管理、Vuex状态管理和组件插槽三大核心知识点。

## 子项目

### 1. vue-router-practice - Vue Router 路由练习
- **技术**：Vue 3 + Vite + Vue Router
- **内容**：
  - 路由配置（router.js）
  - 页面组件（Home.vue, About.vue）
  - 路由跳转和导航
- **目录**：`vue-router-practice/`

### 2. vuex-practice - Vuex 状态管理练习
- **技术**：Vue 3 + Vite + Vuex
- **内容**：
  - Store配置（store/index.js）
  - 状态管理基本用法
  - 组件间数据共享
- **目录**：`vuex-practice/`

### 3. slot-practice - 插槽练习
- **技术**：Vue 3
- **内容**：
  - 默认插槽（练习1：Dparent.vue + Dslot.vue）
  - 具名插槽和作用域插槽（练习2：CParent.vue + Cslot.vue + Cslot2.vue）
  - 含截图说明
- **目录**：`slot-practice/`

## 目录结构
```
├── vue-router-practice/     # Vue Router路由练习
│   ├── src/
│   │   ├── components/
│   │   │   ├── About.vue
│   │   │   └── Home.vue
│   │   ├── router/
│   │   │   └── router.js
│   │   ├── App.vue
│   │   ├── main.js
│   │   └── style.css
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── vuex-practice/           # Vuex状态管理练习
│   ├── src/
│   │   ├── components/
│   │   │   └── HelloWorld.vue
│   │   ├── store/
│   │   │   └── index.js
│   │   ├── App.vue
│   │   ├── main.js
│   │   └── style.css
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
└── slot-practice/           # 插槽练习
    ├── 练习1/
    │   ├── Dparent.vue
    │   ├── Dslot.vue
    │   └── Snipaste_2025-05-15_17-58-11.png
    └── 练习2/
        ├── CParent.vue
        ├── Cslot.vue
        ├── Cslot2.vue
        └── Snipaste_2025-05-15_18-02-28.png
```

## 运行环境
- Node.js 16+
- Vue 3
- Vite

## 使用方法

### 安装依赖
```bash
cd vue-router-practice   # 或 vuex-practice
npm install
```

### 启动开发服务器
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

## 学习要点

### Vue Router
- 路由配置和页面跳转
- 动态路由匹配
- 嵌套路由
- 编程式导航

### Vuex
- State、Getters、Mutations、Actions
- 模块化状态管理
- 组件间状态共享

### 插槽
- 默认插槽
- 具名插槽
- 作用域插槽
- 插槽的后备内容

---
**作者**：liem
**框架**：Vue 3 + Vite
**类型**：学习练习