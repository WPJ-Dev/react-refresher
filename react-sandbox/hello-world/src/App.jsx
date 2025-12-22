import "./App.css";
import { useState } from "react";
import Book from "./components/Book";
import { booksData } from "./components/data";
import Counter from "./components/counter_state_example_app/Counter";
import RandomQuote from "./components/quotes_app/RandomQuote";
import "bootstrap/dist/css/bootstrap.min.css";
import { NameForm } from "./components/Forms";

function App() {
  return (
    <div className="container pt-2">
      <NameForm />
    </div>
  );
}

export default App;
