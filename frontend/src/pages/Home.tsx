import { useState } from "react";
import { type ShoppingItem } from "../features/shoppingList/shoppingListSlice";

import Header from "../components/Header";
import ShoppingList from "../components/ShoppingList";
import Overlay from "../components/Overlay";
import AddItemModal from "../components/AddItemModal";
import EditItemModal from "../components/EditItemModal";
import DeleteItemPrompt from "../components/DeleteItemPrompt";

export default function Home() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [item, setItem] = useState<ShoppingItem | undefined>(undefined);

  return (
    <>
      <Header />
      <ShoppingList
        addItemModal={setIsAddModalOpen}
        onDeleteItem={(item) => {
          setItem(item);
          setIsDeleteModalOpen(true);
        }}
        onEditItem={(item) => {
          setItem(item);
          setIsEditModalOpen(true);
        }}
      />
      {(isAddModalOpen || isEditModalOpen || isDeleteModalOpen) && <Overlay />}
      <AddItemModal isOpen={isAddModalOpen} setIsOpen={setIsAddModalOpen} />
      <EditItemModal
        item={item}
        isOpen={isEditModalOpen}
        setIsOpen={setIsEditModalOpen}
      />
      <DeleteItemPrompt
        item={item}
        isOpen={isDeleteModalOpen}
        setIsOpen={setIsDeleteModalOpen}
      />
    </>
  );
}
