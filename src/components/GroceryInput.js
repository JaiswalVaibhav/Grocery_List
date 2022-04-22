import React, { useContext, useState } from "react";

import { listContext } from "./App";

function GroceryInput() {
  const { list, setList } = useContext(listContext);

  const [value, setValue] = useState("");

  const [quantity, setQuantity] = useState();

  var isTrue = true;

  const addToList = (e) => {
    e.preventDefault();

    if (quantity >= 1) {
      list.map((el) => {
        if (el.listItem.toLowerCase() === value.toLowerCase()) {
          el.repetation = el.repetation + parseInt(quantity, 10);
          setValue("");
          setQuantity();
          setList([...list]);
          isTrue = false;
          document.getElementById("numberInput").value = "";
        }
      });
      if (isTrue) {
        setList([
          ...list,
          {
            listItem: value,
            repetation: parseInt(quantity, 10),
            isPurchased: false,
          },
        ]);
        setValue("");
        setQuantity();
        document.getElementById("numberInput").value = "";
      } 
    } else {
      document.getElementById("showNotification").innerHTML =
        "Quantity must be greater than 0.";
      setValue("");
      setQuantity();
      document.getElementById("numberInput").value = "";
    }
  };


  const handleChangeText = (e) => {
    const {
      target: { value },
    } = e;
    console.log(value);
    setValue(value);
  };

  const handleChangeNumber = (e) => {
    const {
      target: { value },
    } = e;
    console.log(value);
    setQuantity(value);
    console.log(quantity);
  };

  const clearAll = () => {
    setList([]);
  };

  return (
    <>
      <form className="input-form" onSubmit={addToList}>

        <input
          id="textInput"
          type="text"
          name="item"
          placeholder="Add New Item"
          value={value}
          onChange={handleChangeText}
          onClick={() => {
            document.getElementById("showNotification").innerHTML = "";
          }}
          required
        ></input>

        <input
          id="numberInput"
          type="number"
          name="numberOfItem"
          placeholder="Quantity"
          onChange={handleChangeNumber}
          required
        ></input>

        <button id="add-btn" className="btn" type="submit">
          Add
        </button>

        <button className="btn" type="button" onClick={clearAll}>
          Remove All
        </button>
      </form>

      <p id="showNotification"></p>
    </>
  );
}

export default GroceryInput;
