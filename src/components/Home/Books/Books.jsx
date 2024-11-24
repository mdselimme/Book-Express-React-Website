import { useEffect, useState } from "react";
import Book from "./Book/Book";

const Books = () => {
  const [booksData, setBooksData] = useState([]);
  const [cutBooks, setCutBooks] = useState(9);

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooksData(data));
  }, []);

  return (
    <div className="container mx-auto py-20">
      <div className="text-center mb-10">
        <h1 className="text-[2.5rem] font-bold text-[#010001] mb-5">Books</h1>
        <p className="text-[#919095] leading-10">
          Books are timeless companions, offering knowledge, comfort, and
          discovery,
          <br /> inviting readers to explore without limits.
        </p>
      </div>
      <div>
        <div className="grid grid-cols-3 gap-10 justify-between">
          {booksData.slice(0, cutBooks).map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
        </div>
        <div className="text-center mt-10">
          <button
            onClick={() => setCutBooks(booksData.length)}
            className="bg-[#7F5DF6] text-white py-5 rounded-full px-16 font-semibold"
          >
            See All Books{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Books;
