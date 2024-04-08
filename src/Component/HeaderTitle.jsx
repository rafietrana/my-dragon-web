import moment from "moment";
import logoImage from "../../src/assets/logo.png";
import Marquee from "react-fast-marquee";
 

import Right from "./Right";
import Left from "./Left";
import NavBar from "./NavBar";
import NewsCard from "./NewsCard";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
 

const HeaderTitle = () => {

const {newsData} = useContext(AuthContext);
console.log('news data form Context ', newsData);






  return (
    <section className="w-9/12 mx-auto space-y-2">
      {/* Header Title Section */}
      <div className="flex flex-col justify-center items-center my-5 space-y-3">
        <div className="lg:w-80">
          <img src={logoImage} alt="" />
        </div>
        <div className="text-center">
          <p> Journalism Without Fear or Favour</p>
        </div>
        <div className="text-center">
          <p>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
      </div>

      <div className="flex ">
        <div>
          <button className="py-2 px-3 bg-red-500 text-white">Latest</button>
        </div>
        <div className="bg-gray-100 w-full flex justify-center items-center">
          <p>
            <Marquee>
              I can be a React component, multiple React components, or just
              some text. dolor sit amet consectetur adipisicing elit. Amet
              asperiores maxime reiciendis cum commodi velit illo odit, delectus
              iusto debitis.
            </Marquee>
          </p>
        </div>
      </div>

      {/* nav section start */}
           <NavBar></NavBar>
      {/* main serction */}


      <div>
      <div className="grid lg:grid-cols-4 lg:my-10">
        <div className="">
          <p className="font-bold ">All Catagory</p>
          <div>
                <Left></Left>
          </div>
        </div>
        <div className="lg:col-span-2 overflow-y-scroll h-[400px] mr-5">
           {
            newsData.map(dataNews => <NewsCard key={dataNews.id} dataNews={dataNews}></NewsCard>)
           }
        </div>
        {/* <div className="">
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
        </div> */}
        <Right></Right>
 
      </div>
      </div>




 
 
    </section>
  );
};

export default HeaderTitle;
