import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";


const UpdateItem = () => {
    const navigate = useNavigate()

    const item = useLoaderData()
    const {_id, name, stock, processing, photo, price, rating, category, customization, description} =item
    const { user } = useContext(AuthContext)

    const handleUpdateItem = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const stock = form.stock.value
        const price = form.price.value
        const rating = form.rating.value
        const customization = form.customization.value
        const category = form.category.value
        const description = form.description.value
        const photo = form.photo.value
        const processing = form.processing.value
        const email = user.email
        const updatedItem = { email ,name, stock, processing, photo, price, rating, category, customization, description }
        console.log(updatedItem);

        // send data to the server
        fetch(`http://localhost:5000/item/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Updated Successfully ',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                      })
                      navigate(location?.state ? location.state : '/myart')
                }
            })

            document.getElementById('myForm').reset();
    }
    
    return (
        <div className="bg-[#F4F3F0] md:p-24 p-8">
            <h1 className="text-3xl font-extrabold text-secondary">Update Art {name}</h1>
            <form id='myForm' onSubmit={handleUpdateItem} >
                {/* form row Name & stock */}
                <div className="md:flex md:mb-4 gap-x-5">
                    <div className="form-control md:w-1/2">
                        <label className="">
                            <div className="label">
                                <span className="label-text text-lg font-semibold">Name</span>                        </div>
                            <input type="text" required defaultValue={name} name="name" placeholder="Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="">
                            <div className="label">
                                <span className="label-text text-lg font-semibold">Stock</span>                        </div>
                            <input type="text" required defaultValue={stock} name="stock" placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category & customization row*/}
                <div className="md:flex md:mb-4 gap-x-5">
                    <div className="form-control md:w-1/2">
                        <label className="">
                            <div className="label">
                                <span className="label-text text-lg font-semibold">Category</span>                        </div>
                            <input type="text" required defaultValue={category} name="category" placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="">
                            <div className="label">
                                <span className="label-text text-lg font-semibold">Customization</span>                        </div>
                            <input type="text" required defaultValue={customization} name="customization" placeholder="Customization" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* Photo Url */}
                <div className="md:flex md:mb-4">
                    <div className="form-control w-full">
                        <label className="">
                            <div className="label">
                                <span className="label-text text-lg font-semibold">Photo Url</span>                        </div>
                            <input type="text" required defaultValue={photo} name="photo" placeholder="Photo Url" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* description */}
                <div className="md:flex md:mb-4">
                    <div className="form-control w-full">
                        <label className="">
                            <div className="label">
                                <span className="label-text text-lg font-semibold">Item Description</span>                        </div>
                            <input type="text" required defaultValue={description} name="description" placeholder="Item Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form rating  & price & processing_time row*/}
                <div className="md:flex md:mb-4 gap-x-5">
                    <div className="form-control md:w-1/3 ">
                        <label className="">
                            <div className="label">
                                <span className="label-text text-lg font-semibold">Rating</span>
                            </div>
                            <input type="text" required defaultValue={rating} name="rating" placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/3 ">
                        <label className="">
                            <div className="label">
                                <span className="label-text text-lg font-semibold">Price</span>
                            </div>
                            <input type="text" required defaultValue={price} name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control mb-4 md:w-1/3">
                        <label className="">
                            <div className="label">
                                <span className="label-text text-lg font-semibold">Processing Time</span>                        </div>
                            <input type="text" required defaultValue={processing} name="processing" placeholder="Processing Time" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update" className="btn btn-block hover:bg-[#D2B48C] text-xl text-[#331A15] bg-[#E3B77B]" />
            </form>
        </div>
    );
};

export default UpdateItem;