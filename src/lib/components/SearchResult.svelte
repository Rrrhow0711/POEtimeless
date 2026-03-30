<script lang="ts">
  import type { SearchWithSeed } from '../skill_tree';
  import { skillTree, translateStat, openTrade } from '../skill_tree';
  import { zhTW as t } from '../i18n/zh-TW';
  import { translatePassiveSkillName } from '../i18n/game-zh-TW';

  export let highlight: (newSeed: number, passives: number[]) => void;
  export let set: SearchWithSeed;
  export let jewel: number;
  export let conqueror: string;
  export let platform: string;
  export let league: string;

  const highlightSet = () =>
    highlight(
      set.seed,
      set.skills.map((s) => s.passive)
    );

  const onKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      highlightSet();
    }
  };
</script>

<div
  class="my-2 border-white/50 border p-2 flex flex-col cursor-pointer"
  on:click={highlightSet}
  on:keydown={onKeydown}
  role="button"
  tabindex="0">
  <div class="flex flex-row justify-between">
    <!-- Padding -->
    <button class="px-3 invisible">{t.trade}</button>
    <div class="font-bold text-orange-500 text-center">
      {t.seedWeight(set.seed, set.weight)}
    </div>
    <button class="px-3 bg-blue-500/40 rounded" on:click={() => openTrade(jewel, conqueror, [set], platform, league)}>{t.trade}</button>
  </div>
  {#each set.skills as skill}
    <div class="mt-2">
      <span>
        {translatePassiveSkillName(skillTree.nodes[skill.passive].name)} ({skill.passive})
      </span>
      <ul class="list-disc pl-6 font-bold">
        {#each Object.keys(skill.stats) as stat}
          <li>{translatePassiveSkillName(translateStat(stat, skill.stats[stat]))}</li>
        {/each}
      </ul>
    </div>
  {/each}
</div>
