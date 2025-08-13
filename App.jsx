import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const items = [
    "Apples",
    "Bananas",
    "Strawberries",
    "Blueberries",
    "Mangoes",
    "Pineapple",
    "Lettuce",
    "Broccoli",
    "Paper Towels",
    "Dish Soap",
  ];
  const [selectedItems, setSelectedItems] = useState([]);
  const toggleItem = (item) => {
    setSelectedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const filteredItems = items.filter((item) => {
    return item.toLowerCase().includes(query.toLowerCase());
  });
  return (
    <>
      <div className="container">
        <h1>Shopping List</h1>
        <form>
          <label htmlFor="search">Search for an item:</label>
          <input
            type="search"
            id="search"
            placeholder="Search..."
            aria-describedby="search-description"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <p id="search-description">Type to filter the list below:</p>

          <ul>
            {filteredItems.map((item) => {
              const isChecked = selectedItems.includes(item);
              return (
                <li
                  key={item}
                  style={{
                    textDecoration: isChecked ? "line-through" : "none",
                  }}
                >
                  <label>
                    {
                      <input
                        type="checkbox"
                        onChange={() => toggleItem(item)}
                      />
                    }
                    {item}
                  </label>
                </li>
              );
            })}
          </ul>
        </form>
      </div>
    </>
  );
}

export default App;
