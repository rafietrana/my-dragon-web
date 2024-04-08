 
import { useContext } from "react";
import NavBar from "./NavBar";
import { AuthContext } from "../AuthProvider/AuthProvider";

 

const SingUp = () => {
    const {createUser} = useContext(AuthContext);
    console.log(createUser);
    const handleSignUp = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const emailValue = form.get('email');
       const passwordValue = form.get('password');
      console.log(emailValue, passwordValue);
     


      // createUser 

      createUser(emailValue, passwordValue)
      .then(result => {
        console.log(result.user);
      })
      .catch(error =>{
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
      <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">SingUp</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingUp;