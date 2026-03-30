export const zhTW = {
  htmlLang: 'zh-Hant',
  appTitle: '永恆珠寶計算器',
  appDescription: '永恆珠寶計算器與天賦樹檢視',
  loading: '載入中...',
  skillTreeView: '天賦樹檢視',
  timelessJewel: '永恆珠寶',
  conqueror: '征服者',
  passiveSkill: '天賦',
  seed: '種子',
  alternatePassiveSkill: '轉化後天賦',
  additions: '附加效果',
  results: '結果',
  config: '設定',
  trade: '交易',
  grouped: '分組',
  selectPrompt: '請選擇',
  enterSeed: '輸入種子',
  selectStats: '選擇詞綴',
  sortOrder: '排序方式',
  colors: '顏色',
  split: '分欄',
  notables: '核心天賦',
  smalls: '小天賦',
  addStat: '新增詞綴',
  min: '最小值',
  weight: '權重',
  minTotalWeight: '最低總權重',
  selectAll: '全選',
  passives: '小天賦',
  deselect: '全部取消',
  search: '搜尋',
  sourceGithub: '上游原始碼（GitHub）',
  licenseNotice: '授權說明',
  clickJewelSocket: '請點選一個珠寶插槽',
  clickToSelectSocket: '點擊以選取這個插槽',
  noName: '<未命名>',
  platformPc: 'PC 版',
  platformXbox: 'Xbox 版',
  platformPlaystation: 'PlayStation 版',
  sortCount: '依數量',
  sortAlphabetical: '依字母',
  sortRarity: '依稀有度',
  sortValue: '依價值',
  seedRange(min: number, max: number) {
    return `種子必須介於 ${min} 到 ${max} 之間`;
  },
  searchProgress(current: number, max: number) {
    return `搜尋中 ${current} / ${max}`;
  },
  matchGroup(matchCount: number, resultCount: number) {
    return `${matchCount} 個匹配 [${resultCount}]`;
  },
  seedWeight(seed: number, weight: number) {
    return `種子 ${seed}（權重 ${weight}）`;
  }
} as const;
