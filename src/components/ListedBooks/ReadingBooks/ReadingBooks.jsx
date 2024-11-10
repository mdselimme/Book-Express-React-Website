import { useEffect } from "react";
import { useState } from "react";
import { getDbData } from "../../../DbData/DbData";
import ReadingBook from "./ReadingBook/ReadingBook";

const ReadingBooks = () => {
  const [readingData, setReadingData] = useState([]);

  useEffect(() => {
    const data = getDbData("read");
    setReadingData(data);
  }, []);

  return (
    <div>
      {readingData.map((data, idx) => (
        <ReadingBook key={idx} readbook={data}></ReadingBook>
      ))}
    </div>
  );
};

export default ReadingBooks;
