import { useEffect, useState } from "react";
import { getDbData } from "../../DbData/DbData";
import ReadingBooks from "./ReadingBooks/ReadingBooks";

const ListedBooks = () => {
  const [readingBooks, setReadingBooks] = useState([]);

  useEffect(() => {
    const bookData = getDbData("read");
    setReadingBooks(bookData);
  }, []);

  return (
    <div className="container mx-auto py-10">
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Reading Books"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          {readingBooks.map((book, idx) => (
            <ReadingBooks key={idx} book={book}></ReadingBooks>
          ))}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Whislist Books"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          Tab content 2
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
