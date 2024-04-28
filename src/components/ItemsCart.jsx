import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ItemsCart = ({item}) => {
    const { _id, name, photo, rating, category, price} = item
    return (
        <>
            {/* ---------- */}
            <div className="card w-96 bg-base-100  shadow-xl rounded-none border-8  col-span-4 md:col-span-2 lg:col-span-1">
                <figure><img className="h-[350px] object-cover hover:scale-105  " src={photo} alt="Shoes" /></figure>
                <div className="px-2">
                    <h2 className="card-title mt-2">
                        {name}
                        <div className="badge badge-secondary items-center">{rating}</div>
                    </h2>
                    <p className="font-bold">{price}</p>
                    <div className="card-actions justify-between  items-center">
                        <div className="badge badge-outline">{category}</div>
                        <Link to ={`/item/${_id}`} className=" mb-2 btn btn-sm right-2 rounded-none bg-[#fc8b2d]  hover:bg-[#fc8b2d] text-white">View Details</Link>
                    </div>
                </div>
            </div>
        </>
    );
};
ItemsCart.propTypes = {
    item: PropTypes.object,
}
export default ItemsCart;