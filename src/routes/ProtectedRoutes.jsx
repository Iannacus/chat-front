import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  // obener la información de usuario en local storage || sg
  // si existe el usuario lo dejo pasar
  // si no existe lo regresamos al login
  const user = JSON.parse(localStorage.getItem("user"));
  return <>{user ? children : <Navigate to="/auth/login" />}</>;
}

export default ProtectedRoute;
