"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItems = getItems;
exports.addItem = addItem;
exports.deleteItem = deleteItem;
exports.updateItem = updateItem;
const items_1 = __importDefault(require("../data/items"));
let items = items_1.default;
function getItems() {
    return items;
}
function addItem(item) {
    items.push(item);
}
function deleteItem(id) {
    items = items.filter((i) => i.id !== id);
}
function updateItem(id, updatedItem) {
    items = items.map((item) => (item.id === id ? updatedItem : item));
}
