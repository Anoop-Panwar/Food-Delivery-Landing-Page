import { useState, useEffect } from "react"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Card } from "./Card";

export default function ResturantChain(){
    const[restChain, setRestChain] = useState([])

    const fetchResturantChain = async ()=>{
        // const response = await fetch("http://localhost:5173/restaurantChains.json")   this line is used only for local deployment it you want to deploy use second line 
        const response = await fetch("/restaurantChains.json")
        const data = await response.json()
        setRestChain(data);

    }

    useEffect(
        ()=>{
            fetchResturantChain();

        },[]
    )


    const[slide, setSlide] = useState(0);

    function handleLeft(){
        if(slide>0){
            setSlide(slide-250)
        }
        
    }

    function handleRight(){
        if(slide < 1750){
            setSlide(slide + 250);
        }

    }

    return(

        <div className="container overflow-hidden">
            <div className="my-4 pb-3 flex items-center justify-between">
                <h2 className="text-[25px] font-bold">Top Resturant Chains in Jodhpur</h2>
                <div className="flex">
                    <div className="cursor-pointer w-7.5 h-7.5 bg-[#e2e2e7] rounded-full mx-2 flex justify-center items-center" onClick={handleLeft}><FaArrowLeft /></div>
                    <div className="cursor-pointer w-7.5 h-7.5 bg-[#e2e2e7] rounded-full mx-2 flex justify-center items-center" onClick={handleRight}><FaArrowRight /> </div>
                </div>
            </div>
            <div className="flex gap-5 duration-200" style={{ transform: `translate(-${slide}px)`}}>
                
                {
                    restChain.map(
                        (resturant, index)=>{

                            return(

                                <Card key={index} image = {"/images/"+resturant.image} 
                                                    offer={resturant.offer} 
                                                    title={resturant.title} 
                                                    rating={resturant.rating} 
                                                    minTime={resturant.minTime} 
                                                    maxTime={resturant.maxTime}
                                                    name={resturant.name}
                                                    place={resturant.place}/>
                            )                                   
                        }
                    )
                }
            </div>
            <hr className="my-8 border-2 border-[#e2e2e7]"/>
        </div>

    )
}