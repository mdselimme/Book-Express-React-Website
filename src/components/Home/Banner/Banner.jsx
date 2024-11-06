import { Link } from "react-router-dom";
import BannerImage from "../../../assets/image/banner.png";


const Banner = () => {
    return (
        <div className="container mx-auto grid grid-cols-2 h-[70vh] items-center bg-[#EEF1F8] p-14 rounded-3xl">
            <div className="p-8">
                <h1 className="text-6xl font-bold leading-[5.2rem] text-[#010001] mb-16">Books to freshen up your bookshelf</h1>
                <Link to={'/listedbooks'} className="mr-5 bg-[#EC669F] text-white py-5 rounded-full px-10 font-semibold">View The List</Link>
            </div>
            <div>
                <img src={BannerImage} className="max-w-[20rem] mx-auto" alt="banner-image" />
            </div>
        </div>
    );
};

export default Banner;