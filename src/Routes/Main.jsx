import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import NavBar from "../Pages/Shared/NavBar";


const Main = () => {
    const location = useLocation();
    console.log(location);
    const login = location.pathname.includes('login');
    const register = location.pathname.includes('register');
    return (
        <div>
            {(!login && !register) && <NavBar></NavBar>}
            <Outlet></Outlet>
            {(!login && !register) && <Footer></Footer>}
        </div>
    );
};

export default Main;