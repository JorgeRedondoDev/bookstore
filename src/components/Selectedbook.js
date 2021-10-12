import React, { useState, useReducer } from "react";

import db from "../firebase/config";
import { doc, deleteDoc, setDoc } from "firebase/firestore";

function SelectedBook(props) {
  const [isChange, setIsChange] = useState(false);
  const [inputValues, setInputValues] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: props.data.name,
      author: props.data.author,
      isbn: props.data.isbn,
    }
  );

  async function deleteBook() {
    await deleteDoc(doc(db, "books", props.data.isbn));
    window.location.reload();
  }
  async function addBook() {
    await setDoc(doc(db, "books", inputValues.isbn), {
      name: inputValues.name,
      author: inputValues.author,
      isbn: inputValues.isbn,
    });
    setIsChange(true);
    window.location.reload();
  }

  const ChangeBook = () => {
    const handleOnChange = (event) => {
      const { name, value } = event.target;
      setInputValues({ [name]: value });
    };
    return (
      <div>
        <div>
          <div className="inputs-group">
            <b>Titulo </b>
            <input
              type="text"
              placeholder={props.data.name}
              name="name"
              onChange={handleOnChange}
            />
          </div>
          <div className="inputs-group">
            <b>Autor </b>
            <input
              type="text"
              placeholder={props.data.author}
              name="author"
              onChange={handleOnChange}
            />
          </div>
          <div className="inputs-group">
            <b>isbn </b>
            <input type="text" disabled value={inputValues.isbn} />
          </div>
        </div>
        <div>
          <button onClick={() => addBook()}>Aceptar</button>
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
      <div className="selected-book">
        <div className="content-selected-book">
          <button
            className="close-button"
            onClick={() => props.setTrigger(false)}
          ></button>
          {isChange ? <ChangeBook /> : <PopUpBook />}
        </div>
      </div>
    </div>
  );
}

export default SelectedBook;
