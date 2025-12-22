import "./App.css";
import { useState } from "react";
import Book from "./components/Book";
import { booksData } from "./components/data";
import RandomQuote from "./components/quotes_app/components/RandomQuote";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);
  const [quote, setQuote] = useState("");
  const [color, setColor] = useState("bg-dark");

  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
    setColor(getRandomColor());
  }

  function getRandomColor() {
    const colors = [
      "bg-primary",
      "bg-secondary",
      "bg-success",
      "bg-danger",
      "bg-warning",
      "bg-info",
      "bg-dark",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  function Increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function Decrement() {
    setCount((prevCount) => prevCount - 1);
  }
  const quotes = [
    {
      author: "Albert Einstein",
      content:
        "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    },
    {
      author: "Isaac Newton",
      content:
        "If I have seen further it is by standing on the shoulders of Giants.",
    },
    {
      author: "Marie Curie",
      content: "Be less curious about people and more curious about ideas.",
    },
    {
      author: "Leonardo da Vinci",
      content: "Learning never exhausts the mind.",
    },
    {
      author: "Aristotle",
      content: "The more you know, the more you realize you don't know.",
    },
  ];
  return (
    <div className="container">
      <IncrementButton onIncrement={Increment} />
      <p>Count: {count}</p>
      <DecrementButton onDecrement={Decrement} />
      {/* <RandomQuote quote={quote} color={color} onChangeQuote={getRandomQuote} /> */}
    </div>
  );
}

export default App;

function IncrementButton({ onIncrement }) {
  return (
    <div>
      <button className="btn btn-success" onClick={onIncrement}>
        Increment
      </button>
      {/* <p>Count: {count}</p> */}
    </div>
  );
}

function DecrementButton({ onDecrement }) {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <button className="btn btn-danger" onClick={onDecrement}>
        Decrement
      </button>
      {/* <p>Count: {count}</p> */}
    </div>
  );
}
