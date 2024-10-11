import React from 'react'
import { CiStar } from "react-icons/ci";
import { IoHardwareChipSharp } from "react-icons/io5";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdOutlinePalette } from "react-icons/md";
import { IoMedalOutline } from "react-icons/io5";
import { FaTv } from "react-icons/fa";
import { FaSliders } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";


const Horizontalbar = () => {
  // active:bg-[#1E3131] active:text-[#20B8CD] active:rounded-lg 
  const styleIcon = {
    marginRight: "3px", marginTop: "2px", fontSize:"20px"
  }
  return (
    <div className='h-[60px] w-[700px] my-2.5 flex gap-1 py-2 overflow-hidden overflow-x-scroll' style={{scrollbarWidth: "none"}}>
      <a href="#" className='ml-1 w-fit h-fit py-2.5 px-3.5 flex items-center text-xs text-white  active:bg-[#1E3131] active:text-[#20B8CD] active:rounded-lg hover:text-[#8D9191]'><CiStar style={styleIcon}/>Top</a>
      <a href="#" className='ml-1 w-fit h-fit py-2.5 px-3.5 flex items-center text-xs text-white text-nowrap active:bg-[#1E3131] active:text-[#20B8CD] active:rounded-lg hover:text-[#8D9191]'><IoHardwareChipSharp style={styleIcon}/>Tech & Science</a>
      <a href="#" className='ml-1 w-fit h-fit py-2.5 px-3.5 flex items-center text-xs text-white  active:bg-[#1E3131] active:text-[#20B8CD] active:rounded-lg hover:text-[#8D9191]'><RiMoneyDollarCircleLine style={styleIcon}/>Finance</a>
      <a href="#" className='ml-1 w-fit h-fit py-2.5 px-3.5 flex items-center text-xs text-white text-nowrap active:bg-[#1E3131] active:text-[#20B8CD] active:rounded-lg hover:text-[#8D9191]'><MdOutlinePalette style={styleIcon}/>Arts & Culture</a>
      <a href="#" className='ml-1 w-fit h-fit py-2.5 px-3.5 flex items-center text-xs text-white  active:bg-[#1E3131] active:text-[#20B8CD] active:rounded-lg hover:text-[#8D9191]'><IoMedalOutline style={styleIcon}/>Sports</a>
      <a href="#" className='ml-1 w-fit h-fit py-2.5 px-3.5 flex items-center text-xs text-white  active:bg-[#1E3131] active:text-[#20B8CD] active:rounded-lg hover:text-[#8D9191]'><FaTv style={styleIcon}/>Entertainment</a>
      <a href="#" className='mt-1.5 mr-2 ml-1 w-fit h-fit flex items-center text-sm text-white p-2 rounded-full bg-[#2D2F2F]  hover:text-[#8D9191]'><FaSliders/></a>
      {/* <a href="#" className='ml-1 w-fit h-fit py-2.5 px-3.5 flex items-center text-xs text-white  active:bg-[#1E3131] active:text-[#20B8CD] active:rounded-lg hover:text-[#8D9191]'><FaLongArrowAltRight style={{marginRight: "3px", marginTop: "2px", fontSize:"20px"}}/>Top</a> */}  
    
    </div>
  )
}

export default Horizontalbar