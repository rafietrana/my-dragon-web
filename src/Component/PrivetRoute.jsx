import { useContext } from "react";
 
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";
 

 

 
 

const PrivetRoute = ({children}) => {



    const location = useLocation();
    console.log('location is', location);


    const {loading} = useContext(AuthContext);
     const {user} = useContext(AuthContext);
         if(loading) {
            return <span className="loading loading-spinner loading-lg"></span>
         }
        if(user){
            return children;
        }
        else{
            return   <Navigate state={location.pathname} to={'/login'}></Navigate>
        }
 
};

export default PrivetRoute;