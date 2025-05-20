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
import EditItemModal from "../components/EditItemModal";

export default function Home() {
  const items = useSelector((state: any) => state.shoppingList.items);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [item, setItem] = useState<ShoppingItem | undefined>(undefined);

  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <ShoppingList
        items={items}
        addItemModal={setIsAddModalOpen}
        onDeleteItem={(item) => {
          dispatch(removeItem(item));
          console.info("delete", item);
        }}
        onEditItem={(item) => {
          setItem(item);
          setIsEditModalOpen(true);
        }}
      />
      {(isAddModalOpen || isEditModalOpen) && <Overlay />}
      <AddItemModal
        title="Shopping List"
        isOpen={isAddModalOpen}
        setIsOpen={setIsAddModalOpen}
      />
      <EditItemModal
        title="Edit Item"
        isOpen={isEditModalOpen}
        item={item}
        onClose={() => {
          setIsEditModalOpen(false);
        }}
        onCancel={() => {
          setIsEditModalOpen(false);
        }}
        onEdit={() => {
          setIsEditModalOpen(false);
        }}
      />
    </>
  );
}
