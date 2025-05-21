import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface ShoppingItem {
  id: string | number;
  name: string;
  quantity: number;
  description?: string;
  purchased?: boolean;
}

interface ShoppingListState {
  items: ShoppingItem[];
  loading: boolean;
  error: string | null;
}

const initialState: ShoppingListState = {
  items: [],
  loading: false,
  error: null,
};

const shoppingListSlice = createSlice({
  name: "shoppingList",
  initialState,
  reducers: {
    fetchItemsStart(state) {
      state.loading = true;
    },
    fetchItemsSuccess(state, action: PayloadAction<ShoppingItem[]>) {
      state.loading = false;
      state.items = action.payload;
    },
    fetchItemsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
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

export const {
  fetchItemsStart,
  fetchItemsSuccess,
  fetchItemsFailure,
  addItem,
  removeItem,
  editItem,
  clearList,
} = shoppingListSlice.actions;

export default shoppingListSlice.reducer;
