const timelessJewelNames: Record<string, string> = {
  'Glorious Vanity': '輝煌的虛榮',
  'Lethal Pride': '致命的驕傲',
  'Brutal Restraint': '殘酷的約束',
  'Militant Faith': '好戰的信仰',
  'Elegant Hubris': '優雅的狂妄'
};

const conquerorNames: Record<string, string> = {
  Xibaqua: '賽巴昆',
  Zerphi: '澤佛',
  Ahuana: '阿呼阿娜',
  Doryani: '多里亞尼',
  Kaom: '卡烏姆',
  Rakiata: '拉奇亞塔',
  Kiloava: '基洛瓦',
  Akoya: '阿寇亞',
  Deshret: '黛西蕾特',
  Balbala: '巴爾巴拉',
  Asenath: '阿絲娜',
  Nasima: '娜希瑪',
  Venarius: '維那留斯',
  Maxarius: '馬克薩留斯',
  Dominus: '多明努斯',
  Avarius: '阿瓦留斯',
  Cadiro: '卡迪洛',
  Victario: '維多里奧',
  Chitus: '奇米特斯',
  Caspiro: '卡斯皮羅'
};

const exactNameTranslations: Record<string, string> = {
  'Ancient Hex': '古代咒術',
  'Area Damage': '範圍傷害',
  'Area of Effect': '範圍效果',
  Armour: '護甲',
  'Attack Damage': '攻擊傷害',
  'Attack Speed': '攻擊速度',
  'Aura Effect': '光環效果',
  'Automaton Studies': '自動機研究',
  'Avoid Elemental Ailments': '避免元素異常狀態',
  'Axiom Warden': '公理守衛',
  'Baleful Augmentation': '災厄增幅',
  Block: '格擋',
  'Blood-Quenched Bulwark': '血淬堡壘',
  "Bloody Flowers' Rebellion": '血花叛亂',
  'Bloody Savagery': '血腥野性',
  'Brutal Execution': '殘酷處決',
  'Calming Devotion': '寧神奉獻',
  'Cast Speed': '施放速度',
  Chainbreaker: '斷鏈',
  'Chaos Damage': '混沌傷害',
  'Chaos Resistance': '混沌抗性',
  "Chitus' Heart": '奇米特斯之心',
  'City Walls': '城牆',
  Cloistered: '隱修',
  'Cold Damage': '冰冷傷害',
  'Cold Resistance': '冰冷抗性',
  'Commanding Presence': '統御威儀',
  'Construct Studies': '構裝研究',
  'Corrupted Soul': '腐化之魂',
  'Crematorium Worker': '火葬場工人',
  'Critical Strike Chance': '暴擊率',
  'Critical Strike Multiplier': '暴擊加成',
  'Cult of Chaos': '混沌教團',
  'Cult of Fire': '火焰教團',
  'Cult of Ice': '冰霜教團',
  'Cult of Lightning': '閃電教團',
  'Curse Effect': '詛咒效果',
  'Damage Over Time': '持續傷害',
  'Dance with Death': '與死亡共舞',
  Devotion: '奉獻',
  "Dialla's Wit": '迪亞拉的機智',
  'Discerning Taste': '精明品味',
  'Divine Flesh': '神聖血肉',
  'Enduring Faith': '恆久信仰',
  'Energy Flow Studies': '能流研究',
  'Energy Shield': '能量護盾',
  'Eternal Adaptiveness': '永恆適應',
  'Eternal Bloodlust': '永恆嗜血',
  'Eternal Dominance': '永恆支配',
  'Eternal Exploitation': '永恆剝削',
  'Eternal Fervour': '永恆熱忱',
  'Eternal Fortitude': '永恆堅毅',
  'Eternal Resilience': '永恆韌性',
  'Eternal Separation': '永恆分離',
  'Eternal Subjugation': '永恆征服',
  'Eternal Youth': '永恆青春',
  Evasion: '閃避值',
  'Exquisite Pain': '極致苦痛',
  'Fire Damage': '火焰傷害',
  'Fire Resistance': '火焰抗性',
  'Flawless Execution': '完美處決',
  'Flesh Worship': '血肉崇拜',
  'Flesh to Flames': '血肉化焰',
  'Flesh to Frost': '血肉化冰',
  'Flesh to Lightning': '血肉化雷',
  'Freeze Chance': '冰凍機率',
  'Frenzied Faith': '狂熱信仰',
  'Freshly Brewed': '新鮮釀造',
  'Gemling Ambush': '寶石軍團伏擊',
  'Gemling Inquisition': '寶石軍團審判',
  'Gemling Training': '寶石軍團訓練',
  "Geofri's End": '吉奧弗里的終局',
  'Glancing Blows': '擦身打擊',
  'Gleaming Legion': '閃耀軍團',
  'Heated Devotion': '熾熱奉獻',
  Hierarchy: '階序',
  'Ignite Chance': '點燃機率',
  'Immortal Ambition': '不朽野望',
  'Inner Conviction': '內在信念',
  'Intolerance of Sin': '對罪的不容',
  'Jungle Paths': '叢林道路',
  Laureate: '桂冠者',
  'Legacy of the Vaal': '瓦爾遺產',
  Life: '生命',
  'Lightning Damage': '閃電傷害',
  'Lightning Resistance': '閃電抗性',
  "Lioneye's Focus": '獅眼的專注',
  Mana: '魔力',
  'Mana Regeneration': '魔力回復',
  "Martyr's Might": '殉道者之力',
  'Might of the Vaal': '瓦爾之力',
  'Minion Damage': '召喚物傷害',
  'Movement Speed': '移動速度',
  'Night of a Thousand Ribbons': '千絲之夜',
  'Physical Damage': '物理傷害',
  'Pooled Resources': '資源共池',
  'Power of Purpose': '目的之力',
  'Powerful Faith': '強大信仰',
  'Price of Glory': '榮耀代價',
  'Primal Spirit': '原始精神',
  'Projectile Damage': '投射物傷害',
  'Projectile Speed': '投射物速度',
  'Purity Rebel': '純淨叛逆',
  'Revitalising Darkness': '活化暗影',
  'Revitalising Flames': '活化火焰',
  'Revitalising Frost': '活化冰霜',
  'Revitalising Lightning': '活化雷霆',
  'Revitalising Winds': '活化疾風',
  "Rigwald's Might": '里格瓦德之力',
  'Rites of Lunaris': '月影儀式',
  'Rites of Solaris': '日耀儀式',
  'Ritual of Flesh': '血肉儀式',
  'Ritual of Immolation': '獻焚儀式',
  'Ritual of Memory': '記憶儀式',
  'Ritual of Might': '力量儀式',
  'Ritual of Shadows': '暗影儀式',
  'Ritual of Stillness': '寧靜儀式',
  'Ritual of Thunder': '雷霆儀式',
  'Robust Diet': '強健飲食',
  'Rural Life': '鄉野生活',
  'Sceptre Pinnacle': '權杖巔峰',
  'Second Sight': '第二視界',
  'Secret Tunnels': '秘密地道',
  'Shadowy Streets': '幽影街道',
  'Shock Chance': '感電機率',
  'Skill Duration': '技能持續時間',
  'Slum Lord': '貧民之王',
  'Smite the Heretical': '誅滅異端',
  'Smite the Ignorant': '誅滅無知者',
  'Smite the Wicked': '誅滅邪惡',
  'Soul Worship': '靈魂崇拜',
  'Spell Block': '法術格擋',
  'Spell Damage': '法術傷害',
  'Spell Suppression': '法術壓抑',
  'Street Urchin': '街頭孤兒',
  'Strength of Blood': '血之力量',
  Superiority: '優越',
  'Supreme Decadence': '極致墮落',
  'Supreme Ego': '極致自我',
  'Supreme Grandstanding': '極致虛飾',
  'Supreme Ostentation': '極致鋪張',
  'Tempered by War': '戰火淬鍊',
  'Temple Paths': '聖殿道路',
  'Thaumaturgical Aptitude': '奇術天賦',
  'Thaumaturgical Protection': '奇術防護',
  'The Agnostic': '不可知論者',
  'The Traitor': '叛徒',
  'Thoughts and Prayers': '思緒與祈禱',
  'Thundrous Devotion': '雷鳴奉獻',
  Transcendence: '超然',
  'Virtue Gem Surgery': '美德寶石手術',
  "Voll's Coup": '佛爾的政變',
  'War Games': '戰爭遊戲',
  'Warcry Buff Effect': '戰吼增益效果',
  'Warcry Area of Effect': '戰吼範圍效果',
  'Warcry Cooldown Recovery': '戰吼冷卻恢復',
  'Warcry Duration': '戰吼持續時間',
  'Warcry Speed': '戰吼速度',
  'Wind Dancer': '風魔舞者',
  'With Eyes Open': '睜眼面對',
  Zealot: '狂熱者'
};

