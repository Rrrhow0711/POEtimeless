<script lang="ts">
  import Select from 'svelte-select';
  import { browser } from '$app/environment';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import { base } from '$app/paths';
  import { calculator, data } from '../lib/types';
  import { zhTW as t } from '../lib/i18n/zh-TW';
  import {
    translateAlternatePassiveAdditionLabel,
    translateAlternatePassiveSkillName,
    translateConquerorName,
    translatePassiveSkillName,
    translateTimelessJewelName
  } from '../lib/i18n/game-zh-TW';

  const searchParams = $page.url.searchParams;

  const jewels = Object.keys(data.TimelessJewels).map((k) => ({
    value: parseInt(k),
    label: translateTimelessJewelName(data.TimelessJewels[k])
  }));

  let selectedJewel = searchParams.has('jewel') ? jewels.find((j) => j.value == searchParams.get('jewel')) : undefined;

  $: conquerors = selectedJewel
    ? Object.keys(data.TimelessJewelConquerors[selectedJewel.value]).map((k) => ({
        value: k,
        label: translateConquerorName(k)
      }))
    : [];

  let selectedConqueror = searchParams.has('conqueror')
    ? {
        value: searchParams.get('conqueror'),
        label: translateConquerorName(searchParams.get('conqueror') || '')
      }
    : undefined;

  const passiveSkills = Object.values(data.PassiveSkills).map((passive) => ({
    value: passive.Index,
    label: translatePassiveSkillName(passive.Name) + ' (' + passive.ID + ')'
  }));

  let selectedPassiveSkill: { label: string; value: number } = searchParams.has('passive_skill')
    ? passiveSkills.find((j) => j.value == searchParams.get('passive_skill'))
    : undefined;

  let seed = searchParams.has('seed') ? searchParams.get('seed') : 0;

  let result: undefined | data.AlternatePassiveSkillInformation;

  $: {
    if (selectedPassiveSkill && seed && selectedJewel && selectedConqueror) {
      result = calculator.Calculate(
        selectedPassiveSkill.value,
        typeof seed === 'string' ? parseInt(seed) : seed,
        selectedJewel.value,
        selectedConqueror.value
      );
    }
  }

  const updateUrl = () => {
    if (browser) {
      const params: object = {};
      selectedJewel && (params.jewel = selectedJewel.value);
      selectedConqueror && (params.conqueror = selectedConqueror.value);
      selectedPassiveSkill && (params.passive_skill = selectedPassiveSkill.value);
      seed && (params.seed = seed);

      const resultQuery = Object.keys(params)
        .map((key) => key + '=' + encodeURIComponent(params[key]))
        .join('&');

      goto($page.url.pathname + '?' + resultQuery);
    }
  };
</script>

<div class="py-10 flex flex-row justify-center w-screen h-screen">
  <div class="flex flex-col justify-between w-1/3">
    <div>
      <h1 class="text-white mb-10 text-center">{t.appTitle}</h1>

      <a href="{base}/tree">
        <h2 class="text-white mb-10 text-center underline text-orange-500">{t.skillTreeView}</h2>
      </a>

      <div class="themed">
        <h3 class="mb-2">{t.timelessJewel}</h3>
        <Select items={jewels} bind:value={selectedJewel} on:select={updateUrl} placeholder={t.selectPrompt} />

        {#if selectedJewel}
          <div class="mt-4">
            <h3 class="mb-2">{t.conqueror}</h3>
            <Select items={conquerors} bind:value={selectedConqueror} on:select={updateUrl} placeholder={t.selectPrompt} />
          </div>

          {#if selectedConqueror && Object.keys(data.TimelessJewelConquerors[selectedJewel.value]).indexOf(selectedConqueror.value) >= 0}
            <div class="mt-4">
              <h3 class="mb-2">{t.passiveSkill}</h3>
              <Select items={passiveSkills} bind:value={selectedPassiveSkill} on:select={updateUrl} placeholder={t.selectPrompt} />
            </div>

            {#if selectedPassiveSkill}
              <div class="mt-4">
                <h3 class="mb-2">{t.seed}</h3>
                <input
                  type="number"
                  bind:value={seed}
                  class="seed"
                  on:blur={updateUrl}
                  min={data.TimelessJewelSeedRanges[selectedJewel.value].Min}
                  max={data.TimelessJewelSeedRanges[selectedJewel.value].Max} />
                {#if seed < data.TimelessJewelSeedRanges[selectedJewel.value].Min || seed > data.TimelessJewelSeedRanges[selectedJewel.value].Max}
                  <div class="mt-2">
                    {t.seedRange(
                      data.TimelessJewelSeedRanges[selectedJewel.value].Min,
                      data.TimelessJewelSeedRanges[selectedJewel.value].Max
                    )}
                  </div>
                {/if}
              </div>

              {#if result}
                {#if result.AlternatePassiveSkill}
                  <div class="mt-4">
                    <h3>{t.alternatePassiveSkill}</h3>
                    <span>{translateAlternatePassiveSkillName(result.AlternatePassiveSkill.Name)} ({result.AlternatePassiveSkill.ID})</span>
                  </div>

                  {#if result.StatRolls && Object.keys(result.StatRolls).length > 0}
                    <ol class="mt-4 list-decimal pl-8">
                      {#each Object.keys(result.StatRolls) as roll, i}
                        {@const stat = data.GetStatByIndex(result.AlternatePassiveSkill.StatsKeys[i])}
                        <li>{translatePassiveSkillName(stat.Text || t.noName)} ({stat.ID}) - {result.StatRolls[roll]}</li>
                      {/each}
                    </ol>
                  {/if}
                {/if}

                {#if 'AlternatePassiveAdditionInformations' in result && result.AlternatePassiveAdditionInformations?.length > 0}
                  <div class="mt-4">
                    <h3>{t.additions}</h3>
                    <ul class="list-disc pl-8">
                      {#each result.AlternatePassiveAdditionInformations as info}
                        <li class="mt-4">
                          <span>{translateAlternatePassiveAdditionLabel(info.AlternatePassiveAddition, info.AlternatePassiveAddition?.StatsKeys?.length ? translatePassiveSkillName(data.GetStatByIndex(info.AlternatePassiveAddition.StatsKeys[0]).Text || t.noName) : '')} ({info.AlternatePassiveAddition.Index})</span>

                          {#if info.StatRolls && Object.keys(info.StatRolls).length > 0}
                            <ol class="list-decimal pl-8">
                              {#each Object.keys(info.StatRolls) as roll, i}
                                {@const stat = data.GetStatByIndex(info.AlternatePassiveAddition.StatsKeys[i])}
                                <li>{translatePassiveSkillName(stat.Text || t.noName)} ({stat.ID}) - {info.StatRolls[roll]}</li>
                              {/each}
                            </ol>
                          {/if}
                        </li>
                      {/each}
                    </ul>
                  </div>
                {/if}
              {/if}
            {/if}
          {/if}
        {/if}
      </div>
    </div>

    <div class="flex justify-end gap-4 text-orange-500">
      <div>
        <a href="{base}/THIRD_PARTY_NOTICES.txt" target="_blank" rel="noopener">{t.licenseNotice}</a>
      </div>
      <div>
        <a href="https://github.com/Vilsol/timeless-jewels" target="_blank" rel="noopener">{t.sourceGithub}</a>
      </div>
    </div>
  </div>
</div>
