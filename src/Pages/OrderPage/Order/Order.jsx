import Cover from "../../Shared/Cover/Cover";
import orderBg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import FoodCart from "../../Shared/FoodCard/FoodCart";
import useMenu from "../../../Hooks/useMenu";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const api = "/menu";
  const key = 'menu';
  const categories = ["salad", "pizza", "soups", "desserts", "drinks"];
  const {category} = useParams();
  const initialIndex = categories.indexOf(category);
  console.log(category);
  const [menu] = useMenu({ api, key });
  const drinks = menu.filter((item) => item.category === "drinks");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");

  const [tabIndex, setTabIndex] = useState(initialIndex);

  return (
    <div className="">
      <Helmet>
        <title>Bistro Boss | Order</title>
      </Helmet>
      <Cover img={orderBg} title={"Our shop"}></Cover>

      <div className="my-16">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className={"w-1/3 mx-auto my-10"}>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soups</Tab>
            <Tab>Desserts</Tab>
            <Tab>Drinks</Tab>
          </TabList>

          {/* salad */}
          <TabPanel>
            <FoodCart items={salads}></FoodCart>
          </TabPanel>

          {/* Pizza */}
          <TabPanel>
            <FoodCart items={pizzas}></FoodCart>
          </TabPanel>

          {/* Soups */}
          <TabPanel>
            <FoodCart items={soups}></FoodCart>
          </TabPanel>

          {/* Dessert */}
          <TabPanel>
            <FoodCart items={desserts}></FoodCart>
          </TabPanel>

          {/* Drinks */}
          <TabPanel>
            <FoodCart items={drinks}></FoodCart>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
