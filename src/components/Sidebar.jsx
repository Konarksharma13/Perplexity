import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import { CgSearchLoading } from "react-icons/cg";
import { TbWorld } from "react-icons/tb";
import { MdOutlineLocalLibrary } from "react-icons/md";
import { FaSignInAlt } from "react-icons/fa";
import { BiArrowToLeft } from "react-icons/bi";
import { IoPhonePortrait } from "react-icons/io5";
import { RiTwitterXLine } from "react-icons/ri";
import { SiDiscord } from "react-icons/si";
import { FaArrowUpLong } from "react-icons/fa6";
import MainModal from './MainModal';

const Sidebar = () => {  

  const [showModal, setshowModal] = useState(false)

  const styleIcon = {
     marginRight: "5px", 
     marginTop: "5px"
  }
  return (<>
    <div className='bg-[#202222] h-screen w-60 flex flex-col fixed'>
       <div className='h-30 w-60 flex'>
        <img className='h-[50px] w-[180px]' src={Logo} alt="log" />
        <div className='text-[#8D9191] w-fit h-fit mt-3 ml-5 p-1 rounded-full text-xl hover:bg-[#8D9191] hover:text-white'><BiArrowToLeft /></div>
       </div>
       <div className="cursor-pointer bg-[#191A1A] w-[200px] h-[40px] flex justify-center items-center rounded-full gap-10 border border-[#2B2D2D] text-[#8D9191] ml-5 mt-5 p-2.5 hover:border-sky-300">
            <div className="text-bold">New Thread</div>
            <div>
                <span className='px-0.5 py-0.7 border border-[#2B2D2D] rounded-sm text-xs text-center mr-0.5'>⌘</span>  
                <span className='px-0.5 py-0.7 border border-[#2B2D2D] rounded-sm text-xs text-center'>K</span>
            </div>
        </div>
       <div className="mt-7 flex flex-col">
            <a href="#" className='m-1 flex text-[#8D9191] pl-7 py-1 text-[1.05rem] hover:bg-[#2D2F2F] hover:text-white hover:rounded-sm'><CgSearchLoading style={styleIcon}/>Home</a>
            <a href="#" className='m-1 flex text-[#8D9191] pl-7 py-1 text-[1.05rem hover:bg-[#2D2F2F] hover:text-white hover:rounded-sm'><TbWorld  style={styleIcon}/>Discover</a>
            <a href="#" className='m-1 flex text-[#8D9191] pl-7 py-1 text-[1.05rem hover:bg-[#2D2F2F] hover:text-white hover:rounded-sm'><MdOutlineLocalLibrary  style={styleIcon}/>Library</a>
            <button onClick={() => setshowModal(true)} className='m-1 flex text-[#8D9191] pl-7 py-1 text-[1.05rem] hover:bg-[#2D2F2F] hover:text-white hover:rounded-sm'><FaSignInAlt  style={styleIcon} />Sign In</button>
       </div>
        <button onClick={() => setshowModal(true)} className="bg-[#20B8CD] w-[200px] h-[40px] rounded-full text-black text-lg text-center ml-5 mt-5 p-1.5 border-black hover:bg-[#1F9AAB]">Sign Up</button>

       <div className=" mt-auto pl-4 mb-2">
            <h4 className='text-white text-sm'>Try Pro</h4>
            <p className='text-[#8D9191] text-sm mr-5'>Upgrade for image upload, smarter AI, and more Pro Search.</p>
            <button onClick={() => setshowModal(true)} className="cursor-pointer flex text-white text-sm bg-[#2D2F2F] w-fit px-2.5 py-2 mt-1 rounded-sm hover:text-[#8D9191]"><FaArrowUpLong style={{marginRight: "5px", marginTop: "5px", rotate:"45deg"}} />Learn More</button>
       </div>
        <hr style={{ backgroundColor: "#8D9191", height: "1px", border: "none" }}/>
       <div className="pl-4 py-2 flex justify-between mb-7">
            <button className="flex text-[#8D9191] cursor-pointer rounded-full p-2 text-sm text-center hover:bg-[#2D2F2F] hover:text-white "><IoPhonePortrait style={{marginRight: "5px", marginTop: "2px"}}/> Download</button>
            <div className='flex gap-2'>
                <a href='https://x.com/perplexity_ai' className="cursor-pointer text-[#8D9191] rounded-full p-2 hover:bg-[#2D2F2F] hover:text-white" style={styleIcon}><RiTwitterXLine /></a>
                <a href='https://discord.com/invite/perplexity-ai' className="cursor-pointer text-[#8D9191] rounded-full p-2 hover:bg-[#2D2F2F] hover:text-white" style={styleIcon}><SiDiscord /></a>
            </div>
       </div>
       {showModal && <MainModal onClose={() => setshowModal(false)}/>}
    </div>
    

   
   </>
  )
}

export default Sidebar