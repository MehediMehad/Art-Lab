import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyArtCraft = () => {
    const { user } = useContext(AuthContext)
    const [item, setItem] = useState([])
    const [filtered, setFiltered] = useState([])
    const [control, setControl] = useState(false)
    console.log(user);
    useEffect(() => {
        fetch(`http://localhost:5000/myProduct/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setItem(data);
                setFiltered(data)
            })
    }, [user, control])

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/item/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            setControl(!control)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    const hanledCusYes = () => {
        const data = item.filter(p => p.customization == 'Yes' || p.customization == 'yes')
        setFiltered(data)
    }
    const hanledCusNo = () => {
        const data = item.filter(p => p.customization == 'No' || p.customization == 'no')
        setFiltered(data)
    }
    const hanledCusAll = () => {
        const data = item.filter(p => p.customization == 'No' || p.customization == 'no' || p.customization == 'Yes' || p.customization == 'yes' )
        setFiltered(data)
    }


    return (
        <>
            <details className="dropdown border-none bg-[#ffed49] md:ml-24 my-10">
                <summary className="m-1 btn bg-[#ffed49] border-none hover:bg-[#ffed49] text-slate-900 text-lg">Customization</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-48">
                    <li><button onClick={hanledCusAll}>All</button></li>
                    <li><button onClick={hanledCusYes}>Yes</button></li>
                    <li><button onClick={hanledCusNo}>No</button></li>
                </ul>
            </details>

            <div className=" gap-10 lg:mx-24 grid grid-cols-4 my-5" >
                {
                    filtered.map(p => <div key={p._id} className="card w-96 bg-base-100  shadow-xl rounded-none border-8  col-span-4 md:col-span-2 lg:col-span-1">
                        <figure><img className="h-[350px] object-cover hover:scale-105  " src={p?.photo} alt="Shoes" /></figure>
                        <div className="px-2">
                            <h2 className="card-title mt-2 pl-2">
                                {p?.name}
                                <div className="badge badge-secondary items-center ">{p?.rating}</div>
                            </h2>
                            <p className="font-bold pl-2 mb-2">{p.price}</p>
                            <div className="card-actions gap-0 justify-around items-center">
                                <button onClick={() => handleDelete(p._id)}
                                    className=" mb-2 btn btn-sm right-2 text-white rounded-none w-1/3 bg-purple-600  hover:bg-[#491291]">Delete</button>
                                <Link to={`/update/${p._id}`} className=" mb-2 btn btn-sm right-2 text-white rounded-none w-1/3 bg-secondary  hover:bg-[#9a1a7c]">
                                    <button>Update</button>
                                </Link>
                                <Link to={`/item/${p._id}`} className=" mb-2 btn btn-sm right-2 text-white rounded-none w-1/3 bg-[#f29441]  hover:bg-[#7a3a05]">View Details</Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </>
    );
};

export default MyArtCraft;