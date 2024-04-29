import { useContext } from "react";
import Benner from "../components/Benner";
import ItemsCart from "../components/ItemsCart";
import { AuthContext } from "../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import LatestWorks from "../components/LatestWorks";
import OurTeam from "../components/OurTeam";

const Home = () => {

    // const {user} = useContext(AuthContext)
    const items = useLoaderData()


    const { loading } = useContext(AuthContext)
    if (loading) {
        return <p className="text-center text-5xl loading loading-spinner text-info"></p>
    }
    return (
        <div>
            <Benner></Benner>
            <div className="lg:mx-24 mt-20  mb-8 lg:flex lg:gap-24 justify-stretch">
            <div className="border-l-4 items-center content-center p-10 border-[#f314fa] ">
                <p className="uppercase font-bold text-lg  text-[#8f33ff]">Art <span className="text-[#f314fa]">Lab</span></p>
                {/* <p className="uppercase font-bold text-base text-[#f314fa]" >Provide</p> */}
            </div>
            <div className="p-10 border-b-4 border-[#f314fa]  ">
                <p className="uppercase font-bold text-base text-[#8f33ff]">Deliver</p>
                <p className="uppercase font-bold text-base text-[#f314fa]" > Best Paintings</p>
            </div>
            <div className=" p-10 border-b-4 border-[#f314fa]  ">
                <p className="uppercase font-bold text-base text-[#8f33ff]">Our Product</p>
                <p className="uppercase  font-bold text-base text-[#f314fa]" >Latest & Original</p>
            </div>
            <div className="border-b-4  p-10 border-[#f314fa]  ">
                <p className="uppercase font-bold text-base text-[#8f33ff]">We Provide</p>
                <p className="uppercase font-bold text-base text-[#f314fa]" >Chip Cost</p>
            </div>

            </div>
            
            <div className="gap-10 lg:mx-24 grid grid-cols-4 my-5">
                {
                    items.slice(0, 8).map(item => <ItemsCart 
                        key={item._id}
                        item={item}
                        ></ItemsCart> )
                    // items.filter(item => item.email == user.email ).map(item => <ItemsCart key={item._id}></ItemsCart>)
                }
            </div>
            <LatestWorks></LatestWorks>
            <OurTeam></OurTeam>
        </div>
    );
};

export default Home;