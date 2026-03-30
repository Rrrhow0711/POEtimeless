# POE Timeless Clean Room

這個資料夾現在只包含你自己的前端工作台與資料模板，不直接包含：

- `Vilsol/timeless-jewels` 的 GPL 原始碼或編譯產物
- 第三方站點抓下來的圖片、資料檔或 `calculator.wasm`
- Path of Exile 第三方資料鏡像

## 目的

先把專案切成「你自己的前端與資料管理層」，降低直接搬運第三方內容的風險。

## 目前有的功能

- 繁體中文前端工作台
- 四種資料模板下載：永恆珠寶、征服者、一般天賦、專屬效果
- 載入你自己的 JSON
- 預覽與匯出合併資料

## 啟動

```bash
npm install
npm run dev
```

或：

```bash
corepack npm install
corepack npm run dev
```

## 版權邊界

這個資料夾的策略是：

- 保留自寫 UI、模板、資料格式與管理流程
- 不直接複製 upstream 程式碼、資產與資料
- 如果你之後要匯入第三方資料，請先自行確認授權或使用權

原專案是 GPL-3.0：
<https://raw.githubusercontent.com/Vilsol/timeless-jewels/main/LICENSE>

Path of Exile 官方法律頁：
<https://www.pathofexile.com/legal/terms-of-use-and-privacy-policy>

這份 README 不是法律意見，只是把目前的技術邊界說清楚。

