import { Navigate } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";

const PrivateWihoutUser = ({ children }) => {
  const { user } = UseAuth();

  if (user) {
    return children;
  } else {
    return <Navigate to="/login"></Navigate>;
  }
};

export default PrivateWihoutUser;
