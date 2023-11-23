import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import useCart from "../../../Hooks/useCart";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const FoodCart = ({ items }) => {
  const axiosSecure = useAxiosSecure();
  const {user} = useContext(AuthContext);
  const [,refetch] = useCart();
  const navigate = useNavigate();
  const handleAddToCart = (food) => {
    const {_id, name,image,price} = food;
    const cartItem = {
      menuId : _id,
      email: user.email,
      name,
      image,
      price,
    }
    console.log(cartItem)
    if(user && user.email){
      axiosSecure.post("/carts", cartItem)
      .then((res)=> {
        console.log(res.data);
        if(res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to cart`,
            showConfirmButton: false,
            timer: 1500
          });
        }
        refetch();
      })
    }
    else{
      Swal.fire({
        title: "Please Login to order food",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login"
      }).then((result) => {
        if (result.isConfirmed) {
         navigate('/login');
        }
      });
    }
  }
  return (
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
      <SwiperSlide>
        <div className="w-11/12 mx-auto md:grid grid-cols-3 gap-4">
          {items.map((item) => (
            <div key={item._id} className="card w-full bg-slate-300">
              <figure className="w-full">
                <img src={item.image} alt="Shoes" className="" />
              </figure>
              <p className="bg-slate-900 text-white absolute right-5 top-5 p-5">
                ${item.price}
              </p>
              <div className="card-body items-center">
                <h2 className="card-title">{item.name}</h2>
                <p>{item.recipe}</p>
                <div className="card-actions">
                  <button onClick={()=> handleAddToCart(item)} className="btn btn-outline border border-orange-500 bg-slate-100 border-0, border-b-4">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default FoodCart;