const exactStatTranslations: Record<string, string> = {
  'Gain #% of Maximum Mana as Extra Maximum Energy Shield':
    '獲得相當於 #% 最大魔力的額外最大能量護盾',
  'Gain # Mana per Enemy Hit with Attacks if you\'ve used a Mana Flask in the past 10 seconds':
    '若你在過去 10 秒內使用過魔力藥劑，每次攻擊擊中敵人時獲得 # 魔力',
  'Gain #% of Maximum Mana as Extra Maximum Energy Shield while you have at least 150 Devotion':
    '當你至少有 150 奉獻時，獲得相當於 #% 最大魔力的額外最大能量護盾',
  '+# to Minimum Endurance Charges': '+# 最低耐力球',
  '+# to Minimum Power Charges': '+# 最低暴擊球',
  '+# to Minimum Frenzy Charges': '+# 最低狂怒球',
  '+# to Minimum Endurance Charges while you have at least 150 Devotion':
    '當你至少有 150 奉獻時，+# 最低耐力球',
  '+# to Minimum Power Charges while you have at least 150 Devotion':
    '當你至少有 150 奉獻時，+# 最低暴擊球',
  '+# to Minimum Frenzy Charges while you have at least 150 Devotion':
    '當你至少有 150 奉獻時，+# 最低狂怒球',
  '+# to maximum Fortification': '+# 最大護體',
  '+#% to all maximum Resistances': '+#% 全部最大抗性',
  '+#% to all maximum Resistances if you have at least 150 Devotion':
    '若你至少有 150 奉獻，+#% 全部最大抗性',
  '#% chance to inflict Fire Exposure on Hit': '#% 機率在擊中時施加火焰曝曬',
  '#% chance to inflict Cold Exposure on Hit': '#% 機率在擊中時施加冰冷曝曬',
  '#% chance to inflict Lightning Exposure on Hit': '#% 機率在擊中時施加閃電曝曬',
  '#% chance to inflict Fire Exposure on Hit if you have at least 150 Devotion':
    '若你至少有 150 奉獻，#% 機率在擊中時施加火焰曝曬',
  '#% chance to inflict Cold Exposure on Hit if you have at least 150 Devotion':
    '若你至少有 150 奉獻，#% 機率在擊中時施加冰冷曝曬',
  '#% chance to inflict Lightning Exposure on Hit if you have at least 150 Devotion':
    '若你至少有 150 奉獻，#% 機率在擊中時施加閃電曝曬',
  'Gain #% of Physical Damage as Extra Fire Damage': '獲得 #% 物理傷害的額外火焰傷害',
  'Gain #% of Physical Damage as Extra Cold Damage': '獲得 #% 物理傷害的額外冰冷傷害',
  'Gain #% of Physical Damage as Extra Lightning Damage': '獲得 #% 物理傷害的額外閃電傷害',
  '#% chance to gain an Endurance Charge on Kill': '#% 擊殺時機率獲得一顆耐力球',
  '#% chance to gain a Frenzy Charge on Hit': '#% 擊中時機率獲得一顆狂怒球',
  '#% chance to gain a Power Charge on Critical Strike': '#% 暴擊時機率獲得一顆暴擊球',
  '#% chance to Intimidate Enemies for 4 seconds on Hit': '#% 擊中時機率威嚇敵人 4 秒',
  'Gain # Range on Melee Hit': '近戰擊中時獲得 # 範圍',
  '#% of Physical Damage Converted to Fire Damage while you have at least 150 Devotion':
    '當你至少有 150 奉獻時，#% 物理傷害轉換為火焰傷害',
  '#% of Physical Damage Converted to Cold Damage while you have at least 150 Devotion':
    '當你至少有 150 奉獻時，#% 物理傷害轉換為冰冷傷害',
  '#% of Physical Damage Converted to Lightning Damage while you have at least 150 Devotion':
    '當你至少有 150 奉獻時，#% 物理傷害轉換為閃電傷害',
  '#% chance to deal Double Damage': '#% 機率造成雙倍傷害'
};

