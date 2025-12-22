import { useState } from "react";
import QuoteCard from "./components/QuoteCard";

function RandomQuote() {
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
    <QuoteCard quote={quote} color={color} onChangeQuote={getRandomQuote} />
  );
}

export default RandomQuote;
