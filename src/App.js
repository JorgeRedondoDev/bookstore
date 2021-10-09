import "./App.css";
import Library from "./components/Library";
import React, { useEffect, useState } from "react";
import db from "./firebase/config";

import { collection, getDocs, addDoc } from "firebase/firestore";

function App() {
  const [books, setBooks] = useState([]);

  async function add() {
    const docRef = await addDoc(collection(db, "books"), {
      name: "test",
      author: "jorge",
      isbn: "123123123",
    });

    console.log("Document written with ID: ", docRef.id);
  }

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
      <button onClick={() => add()}> Añadir libro</button>
      <Library data={books} />
    </div>
  );
}

export default App;
