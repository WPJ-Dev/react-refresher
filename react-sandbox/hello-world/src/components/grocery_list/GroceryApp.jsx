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
  //   const groceries = [
  //     { id: Date.now(), text: "Bananas", bought: false },
  //     { id: Date.now(), text: "Apples", bought: false },
  //     { id: Date.now(), text: "Pear", bought: false },
  //   ];
  return (
    <div className="container pt-2">
      <GroceryNav />
      <GroceryForm
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
        item={groceryInput}
      />
      <GroceryList items={groceryItems} />
      <GroceryFooter />
    </div>
  );
}

export default GroceryApp;
