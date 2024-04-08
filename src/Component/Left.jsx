import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

 

const Left = () => {
       const [category, setCatagory] = useState([]);



    useEffect((()=>{
        fetch('../../public/categories.json')
        .then(res =>res.json())
        .then(data =>  setCatagory(data))
    }),[])
    return (
        <div className="mt-5">
            {
                category.map(perCatagory => <Link  to={`/catagory/${perCatagory.id}`} className="ml-5 block mb-5" key={perCatagory.id}>{perCatagory.name}</Link>)
            }
            
        </div>
    );
};

export default Left;