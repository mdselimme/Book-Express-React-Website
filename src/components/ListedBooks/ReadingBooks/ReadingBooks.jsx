import { useEffect } from "react";
import { useState } from "react";
import { getDbData } from "../../../DbData/DbData";


const ReadingBooks = () => {

    const [readingData, setReadingData] = useState([]);

    useEffect(()=>{
        const data = getDbData("read");
        setReadingData(data);
    },[])

    return (
        <div>
            <h1>Reading Books</h1>
        </div>
    );
};

export default ReadingBooks;