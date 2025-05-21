import type { ShoppingItem } from "../data/items";
import itemsData from "../data/items";

let items = itemsData;

export function getItems() {
  return items;
}

export function addItem(item: ShoppingItem) {
  items.push(item);
}

export function deleteItem(id: string) {
  items = items.filter((i) => i.id !== id);
}

export function updateItem(id: string, updatedItem: ShoppingItem) {
  items = items.map((item) => (item.id === id ? updatedItem : item));
}
