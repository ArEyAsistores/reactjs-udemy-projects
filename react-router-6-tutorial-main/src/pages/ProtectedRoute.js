import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, user }) => {
  if (!user) {//if empty navigate to home page
    return <Navigate to='/' />;
  }
  return children;
};
export default ProtectedRoute;
