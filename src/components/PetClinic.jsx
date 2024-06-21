import React from 'react';
import category2 from '../assets/categery2.svg';
import categoryImg2 from '../assets/categeryImg2.svg';
import Nav from './Nav';
import scroll from '../assets/scroll.svg'

const PetClinic = () => {
  return (
    <div className="relative mr-[2rem]" style={{width: '100%'}}>

      <img className='m-auto absolute' src={category2} alt="" width={'90%'}/>

      <div className="absolute flex flex-wrap m-[7rem]">
      <div className="flex-1">
        <h1 className='text-4xl font-bold'>Categories</h1>
        <p className='mt-[3rem] text-xl font-bold'>Pet Clinic</p>
        <p>The pet clinic offers comprehensive veterinary services, including medical consultations, vaccinations, and surgical procedures, ensuring the well-being of furry companions. The clinic provides compassionate care and support to pets and their owners.</p>

        <button class="mt-[1.5rem] rounded-lg p-2 pr-4 pl-4 text-btn bg-btn2">Get Started</button>

        <Nav/>
      </div>

      <div className="flex-1">

        <img className='ml-[3rem] mt-[-6rem]' src={categoryImg2} alt="" />
      </div>


      </div>
      <img className='absolute mt-[30rem] ml-[5rem] cursor-pointer' style={{zIndex: "1000"}} src={scroll} alt="" width={"30px"} />
    </div>
  )
}

export default PetClinic