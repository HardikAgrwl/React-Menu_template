import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import data from "./data";

const categoryList = ["All", ...new Set(data.map((item) => item.category))];

function App() {
  const filterCategory = (category) => {
    if (category === "All") setItems(data);
    else {
      const newItems = data.filter((item) => item.category === category);
      setItems(newItems);
    }
  };

  const [items, setItems] = useState(data);
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories list={categoryList} filterCategory={filterCategory} />
        <Menu items={items} />
      </section>
    </main>
  );
}

export default App;
