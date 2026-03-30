# POEtimeless

這個資料夾現在是可直接執行的 Timeless Jewel 中文前端，位置在 `C:\Users\RH\Desktop\POEtimeless`。

目前策略：

- 專案本體在你自己的資料夾內執行，不再依賴 `timeless-jewels-main` 那個工作資料夾。
- 為了保留與原站相同的 Timeless 查詢功能，這份專案包含了改寫後的上游 GPL 元件與 `calculator.wasm`。
- 頁面上的第三方品牌元素已移除，只保留必要的來源與授權說明。

啟動方式：

```bash
corepack pnpm install
corepack pnpm run dev
```

或預覽建置版：

```bash
corepack pnpm run build
corepack pnpm run preview
```

注意：

- 如果你只是自己本機使用，現在這樣已經能正常跑。
- 如果你之後要公開散布、上傳或販售，因為這份專案含有 GPL 衍生元件，你需要一起保留對應授權與原始碼義務。
- 這份 README 不是法律意見，只是把目前採用的技術與授權邊界說清楚。
