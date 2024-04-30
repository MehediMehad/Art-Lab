import { useContext, useEffect } from "react";
import Benner from "../components/Benner";
import ItemsCart from "../components/ItemsCart";
import { AuthContext } from "../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import LatestWorks from "../components/LatestWorks";
import OurTeam from "../components/OurTeam";
import { Typewriter } from 'react-simple-typewriter'
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";



const Home = () => {
    useEffect(()=>{
		window.scroll(0, 0)
	},[])

    // const {user} = useContext(AuthContext)
    const items = useLoaderData()


    const { loading } = useContext(AuthContext)
    if (loading) {
        return <p className="text-center text-5xl loading loading-spinner text-info"></p>
    }

    return (
        <>
        <div>
        <Helmet>
            <title>Home</title>
        </Helmet>
            <Benner></Benner>
            <div className="lg:mx-24 mt-20  mb-8 ">
            <div className="border-l-4 items-center content-center p-10 border-[#f314fa] ">
                <p className="uppercase font-bold text-lg  text-[#8f33ff]">Art <span className="text-[#f314fa]">Lab</span></p>
            </div>
            <div className="py-5 px-10  w-56 border-b-4 border-[#f314fa]">
                <p className="uppercase w-4/12 font-bold text-base text-[#8f33ff]">Deliver</p>
                <p className="uppercase font-bold text-base text-[rgb(243,20,250)]" >
                <span className="uppercase font-bold text-base text-[rgb(243,20,250)]" style={{  fontWeight: 'bold' }}>
          <Typewriter 
            words={[ 'Best Paintings']}
            loop={100}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </span></p>
            </div>
            <div className=" py-5 px-10  w-56  border-b-4 border-[#f314fa]  ">
                <p className="uppercase font-bold text-base text-[#8f33ff]">Our Product</p>
                <p className="uppercase font-bold text-base text-[rgb(243,20,250)]" >
                <span className="uppercase font-bold text-base text-[rgb(243,20,250)]" style={{  fontWeight: 'bold' }}>
          <Typewriter 
            words={[ 'Latest ']}
            loop={100}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </span></p>
            </div>
            <div className="border-b-4 py-5 px-10 w-56 border-[#f314fa]  ">
                <p className="uppercase font-bold text-base text-[#8f33ff]">We Provide</p>
                <p className="uppercase font-bold text-base text-[rgb(243,20,250)]" >
                <span className="uppercase font-bold text-base text-[rgb(243,20,250)]" style={{  fontWeight: 'bold' }}>
          <Typewriter 
            words={[ 'Chip Cost']}
            loop={100}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </span></p>
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
            <Footer></Footer>

        </div>
        </>
    );
};

export default Home;