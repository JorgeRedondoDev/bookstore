import React, { useState } from "react";
import SelectedBook from "./SelectedBook";

const Library = ({ data }) => {
  const [popUp, setpopUp] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  function pupUpFunction(el) {
    setSelectedBook(el);
    setpopUp(true);
  }

  return (
    <>
      {/* PopUp that render the selected book */}
      {popUp ? (
        <SelectedBook
          trigger={popUp}
          setTrigger={setpopUp}
          data={selectedBook}
        />
      ) : (
        ""
      )}

      <div className="container">
        {data.map((el, key) => (
          <div key={key} className="book" onClick={() => pupUpFunction(el)}>
            <div className="content-book">
              <b>Titulo:</b>
              <p>{el.name}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Library;
