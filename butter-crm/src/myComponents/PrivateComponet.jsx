import { Navigate,Outlet } from "react-router-dom";

const PrivateComponent=()=>
    {
        const auth=localStorage.getItem("authToken");

        return auth ? <Outlet/> :<Navigate to="/login"/>;
    }
    
export default PrivateComponent;