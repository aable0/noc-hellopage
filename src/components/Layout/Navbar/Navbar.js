import { Logosvg } from "../../../mysvgs/logo";
import { useState } from "react";
import { Responsivity } from "../../responsivity/responsivity";
export const Navbar = (data) => {
    Responsivity()
    const nlc = data.nlc
    const img = data.img
    window.onscroll = function(){scrolledscreen()}
    const [value, setvalue] = useState(true)
    const [Navbarstate, setNavbar] = useState(false);
    function scrolledscreen() {  
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
            setvalue(false)
        }
        else{
            setvalue(true)
        }
    }
    const Navbar_links = (data) => {

        return(
            <button 
            onClick={() => window.open(data.href, "_self")} className={`h-16 text-center py-3  text-2xl font-light text-[#334892] font-semibold hover:text-[#3751ac]  `}>
                {data.name}
            </button>
        )
    } 
    if(window.innerWidth >= 1120 ) {
           const Navbar_links = (data) => {

        return(
            <button 
            onClick={() => window.open(data.href, "_self")} className={`h-16 text-center px-5 py-3 border-b-4 rounded-full text-2xl font-light ${value ? ` ${nlc}` : `text-[#7a94f3] border-[#7a94f3] hover:text-[#5365a6] hover:border-[#5365a6] hover:border-b-8 `}`}>
                {data.name}
            </button>
        )
    }
    
    return(
        <div className={` z-50 ${data.animation ? "" : " "} fixed inset-x-0  flex flex-row justify-between px-16 shadow-xl ${value ? "py-4" : "py-2 bg-[#f7eee5]" }`}>
            <a href="/" className="pt-1 lg:w-[150px] lg:h-[53px] w-[200px] h-[70px]"><Logosvg fill={value ? `${img}` : `#7a94f3`}/></a>
            <div className={`flex flex-row space-x-4 items-center text-xl `}>
                <Navbar_links href="/#BizKimiz" name="Biz kimiz?"/>
                <Navbar_links href="/Paketler" name="Paketler"/>
                <Navbar_links href="/Ekip" name="Ekip üyeleri"/>
                <Navbar_links href="/Kurumsal" name="Kurumsal"/> 
            </div>
            <button 
            onClick={() => window.open("https://noc-portal.able0.space", "_self")} className={`h-16 text-center px-5 py-3 border-b-4 rounded-full text-2xl font-light ${value ? ` ${nlc}` : `text-[#7a94f3] border-[#7a94f3] hover:text-[#5365a6] hover:border-[#5365a6] hover:border-b-8 `}`}>
                Portala gir
            </button>
        </div>
        
    );


    }
    else{
    return(
        <div className={`${Navbarstate ? "fixed " : "absolute"} z-50 inset-x-0 flex flex-row justify-between`} >
            <div className={` ${Navbarstate ? "bg-[#f7eee5] h-screen" : ""} py-3 pl-7 w-7/12 flex flex-col space-y-32 justify-start`}>
                <a 
                href="/" 
                className=" lg:w-[150px] lg:h-[53px] w-[200px] h-[70px]">
                    <Logosvg fill={Navbarstate ? "#2e4490": img}/>
                </a>
                <div className={`flex-col space-y-3 px-5 ${Navbarstate ? "flex" : "hidden"}`}>
                    <Navbar_links href="/#BizKimiz" name="Biz kimiz?"/>
                    <Navbar_links href="/Paketler" name="Paketler"/>
                    <Navbar_links href="/Ekip" name="Ekip üyeleri"/>
                    <Navbar_links href="/Kurumsal" name="Kurumsal"/> 
                    <Navbar_links href="https://noc-portal.able0.space" name="Portal"/>
                </div>
            </div>
            <div className={` ${Navbarstate ? "bg-[#2e4490] opacity-70" : "items-center"} w-5/12 pr-7 py-3 flex  justify-end `}>
                <div className={` ${Navbarstate ? "p-3 rounded-full bg-white" : "p-3"} w-[60px] h-[60px]`}>
                    <img src={`${Navbarstate ? "/images/cross.svg" : " /images/threeline.svg"}`} 
                    alt="" 
                    onClick={() => setNavbar(ex => !ex)} 
                    />
                </div>
              
            </div>
        </div>
    )}
    
}