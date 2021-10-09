import "./App.css";
import Library from "./components/Library";
import React, { useEffect, useState } from "react";
import db from "./firebase/config";

import { collection, getDocs } from "firebase/firestore";

function App() {
  const [books, setBooks] = useState([]);

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
      <Library data={books} />
    </div>
  );
}

export default App;
