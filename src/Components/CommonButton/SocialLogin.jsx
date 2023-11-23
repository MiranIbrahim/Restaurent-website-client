import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import { RiFacebookCircleLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SocialLogin = () => {
  const axiosPublic = useAxiosPublic();
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn()
    .then(result => {
      const user = result.user;
      const newUser = {
        email: user.email,
        name: user.displayName,
      }
      axiosPublic.post('/users', newUser)
      .then(res => {
        console.log(res.data);
        navigate('/');
      })
    })
  }
    
    
  return (
    <label className="mx-auto ">
      <div className="font-semibold">
        Or sign in with
        <div className="flex justify-around mt-3 text-2xl font-bold">
          <button>
            <RiFacebookCircleLine />
          </button>
          <button onClick={handleGoogleSignIn}>
            <FaGoogle />
          </button>
          <button>
            <FaGithub />
          </button>
        </div>
      </div>
    </label>
  );
};

export default SocialLogin;
