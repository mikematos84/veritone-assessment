import { useState } from "react";
import AddItemModal from "../components/AddItemModal";
import Header from "../components/Header";
import ShoppingList from "../components/ShoppingList";
import {
  addItem,
  removeItem,
  type ShoppingItem,
} from "../features/shoppingList/ShoppingListSlice";
import { useDispatch, useSelector } from "react-redux";
import Overlay from "../components/Overlay";

export default function Home() {
  const items = useSelector((state: any) => state.shoppingList.items);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [item, setItem] = useState<ShoppingItem | undefined>(undefined);
  const dispatch = useDispatch();

  const handleAddItem = (item: ShoppingItem) => {
    setIsAddModalOpen(true);
  };

  return (
    <>
      <Header />
      <ShoppingList
        items={items}
        setModalOpen={setIsAddModalOpen}
        onDeleteItem={(item) => {
          dispatch(removeItem(item));
          console.info("delete", item);
        }}
        onEditItem={(item) => {
          setItem(item);
          setIsAddModalOpen(true);
        }}
      />
      {isAddModalOpen && <Overlay />}
      <AddItemModal
        title="Shopping List"
        isOpen={isAddModalOpen}
        item={item}
        onClose={() => {
          setIsAddModalOpen(false);
        }}
        onCancel={() => {
          setIsAddModalOpen(false);
        }}
        onAdd={(item: ShoppingItem) => {
          dispatch(addItem(item));
          setIsAddModalOpen(false);
        }}
      />
    </>
  );
}
