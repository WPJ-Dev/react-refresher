import "./App.css";
import { useState } from "react";
import Book from "./components/Book";
import { booksData } from "./components/data";
import Counter from "./components/counter_state_example_app/Counter";
import RandomQuote from "./components/quotes_app/RandomQuote";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Counter />
      <RandomQuote />
    </div>
  );
}

export default App;
