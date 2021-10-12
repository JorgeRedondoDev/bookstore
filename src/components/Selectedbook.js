import React, { useState, useEffect } from "react";
import InputBook from "./InputBook";

import db from "../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";

function SelectedBook(props) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);

    function handleClick(e) {
      if (e.target.id === "popup") props.setTrigger(false);
    }
  });

  async function deleteBook() {
    await deleteDoc(doc(db, "books", props.data.isbn));
    window.location.reload();
  }

  const PopUpBook = () => {
    return (
      <div>
        <div>
          <b>Titulo</b>
          <p className="text">{props.data.name}</p>
          <b>Autor</b>
          <p className="text">{props.data.author}</p>
          <b>ISBN</b>
          <p className="text" disabled>
            {props.data.isbn}
          </p>
        </div>
        <div className="buttons-group">
          <button onClick={() => setIsVisible(true)}>Editar</button>
          <button onClick={() => deleteBook()}>Borrar</button>
          <button onClick={() => props.setTrigger(false)}>Cancelar</button>
        </div>
      </div>
    );
  };

  return (
    <div className="popup" id="popup">
      <div className="selected-book">
        <div className="content-selected-book">
          {isVisible ? (
            <InputBook
              setisVisible={setIsVisible}
              data={props.data}
              isbn={true}
            />
          ) : (
            <PopUpBook />
          )}
        </div>
      </div>
    </div>
  );
}

export default SelectedBook;
