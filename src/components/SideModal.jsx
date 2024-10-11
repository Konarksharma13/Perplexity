import React, { useRef } from 'react'
import { RxCross2 } from "react-icons/rx";
import { GrGoogle } from "react-icons/gr";
import { BsApple } from "react-icons/bs";
import { FaKey } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import Logo from '../assets/sidelogo.png'


const SideModal = ({onClose}) => {

    const modalRef = useRef()
    const styleIcon = {
        marginRight: "6px", 
        marginTop: "4px",
        fontSize:"13px"
    }
    const closeModal = (e) => {
        if(modalRef.current === e.target)
        {
            onClose();
        }
    }
  return (
    <div ref={modalRef} onClick={closeModal} className='w-fit h-fit fixed bottom-0 right-0 z-999'>
        <div className='h-[400px] w-[300px] bg-[#191A1A] rounded-md my-6 mx-3'>
            <button onClick={onClose} className="hover:text-white hover:bg-[#2D2F2F] text-[0.8rem] rounded-full p-2 float-right text-[#8D9191]"><RxCross2 /></button>
            <div className='flex justify-center items-end'>
                <img className='h-[50px] w-[50px] mt-5 ml-8' src={Logo} alt="log" />
            </div>
            
            <div className='text-center text-md text-white mt-5'>Sign in or create an account</div>
            <p className='text-center text-xs text-[#8D9191] mt-1'>Unlock Pro Search and History</p>
            <div className='flex justify-center items-center flex-col mt-3 gap-1 p-1'>
                <a href='#' className="w-4/5 flex justify-center text-black py-2 bg-[#20B8CD] text-sm rounded-sm border-black hover:bg-[#1F9AAB]"><GrGoogle style={styleIcon} />Continue with Google</a>
                <a href='#' className="w-4/5 flex justify-center text-white py-2 bg-[#2D2F2F] text-sm rounded-sm hover:text-[#8D9191]"><BsApple style={styleIcon} />Continue with Apple</a>
                <a href='#' className="w-4/5 flex justify-center text-white py-2 bg-[#2D2F2F] text-sm rounded-sm hover:text-[#8D9191]"><FaKey style={styleIcon}/>Single sign-on(SSO)</a>
                <hr style={{ backgroundColor: "#2B2D2D", height: "1px", border: "none", width: "80%", margin: '8px 0px' }}/>
                <div className='w-4/5'>
                    <input type="text" className='w-full bg-[#202222] text-sm rounded-sm py-2 px-3 border border-[#3D3F40] active:border-none' placeholder='Your email'/>
                </div>
                <button className="w-4/5 cursor-pointer flex justify-center text-sm px-2.5 py-2 mt-1 bg-[#2F302F] text-[#8D9191] hover:rounded-sm hover:bg-[#2D2F2F] hover:text-white">Continue with email <IoIosArrowForward style={styleIcon} /> </button>
            </div>
        </div>
    </div>
  )
}

export default SideModal