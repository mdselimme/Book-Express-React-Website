import PropTypes from "prop-types";
import { IoIosStar } from "react-icons/io";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookName, image, tags, author, rating, category, bookId } = book;

  return (
    <Link to={`/bookdetails/${bookId}`}>
      <div className="mb-10">
        <div className="card bg-base-100 w-full shadow-2xl">
          <figure className="px-10 pt-10">
            <img src={image} className="w-[21.5rem] h-[21.5rem] rounded-xl" alt="Shoes" />
          </figure>
          <div className="card-body items-start text-start">
            <p className="flex flex-wrap text-[0.8rem] items-center"> <strong className="font-normal">Hastags:</strong> 
              {tags.map((tag) => (
                <span className="mx-1 bg-[rgba(127,93,246,0.5)] py-1 px-2 rounded-2xl" key={tag}>{tag}</span>
              ))}
            </p>
            <h2 className="text-3xl font-bold my-2 text-[#010001]">{bookName}</h2>
            <p className="text-base font-medium text-[#919095] mb-3">By : {author}</p>
            <div className="border-t-2 border-dashed flex pt-5 w-full">
              <p className="text-base font-semibold text-[rgba(1,0,1,0.5)]">{category}</p>
              <p className="flex items-center justify-end font-bold">{rating} <IoIosStar className="ml-3 text-[#EC669F]" /></p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
};

export default Book;
