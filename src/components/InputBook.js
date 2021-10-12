import React, { useReducer, useEffect } from "react";
import db from "../firebase/config";
import { setDoc, doc } from "firebase/firestore";

const InputBook = ({ setisVisible }) => {
  const [inputValues, setInputValues] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    { name: "", author: "", isbn: "" }
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
      inputValues.name === "" ||
      inputValues.author === "" ||
      inputValues.isbn === ""
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
        <button
          className="close-button"
          onClick={() => setisVisible(false)}
        ></button>
        <div className="inputus">
          <input
            type="text"
            name="name"
            placeholder="Titulo"
            onChange={handleOnChange}
          />
          <input
            type="text"
            name="author"
            placeholder="Autor"
            onChange={handleOnChange}
          />
          <input
            type="text"
            name="isbn"
            placeholder="ISBN"
            onChange={handleOnChange}
          />
        </div>
        <button onClick={() => add()}>Añadir</button>
      </div>
    </div>
  );
};

export default InputBook;
