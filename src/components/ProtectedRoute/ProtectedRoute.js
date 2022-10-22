import { Navigate, Outlet } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const ProtectedRoute = () => {

  const currentUser = useContext(CurrentUserContext);

  return (
    currentUser.loggedIn ? <Outlet /> : <Navigate to="/" />
  );
};

export default ProtectedRoute;
