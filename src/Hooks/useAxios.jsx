import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";


export const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  
});

const useAxios = () => {
  const {logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  // Add a request interceptor  
  axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('access-token');
    console.log("token", token);
    config.headers.authorization = `Bearer ${token}`;
    return config;
  }, function (error) {
    
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    return response;
  }, async (error) => {
    const status =  error.response.status;
    console.log(status);
    if(status === 401 || status === 403){
      await logOut();
      navigate('/login');
    }
    return Promise.reject(error);
  });

  return axiosSecure;
};

export default useAxios;
