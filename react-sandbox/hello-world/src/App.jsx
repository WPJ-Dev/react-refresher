import "./App.css";
import { useEffect, useState } from "react";
import Book from "./components/Book";
import { booksData } from "./components/data";
import Counter from "./components/counter_state_example_app/Counter";
import RandomQuote from "./components/quotes_app/RandomQuote";
import "bootstrap/dist/css/bootstrap.min.css";
import { NameForm } from "./components/Forms";
import GroceryApp from "./components/grocery_list/GroceryApp";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const jsonData = await res.json();

      setData(jsonData);
      setIsLoading(false);
    }

    getData();
  }, []);

  return (
    <div className="container pt-2">
      {/* <GroceryApp /> */}
      {/* <DataFetching data={data} isLoading={isLoading} /> */}
      <AdjustableTimer />
    </div>
  );
}

export default App;

function AdjustableTimer() {
  const [seconds, setSeconds] = useState(0);
  const [intervalMs, setIntervalMs] = useState(1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [intervalMs]);

  return (
    <div>
      <div>Seconds: {seconds}</div>
      <input
        type="number"
        value={intervalMs}
        onChange={(e) => setIntervalMs(Number(e.target.value))}
      />

      <label>Adjust Interval Ms</label>
    </div>
  );
}

// function DataFetching({ data, isLoading }) {
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }
//   return (
//     <div>
//       {data.map((post) => (
//         <div key={post.id}>{post.title}</div>
//       ))}
//     </div>
//   );
// }
