import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(3);
  const [count, setCount] = useState(0);

  const showMoreItems = () => {
    setVisible((preValue) => preValue + 3);
  };

  const getItem = (data) => {
    setItems(data);
    setCount(data.length);
    // console.log(data.length, count);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => getItem(data));
  }, []);

  return (
    <div className="App">
      <div className="container">
        {items.slice(0, visible).map((item) => (
          <div className="card" key={item.id}>
            <div className="id">
              <span>{item.id}</span>
            </div>
            <p>{item.body}</p>
          </div>
        ))}

        <button
          onClick={showMoreItems}
          style={{ display: visible >= count ? "none" : "block" }}
        >
          LOAD MORE
        </button>
      </div>
    </div>
  );
}

export default App;
