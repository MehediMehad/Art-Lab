import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";

const MyArtCraft = () => {
    const { user } = useContext(AuthContext)
    const [item, setItem] = useState([])
    console.log(user);
    useEffect(() =>{
        fetch(`http://localhost:5000/myProduct/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setItem(data);
        })
    },[user])
    return (
        <div className="gap-10 lg:mx-24 grid grid-cols-4 my-5 mt-20" >
            {
                item.map(p => <div key={p._id} className="card w-96 bg-base-100  shadow-xl rounded-none border-8  col-span-4 md:col-span-2 lg:col-span-1">
                <figure><img className="h-[350px] object-cover hover:scale-105  " src={p.photo} alt="Shoes" /></figure>
                <div className="px-2">
                    <h2 className="card-title mt-2">
                        {name}
                        <div className="badge badge-secondary items-center">{p.rating}</div>
                    </h2>
                    <p className="font-bold">{p.price}</p>
                    <div className="card-actions justify-between  items-center">
                        <div className="badge badge-outline">{p.category}</div>
                        <Link to ={`/item/${p._id}`} className=" mb-2 btn btn-sm right-2 rounded-none bg-orange-300 text-black hover:bg-orange-300">View Details</Link>
                    </div>
                </div>
            </div>  )
            }
        </div>
    );
};

export default MyArtCraft;