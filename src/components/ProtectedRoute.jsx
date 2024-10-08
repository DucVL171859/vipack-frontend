import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
    const token = sessionStorage.getItem('token');
    const isAdmin = sessionStorage.getItem('isAdmin');

    return token && isAdmin ? element : <Navigate to="/login" replace />;
};

export default ProtectedRoute;