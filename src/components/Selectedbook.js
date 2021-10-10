import React, { useState } from "react";

import db from "../firebase/config";
import { doc, deleteDoc, setDoc } from "firebase/firestore";

function SelectedBook(props) {
  const [isChange, setIsChange] = useState(false);
  const [newBook, setNewBook] = useState({
    name: props.data.name,
    author: props.data.author,
    isbn: props.data.isbn,
  });

  async function deleteBook() {
    await deleteDoc(doc(db, "books", props.data.isbn));
    window.location.reload();
  }
  async function addBook() {
    setDoc(doc(db, "books", newBook.isbn), {
      name: newBook.name,
      author: newBook.author,
      isbn: newBook.isbn,
    });
    setIsChange(true);
  }

  const ChangeBook = () => {
    return (
      <div>
        <div>
          <div className="inputs-group">
            <b>Titulo </b>
            <input type="text" placeholder={newBook.name} />
          </div>
          <div className="inputs-group">
            <b>Autor </b>
            <input type="text" placeholder={newBook.author} />
          </div>
          <div className="inputs-group">
            <b>isbn </b>
            <input type="text" disabled value={newBook.isbn} />
          </div>
        </div>
        <div>
          <button onClick={() => console.log("e")}>Aceptar</button>
          <button onClick={() => setIsChange(false)}>Cancelar</button>
        </div>
      </div>
    );
  };

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
        <div>
          <button onClick={() => deleteBook()}>Delete</button>
          <button onClick={() => setIsChange(true)}>Change</button>
        </div>
      </div>
    );
  };

  return (
    <div className="popup">
      <div className="book">
        <button
          className="close-button"
          onClick={() => props.setTrigger(false)}
        ></button>
        {isChange ? <ChangeBook /> : <PopUpBook />}
      </div>
    </div>
  );
}

export default SelectedBook;
