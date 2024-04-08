 
import { CiBookmark } from "react-icons/ci";
import { RiContractRightFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const NewsCard = ({dataNews}) => {
    const {image_url, details, author,title,total_view,rating,_id}  = dataNews;
 
    return (
        <div>
            <div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
	<div className="flex items-center justify-between pb-4 border-bottom bg-gray-100 p-2 mb-5">
		<div className="flex gap-3 items-center">

             <img className='w-10 rounded-md' src="https://source.unsplash.com/random/480x360/?4" alt="" />
             <div>
                <p className='font-bold'>Rafiet rana</p>
                <p>Rafiet rana</p>
             </div>

		</div>
        <div className='flex gap-3'>
        <span><CiBookmark /></span>
        <span><RiContractRightFill /></span>
        
        </div>
 
	</div>
	<div className="space-y-4">
		<div className="space-y-2">
			<img src={image_url }alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
			<div className="flex items-center text-xs">
				<span>6 min ago</span>
			</div>
		</div>
		<div className="space-y-2">
			<a rel="noopener noreferrer" href="#" className="block">
				<h3 className="text-xl font-semibold dark:text-violet-600"> {title}</h3>
			</a>
			<p className="leading-snug dark:text-gray-600">{details.length > 200? details.slice(0,200) : details} <Link to={`/news/${_id}`} className="text-red-500 ">Read More</Link></p>
		</div>
	</div>
    <div className='flex justify-between p-2'>
        <div>
        <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
</div>
        </div>
        <div>rana</div>
    </div>
</div>
        </div>
    );
};

export default NewsCard;