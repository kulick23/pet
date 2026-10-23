export type WasteCategory = 'paper' | 'glass' | 'plastic' | 'metal';

export type WasteItem = {
  id: string;
  name: string;
  category: WasteCategory;
  form: 'sheet' | 'bottle' | 'jar' | 'can' | 'box';
  color: string;
  explanation: string;
};

export const categories: { id: WasteCategory; name: string; key: string; color: string }[] = [
  { id: 'paper', name: 'Бумага', key: '1', color: '#f5c842' },
  { id: 'glass', name: 'Стекло', key: '2', color: '#90d7ff' },
  { id: 'plastic', name: 'Пластик', key: '3', color: '#11e94e' },
  { id: 'metal', name: 'Металл', key: '4', color: '#ff725e' },
];

export const wasteItems: WasteItem[] = [
  { id: 'newspaper', name: 'Газета', category: 'paper', form: 'sheet', color: '#f5c842', explanation: 'Чистую сухую бумагу принимают вместе с макулатурой.' },
  { id: 'cardboard', name: 'Картонная коробка', category: 'paper', form: 'box', color: '#d39a55', explanation: 'Коробку нужно освободить, сделать плоской и сдать как макулатуру.' },
  { id: 'notebook', name: 'Тетрадь без пружины', category: 'paper', form: 'sheet', color: '#ffffff', explanation: 'После удаления пластика и металлической пружины бумага подходит для макулатуры.' },
  { id: 'glass-bottle', name: 'Стеклянная бутылка', category: 'glass', form: 'bottle', color: '#90d7ff', explanation: 'Пустую стеклянную тару сдавайте в контейнер для стекла.' },
  { id: 'jar', name: 'Стеклянная банка', category: 'glass', form: 'jar', color: '#c1efff', explanation: 'Банка относится к стеклу; крышку нужно сортировать отдельно.' },
  { id: 'water-bottle', name: 'ПЭТ-бутылка', category: 'plastic', form: 'bottle', color: '#11e94e', explanation: 'Сомните пустую ПЭТ-бутылку, чтобы она занимала меньше места.' },
  { id: 'shampoo', name: 'Флакон шампуня', category: 'plastic', form: 'bottle', color: '#75ff9d', explanation: 'Пустой промытый флакон обычно относится к тарному пластику.' },
  { id: 'detergent', name: 'Канистра средства', category: 'plastic', form: 'bottle', color: '#5bcf7c', explanation: 'Пустая бытовая канистра — пластик; остатки средства нужно удалить.' },
  { id: 'food-can', name: 'Консервная банка', category: 'metal', form: 'can', color: '#d8dce0', explanation: 'Чистая металлическая банка подходит для сбора металла.' },
  { id: 'drink-can', name: 'Алюминиевая банка', category: 'metal', form: 'can', color: '#ff725e', explanation: 'Алюминий можно перерабатывать многократно; банку лучше смять.' },
];

export const GAME_DURATION = 45;
