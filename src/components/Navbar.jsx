import { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { FaSearch } from "react-icons/fa";
import { RiDiscountPercentLine } from "react-icons/ri";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";

import logo from "../assets/logo.png";



function Navbar() {

  const[toggle, setToggle]=useState(false)

  function showSideMenu(){
    setToggle(true)
  }

  function hideSideMenu(){
    setToggle(false)

  }

  const navItems = [
    {
      name: "Search",
      icon: <FaSearch />
    },
    {
      name: "Offers",
      icon: <RiDiscountPercentLine />,
      sup: "NEW"
    },
    {
      name: "Help",
      icon: <IoHelpBuoyOutline />
    },
    {
      name: "Sign In",
      icon: <IoPersonOutline />
    },
    {
      name: "Cart",
      icon: <FiShoppingCart />
    }

  ]

  return (
    <>
      <aside className="black-overlay w-full h-full fixed duration-500 z-2" onClick={hideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden"
        }}>
          
        <div onClick={(event)=>{event.stopPropagation();}} 
          className="w-100 bg-white h-full absolute duration-200" 
          style={{left: toggle ? "0%" : "-100%"}}> 
        </div>
      </aside>

      
      <header className="p-3 shadow-xl text-[#686b78] sticky top-0 z-1 bg-white">
        <div className="container flex items-center">
          <div className="w-25 cursor-pointer">
            <img src={logo} className="w-full" alt="Swiggy Logo" />
          </div>
          <div className="group cursor-pointer" onClick={showSideMenu}>
            <span className="group-hover:text-[#fc8019] font-bold border-b-[3px] border-black mx-2 text-black">Ratanada</span> 
            Jodhpur, Rajasthan, India <RxCaretDown fontSize={25} className="inline stroke-[0.5px] text-[#fc8019]"/>
          </div>
          <nav className="flex list-none gap-9 ml-auto font-semibold text-[18px]">
          
            {
              navItems.map(
                (items, index)=>{
                  return (
                      <li key={index} className="flex items-center gap-2 hover:text-[#fc8019] cursor-pointer">
                        {items.icon}
                        {items.name}
                        <sup className="text-[#fc8019]">{items.sup}</sup>
                      </li>   
                  )
                }
              )
            }

          </nav>
        </div>
      </header>
      
    </>
  )
}

export default Navbar;
