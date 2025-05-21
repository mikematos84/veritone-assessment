import express, { Request, Response } from "express";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";
import { ShoppingItem } from "./data/items";
import { getItems, addItem, deleteItem, updateItem } from "./queries/items";

const BASE_URL = "/api";
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get(`${BASE_URL}/items`, (_req: Request, res: Response<ShoppingItem[]>) => {
  res.json(getItems());
});

app.post(
  `${BASE_URL}/items`,
  (req: Request<{}, {}, ShoppingItem>, res: Response<ShoppingItem>) => {
    const item = { ...req.body, id: uuidv4() };
    addItem(item);
    res.status(201).json(item);
  }
);

app.delete(
  `${BASE_URL}/items/:id`,
  (req: Request<{ id: string }>, res: Response) => {
    const { id } = req.params;
    deleteItem(id);
    res.sendStatus(204);
  }
);

app.put(
  `${BASE_URL}/items/:id`,
  (req: Request<{ id: string }, {}, ShoppingItem>, res: Response) => {
    const { id } = req.params;
    const updatedItem = req.body;
    updateItem(id, updatedItem);
    res.json(updatedItem);
  }
);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
