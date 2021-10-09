import React, { useState } from "react";
import db from "../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";

function PopUpBook(props) {
  const [isChange, setIsChange] = useState(false);

  async function deleteBook() {
    await deleteDoc(doc(db, "books", "WSExnLXrj6U5ryyZrN9I"));
  }

  return (
    <div className="popup">
      <div className="book">
        <button onClick={() => props.setTrigger(false)}>close</button>
        <p>{props.data.name}</p>
        <p>{props.data.author}</p>
        <p>{props.data.isbn}</p>
        <div>
          <button onClick={() => deleteBook()}>Delete</button>
          <button onClick={() => setIsChange(true)}>Change</button>
        </div>
      </div>
    </div>
  );
}

export default PopUpBook;
