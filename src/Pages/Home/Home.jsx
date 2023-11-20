import { Helmet } from "react-helmet-async";
import PopularMenu from "../Shared/PopularMenu/PopularMenu";
import Banner from "./Banner/Banner";
import FeaturedItem from "./FeaturedItem/FeaturedItem";
import Reviews from "./Reviews/Reviews";
import Slider from "./Slider/Slider";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Slider></Slider>
            <PopularMenu></PopularMenu>
            <FeaturedItem></FeaturedItem>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;