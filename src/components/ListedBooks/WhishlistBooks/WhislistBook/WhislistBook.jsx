import PropTypes from "prop-types";

const WhislistBook = ({ whislistbook }) => {
  const { image } = whislistbook;

  return (
    <div className="my-14">
      <div className="card lg:card-side bg-base-100 shadow-2xl">
        <figure>
          <img src={image} alt="Album" className="w-80 h-80" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

WhislistBook.propTypes = {
  whislistbook: PropTypes.object.isRequired,
};

export default WhislistBook;
