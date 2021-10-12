import React, { useState } from "react";
import ShowBook from "./ShowBook";

const Library = ({ data, filter, order }) => {
  const filterBook = filter;
  const orderBook = order;
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
        <ShowBook trigger={popUp} setTrigger={setpopUp} data={selectedBook} />
      ) : (
        ""
      )}

      <div className="container">
        {data
          .filter((word) => word.name.includes(filterBook))
          .sort(function (a, b) {
            if (!orderBook) return a.name > b.name ? 1 : -1;
            return a.name < b.name ? 1 : -1;
          })
          .map((el, key) => (
            <div key={key} className="book" onClick={() => pupUpFunction(el)}>
              <div className="content-book">
                <p>{el.name}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
export default Library;
