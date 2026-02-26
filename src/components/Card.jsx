import { MdStars } from "react-icons/md";

export function Card({image, offer, title, rating, minTime, maxTime, name, place}){

    return(
        <div className="w-68.25 shrink-0 grow cursor-pointer"> 
            <div className="group h-45.5 rounded-[15px] overflow-hidden relative">
                <img className="group-hover:scale-110 duration-300 object-cover w-full h-full" src={image} alt="" />
                <div className="image-overlay w-full h-full absolute top-0 flex items-end text-white text-[25px] font-bold pl-3 pb-2 tracking-tighter">{offer}</div>
            </div>
            <div className="ml-4">
                <h3 className="mt-4 font-bold text-xl truncate">{title}</h3>
                <div className="flex items-center gap-0.5 text-[15px]">
                    <MdStars className="text-[#2A9F42] text-xl relative right-0.5" />
                    <span >{rating}</span> • <span className="font-semibold">{minTime}-{maxTime} mins</span>
                </div>
                <div className=" text-[#686b78] leading-5 mt-1">
                    <p >{name}</p>
                    <p>{place}</p>
                </div>
                
            </div>
            
        </div>
    )
}