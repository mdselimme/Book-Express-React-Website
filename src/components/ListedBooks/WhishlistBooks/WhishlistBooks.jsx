import { useEffect, useState } from "react";
import { getDbData } from "../../../DbData/DbData";
import WhislistBook from "./WhislistBook/WhislistBook";

const WhishlistBooks = () => {
  const [whishListBooks, setWhisListBooks] = useState([]);

  useEffect(() => {
    const data = getDbData("read");
    setWhisListBooks(data);
  }, []);

  return (
    <div>
      {whishListBooks.map((data, idx) => (
        <WhislistBook key={idx} whislistbook={data}></WhislistBook>
      ))}
    </div>
  );
};

export default WhishlistBooks;
