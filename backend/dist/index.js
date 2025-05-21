"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const uuid_1 = require("uuid");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Mock in-memory data
let items = [
    {
        id: (0, uuid_1.v4)(),
        name: "Apple",
        quantity: 2,
        description: "Fresh and juicy apples",
    },
    {
        id: (0, uuid_1.v4)(),
        name: "Banana",
        quantity: 1,
        description: "Ripe bananas",
    },
    {
        id: (0, uuid_1.v4)(),
        name: "Carrot",
        quantity: 1,
        description: "Crunchy carrots",
    },
    {
        id: (0, uuid_1.v4)(),
        name: "Tomato",
        quantity: 3,
        description: "Fresh tomatoes",
    },
    {
        id: (0, uuid_1.v4)(),
        name: "Potato",
        quantity: 2,
        description: "Starchy potatoes",
    },
];
app.get("/items", (_req, res) => {
    res.json(items);
});
app.post("/items", (req, res) => {
    const item = { ...req.body, id: (0, uuid_1.v4)() };
    items.push(item);
    res.status(201).json(item);
});
app.delete("/items/:id", (req, res) => {
    const { id } = req.params;
    items = items.filter((i) => i.id !== id);
    res.sendStatus(204);
});
app.put("/items/:id", (req, res) => {
    const { id } = req.params;
    const updatedItem = req.body;
    items = items.map((item) => (item.id === id ? updatedItem : item));
    res.json(updatedItem);
});
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
