import React from "react";

const SelectedBook = () => {
  return (
    <div className="popup">
      <div className="book">
        <button onClick={() => props.setTrigger(false)}>close</button>
        <p>{props.data.name}</p>
        <p>{props.data.author}</p>
        <p>{props.data.isbn}</p>
        <div>
          <button>Delete</button>
          <button onClick={() => setIsChange(true)}>Change</button>
        </div>
      </div>
    </div>
  );
};

export default SelectedBook;
