import { Navigate, useOutlet } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";
import LoginPage from "../pages/LoginPage";


const FreeLayout = () => {
    const { user } = useAuth();
    const outlet = useOutlet();
  
    if (user) {
      return <Navigate to="/" replace />;
    }
  
    return (
      <>
        {outlet}
      </>
    );
}

export default FreeLayout