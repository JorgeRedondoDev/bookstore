import React, { useReducer } from "react";
import db from "../firebase/config";
import { setDoc, doc } from "firebase/firestore";

const AddBook = ({ setisVisible }) => {
  const [inputValues, setInputValues] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    { name: "", author: "", isbn: "" }
  );

  async function add() {
    setDoc(doc(db, "books", inputValues.isbn), {
      name: inputValues.name,
      author: inputValues.author,
      isbn: inputValues.isbn,
    });
    setisVisible(false);
  }

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setInputValues({ [name]: value });
  };
  return (
    <div className="popup">
      <div className="book">
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

export default AddBook;
