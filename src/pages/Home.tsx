import AddItemModal from "../components/AddItemModal";
import Header from "../components/Header";
import ShoppingList from "../components/ShoppingList";

export default function Home() {
  return (
    <>
      <Header />
      <ShoppingList />
      <AddItemModal />
    </>
  );
}
