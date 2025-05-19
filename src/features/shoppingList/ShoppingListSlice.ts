import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface ShoppingListItem {
  id: string;
  name: string;
  quantity: number;
  description?: string;
}

interface ShoppingListState {
  items: ShoppingListItem[];
}

const initialState: ShoppingListState = {
  items: [],
};

const shoppingListSlice = createSlice({
  name: "shoppingList",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ShoppingListItem>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    editItem: (state, action: PayloadAction<ShoppingListItem>) => {
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
