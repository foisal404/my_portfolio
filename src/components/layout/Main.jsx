import { Outlet } from "react-router-dom";
import NavHead from "../shared/NavHead";


const Main = () => {
    return (
        <div>
            <NavHead/>
            <Outlet/>      
        </div>
    );
};

export default Main;