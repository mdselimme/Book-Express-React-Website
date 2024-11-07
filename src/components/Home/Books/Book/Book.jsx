import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookName, image, tags, author, rating, category , bookId} = book;

  return (
    <Link to={`/bookdetails/${bookId}`}>
      <div className="mb-10">
        <div className="card bg-base-100 w-full shadow-2xl">
          <figure className="px-10 pt-10">
            <img src={image} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <div>
              {tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <h2 className="card-title text-end">{bookName}</h2>
            <p>By : {author}</p>
            <div className="card-actions">
              <div>
                <p>{category}</p>
                <p>{rating}</p>
              </div>
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
