import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Components/Shared/Loading/Loading";
import useAuth from "../hooks/useAuth";
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const loc = useLocation();
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        return children
    }
    return <Navigate state={{ from: loc }} to='/login'></Navigate>;
};

PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute;