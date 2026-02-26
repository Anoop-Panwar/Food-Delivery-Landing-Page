import { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";


export default function Category(){

    const[categories, setCategories] = useState([])

    const fetchCategories = async ()=>{
        // const resopnse = await fetch("http://localhost:5173/category.json"); this line is used only for local deployment it you want to deploy use second line
        const resopnse = await fetch("http://localhost:5173/category.json");
        const data = await resopnse.json();
        setCategories(data);

    }

    useEffect(
        ()=>{
            fetchCategories();
        }, []
    )


    const [slide, setSlide] = useState(0);

    function handleRight(){
        //1800 is the total length till end of slide + 150 when images are end aftrer 1800 blank space will occur it is calculte bu console.log(slide+ 150)
       
        if(slide < 1800){
            setSlide(slide + 150);
        }
        
    }

    function handleLeft(){
        if(slide > 0){
            setSlide(slide - 150);
        }
        
    }


    return(
        <div className="container">
            <div className="my-4 flex items-center justify-between">
                <h2 className="text-[25px] font-bold">What's on your mind?</h2>
                <div className="flex">
                    <div className="cursor-pointer w-7.5 h-7.5 bg-[#e2e2e7] rounded-full mx-2 flex justify-center items-center" onClick={handleLeft}><FaArrowLeft /></div>
                    <div className="cursor-pointer w-7.5 h-7.5 bg-[#e2e2e7] rounded-full mx-2 flex justify-center items-center" onClick={handleRight}> <FaArrowRight /> </div>
                </div>
            </div>
            <div className="flex overflow-hidden cursor-pointer">
                {
                    categories.map(
                        (cat, index) =>{
                            return(
                                <div className="w-37.5 shrink-0 duration-500" 
                                    style={{ transform: `translatex(-${slide}px)`}}key={index} >

                                    <img src={"/images/"+cat.image} alt="" />
                                </div>
                            )
                        }
                    )
                }
            </div>
            <hr className="my-8 border-2 border-[#e2e2e7]"/>
        </div>
    )
}