"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const uuid_1 = require("uuid");
const items_1 = require("./queries/items");
const BASE_URL = "/api";
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get(`${BASE_URL}/items`, (_req, res) => {
    res.json((0, items_1.getItems)());
});
app.post(`${BASE_URL}/items`, (req, res) => {
    const item = { ...req.body, id: (0, uuid_1.v4)() };
    (0, items_1.addItem)(item);
    res.status(201).json(item);
});
app.delete(`${BASE_URL}/items/:id`, (req, res) => {
    const { id } = req.params;
    (0, items_1.deleteItem)(id);
    res.sendStatus(204);
});
app.put(`${BASE_URL}/items/:id`, (req, res) => {
    const { id } = req.params;
    const updatedItem = req.body;
    (0, items_1.updateItem)(id, updatedItem);
    res.json(updatedItem);
});
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
