import { useContext } from "react";
import Benner from "../components/Benner";
import Highest from "../components/Highest";
import ItemsCart from "../components/ItemsCart";
import { AuthContext } from "../provider/AuthProvider";

const Home = () => {
    const {loading} = useContext(AuthContext)
    if (loading) {
        return <p className="text-center text-5xl loading loading-spinner text-info"></p>
    }
    return (
        <div>
            <Benner></Benner>
            <Highest></Highest>
            <ItemsCart></ItemsCart>
        </div>
    );
};

export default Home;