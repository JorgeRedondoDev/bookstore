import React, { useReducer, useEffect } from "react";
import db from "../firebase/config";
import { setDoc, doc } from "firebase/firestore";

const InputBook = ({ setisVisible, data, isbn }) => {
  const [inputValues, setInputValues] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    { name: data.name, author: data.author, isbn: data.isbn }
  );

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);

    function handleClick(e) {
      if (e.target.id === "popup") setisVisible(false);
    }
  });

  async function add() {
    if (
      inputValues.name === undefined ||
      inputValues.author === undefined ||
      inputValues.isbn === undefined
    ) {
    } else {
      await setDoc(doc(db, "books", inputValues.isbn), {
        name: inputValues.name,
        author: inputValues.author,
        isbn: inputValues.isbn,
      });
      window.location.reload();
    }
  }

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setInputValues({ [name]: value });
  };
  return (
    <div className="popup" id="popup">
      <div className="selected-book">
        <div className="selected-book-content">
          <div className="inputs-group ">
            <b>Titulo </b>
            <input
              type="text"
              name="name"
              placeholder={data.name}
              onChange={handleOnChange}
            />
            <b>Autor </b>
            <input
              type="text"
              name="author"
              placeholder={data.author}
              onChange={handleOnChange}
            />
            <b>ISBN </b>
            {isbn ? (
              <input placeholder={data.isbn} readOnly />
            ) : (
              <input
                type="text"
                name="isbn"
                placeholder={data.isbn}
                onChange={handleOnChange}
              />
            )}
          </div>
          <div className="buttons-group">
            <button onClick={() => add()}>Añadir</button>
            <button onClick={() => setisVisible(false)}>Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputBook;
