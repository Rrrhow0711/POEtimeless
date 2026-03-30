import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

const root = path.resolve(import.meta.dirname, '..', '..');
const dataDir = path.join(root, 'data');
const outDir = path.join(root, 'frontend', 'src', 'lib', 'i18n');
const outFile = path.join(outDir, 'translation-skeleton.json');

const readGz = (filename) =>
  JSON.parse(zlib.gunzipSync(fs.readFileSync(path.join(dataDir, filename))).toString('utf8'));

const alternatePassiveSkills = readGz('alternate_passive_skills.json.gz');
const alternatePassiveAdditions = readGz('alternate_passive_additions.json.gz');
const passiveSkills = readGz('passive_skills.json.gz');

const uniqueSorted = (values) => [...new Set(values.filter(Boolean))].sort((a, b) => a.localeCompare(b));

const skeleton = {
  generatedAt: new Date().toISOString(),
  timelessJewels: {
    'Glorious Vanity': '',
    'Lethal Pride': '',
    'Brutal Restraint': '',
    'Militant Faith': '',
    'Elegant Hubris': ''
  },
  conquerors: {
    Xibaqua: '',
    Zerphi: '',
    Ahuana: '',
    Doryani: '',
    Kaom: '',
    Rakiata: '',
    Kiloava: '',
    Akoya: '',
    Deshret: '',
    Balbala: '',
    Asenath: '',
    Nasima: '',
    Venarius: '',
    Maxarius: '',
    Dominus: '',
    Avarius: '',
    Cadiro: '',
    Victario: '',
    Chitus: '',
    Caspiro: ''
  },
  alternatePassiveSkillNames: Object.fromEntries(
    uniqueSorted(alternatePassiveSkills.map((item) => item.Name)).map((name) => [name, ''])
  ),
  alternatePassiveAdditionIds: Object.fromEntries(
    uniqueSorted(alternatePassiveAdditions.map((item) => item.Id || item.ID)).map((id) => [id, ''])
  ),
  passiveSkillNames: Object.fromEntries(
    uniqueSorted(passiveSkills.map((item) => item.Name)).map((name) => [name, ''])
  )
};

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, JSON.stringify(skeleton, null, 2) + '\n');
console.log(`Wrote translation skeleton to ${outFile}`);

