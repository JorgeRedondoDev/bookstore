import "./App.css";
import Library from "./components/Library";
import InputBook from "./components/InputBook";

import React, { useEffect, useState } from "react";
import db from "./firebase/config";

import { collection, getDocs } from "firebase/firestore";

function App() {
  const [books, setBooks] = useState([]);
  const [isAddVisible, setIsAddVisible] = useState(false);
  const [order, setOrder] = useState(false);
  const [orderStatus, setOrderStatus] = useState("↓");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const dataArray = [];

    const datos = async () => {
      const getBooks = await getDocs(collection(db, "books"));
      console.log("in");

      getBooks.forEach((doc) => {
        dataArray.push(doc.data());
      });
      return setBooks(dataArray);
    };
    datos();
  }, []);

  function orderFunction() {
    setOrder(!order);
    order ? setOrderStatus("↓") : setOrderStatus("↑");
  }

  return (
    <div className="App">
      <div className="nav">
        <button onClick={() => orderFunction()}>Ordenar {orderStatus}</button>
        <input
          type="text"
          placeholder="Buscar titulo"
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <div>
        <button onClick={() => setIsAddVisible(true)}>Añadir Libro</button>
      </div>

      {isAddVisible ? (
        <InputBook setisVisible={setIsAddVisible} data={[]} />
      ) : (
        ""
      )}

      <Library data={books} filter={filter} order={order} />
    </div>
  );
}

export default App;
