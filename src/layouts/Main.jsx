import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Main = () => {
    return (
        <div className="">
            <div className="fixed w-full z-10">

            <Navbar></Navbar>
            </div>
            <div className="h-16"></div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;