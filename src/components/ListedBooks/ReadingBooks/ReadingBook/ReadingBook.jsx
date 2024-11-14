import PropTypes from "prop-types";
import { IoTime } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineAnalytics } from "react-icons/md";

const ReadingBook = ({ readbook }) => {
  const {
    image,
    bookName,
    author,
    tags,
    yearOfPublishing,
    totalPages,
    publisher,
    rating,
    category,
    bookId,
  } = readbook;

  return (
    <div className="my-14">
      <div className="card lg:card-side bg-base-100 shadow-2xl border p-7">
        <figure className="w-1/3">
          <img src={image} alt="Album" className="w-80 h-80" />
        </figure>
        <div className="card-body">
          <h2 className="text-3xl font-bold my-2 text-[#010001]">{bookName}</h2>
          <p className="text-xl font-medium text-[#919095] my-3">
            By : {author}
          </p>
          <div className="flex items-center justify-between">
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
            <p className="text-[rgba(19,19,19,0.5)] font-medium mb-2 flex items-center">
              <IoTime />
              Year of Publishing :{" "}
              <strong className="text-[#010001]">{yearOfPublishing}</strong>
            </p>
          </div>
          <div className="flex items-center justify-between border-b">
            <p className="text-[rgba(19,19,19,0.5)] font-medium mb-2 flex items-center">
              <FaBook />
              Number of Pages :{" "}
              <strong className="text-[#010001]">{totalPages}</strong>
            </p>
            <p className="text-[rgba(19,19,19,0.5)] font-medium mb-2 flex items-center">
              {" "}
              <MdOutlineAnalytics />
              Publisher :{" "}
              <strong className="text-[#010001]">{publisher}</strong>
            </p>
          </div>
          <div className="flex">
            <button className="mr-5 cursor-default bg-[#ec66a07c] text-[#010001] py-2 w-auto rounded-full px-6 font-semibold">
              Category : {category}
            </button>
            <button className="mr-5 cursor-default bg-[#7e5df6b2] text-[#010001] py-2 w-auto rounded-full px-6 font-semibold">
              Rating: {rating}
            </button>
            <Link
              to={`/bookdetails/${bookId}`}
              className="mr-5 bg-[#23BE0A] text-white py-2 rounded-full px-6 font-semibold"
            >
              Show Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

ReadingBook.propTypes = {
  readbook: PropTypes.object.isRequired,
};

export default ReadingBook;
