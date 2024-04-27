
const AddCraftItem = () => {

    const handleAddItem = e =>{
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
        const newItem ={name, stock, photo, price, rating, category, customization, description}
        console.log(newItem);

        // send data to the server
        fetch('http://localhost:5000/items', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        })

    }





    return (
        <div className="bg-[#F4F3F0] md:p-24 p-8">
            <h1 className="text-3xl font-extrabold text-secondary">Add a New Art</h1>
            <form onSubmit={handleAddItem} >
                {/* form row Name & stock */}
                <div className="md:flex md:mb-8 gap-x-5">
                    <div className="form-control md:w-1/2">
                        <label className="">
                            <div className="label">
                                <span className="label-text text-lg font-semibold">Name</span>                        </div>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="">
                            <div className="label">
                                <span className="label-text text-lg font-semibold">Stock</span>                        </div>
                            <input type="text" name="stock" placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form rating  & price row*/}
                <div className="md:flex md:mb-8 gap-x-5">
                    <div className="form-control md:w-1/2">
                        <label className="">
                            <div className="label">
                                <span className="label-text text-lg font-semibold">Rating</span>
                            </div>
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="">
                            <div className="label">
                                <span className="label-text text-lg font-semibold">Price</span>                        </div>
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category & customization row*/}
                <div className="md:flex md:mb-8 gap-x-5">
                    <div className="form-control md:w-1/2">
                        <label className="">
                            <div className="label">
                                <span className="label-text text-lg font-semibold">Category</span>                        </div>
                            <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="">
                            <div className="label">
                                <span className="label-text text-lg font-semibold">Customization</span>                        </div>
                            <input type="text" name="customization" placeholder="Customization" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* Photo Url */}
                <div className="md:flex md:mb-8">
                    <div className="form-control w-full">
                        <label className="">
                            <div className="label">
                                <span className="label-text text-lg font-semibold">Photo Url</span>                        </div>
                            <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* description */}
                <div className="md:flex mb-8">
                    <div className="form-control w-full">
                        <label className="">
                            <div className="label">
                                <span className="label-text text-lg font-semibold">Item Description</span>                        </div>
                            <input type="text" name="description" placeholder="Item Description" className="input input-bordered w-full" />
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
    );
};

export default AddCraftItem;