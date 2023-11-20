import { Link, useLocation, useNavigate } from "react-router-dom";
import loginBg from "../../assets/others/authentication.png";
import loginImg from "../../assets/others/authentication1.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/CommonButton/SocialLogin";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const [disabled, setDisabled] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password).then((res) => {
      const user = res.user;
      console.log(user);
      Swal.fire({
        title: "Login Successful",
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
      navigate(from, { replace: true });
    });
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    console.log(user_captcha_value);
    if (validateCaptcha(user_captcha_value) == true) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login </title>
      </Helmet>
      <div
        style={{ background: `url(${loginBg})` }}
        className="hero min-h-screen border"
      >
        <div className="m-20 border shadow-2xl">
          <div className="hero-content flex-col lg:flex-row gap-40">
            <div className="w-1/3">
              <img src={loginImg} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm ">
              <h2 className="text-4xl text-center font-bold">Login</h2>
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="email"
                    className="input input-bordered bg-white"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Password</span>
                  </label>
                  <input
                    name="password"
                    type="password"
                    placeholder="password"
                    className="input input-bordered bg-white"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Captcha</span>
                    <LoadCanvasTemplate />
                  </label>
                  <input
                    onBlur={handleValidateCaptcha}
                    name="captcha"
                    type="text"
                    placeholder="Type the above text"
                    className="input input-bordered bg-white"
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    disabled={disabled}
                    className="btn btn-secondary bg-[#D1A054] text-white"
                    type="submit"
                    value="Log in"
                  />
                </div>
              </form>
              <label className="label ">
                <Link
                  to="/register"
                  className="mx-auto label-text link link-hover text-[#D1A054] font-semibold"
                >
                  New here ?{" "}
                  <span className="font-bold"> Create a new account.</span>
                </Link>
              </label>
              {/* ksjfnksnf */}
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
