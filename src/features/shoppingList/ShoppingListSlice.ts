import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export interface ShoppingItem {
  id: string | number;
  name: string;
  quantity: number;
  description?: string;
  purchased?: boolean;
}

interface ShoppingListState {
  items: ShoppingItem[];
}

const mockData: ShoppingItem[] = [
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

const initialState: ShoppingListState = {
  items: [...mockData],
};

const shoppingListSlice = createSlice({
  name: "shoppingList",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ShoppingItem>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<ShoppingItem>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    editItem: (state, action: PayloadAction<ShoppingItem>) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    clearList: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, editItem, clearList } =
  shoppingListSlice.actions;

export default shoppingListSlice.reducer;
