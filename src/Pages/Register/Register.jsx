import { Link, useNavigate } from "react-router-dom";
import loginBg from "../../assets/others/authentication.png";
import loginImg from "../../assets/others/authentication1.png";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/CommonButton/SocialLogin";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Register = () => {
  const axiosPublic = useAxiosPublic();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const newUser = {
            email: data.email,
            name: data.name,
          };
          axiosPublic.post("/users", newUser).then((res) => {
            if (res.data.insertedId) {
              Swal.fire({
                title: "Registration Completed",
                showClass: {
                  popup: `
                  animate__animated
                  animate__fadeInUp
                  animate__faster
                `,
                },
                hideClass: {
                  popup: `
                  animate__animated
                  animate__fadeOutDown
                  animate__faster
                `,
                },
              });
              reset();
              navigate("/");
            }
          });
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Register</title>
      </Helmet>
      <div
        style={{ background: `url(${loginBg})` }}
        className="hero min-h-screen border"
      >
        <div className="m-20 border shadow-2xl">
          <div className="hero-content flex-col lg:flex-row-reverse gap-40">
            <div className="w-1/3">
              <img src={loginImg} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm ">
              <h2 className="text-4xl text-center font-bold">Sign Up</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Name</span>
                  </label>
                  <input
                    {...register("name", {
                      required: "Name is required",
                    })}
                    aria-invalid={errors.name ? "true" : "false"}
                    type="text"
                    placeholder="Name"
                    className="input input-bordered bg-white"
                  />
                  {errors.name && (
                    <p className="text-red-500">{errors.name.message}</p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Photo URL</span>
                  </label>
                  <input
                    {...register("photoURL", {
                      required: "Photo Link is required",
                    })}
                    aria-invalid={errors.photoURL ? "true" : "false"}
                    type="text"
                    placeholder="photoURL"
                    className="input input-bordered bg-white"
                  />
                  {errors.photoURL && (
                    <p className="text-red-500">{errors.photoURL.message}</p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Email</span>
                  </label>
                  <input
                    {...register("email", {
                      required: "Email Address is required",
                    })}
                    aria-invalid={errors.email ? "true" : "false"}
                    type="email"
                    placeholder="Email"
                    className="input input-bordered bg-white"
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Password</span>
                  </label>
                  <input
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
                    })}
                    type="password"
                    placeholder="password"
                    className="input input-bordered bg-white"
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-red-500">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-500">Minimum 6 character required</p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-red-500">
                      Maximum 20 character required
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-500">
                      {" "}
                      At least one uppercase letter, one lowercase letter, one
                      number and one special character required.
                    </p>
                  )}
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary bg-[#D1A054] text-white"
                    type="submit"
                    value="Sign up"
                  />
                </div>
                <label className="label ">
                  <Link
                    to="/login"
                    className="mx-auto label-text link link-hover text-[#D1A054] font-semibold"
                  >
                    Already registered?
                    <span className="font-bold"> Go to log in.</span>
                  </Link>
                </label>
                <SocialLogin></SocialLogin>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
