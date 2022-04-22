import React, { useContext } from "react";

import { listContext } from "./App";

function GroceryStats() {
  const { list, setList } = useContext(listContext);

  const purchaseAll = () => {
    setList(
      list.map((el) => {
        return { ...el, isPurchased: true };
      })
    );
  };

  var itemCount = 0;

  var totalItemCountList;

  if (list.length === 0) {
    totalItemCountList = [0];
  } else {
    totalItemCountList = list.map((el) => {
      if(!el.isDeleted){
        itemCount = itemCount + el.repetation;
      }
      return itemCount;
    });
  }

  return (
    <div>
      <h4>
        Total number of Grocery items :{" "}
        {totalItemCountList[totalItemCountList.length - 1]}
      </h4>

      <button className="btn" onClick={purchaseAll}>
        Purchase All
      </button>
    </div>
  );
}

export default GroceryStats;
