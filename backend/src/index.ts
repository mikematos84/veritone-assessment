import express, { Request, Response } from "express";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

export interface ShoppingItem {
  id: string | number;
  name: string;
  quantity: number;
  description?: string;
  purchased?: boolean;
}

// Mock in-memory data
let items: ShoppingItem[] = [
  {
    id: uuidv4(),
    name: "Apple",
    quantity: 2,
    description: "Fresh and juicy apples",
  },
  {
    id: uuidv4(),
    name: "Banana",
    quantity: 1,
    description: "Ripe bananas",
  },
  {
    id: uuidv4(),
    name: "Carrot",
    quantity: 1,
    description: "Crunchy carrots",
  },
  {
    id: uuidv4(),
    name: "Tomato",
    quantity: 3,
    description: "Fresh tomatoes",
  },
  {
    id: uuidv4(),
    name: "Potato",
    quantity: 2,
    description: "Starchy potatoes",
  },
];

app.get("/items", (_req: Request, res: Response<ShoppingItem[]>) => {
  res.json(items);
});

app.post(
  "/items",
  (req: Request<{}, {}, ShoppingItem>, res: Response<ShoppingItem>) => {
    const item = { ...req.body, id: uuidv4() };
    items.push(item);
    res.status(201).json(item);
  }
);

app.delete("/items/:id", (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params;
  items = items.filter((i) => i.id !== id);
  res.sendStatus(204);
});

app.put(
  "/items/:id",
  (req: Request<{ id: string }, {}, ShoppingItem>, res: Response) => {
    const { id } = req.params;
    const updatedItem = req.body;

    items = items.map((item) => (item.id === id ? updatedItem : item));
    res.json(updatedItem);
  }
);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
