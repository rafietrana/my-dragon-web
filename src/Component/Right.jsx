import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

 

const Right = () => {
    return (
        <div>
                    <div className="">
        <h1 className="font-bold ">Login Now</h1>
        <button className="btn btn-outline w-full mt-5">
     <span><FaGoogle></FaGoogle></span>
  Login With Google 
</button>
        <button className="btn btn-outline w-full mt-5">
    <FaGithub></FaGithub>
  Login With GitHub
</button>
    <p className="text-xl font-bold my-5">Find Us On</p>
         <div className="flex gap-2 py-2 px-2 w-full border    items-center">
          <div><FaFacebook></FaFacebook></div>
          <div>Facebook</div>
         </div>
         <div className="flex gap-2 py-2 px-2 w-full border  items-center">
          <div><FaTwitter></FaTwitter></div>
          <div>Twiter</div>
         </div>
         <div className="flex gap-2 py-2 px-2 w-full border  items-center">
   
          <div><FaInstagram></FaInstagram></div>
          <div>Instagram</div>
         </div>
        </div>
        </div>
    );
};

export default Right;