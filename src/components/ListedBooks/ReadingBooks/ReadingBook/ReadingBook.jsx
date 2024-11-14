import PropTypes from "prop-types";

const ReadingBook = ({ readbook }) => {
  const { image, bookName, author } = readbook;

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
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
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
