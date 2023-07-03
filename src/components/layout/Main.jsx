
import { Outlet } from "react-router-dom";
import NavHead from "../shared/NavHead";
import Footer from "../Footer/Footer";

const Main = () => {
    return (
        <>
            <NavHead/>
            <Outlet/>   
            <Footer/>
        </>
    );
};

export default Main;