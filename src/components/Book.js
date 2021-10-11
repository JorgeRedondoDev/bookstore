import React from "react";

const Book = ({ data }) => {
  return (
    <div>
      <b className="text">Author:</b>
      <p>{data.author}</p>
    </div>
  );
};

export default Book;
