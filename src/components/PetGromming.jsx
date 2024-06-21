import React from 'react'
import category from '../assets/categery.svg';
import categoryImg from '../assets/categeryImg.svg';
import Nav from '../components/Nav';
import scroll from '../assets/scroll.svg';

const PetGromming = () => {
  return (
    <div className="relative mr-[2rem]" style={{width: '100%'}}>

      <img className='m-auto absolute' src={category} alt="" width={'90%'}/>

      <div className="absolute flex flex-wrap m-[7rem]">
      <div className="flex-1">
        <h1 className='text-4xl font-bold'>Categories</h1>
        <p className='mt-[3rem] text-xl font-bold'>Pet Gromming</p>
        <p>Pet grooming is the process of maintaining your pet’s hygiene and enhancing their physical appearance, which includes tasks like washing, brushing, trimming fur, and clipping nail</p>

        <button class="mt-[1.5rem] rounded-lg p-2 pr-4 pl-4 text-btn bg-btn2">Get Started</button>

        <Nav/>
      </div>

      <div className="flex-1">

        <img className='ml-[3rem] mt-[-6rem]' src={categoryImg} alt="" />
      </div>
      </div>
      <img className='absolute mt-[30rem] ml-[5rem] cursor-pointer' style={{zIndex: "1000"}} src={scroll} alt="" width={"30px"} />
    </div>
  )
}

export default PetGromming