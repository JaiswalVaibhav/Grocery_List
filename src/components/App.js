import React, { createContext, useState } from "react";

import GroceryInput from "./GroceryInput";

import DisplayGroceryList from "./DisplayGroceryList";

import GroceryStats from "./GroceryStats";

export const listContext = createContext();

function App() {
  const listObject = [
    { listItem: "Honey", repetation: 1, isPurchased: false, isDeleted:false },
  ];

  const [list, setList] = useState(listObject);

  return (
    <listContext.Provider value={{ list, setList }}>
      <div>
        <h1 className="title">Grocery List</h1>

        <GroceryInput />

        <DisplayGroceryList />

        <GroceryStats />
      </div>
    </listContext.Provider>
  );
}

export default App;
