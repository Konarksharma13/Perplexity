import React, { useRef } from 'react'
import { RxCross2 } from "react-icons/rx";
import { GrGoogle } from "react-icons/gr";
import { FaApple } from "react-icons/fa";
import { FaKey } from "react-icons/fa";


const MainModal = ({onClose}) => {

    const modalRef = useRef()
    const styleIcon = {
        marginRight: "6px", 
        marginTop: "2px",
        fontSize:"13px"
    }
    const closeModal = (e) => {
        if(modalRef.current === e.target)
        {
            onClose();
        }
    }
  return (
    <div ref={modalRef} onClick={closeModal} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
        <div className='h-[400px] w-[650px] bg-[#191A1A] rounded-md'>
            <button onClick={onClose} className="hover:text-white hover:bg-[#2D2F2F] text-[0.8rem] rounded-full p-2 m-2 float-right text-[#8D9191]"><RxCross2 /></button>
            <div className='text-center text-3xl text-white mt-12'>Welcome</div>
            <p className='text-center text-sm text-[#8D9191] mt-2'>Sign in or sign up to continue</p>
            <div className='flex justify-center items-center flex-col mt-8 gap-1 p-1'>
                <a href='#' className="w-[400px] flex justify-center text-white py-1.5 bg-[#2D2F2F] text-sm rounded-sm hover:text-[#8D9191]"><GrGoogle style={styleIcon} />Continue with Google</a>
                <a href='#' className="w-[400px] flex justify-center text-white py-1.5 bg-[#2D2F2F] text-sm rounded-sm hover:text-[#8D9191]"><FaApple style={styleIcon} />Continue with Apple</a>
                <a href='#' className="w-[400px] flex justify-center text-white py-1.5  bg-[#2D2F2F] text-sm rounded-sm hover:text-[#8D9191]"><FaKey style={styleIcon}/>Single sign-on(SSO)</a>
                <hr style={{ backgroundColor: "#2B2D2D", height: "1px", border: "none", width: "400px", margin: '8px 0px' }}/>
                <form>
                    <input type="text" className='w-[400px] bg-[#202222] text-sm rounded-sm py-2 px-3 border border-[#3D3F40] active:border-none' placeholder='Your email'/>
                </form>
                <button className="cursor-pointer flex  text-sm  w-fit px-2.5 py-2 mt-1 text-[#8D9191] hover:rounded-sm hover:bg-[#2D2F2F] hover:text-white">Continue with email</button>
            </div>
        </div>
    </div>
  )
}

export default MainModal