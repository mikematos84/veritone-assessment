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
import DialogBox from "../components/DialogBox";

export default function Home() {
  const items = useSelector((state: any) => state.shoppingList.items);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(true);

  const [item, setItem] = useState<ShoppingItem | undefined>(undefined);

  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <ShoppingList
        items={items}
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
      <DialogBox
        item={item}
        isOpen={isDeleteModalOpen}
        setIsOpen={setIsDeleteModalOpen}
      />
    </>
  );
}
