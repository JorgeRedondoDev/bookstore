import React, { useState } from "react";
import Book from "./Book";
import PopUpBook from "./PopUpBook";

const Library = ({ data }) => {
  const [order, setOrder] = useState("TA");
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
        <PopUpBook trigger={popUp} setTrigger={setpopUp} data={selectedBook} />
      ) : (
        ""
      )}

      <button onClick={() => setOrder("TA")}>Titulo ascendente</button>
      <button onClick={() => setOrder("TD")}>Titulo descendente</button>
      <button onClick={() => setOrder("AA")}>Autor ascendente</button>
      <button onClick={() => setOrder("AD")}>Autor descendiente</button>
      <div className="container">
        {data
          .sort(function (a, b) {
            switch (order) {
              case "TA":
                return a.name < b.name ? 1 : -1;
              case "TD":
                return a.name > b.name ? 1 : -1;
              case "AA":
                return a.author > b.author ? 1 : -1;
              case "AD":
                return a.author < b.author ? 1 : -1;
              default:
            }
          })
          .map((el, key) => (
            <div key={key} className="book" onClick={() => pupUpFunction(el)}>
              <Book data={el} />
            </div>
          ))}
      </div>
    </>
  );
};
export default Library;
