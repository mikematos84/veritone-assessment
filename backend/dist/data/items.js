"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
// In-memory data store for shopping items
const items = [
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
exports.default = items;
