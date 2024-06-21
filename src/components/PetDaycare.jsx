import React from 'react';
import category3 from '../assets/categery3.svg';
import categoryImg3 from '../assets/categeryImg3.svg';
import Nav from './Nav';
import scroll from '../assets/scroll.svg'

const PetDaycare = () => {
  return (
    <div className="relative mr-[2rem]" style={{width: '100%'}}>

      <img className='m-auto absolute' src={category3} alt="" width={'90%'}/>

      <div className="absolute flex flex-wrap m-[7rem]">
      <div className="flex-1">
        <h1 className='text-4xl font-bold'>Categories</h1>
        <p className='mt-[3rem] text-xl font-bold'>Pet Daycare</p>
        <p>Pet daycare offers a safe and stimulating environment for pets while their owners are away, providing companionship, exercise, and socialization opportunities. Supervised by trained staff, pets engage</p>

        <button class="mt-[1.5rem] rounded-lg p-2 pr-4 pl-4 text-btn bg-btn2">Get Started</button>

        <Nav/>
      </div>

      <div className="flex-1">

        <img className='ml-[3rem] mt-[-6rem]' src={categoryImg3} alt="" />
      </div>


      </div>
      <img className='absolute mt-[30rem] ml-[5rem] cursor-pointer' style={{zIndex: "1000"}} src={scroll} alt="" width={"30px"} />
    </div>
  )
}

export default PetDaycare;