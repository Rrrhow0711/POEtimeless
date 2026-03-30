type DataKind = 'jewels' | 'conquerors' | 'passives' | 'additions';

type TranslationRecord = {
  id: string;
  zhTw: string;
  en?: string;
  notes?: string;
};

type AppState = Record<DataKind, TranslationRecord[]>;

type TemplateMeta = {
  kind: DataKind;
  title: string;
  description: string;
  storageKey: string;
  templateUrl: string;
};

const templateMeta: TemplateMeta[] = [
  {
    kind: 'jewels',
    title: '永恆珠寶',
    description: '放你自己整理的珠寶名稱對照。',
    storageKey: 'poe-timeless-cleanroom-jewels',
    templateUrl: '/data/templates/jewels.template.json'
  },
  {
    kind: 'conquerors',
    title: '征服者',
    description: '放你自己整理的征服者名稱對照。',
    storageKey: 'poe-timeless-cleanroom-conquerors',
    templateUrl: '/data/templates/conquerors.template.json'
  },
  {
    kind: 'passives',
    title: '一般天賦',
    description: '放節點名稱或顯示名稱的翻譯資料。',
    storageKey: 'poe-timeless-cleanroom-passives',
    templateUrl: '/data/templates/passives.template.json'
  },
  {
    kind: 'additions',
    title: '專屬效果',
    description: '放 Timeless 專屬天賦與 additions 的對照。',
    storageKey: 'poe-timeless-cleanroom-additions',
    templateUrl: '/data/templates/additions.template.json'
  }
];

const createEmptyState = (): AppState => ({
  jewels: [],
  conquerors: [],
  passives: [],
  additions: []
});

const safeJsonParse = <T>(value: string, fallback: T): T => {
  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
};

const sanitizeRecords = (records: unknown): TranslationRecord[] => {
  if (!Array.isArray(records)) {
    return [];
  }

  return records
    .filter((record): record is TranslationRecord => {
      if (!record || typeof record !== 'object') {
        return false;
      }

      const candidate = record as Partial<TranslationRecord>;
      return typeof candidate.id === 'string' && typeof candidate.zhTw === 'string';
    })
    .map((record) => ({
      id: record.id.trim(),
      zhTw: record.zhTw.trim(),
      en: record.en?.trim() || undefined,
      notes: record.notes?.trim() || undefined
    }))
    .filter((record) => record.id.length > 0 && record.zhTw.length > 0);
};

const loadState = (): AppState => {
  const state = createEmptyState();

  for (const meta of templateMeta) {
    const raw = window.localStorage.getItem(meta.storageKey);
    if (!raw) {
      continue;
    }

    state[meta.kind] = sanitizeRecords(safeJsonParse<unknown>(raw, []));
  }

  return state;
};

const saveKind = (kind: DataKind, records: TranslationRecord[]): void => {
  const meta = templateMeta.find((entry) => entry.kind === kind);
  if (!meta) {
    return;
  }

  window.localStorage.setItem(meta.storageKey, JSON.stringify(records, null, 2));
};

const recordDetails = (record: TranslationRecord): string => {
  const details = [record.en, record.notes].filter(Boolean);
  return details.length > 0 ? `<small>${details.join(' | ')}</small>` : '';
};

const createShell = (): HTMLDivElement => {
  const wrapper = document.createElement('div');
  wrapper.className = 'app-shell';
  wrapper.innerHTML = `
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">POE Timeless Clean Room</p>
        <h1>你的自有前端工作台</h1>
        <p class="hero-text">
          這個版本只放你自己的程式碼、模板與自建資料，不直接搬運第三方原始碼、WASM、圖片或資料檔。
        </p>
      </div>
      <div class="hero-card">
        <h2>目前策略</h2>
        <ul>
          <li>保留你自己的 UI 架構與翻譯資料。</li>
          <li>不內建 upstream 計算器、資產或遊戲資料。</li>
          <li>需要的名詞對照改成由你匯入或自行維護。</li>
        </ul>
      </div>
    </section>

    <section class="grid two-up">
      <article class="panel">
        <h2>可安全保留</h2>
        <ul class="flat-list">
          <li>你自己寫的前端版面、互動、樣式與資料格式。</li>
          <li>你自己整理的中文對照表與備註。</li>
          <li>你自己建立的模板、匯入流程與管理介面。</li>
        </ul>
      </article>

      <article class="panel warning">
        <h2>目前刻意不內建</h2>
        <ul class="flat-list">
          <li>原專案的 GPL 原始碼與其編譯產物。</li>
          <li>原網站使用的 <code>calculator.wasm</code>。</li>
          <li>第三方站點抓下來的資料與圖片。</li>
        </ul>
      </article>
    </section>

    <section class="panel">
      <div class="panel-head">
        <div>
          <p class="eyebrow">資料工作區</p>
          <h2>匯入你自己的資料</h2>
        </div>
        <button class="button secondary" data-action="export-all" type="button">匯出合併 JSON</button>
      </div>
      <div class="import-grid" data-import-grid></div>
    </section>

    <section class="grid two-up">
      <article class="panel">
        <p class="eyebrow">資料摘要</p>
        <h2>目前已載入</h2>
        <div data-summary class="summary-list"></div>
      </article>

      <article class="panel">
        <p class="eyebrow">下一步</p>
        <h2>建議流程</h2>
        <ol class="ordered-list">
          <li>先用模板建立你自己的翻譯 JSON。</li>
          <li>確認你要保留哪些名稱，哪些只保留 key。</li>
          <li>之後再把真正的計算邏輯以自有或合規來源接進來。</li>
        </ol>
      </article>
    </section>

    <section class="panel">
      <p class="eyebrow">預覽</p>
      <h2>目前資料預覽</h2>
      <div data-preview class="preview-grid"></div>
    </section>
  `;

  return wrapper;
};

