# 🎸 MyGuitar | 吉他電商

基於 Vue 3 與 Bootstrap 5 開發的吉他電商，整合 Axios 進行 RESTful API 串接，涵蓋商品瀏覽、購物車管理、訂單流程與文章閱讀等核心功能。

![Vue.js](https://img.shields.io/badge/Vue.js-3.2.13-4FC08D?logo=vue.js&logoColor=white)![Vue_Router](https://img.shields.io/badge/Vue_Router-4.0.3-4FC08D?logo=vue.js&logoColor=white)![Axios](https://img.shields.io/badge/Axios-0.26.1-5A29E4?logo=axios&logoColor=white)![Bootstrap](https://img.shields.io/badge/Bootstrap-5.1.3-7952B3?logo=bootstrap&logoColor=white)![Swiper](https://img.shields.io/badge/Swiper-8.0.7-6332F6?logoColor=white)![Vee_Validate](https://img.shields.io/badge/Vee_Validate-4.5.10-20B2AA?logoColor=white)![SweetAlert2](https://img.shields.io/badge/SweetAlert2-5.0.2-FF7043?logoColor=white)![Mitt](https://img.shields.io/badge/Mitt-3.0.0-999999?logoColor=white)

---

## 🧩 專案介紹 | Overview

MyGuitar 是一套以 Vue 3 Option API 為核心的吉他電商，提供商品列表、商品詳情、購物車、結帳表單與訂單查詢等完整購物流程。專案整合 Bootstrap 5 打造響應式介面，並使用 vee-validate 處理表單驗證、Swiper 實現商品輪播、mitt 進行跨元件事件溝通。

---

## 📂 專案架構 | Project Structure

```
MyGuitar/
├── public/                  # 靜態資源（favicon、index.html）
├── src/                     # 原始碼目錄
│   ├── assets/              # 圖片與樣式資源
│   │   ├── img/             # 圖片素材
│   │   └── stylesheets/     # 全域 SCSS 樣式
│   ├── components/          # 可重用 UI 元件
│   ├── router/              # Vue Router 路由設定
│   ├── utils/               # 共用工具函式（訊息提示等）
│   ├── views/               # 頁面級元件
│   ├── App.vue              # 根元件
│   └── main.js              # 應用程式主入口
├── .env.example             # 環境變數範例檔
├── babel.config.js          # Babel 設定
├── jsconfig.json            # JS 路徑別名設定
├── package.json             # 專案資訊與相關套件
├── package-lock.json        # npm 套件鎖定檔
└── vue.config.js            # Vue CLI 設定檔
```

---

## 🚀 啟動專案 | Quick Start

### 📦 安裝環境 (Requirement)

請確認電腦已安裝以下環境：

- **Node.js**: v16 以上
- **npm**: 8 以上

### ⚙️ 啟動 (Setup & Dev)

```bash
# 1. 安裝專案依賴套件
npm install

# 2. 建立環境變數檔
# 請複製 .env.example 建立 .env 檔案，並填入對應的 API 設定
cp .env.example .env

# 3. 啟動開發伺服器
npm run serve
```
