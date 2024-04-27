import { useContext } from "react";
import Benner from "../components/Benner";
import Highest from "../components/Highest";
import ItemsCart from "../components/ItemsCart";
import { AuthContext } from "../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";

const Home = () => {

    const items = useLoaderData()


    const { loading } = useContext(AuthContext)
    if (loading) {
        return <p className="text-center text-5xl loading loading-spinner text-info"></p>
    }
    return (
        <div>
            <Benner></Benner>
            <Highest></Highest>
            <h1 className="text-8xl text-center font-serif mt-9">The Art Gallery</h1>
            <div className="gap-10 lg:mx-24 grid grid-cols-4 my-5">
                {
                    items.map(item => <ItemsCart 
                        key={item._id}
                        item={item}
                        ></ItemsCart> )
                }
            </div>
        </div>
    );
};

export default Home;