import { useContext } from "react";
import NavBar from "./NavBar";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router";

 

const Login = () => {
  const location = useLocation();


  const navigate = useNavigate();

 
  const {loginUser} = useContext(AuthContext);
  console.log('login user is', loginUser);

  const handleLoginBtn =e =>{
     e.preventDefault()
      const form = new FormData(e.currentTarget);
      const emailValues = form.get('email');
      const passwordValues = form.get('password');
      loginUser(emailValues, passwordValues)
      .then(result => {
        console.log(result.user);

       navigate(location?.state ? location.state : '/')
 
        
      })
      .catch(error => {
        console.error(error)
      })
 
  }
    return (
        <div>
            {/* nav */}
            <div className="w-9/12 mx-auto">
            <NavBar></NavBar>
            </div>
         
            {/* nav */}
          <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
 
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLoginBtn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;