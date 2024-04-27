import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <p className="text-center text-5xl loading loading-spinner text-info"></p>
    }

    if (! user) {
        return <Navigate to='/login' state={location?.pathname || '/'} />
    }
    return (
        <div>
            {children}
        </div>
    );
};
PrivateRoute.propTypes = {
    children: PropTypes.node,
}
export default PrivateRoute;