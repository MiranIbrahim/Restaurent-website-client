

import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import MenuItems from "./MenuItems";

const PopularMenu = () => {
  const api = 'menu.json';
  const [menu] = useMenu({api});
  const popularItems = menu.filter((item) => item.category === "popular");
  return (
    <section>
      <SectionTitle
        subTitle={"---Check it out---"}
        title={"FROM OUR MENU"}
      ></SectionTitle>
      <MenuItems items={popularItems} value={"View full menu"} ></MenuItems>
      
    </section>
  );
};

export default PopularMenu;
