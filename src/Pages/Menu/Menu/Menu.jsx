import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import useMenu from "../../../Hooks/useMenu";
import MenuItems from "../../Shared/PopularMenu/MenuItems";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import menuBg from "../../../assets/menu/banner3.jpg";
import dessertBg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../../assets/menu/pizza-bg.jpg";
import saladBg from "../../../assets/menu/salad-bg.jpg";
import soupBg from "../../../assets/menu/soup-bg.jpg";

const Menu = () => {
  const api = "/menu";
  const key = 'menu';
  const [menu] = useMenu({ api, key });
  const Offered = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* Menu and offer */}
      <Cover img={menuBg} title={"OUR Menu"}></Cover>
      <SectionTitle
        subTitle={"Don't miss"}
        title={"TODAY'S OFFER"}
      ></SectionTitle>
      <MenuItems
        items={Offered}
        value={"ORDER YOUR FAVOURITE FOOD"}
      ></MenuItems>

      {/* Desserts */}
      <Cover img={dessertBg} title={"desserts"}></Cover>
      <MenuItems
        title={"desserts"}
        items={desserts}
        value={"ORDER YOUR FAVOURITE FOOD"}
      ></MenuItems>

      {/* Pizzas */}
      <Cover img={pizzaBg} title={"pizza"}></Cover>
      <MenuItems
        title={"pizza"}
        items={pizzas}
        value={"ORDER YOUR FAVOURITE FOOD"}
      ></MenuItems>

      {/* Salads */}
      <Cover img={saladBg} title={"salads"}></Cover>
      <MenuItems
        title={"salads"}
        items={salads}
        value={"ORDER YOUR FAVOURITE FOOD"}
      ></MenuItems>

      {/* Soups */}
      <Cover img={soupBg} title={"soups"}></Cover>
      <MenuItems
        title={"soups"}
        items={soups}
        value={"ORDER YOUR FAVOURITE FOOD"}
      ></MenuItems>
    </div>
  );
};

export default Menu;
