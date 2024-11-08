import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { getDbData, giveMainData } from "../../../../../DbData/DbData";

const BookDetails = () => {
  const [singleBook, setSingleBook] = useState({});

  const loader = useLoaderData();
  const { bookId } = useParams();

  useEffect(() => {
    const data = loader.find((book) => book.bookId == bookId);
    setSingleBook(data);
  }, [loader, bookId]);

  const {
    image,
    tags,
    bookName,
    author,
    category,
    totalPages,
    rating,
    review,
    publisher,
    yearOfPublishing,
  } = singleBook;

  const handleSaveReadData = id => {
    const data = getDbData();
    const bookData = data.find((bookD) => bookD.bookId == id.bookId);
    if(bookData){
      console.log("Allready Added Data")
    }else{
      giveMainData(id);
    } 
  };

  return (
    <div className="container shadow-2xl mb-10 mx-auto p-8">
      <div className="card lg:card-side bg-base-100">
        <figure className="w-1/2">
          <img className="w-[25.5rem] h-[25.5rem] rounded-xl" src={image} alt="Album" />
        </figure>
        <div className="card-body items-start text-start">
          <h2 className="text-5xl font-bold my-2 text-[#010001]">{bookName}</h2>
          <p className="text-xl font-medium text-[#919095] my-3">
            By : {author}
          </p>

          <p className="text-base font-semibold text-[rgba(1,0,1,0.5)] w-full border-t-2 pt-3">
            {category}
          </p>
          <div className="border-y-2 py-6">
            <p className="mb-5 leading-10">
              <strong>Review : </strong>
              {review}
            </p>
            <p className="flex flex-wrap text-[0.8rem] items-center">
              {" "}
              <strong className="font-normal">Hastags:</strong>
              {tags?.map((tag) => (
                <span
                  className="mx-1 bg-[rgba(127,93,246,0.5)] py-1 px-2 rounded-2xl"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </p>
          </div>

          <div>
            <p className="text-[rgba(19,19,19,0.5)] font-medium mb-2">
              Number of Pages :{" "}
              <strong className="text-[#010001]">{totalPages}</strong>
            </p>
            <p className="text-[rgba(19,19,19,0.5)] font-medium mb-2">
              Publisher :{" "}
              <strong className="text-[#010001]">{publisher}</strong>
            </p>
            <p className="text-[rgba(19,19,19,0.5)] font-medium mb-2">
              Year of Publishing :{" "}
              <strong className="text-[#010001]">{yearOfPublishing}</strong>
            </p>
            <p className="text-[rgba(19,19,19,0.5)] font-medium mb-2">
              Rating : <strong className="text-[#010001]">{rating}</strong>
            </p>
          </div>
          <div className="mt-5">
                <Link onClick={()=> handleSaveReadData(singleBook)} className="mr-5 bg-[#EC669F] text-white py-4 rounded-full px-10 font-semibold">Read</Link>
                <Link className="bg-[#7F5DF6] text-white py-4 rounded-full px-10 font-semibold">Wishlist</Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
