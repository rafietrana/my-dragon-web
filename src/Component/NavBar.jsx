import { Link } from "react-router-dom";
 
import userImage from '../../src/assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
 
 

const NavBar = () => {
  const {user, logOut } = useContext(AuthContext);


  const handleLogoutBtn= () =>{
        logOut()
        .then(result => {
          console.log(result.user);
        })
        .catch(error => {
          console.error(error)
        })
  }
 
    return (
        <div>
                <div className="grid lg:grid-cols-4  py-11">
        <div></div>
        <div className="col-span-2 ">
          <ul className="flex items-center gap-3   justify-center ">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/career"}>Career</Link>
            </li>
            <li>
              <Link to={"/Login"}>Login</Link>
            </li>
            <li>
              <Link to={"/singup"}>singup</Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-end gap-5">
          <div></div>
          <div className="lg:flex gap-3 hidden">
            <div className="w-10"><img src={userImage} alt="" /></div>
            {
                user ? <button onClick={handleLogoutBtn} className="bg-slate-700 text-white px-3 py-2">Singout</button>
                : <Link to={'/login'}> <button className="bg-slate-700 text-white px-3 py-2">Login</button></Link>
            }
       
          </div>
        </div>
      </div>  
        </div>
    );
};

export default NavBar;