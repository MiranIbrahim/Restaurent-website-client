import { Link } from "react-router-dom";

const MenuItems = ({ items, value, title }) => {
  return (
    <div className="my-16">
      <div className="md:grid grid-cols-2 gap-5 ">
        {items.map((item) => (
          <div key={item._id} className="flex space-x-4 mb-4">
            <img
              src={item.image}
              alt=""
              className="w-[100px]"
              style={{ borderRadius: "0px 200px 200px" }}
            />
            <div className="flex">
              <div className="">
                <h4 className="text-xl uppercase">
                  {item.name}----------------------
                </h4>
                <p>{item.recipe}</p>
              </div>
              <h4 className="text-xl text-yellow-500">${item.price}</h4>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Link
          to={`/order/${title}`}
          className="btn btn-outline px-2 py-1 border-0 border-b-2 mt-5 w-1/5"
        >
          {value}
        </Link>
      </div>
    </div>
  );
};

export default MenuItems;
