import React, { useState } from 'react'
import { TbWorld } from "react-icons/tb";
import Horizontalbar from './Horizontalbar';
import BigCard from './BigCard';
import SmallCard from './SmallCard';
import SideModal from './SideModal';




const MainContent = () => {
  const [showModal, setshowModal] = useState(true)
  console.log(window.location);
  
  return (
      <div className='ml-[15rem] bg-[#202222] h-screen overflow-hidden overflow-y-scroll' style={{ width: ['calc(100% - 15rem)']}}>
          <div className='bg-[#181B1B] my-3 h-screen w-auto rounded-md'>
              <h1 className='flex text-[#E8E8E6] text-3xl font-light py-3.5 px-60'><TbWorld  style={{marginRight: "5px", marginTop: "5px"}}/>Discover</h1>
              <hr style={{ backgroundColor: "#2B2D2D", height: "1px", border: "none", width: "100%" }}/>
                <div className="mx-60">
                <Horizontalbar />
                <BigCard />
                <div className='flex flex-row gap-3 flex-wrap w-[700px]'>
                    <SmallCard />
                    <SmallCard />
                    <SmallCard />
                </div>
                <BigCard />
                <div className='flex flex-row gap-3 flex-wrap w-[700px]'>
                    <SmallCard />
                    <SmallCard />
                    <SmallCard />
                </div>
            </div> 
          </div>
          
      {showModal && <SideModal onClose={() => setshowModal(false)}/>}
      </div>
  )
}

export default MainContent