import PropTypes from "prop-types";

const Book = ({ book }) => {
  const { bookName, image, tags, author ,rating, category} = book;

  return (
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
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
};

export default Book;
