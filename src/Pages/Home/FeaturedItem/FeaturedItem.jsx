
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImage from "../../../assets/home/featured.jpg";
import "./featuredContaier.css";

const FeaturedItem = () => {
  return (
    <section className="pb-24 pt-12 text-white featured-container my-10 px-16 bg-fixed">
      <div>
        <SectionTitle
          subTitle={"Check it out"}
          title={"From Our menu"}
        ></SectionTitle>
        <div className="md:flex justify-center items-center gap-10">
          <figure>
            <img src={featuredImage} alt="" />
          </figure>
          <div>
            <h5 className="text-xl">March 20, 2023</h5>
            <h4 className="text-2xl uppercase">WHERE CAN I GET SOME?</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItem;
