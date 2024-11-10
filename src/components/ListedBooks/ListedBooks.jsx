import { NavLink, Outlet } from "react-router-dom";


const ListedBooks = () => {
    return (
        <div className="container mx-auto py-10">
            <NavLink to={'/listedbooks/readingbooks'} className="mr-10 bg-[#ec66a071] py-5 px-16 rounded-xl">Reading Book</NavLink>
            <NavLink to={'/listedbooks/whishlistbooks'} className="bg-[#7e5df668] py-5 px-16 rounded-xl">Whishlist Book</NavLink>
            <Outlet></Outlet>
        </div>
    );
};

export default ListedBooks;