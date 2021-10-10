import "./App.css";
import Library from "./components/Library";
import AddBook from "./components/AddBook";

import React, { useEffect, useState } from "react";
import db from "./firebase/config";

import { collection, getDocs } from "firebase/firestore";

function App() {
  const [books, setBooks] = useState([]);
  const [isAddVisible, setIsAddVisible] = useState(false);

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

  return (
    <div className="App">
      <button onClick={() => setIsAddVisible(true)}>Añadir Libro</button>
      {isAddVisible ? <AddBook setisVisible={setIsAddVisible} /> : ""}

      <Library data={books} />
    </div>
  );
}

export default App;
