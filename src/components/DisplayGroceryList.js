import React, { useContext } from "react";

import { listContext } from "./App";

function DisplayGroceryList() {
  const { list, setList } = useContext(listContext);

  return (
    <div className="grocery-list">
      <table>
        <tr>
          <th>Items</th>
          <th>Quantity</th>
          <th>Purchase</th>
          <th>Remove</th>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>

            {list.map((el) => {
                console.log(el.listItem);
                const { listItem, repetation, isPurchased, isDeleted } = el;
                if(!isDeleted){
                return (
                  <>
                    <tr style={{ background: isPurchased ? "red" : "white" }}>
                        <td
                          onClick={() => {
                            const newGroceryList = list.map((el) => {
                              if (el.listItem === listItem) {
                                return { ...el, isPurchased: !el.isPurchased };
                              }
                              return el;
                            });
                            setList(newGroceryList);
                          }}
                        >
                          {listItem}
                        </td>
                        <td>
                          {repetation}
                        </td>
                        <td>
                          <button 
                              className="purchase_btn"
                              onClick={() => {
                                const newGroceryList = list.map((el) => {
                                  if (el.listItem === listItem) {
                                    return { ...el, isPurchased: !el.isPurchased };
                                  }
                                  return el;
                                });
                                setList(newGroceryList);
                              }}
                          > 
                            Purchase
                          </button>
                        </td>
                        <td>
                          <button 
                              onClick={() => {
                                const newGroceryList = list.map((el) => {
                                  if (el.listItem === listItem) {
                                    return { ...el, isDeleted: !el.isDeleted };
                                  }
                                  return el;
                                });
                                setList(newGroceryList);
                              }}
                          > 
                            Remove
                          </button>
                        </td>
                      </tr>
                  </>
                );
              }
            })}
      </table>
    </div>
  );
}

export default DisplayGroceryList;
