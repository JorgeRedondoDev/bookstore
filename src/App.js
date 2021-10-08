import "./App.css";
import db from "./firebase/config";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    const obtenerDatos = async () => {
      const datos = await getDocs(collection(db, "books"));

      datos.forEach((element) => {
        console.log(element.data());
      });
    };
    obtenerDatos();
  }, []);

  return (
    <div className="App">
      <h1>Test</h1>
    </div>
  );
}

export default App;
