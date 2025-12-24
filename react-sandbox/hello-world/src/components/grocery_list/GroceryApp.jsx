import { useState } from "react";
import GroceryFooter from "./components/GroceryFooter";
import GroceryForm from "./components/GroceryForm";
import GroceryList from "./components/GroceryList";
import GroceryNav from "./components/GroceryNav";

function GroceryApp() {
  const [groceryItems, setGroceryItems] = useState([]);
  const [groceryInput, setGroceryInput] = useState("");
  function handleOnChange(e) {
    setGroceryInput(e.target.value);
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    if (!groceryInput.trim()) return;
    const newGrocery = {
      id: Date.now(),
      text: groceryInput,
      bought: false,
    };
    setGroceryItems([newGrocery, ...groceryItems]);
    setGroceryInput("");
  }

  function toggleBought(id) {
    const updatedItems = groceryItems.map((item) => {
      if (item.id === id) {
        console.log(item);
        return { ...item, bought: !item.bought };
      }
      return item;
    });
    setGroceryItems(updatedItems);
  }

  function handleRemoveItem(id) {
    const updatedItems = groceryItems.filter((item) => item.id !== id);
    setGroceryItems(updatedItems);
  }

  const totalItems = groceryItems.length;
  const totalBought = groceryItems.filter((item) => item.bought).length;

  return (
    <div className="container pt-2">
      <GroceryNav />
      <GroceryForm
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
        item={groceryInput}
      />
      <GroceryList
        items={groceryItems}
        handleOnToggle={toggleBought}
        handleRemoveItem={handleRemoveItem}
      />
      <GroceryFooter totalBought={totalBought} totalItems={totalItems} />
    </div>
  );
}

export default GroceryApp;
