import ReadingBooks from "./ReadingBooks/ReadingBooks";
import WhishlistBooks from "./WhishlistBooks/WhishlistBooks";

const ListedBooks = () => {
  return (
    <div className="container mx-auto py-10">
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Reading Books"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <ReadingBooks></ReadingBooks>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Whislist Books"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-10"
        >
          <WhishlistBooks></WhishlistBooks>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
