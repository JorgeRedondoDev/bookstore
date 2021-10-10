import React from "react";

const Book = ({ data }) => {
  return (
    <div>
      <b className="text">Titulo:</b>
      <p>{data.name}</p>
      <b className="text">Author:</b>
      <p>{data.author}</p>
    </div>
  );
};

export default Book;
