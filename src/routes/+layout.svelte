<script lang="ts">
  import '../app.scss';
  import '../wasm_exec.js';
  import { assets } from '$app/paths';
  import { browser } from '$app/environment';
  import { zhTW as t } from '../lib/i18n/zh-TW';
  import { loadSkillTree } from '../lib/skill_tree';
  import { syncWrap } from '../lib/worker';
  import { initializeCrystalline } from '../lib/types';

  let wasmLoading = true;

  // eslint-disable-next-line no-undef
  const go = new Go();

  if (browser) {
    fetch(assets + '/calculator.wasm')
      .then((data) => data.arrayBuffer())
      .then((data) => {
        WebAssembly.instantiate(data, go.importObject).then((result) => {
          go.run(result.instance);
          wasmLoading = false;
          initializeCrystalline();
          loadSkillTree();
        });

        syncWrap.boot(data);
      });
  }
</script>

{#if wasmLoading}
  <div class="flex flex-row justify-center h-screen">
    <div class="flex flex-col">
      <div class="py-10 flex flex-col justify-between">
        <div>
          <h1 class="text-white mb-10 text-center">{t.appTitle}</h1>

          <h2 class="text-center">{t.loading}</h2>
        </div>
      </div>
    </div>
  </div>
{:else}
  <slot />
{/if}
