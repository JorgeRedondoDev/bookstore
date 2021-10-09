import React from "react";

const Book = ({ data }) => {
  return (
    <>
      <p>{data.name}</p>
      <p>{data.author}</p>
    </>
  );
};

export default Book;