const additionIdTranslations: Record<string, string> = {
  vaal_small_fire_damage: '瓦爾：火焰傷害',
  vaal_small_cold_damage: '瓦爾：冰冷傷害',
  vaal_small_lightning_damage: '瓦爾：閃電傷害',
  vaal_small_physical_damage: '瓦爾：物理傷害',
  vaal_small_chaos_damage: '瓦爾：混沌傷害'
};

const leagueReplacements: Array<[string, string]> = [
  ['Solo Self-Found', '自力'],
  ['Hardcore', '專家'],
  ['Standard', '標準'],
  ['Ruthless', '無情']
];

const phraseTranslations: Array<[string, string]> = [
  ['Attack and Cast Speed', '攻擊與施放速度'],
  ['Strength and Intelligence', '力量與智慧'],
  ['Dexterity and Intelligence', '敏捷與智慧'],
  ['Strength and Dexterity', '力量與敏捷'],
  ['Damage over Time Multiplier', '持續傷害加成'],
  ['Elemental Resistances', '元素抗性'],
  ['Elemental Ailments', '元素異常狀態'],
  ['Ailment Effect', '異常狀態效果'],
  ['Ailment Duration', '異常狀態持續時間'],
  ['Blind Effect', '致盲效果'],
  ['Taunt Duration', '嘲諷持續時間'],
  ['Poison Duration', '中毒持續時間'],
  ['Poison Chance', '中毒機率'],
  ['Bleed Chance', '流血機率'],
  ['Bleed Duration', '流血持續時間'],
  ['Ignite Chance', '點燃機率'],
  ['Curse Duration', '詛咒持續時間'],
  ['Curse Mana Cost', '詛咒魔力消耗'],
  ['Curse Mana Reservation Efficiency', '詛咒魔力保留效用'],
  ['Mark Effect', '印記效果'],
  ['Mark Mana Cost', '印記魔力消耗'],
  ['Mark Cast Speed', '印記施放速度'],
  ['Accuracy and Attack Damage', '命中值與攻擊傷害'],
  ['Accuracy and Attack Speed', '命中值與攻擊速度'],
  ['Accuracy and Critical Strike Chance', '命中值與暴擊率'],
  ['Accuracy and Elemental Resistances', '命中值與元素抗性'],
  ['Armour and Energy Shield', '護甲與能量護盾'],
  ['Armour and Evasion', '護甲與閃避值'],
  ['Armour and Life', '護甲與生命'],
  ['Life and Mana', '生命與魔力'],
  ['Life and Flasks', '生命與藥劑'],
  ['Mana and Flasks', '魔力與藥劑'],
  ['Flask Effect', '藥劑效果'],
  ['Flask Duration', '藥劑持續時間'],
  ['Flask Mastery', '藥劑精通'],
  ['Tincture Effect', '魔符藥劑效果'],
  ['Banner Area of Effect', '旗幟範圍效果'],
  ['Banner Aura Effect', '旗幟光環效果'],
  ['Banner Duration', '旗幟持續時間'],
  ['Banner Mastery', '旗幟精通'],
  ['Brand Damage', '烙印傷害'],
  ['Brand Duration', '烙印持續時間'],
  ['Brand Range', '烙印範圍'],
  ['Brand Recall Cooldown Recovery', '烙印召回冷卻恢復'],
  ['Brand Mastery', '烙印精通'],
  ['Bow Damage', '弓傷害'],
  ['Bow Attack Speed', '弓攻擊速度'],
  ['Bow Mastery', '弓精通'],
  ['Claw Damage', '爪傷害'],
  ['Claw Mastery', '爪精通'],
  ['Dagger Damage', '匕首傷害'],
  ['Dagger Mastery', '匕首精通'],
  ['Axe Damage', '斧傷害'],
  ['Axe Mastery', '斧精通'],
  ['Mace Damage', '錘傷害'],
  ['Mace Mastery', '錘精通'],
  ['Attack Damage while holding a Shield', '持盾時攻擊傷害'],
  ['Attack Damage with Shield', '盾牌攻擊傷害'],
  ['Attack Damage while Dual Wielding', '雙持時攻擊傷害'],
  ['Dual Wielding Mastery', '雙持精通'],
  ['while holding a Shield', '持盾時'],
  ['while Dual Wielding', '雙持時'],
  ['while Fortified', '護體時'],
  ['Fortified', '護體'],
  ['Cooldown Recovery Rate', '冷卻恢復率'],
  ['Guard Skill Cooldown Recovery', '防衛技能冷卻恢復'],
  ['Movement Skill Cooldown Recovery', '位移技能冷卻恢復'],
  ['Energy Shield Recharge', '能量護盾充能'],
  ['Energy Shield Recharge Rate', '能量護盾充能率'],
  ['Life Regeneration', '生命回復'],
  ['Mana Reservation Efficiency', '魔力保留效用'],
  ['Mana Cost', '魔力消耗'],
  ['Area Damage Mastery', '範圍傷害精通'],
  ['Area of Effect Mastery', '範圍效果精通'],
  ['Attack Damage Mastery', '攻擊傷害精通'],
  ['Attack Mastery', '攻擊精通'],
  ['Aura Effect Mastery', '光環效果精通'],
  ['Accuracy Mastery', '命中值精通'],
  ['Attributes Mastery', '屬性精通'],
  ['Armour Mastery', '護甲精通'],
  ['Energy Shield Mastery', '能量護盾精通'],
  ['Evasion Mastery', '閃避精通'],
  ['Charge Mastery', '球球精通'],
  ['Curse Effect Mastery', '詛咒效果精通'],
  ['Curse Mastery', '詛咒精通'],
  ['Critical Mastery', '暴擊精通'],
  ['Critical Chance Mastery', '暴擊率精通'],
  ['Duration Mastery', '持續時間精通'],
  ['Elemental Damage Mastery', '元素傷害精通'],
  ['Elemental Mastery', '元素精通'],
  ['Chaos Damage Mastery', '混沌傷害精通'],
  ['Chaos Resistance Mastery', '混沌抗性精通'],
  ['Cold Damage Mastery', '冰冷傷害精通'],
  ['Cold Resistance Mastery', '冰冷抗性精通'],
  ['Fire Damage Mastery', '火焰傷害精通'],
  ['Fire Resistance Mastery', '火焰抗性精通'],
  ['Lightning Damage Mastery', '閃電傷害精通'],
  ['Lightning Resistance Mastery', '閃電抗性精通'],
  ['Damage Over Time Mastery', '持續傷害精通'],
  ['Damage with Two Handed Melee Weapons Mastery', '雙手近戰武器傷害精通'],
  ['Chance to Block Attack Damage Mastery', '攻擊格擋機率精通'],
  ['Chance to Block Spell Damage Mastery', '法術格擋機率精通'],
  ['Physical Damage Converted to Lightning Damage', '物理傷害轉換為閃電傷害'],
  ['Physical Damage Converted to Cold Damage', '物理傷害轉換為冰冷傷害'],
  ['Physical Damage Converted to Fire Damage', '物理傷害轉換為火焰傷害'],
  ['Gain a Power Charge on Critical Strike', '暴擊時獲得一顆暴擊球'],
  ['Gain a Frenzy Charge on Hit', '擊中時獲得一顆狂怒球'],
  ['Damage Penetrates', '傷害穿透'],
  ['chance to Suppress Spell Damage', '機率壓抑法術傷害'],
  ['Suppress Spell Damage', '壓抑法術傷害'],
  ['Critical Strike Multiplier', '暴擊加成'],
  ['Critical Strike Chance', '暴擊率'],
  ['Damage Over Time', '持續傷害'],
  ['Projectile Speed', '投射物速度'],
  ['Projectile Damage', '投射物傷害'],
  ['Attack Speed', '攻擊速度'],
  ['Attack Damage', '攻擊傷害'],
  ['Cast Speed', '施放速度'],
  ['Movement Speed', '移動速度'],
  ['Mana Regeneration', '魔力回復'],
  ['Mana Flask', '魔力藥劑'],
  ['Mana Flasks', '魔力藥劑'],
  ['Energy Shield', '能量護盾'],
  ['Double Damage', '雙倍傷害'],
  ['Charge Duration', '球球持續時間'],
  ['Charge on Kill', '擊殺獲球'],
  ['Flask Charges Gained', '藥劑充能獲得量'],
  ['Flask Charges Used', '藥劑充能消耗量'],
  ['Life Flask Charge Gain', '生命藥劑充能獲得量'],
  ['Mana Flask Charge Gain', '魔力藥劑充能獲得量'],
  ['Flask Charge Gain', '藥劑充能獲得量'],
  ['Flask Charges against Marked Enemy', '對標記敵人的藥劑充能'],
  ['Fortification Duration', '護體持續時間'],
  ['Fortification Gain', '護體獲得量'],
  ['Maximum Fortification', '最大護體'],
  ['Warcry Buff Effect', '戰吼增益效果'],
  ['Warcry Cooldown Recovery', '戰吼冷卻恢復'],
  ['Warcry Duration', '戰吼持續時間'],
  ['Warcry Speed', '戰吼速度'],
  ['Warcry Area of Effect', '戰吼範圍效果'],
  ['maximum Fortification', '最大護體'],
  ['Range on Melee Hit', '近戰擊中範圍'],
  ['Intimidate Enemies', '威嚇敵人'],
  ['Spell Damage', '法術傷害'],
  ['Area Damage', '範圍傷害'],
  ['Area of Effect', '範圍效果'],
  ['Chaos Resistance', '混沌抗性'],
  ['Lightning Resistance', '閃電抗性'],
  ['Cold Resistance', '冰冷抗性'],
  ['Fire Resistance', '火焰抗性'],
  ['Chaos Damage', '混沌傷害'],
  ['Lightning Damage', '閃電傷害'],
  ['Cold Damage', '冰冷傷害'],
  ['Fire Damage', '火焰傷害'],
  ['Physical Damage', '物理傷害'],
  ['Damage', '傷害'],
  ['Minion Damage', '召喚物傷害'],
  ['Damage with Bleeding', '流血傷害'],
  ['with Attack Skills', '使用攻擊技能時'],
  ['Power Charge', '暴擊球'],
  ['Frenzy Charge', '狂怒球'],
  ['Endurance Charge', '耐力球'],
  ['Maximum Energy Shield', '最大能量護盾'],
  ['Maximum Mana', '最大魔力'],
  ['maximum Mana', '最大魔力'],
  ['maximum Life', '最大生命'],
  ['Maximum Life', '最大生命'],
  ['maximum Resistances', '最大抗性'],
  ['Maximum Resistances', '最大抗性'],
  ['maximum Fire Resistance', '最大火焰抗性'],
  ['maximum Cold Resistance', '最大冰冷抗性'],
  ['maximum Lightning Resistance', '最大閃電抗性'],
  ['maximum Chaos Resistance', '最大混沌抗性'],
  ['Elemental Damage', '元素傷害'],
  ['Melee Physical Damage', '近戰物理傷害'],
  ['Melee Critical Strike Multiplier', '近戰暴擊加成'],
  ['Melee Damage', '近戰傷害'],
  ['all Attributes', '全部屬性'],
  ['as Extra', '作為額外'],
  ['Strength', '力量'],
  ['Dexterity', '敏捷'],
  ['Intelligence', '智慧'],
  ['Armour', '護甲'],
  ['Evasion', '閃避值'],
  ['Accuracy', '命中值'],
  ['Life', '生命'],
  ['Mana', '魔力'],
  ['Block', '格擋'],
  ['Onslaught', '猛攻'],
  ['Bleeding', '流血'],
  ['Poisons', '中毒'],
  ['Ignite', '點燃'],
  ['Shock', '感電'],
  ['Freeze', '冰凍'],
  ['Withered', '凋零'],
  ['Fire Exposure', '火焰曝曬'],
  ['Cold Exposure', '冰冷曝曬'],
  ['Lightning Exposure', '閃電曝曬'],
  ['Energy Shield Recharge Rate', '能量護盾充能率'],
  ['Life Regeneration', '生命回復'],
  ['Leeched as Energy Shield', '偷取為能量護盾'],
  ['Leeched as Life', '偷取為生命'],
  ['Leech', '偷取'],
  ['per Enemy Hit with Attacks', '每次攻擊擊中敵人時'],
  ['while you have at least', '當你至少有'],
  ['if you have at least', '若你至少有'],
  ['per Endurance Charge', '每顆耐力球'],
  ['per Power Charge', '每顆暴擊球'],
  ['per Frenzy Charge', '每顆狂怒球'],
  ['per Charge', '每顆球球'],
  ['deal Damage faster', '造成傷害加快'],
  ['increased', '增加'],
  ['reduced', '減少'],
  ['chance to inflict', '機率施加'],
  ['chance to deal', '機率造成'],
  ['chance to gain', '機率獲得'],
  ['per second', '每秒'],
  ['every second', '每秒'],
  ['on Critical Strike', '暴擊時'],
  ['on Hit', '擊中時'],
  ['on Kill', '擊殺時'],
  ['against Marked Enemy', '對被標記的敵人'],
  ['against Cursed Enemies', '對被詛咒的敵人'],
  [' and ', ' 與 '],
  [', ', '、'],
  [' Mastery', ' 精通'],
  ['Recently', '最近'],
  ['seconds', '秒'],
  ['Duration', '持續時間'],
  ['Effect', '效果'],
  ['Chance', '機率'],
  ['Gain', '獲得']
];

