import type { Localized } from '../i18n/I18nProvider';

export type WasteCategory = 'paper' | 'glass' | 'plastic' | 'metal';

export type WasteItem = {
  id: string;
  name: Localized<string>;
  category: WasteCategory;
  form: 'sheet' | 'bottle' | 'jar' | 'can' | 'box';
  color: string;
  explanation: Localized<string>;
};

export const categories: { id: WasteCategory; name: Localized<string>; key: string; color: string }[] = [
  { id: 'paper', name: { ru: 'Бумага', en: 'Paper' }, key: '1', color: '#f5c842' },
  { id: 'glass', name: { ru: 'Стекло', en: 'Glass' }, key: '2', color: '#90d7ff' },
  { id: 'plastic', name: { ru: 'Пластик', en: 'Plastic' }, key: '3', color: '#11e94e' },
  { id: 'metal', name: { ru: 'Металл', en: 'Metal' }, key: '4', color: '#ff725e' },
];

export const wasteItems: WasteItem[] = [
  { id: 'newspaper', name: { ru: 'Газета', en: 'Newspaper' }, category: 'paper', form: 'sheet', color: '#f5c842', explanation: { ru: 'Чистую сухую бумагу принимают вместе с макулатурой.', en: 'Clean, dry paper can be recycled with other waste paper.' } },
  { id: 'cardboard', name: { ru: 'Картонная коробка', en: 'Cardboard box' }, category: 'paper', form: 'box', color: '#d39a55', explanation: { ru: 'Коробку нужно освободить, сделать плоской и сдать как макулатуру.', en: 'Empty and flatten the box before recycling it as waste paper.' } },
  { id: 'notebook', name: { ru: 'Тетрадь без пружины', en: 'Notebook without binding' }, category: 'paper', form: 'sheet', color: '#ffffff', explanation: { ru: 'После удаления пластика и металлической пружины бумага подходит для макулатуры.', en: 'Remove plastic and metal binding before recycling the paper.' } },
  { id: 'glass-bottle', name: { ru: 'Стеклянная бутылка', en: 'Glass bottle' }, category: 'glass', form: 'bottle', color: '#90d7ff', explanation: { ru: 'Пустую стеклянную тару сдавайте в контейнер для стекла.', en: 'Put empty glass containers in the glass collection bin.' } },
  { id: 'jar', name: { ru: 'Стеклянная банка', en: 'Glass jar' }, category: 'glass', form: 'jar', color: '#c1efff', explanation: { ru: 'Банка относится к стеклу; крышку нужно сортировать отдельно.', en: 'The jar belongs with glass; sort its lid separately.' } },
  { id: 'water-bottle', name: { ru: 'ПЭТ-бутылка', en: 'PET bottle' }, category: 'plastic', form: 'bottle', color: '#11e94e', explanation: { ru: 'Сомните пустую ПЭТ-бутылку, чтобы она занимала меньше места.', en: 'Crush the empty PET bottle so it takes up less space.' } },
  { id: 'shampoo', name: { ru: 'Флакон шампуня', en: 'Shampoo bottle' }, category: 'plastic', form: 'bottle', color: '#75ff9d', explanation: { ru: 'Пустой промытый флакон обычно относится к тарному пластику.', en: 'An empty rinsed bottle usually belongs with packaging plastic.' } },
  { id: 'detergent', name: { ru: 'Канистра средства', en: 'Detergent container' }, category: 'plastic', form: 'bottle', color: '#5bcf7c', explanation: { ru: 'Пустая бытовая канистра — пластик; остатки средства нужно удалить.', en: 'An empty household container is plastic; remove any product residue.' } },
  { id: 'food-can', name: { ru: 'Консервная банка', en: 'Food can' }, category: 'metal', form: 'can', color: '#d8dce0', explanation: { ru: 'Чистая металлическая банка подходит для сбора металла.', en: 'A clean metal can belongs in metal collection.' } },
  { id: 'drink-can', name: { ru: 'Алюминиевая банка', en: 'Aluminium can' }, category: 'metal', form: 'can', color: '#ff725e', explanation: { ru: 'Алюминий можно перерабатывать многократно; банку лучше смять.', en: 'Aluminium can be recycled repeatedly; crush the can first.' } },
];

export const GAME_DURATION = 45;
