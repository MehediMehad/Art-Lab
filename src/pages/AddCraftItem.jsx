import Swal from 'sweetalert2'
import { AuthContext } from '../provider/AuthProvider';
import { useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
const AddCraftItem = () => {
    const { user } = useContext(AuthContext)
    console.log('from add item', user);
    const handleAddItem = e => {
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
        const newItem = { email, name, stock, processing, photo, price, rating, category, customization, description }
        console.log(newItem);

        // send data to the server
        fetch('https://assignment-ten-server-five.vercel.app/item', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Database inside a data Successfully ',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })
                }
            })

        document.getElementById('myForm').reset();
    }

    useEffect(() => {
        window.scroll(0, 0)
    }, [])


    return (
        <>
            <Helmet>
                <title>Add </title>
            </Helmet>
            <div className="bg-[#F4F3F0] md:p-24 p-8">
                <h1 className="text-3xl font-extrabold text-secondary">Add a New Art</h1>
                <form id='myForm' onSubmit={handleAddItem} >
                    {/* form row Name & stock */}
                    <div className="md:flex md:mb-4 gap-x-5">
                        <div className="form-control md:w-1/2">
                            <label className="">
                                <div className="label">
                                    <span className="label-text text-lg font-semibold">Name</span>                        </div>
                                <input type="text" required name="name" placeholder="Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="">
                                <div className="label">
                                    <span className="label-text text-lg font-semibold">Stock</span>                        </div>
                                <input type="text" required name="stock" placeholder="Available Quantity" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form category & customization row*/}
                    <div className="md:flex md:mb-4 gap-x-5">
                        <div className="form-control md:w-1/2">
                            <label className="">
                                <div className="label">
                                    <span className="label-text text-lg font-semibold">Category</span>                        </div>
                                <input type="text" required name="category" placeholder="Category" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="">
                                <div className="label">
                                    <span className="label-text text-lg font-semibold">Customization</span>                        </div>
                                <input type="text" required name="customization" placeholder="Customization" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* Photo Url */}
                    <div className="md:flex md:mb-4">
                        <div className="form-control w-full">
                            <label className="">
                                <div className="label">
                                    <span className="label-text text-lg font-semibold">Photo Url</span>                        </div>
                                <input type="text" required name="photo" placeholder="Photo Url" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* description */}
                    <div className="md:flex md:mb-4">
                        <div className="form-control w-full">
                            <label className="">
                                <div className="label">
                                    <span className="label-text text-lg font-semibold">Item Description</span>                        </div>
                                <input type="text" required name="description" placeholder="Item Description" className="input input-bordered w-full" />
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
                                <input type="text" required name="rating" placeholder="Rating" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/3 ">
                            <label className="">
                                <div className="label">
                                    <span className="label-text text-lg font-semibold">Price</span>
                                </div>
                                <input type="text" required name="price" placeholder="Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control mb-4 md:w-1/3">
                            <label className="">
                                <div className="label">
                                    <span className="label-text text-lg font-semibold">Processing Time</span>                        </div>
                                <input type="text" required name="processing" placeholder="Processing Time" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* close */}
                    {/* <div className="md:flex mb-8">
                    <div className="form-control w-full">
                        <label className="">
                            <div className="label">
                                <span className="label-text text-lg font-semibold">Item Description</span>
                            </div>
                            <select name="exp" className="w-full input input-bordered" >
                                <option value="a">a</option>
                                <option value="b">b</option>
                                <option value="c"></option>
                            </select>
                        </label>
                    </div>
                </div> */}

                    <input type="submit" value="Add Item" className="btn btn-block hover:bg-[#D2B48C] text-xl text-[#331A15] bg-[#E3B77B]" />
                </form>
            </div>

        </>
    );
};

export default AddCraftItem;