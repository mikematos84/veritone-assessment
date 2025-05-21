import { v4 as uuidv4 } from "uuid";

export interface ShoppingItem {
  id: string | number;
  name: string;
  quantity: number;
  description?: string;
  purchased?: boolean;
}

// In-memory data store for shopping items
const items: ShoppingItem[] = [
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

export default items;
