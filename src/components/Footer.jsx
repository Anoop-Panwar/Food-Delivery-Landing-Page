import { FaLinkedin, FaInstagram, FaFacebook, FaPinterest, FaTwitter} from "react-icons/fa";
import playStore from "../assets/play_store.png"
import appStore from "../assets/app_store.png"
import swiggyTextLogo from "../assets/Swiggy Text Logo.svg"


const footerLinks =[
       {
        title: "Company",
        links: [
            {name: "About Us", path: "/aboutUs"},
            {name: "Swiggy", path: ""},
            {name: "Corporate", path: ""},
            {name: "Careers", path: ""},
            {name: "Team", path: ""},
            {name: "Swiggy One", path: ""},
            {name: "Swiggy Instamart", path: ""},
            {name: "Swiggy Dineout", path: ""},
            {name: "Swiggy Genie", path: ""},
            {name: "Minis", path: ""},
            {name: "Pyng", path: ""},
        ]
       },

       {
        title: "Contact Us",
        links: [
            {name: "Help & Support", path: ""},
            {name: "Partner with us", path: ""},
            {name: "Ride with us", path: ""},

        ]
       },

       {
        title: "Legal",
        links: [
            {name: "Terms & Conditions", path: ""},
            {name: "Cookie Policy", path: ""},
            {name: "Privacy Policy", path: ""},
            {name: "Investor Relations", path: ""},

        ]
       },

       {
        title: "Available in:",
        links: [
            {name: "Banglore", path: ""},
            {name: "Gurgaon", path: ""},
            {name: "Hyderabad", path: ""},
            {name: "Delhi", path: ""},
            {name: "Mumbai", path: ""},
            {name: "Pune", path: ""},

        ]
       },

       {
        title: "Life at Swiggy",
        links: [
            {name: "Explore with Swiggy", path: ""},
            {name: "Swiggy News", path: ""},
            {name: "Snackables", path: ""},

        ]
       },
    ]

    const socialLinks = [
        {icon: <FaLinkedin />, path: ""},    
        {icon: <FaInstagram />, path: ""},    
        {icon: <FaFacebook />, path: ""},    
        {icon: <FaPinterest />, path: ""},    
        {icon: <FaTwitter />, path: ""},    
    
    ]

export default function Footer(){
    
    return(
        <footer className="bg-[#F0F0F5]">
            <div className="container pt-8 pb-15">
                <div className="flex justify-center items-center gap-3  pb-20">
                    <h2 className="text-[24px] font-bold text-[#02060c] opacity-75">For better experience, download the Swiggy app now</h2>
                    <div className="flex gap-5">
                        <img className="h-15" src={playStore} alt="" />
                        <img className="h-15" src={appStore} alt="" />
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="mr-55 flex flex-col gap-2 text-[#686b78]">
                        <img src={swiggyTextLogo} alt="" />
                        <p>© 2026 Swiggy Limited</p>
                    </div>

                    <div className="grid grid-cols-4 gap-10">
                    
                        {
                            footerLinks.map((items, index)=>{

                                return(
                                    <div className="flex flex-wrap flex-col gap-4 h-fit">
                                        <h3 key={index} className="font-bold text-xl">{items.title}</h3>
                                        <ul className="flex flex-col gap-4 text-[#686b78] font-semibold cursor-pointer">
                                            {
                                                items.links.map((itemsLink, index)=>{
                                                
                                                    return(
                                                        <li key={index}>
                                                           <a href={itemsLink.path}>{itemsLink.name}</a> 
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                )
                            })
                        }
                        <div className="flex flex-col gap-4 h-fit">
                            <h3 className="font-bold text-xl">Socail Links</h3>
                            <div className="flex gap-4">
                                {
                                    socialLinks.map(
                                        (socialIcon, index)=>{

                                            return(

                                                    <ul>
                                                        <li key={index} className="text-xl cursor-pointer">
                                                            <a  href={socialIcon.path}>{socialIcon.icon}</a>
                                                        </li>
                                                    </ul>
                                            )
                                        }
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>

        </footer>
    )
}