const orderedPhraseTranslations = [...phraseTranslations].sort((a, b) => b[0].length - a[0].length);

const regexTranslations: Array<[RegExp, string]> = [
  [/\bSSF\b/g, 'SSF'],
  [/Gain\s+(#|\d+)\s+Mana per Enemy Hit with Attacks if you've used a Mana Flask in the past (\d+) seconds/g,
    '若你在過去 $2 秒內使用過魔力藥劑，每次攻擊擊中敵人時獲得 $1 魔力'],
  [/\+(#|\d+)\s+to Strength and Intelligence/g, '+$1 力量與智慧'],
  [/\+(#|\d+)\s+to Dexterity and Intelligence/g, '+$1 敏捷與智慧'],
  [/\+(#|\d+)\s+to Strength and Dexterity/g, '+$1 力量與敏捷'],
  [/\+(#|\d+)\s+to Intelligence/g, '+$1 智慧'],
  [/\+(#|\d+)\s+to Strength/g, '+$1 力量'],
  [/\+(#|\d+)\s+to Dexterity/g, '+$1 敏捷'],
  [/(\d+)% increased maximum Mana/g, '$1% 增加最大魔力'],
  [/(\d+)% increased maximum Life/g, '$1% 增加最大生命'],
  [/(\d+)% increased maximum Energy Shield/g, '$1% 增加最大能量護盾'],
  [/([+-]?#?%?)\s+to\s+all\s+maximum\s+Resistances/g, '$1 全部最大抗性'],
  [/\ban (?=(耐力球|暴擊球|狂怒球))/g, ''],
  [/\ba (?=(耐力球|暴擊球|狂怒球))/g, ''],
  [/Gain\s+(#|\d+)\s+Endurance Charge every second if you've been Hit Recently/g, '若你最近有被擊中，每秒獲得 $1 顆耐力球'],
  [/if you've been Hit Recently/g, '若你最近有被擊中'],
  [/you've been Hit Recently/g, '最近有被擊中'],
  [/if you've used a Mana Flask in the past (\d+) seconds/g, '若你在過去 $1 秒內使用過魔力藥劑'],
  [/for 4 秒/g, '4 秒內'],
  [/on Hit if you have at least/g, '擊中時，若你至少有'],
  [/(\d+)\s+Devotion/g, '$1 奉獻'],
  [/(\d+)\s+seconds/g, '$1 秒']
];

const replaceAll = (text: string, search: string, replacement: string): string =>
  text.split(search).join(replacement);

const escapeRegExp = (text: string): string => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const statTemplatePatterns = Object.entries(exactStatTranslations)
  .filter(([source]) => source.includes('#'))
  .map(([source, target]) => ({
    pattern: new RegExp(`^${escapeRegExp(source).replace(/#/g, '([+-]?\\d+(?:\\.\\d+)?)')}$`),
    target
  }));

const translateExactStatTemplate = (text: string): string | undefined => {
  for (const { pattern, target } of statTemplatePatterns) {
    const match = text.match(pattern);
    if (!match) {
      continue;
    }

    const captures = [...match.slice(1)];
    return target.replace(/#/g, () => captures.shift() ?? '#');
  }

  return undefined;
};

const translateFragments = (text: string): string => {
  let translated = text;

  for (const [pattern, replacement] of regexTranslations) {
    translated = translated.replace(pattern, replacement);
  }

  for (const [source, target] of orderedPhraseTranslations) {
    translated = replaceAll(translated, source, target);
  }

  return translated;
};

const translateLine = (text: string): string => {
  const trimmed = text.trim();
  if (!trimmed) {
    return text;
  }

  if (exactNameTranslations[trimmed]) {
    return exactNameTranslations[trimmed];
  }

  if (exactStatTranslations[trimmed]) {
    return exactStatTranslations[trimmed];
  }

  const exactTemplateTranslation = translateExactStatTemplate(trimmed);
  if (exactTemplateTranslation) {
    return exactTemplateTranslation;
  }

  return translateFragments(text);
};

export const translateTimelessJewelName = (name: string): string => timelessJewelNames[name] ?? name;

export const translateConquerorName = (name: string): string => conquerorNames[name] ?? name;

export const translateDisplayName = (name: string): string =>
  name
    .split('\n')
    .map((line) => translateLine(line))
    .join('\n');

export const translatePassiveSkillName = (name: string): string => translateDisplayName(name);

export const translateAlternatePassiveSkillName = (name: string): string => translateDisplayName(name);

export const translateLeagueName = (name: string): string => {
  let translated = name;

  for (const [source, target] of leagueReplacements) {
    translated = replaceAll(translated, source, target);
  }

  return translated;
};

export const translateAlternatePassiveAdditionLabel = (
  addition: { ID?: string; Index?: number } | undefined,
  fallbackLabel = ''
): string => {
  if (!addition) {
    return fallbackLabel || '附加效果';
  }

  if (addition.ID && additionIdTranslations[addition.ID]) {
    return additionIdTranslations[addition.ID];
  }

  if (fallbackLabel) {
    return translateDisplayName(fallbackLabel);
  }

  if (addition.ID) {
    return translateDisplayName(addition.ID);
  }

  if (typeof addition.Index === 'number') {
    return `附加效果 #${addition.Index}`;
  }

  return '附加效果';
};