const renderSummary = (container: HTMLElement, state: AppState): void => {
  container.innerHTML = '';

  for (const meta of templateMeta) {
    const item = document.createElement('div');
    item.className = 'summary-item';
    item.innerHTML = `
      <span class="summary-title">${meta.title}</span>
      <strong>${state[meta.kind].length}</strong>
    `;
    container.appendChild(item);
  }
};

const renderPreview = (container: HTMLElement, state: AppState): void => {
  container.innerHTML = '';

  for (const meta of templateMeta) {
    const card = document.createElement('article');
    card.className = 'preview-card';

    const records = state[meta.kind].slice(0, 6);
    const items =
      records.length === 0
        ? '<li class="muted">尚未載入資料</li>'
        : records
            .map(
              (record) =>
                `<li><span>${record.zhTw}</span><code>${record.id}</code>${recordDetails(record)}</li>`
            )
            .join('');

    card.innerHTML = `
      <h3>${meta.title}</h3>
      <ul class="preview-list">${items}</ul>
    `;
    container.appendChild(card);
  }
};

const bindImporters = (
  container: HTMLElement,
  state: AppState,
  onStateChange: () => void
): void => {
  for (const meta of templateMeta) {
    const card = document.createElement('article');
    card.className = 'import-card';
    card.innerHTML = `
      <div>
        <h3>${meta.title}</h3>
        <p>${meta.description}</p>
      </div>
      <div class="import-actions">
        <a class="button secondary" href="${meta.templateUrl}" download>下載模板</a>
        <label class="button primary">
          載入 JSON
          <input data-kind="${meta.kind}" type="file" accept="application/json" hidden />
        </label>
        <button class="button ghost" data-clear-kind="${meta.kind}" type="button">清空</button>
      </div>
    `;
    container.appendChild(card);
  }

  container.querySelectorAll<HTMLInputElement>('input[type="file"]').forEach((input) => {
    input.addEventListener('change', async () => {
      const kind = input.dataset.kind as DataKind | undefined;
      const file = input.files?.[0];
      if (!kind || !file) {
        return;
      }

      const text = await file.text();
      state[kind] = sanitizeRecords(safeJsonParse<unknown>(text, []));
      saveKind(kind, state[kind]);
      input.value = '';
      onStateChange();
    });
  });

  container.querySelectorAll<HTMLButtonElement>('[data-clear-kind]').forEach((button) => {
    button.addEventListener('click', () => {
      const kind = button.dataset.clearKind as DataKind | undefined;
      if (!kind) {
        return;
      }

      state[kind] = [];
      saveKind(kind, []);
      onStateChange();
    });
  });
};

const bindExport = (root: HTMLElement, state: AppState): void => {
  const exportButton = root.querySelector<HTMLButtonElement>('[data-action="export-all"]');
  if (!exportButton) {
    return;
  }

  exportButton.addEventListener('click', () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], {
      type: 'application/json'
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'poe-timeless-cleanroom-data.json';
    link.click();
    URL.revokeObjectURL(url);
  });
};

export const renderApp = (root: HTMLDivElement): void => {
  const state = loadState();
  const shell = createShell();
  root.replaceChildren(shell);

  const summary = shell.querySelector<HTMLElement>('[data-summary]');
  const preview = shell.querySelector<HTMLElement>('[data-preview]');
  const importGrid = shell.querySelector<HTMLElement>('[data-import-grid]');

  if (!summary || !preview || !importGrid) {
    throw new Error('工作台初始化失敗。');
  }

  const rerender = () => {
    renderSummary(summary, state);
    renderPreview(preview, state);
  };

  bindImporters(importGrid, state, rerender);
  bindExport(shell, state);
  rerender();
};
