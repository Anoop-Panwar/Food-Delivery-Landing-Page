import { Card } from "./Card";
import { useEffect, useState } from "react"


export default function OnlineDelivery(){

    const[resturantdata, setResturantData] = useState([])

    const fetchResturantData = async ()=>{
        const response =  await fetch("http://localhost:5173/restaurantChains.json");
        const data = await response.json();
        setResturantData(data)

    }

    useEffect(
        ()=>{

            fetchResturantData();
        },[]
    )


    return(
        <div className="container"> 
            <h2 className="text-[25px] font-bold mb-12">Resaturant with online food delivery in Jodhpur</h2>
            <div className="grid grid-cols-4 gap-7.5 mb-10">
                {
                    resturantdata.map(
                        (resturant, index)=>{

                            return(
                                <div>
                                    <Card key={index} image={"/images/"+resturant.image}
                                                        offer={resturant.offer}
                                                        title={resturant.title}
                                                        rating={resturant.rating}
                                                        minTime={resturant.minTime}
                                                        maxTime={resturant.maxTime}
                                                        name={resturant.name}
                                                        place={resturant.place} />
                                </div>
                            )
                        }
                    )
                }
            </div>
        </div>
    )
}