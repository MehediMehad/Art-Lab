import { useLoaderData, useParams } from "react-router-dom";

const ItemDetails = () => {
    const items = useLoaderData()
    const {id} = useParams()
    const item = items.find(item => item?._id == id )
    const { name, stock, processing, photo, price, rating, category, customization, description} =item
    return (
<div className="lg:flex lg:flex-col lg:mx-48 p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
	<div className=" lg:flex gap-x-5">
		<img src={photo} alt="" className=" object-cover shadow-xl  mb-4 lg:h-[500px] dark:bg-gray-500 " />
        <div className=" pt-8 md:space-y-6 space-y-3">
        <h2 className="mb-1 text-xl font-semibold"><span className="font-bold">Name:</span> {name}</h2>
		<p className="text-xl dark:text-gray-600"><span className="font-bold">Description:</span> {description}</p>
		<p className="text-xl dark:text-gray-600 "><span className="font-bold">Stock:</span> {stock}</p>
		<p className="text-xl dark:text-gray-600 "><span className="font-bold">Category:</span> {category}</p>
		<p className="text-xl dark:text-gray-600 "><span className="font-bold">Customization:</span> {customization}</p>
		<p className="text-xl dark:text-gray-600 "><span className="font-bold">Rating:</span> {rating}</p>
		<p className="text-xl dark:text-gray-600 "><span className="font-bold">Processing Time:</span> {processing}</p>
		<p className="text-xl dark:text-gray-600 "><span className="font-bold">Price:</span> {price}</p>

        </div>
		
	</div>

</div>
    );
};

export default ItemDetails;