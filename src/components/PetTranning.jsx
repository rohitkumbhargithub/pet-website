import React from 'react';
import category4 from '../assets/categery4.svg';
import categoryImg4 from '../assets/categeryImg4.svg';
import Nav from './Nav';
import click from '../assets/click.svg';

const PetTranning = () => {
  return (
    <div className="relative mr-[2rem]" style={{width: '100%'}}>

      <img className='m-auto absolute' src={category4} alt="" width={'90%'}/>

      <div className="absolute flex flex-wrap m-[7rem]">
      <div className="flex-1">
        <h1 className='text-4xl font-bold'>Categories</h1>
        <p className='mt-[3rem] text-xl font-bold'>Pet Training</p>
        <p>Pet training encompasses teaching animals essential behaviors and commands, fostering obedience and good manners. Training sessions focus on positive reinforcement techniques, such as rewards and praise.</p>

        <button class="mt-[1.5rem] rounded-lg p-2 pr-4 pl-4 text-btn bg-btn2">Get Started</button>

        <Nav/>
      </div>

      <div className="flex-1">

        <img className='ml-[3rem] mt-[-6rem]' src={categoryImg4} alt="" />
      </div>


      </div>
      <img className='absolute mt-[30rem] ml-[5rem] cursor-pointer' style={{zIndex: "1000"}} src={click} alt="" width={"15px"} />
    </div>
  )
}

export default PetTranning;