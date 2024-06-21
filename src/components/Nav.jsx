import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import lg from '../assets/lg.png';

const Nav = () => {
  return (
    <>
    <nav className='hidden lg:flex items-center gap-1 m-auto mt-[2rem]'>
    <NavLink to={'/categories/pet-gromming'} className={({isActive})=>`px-2 ${isActive && "bg-btn text-sky-50 p-1"} flex font-semibold`}>
       <img className='mr-2' width={'20px'} src={lg} alt=''/> Pet Gromming
    </NavLink>
    <NavLink to={'/categories/pet-clinic'} className={({isActive})=>`px-2 ${isActive && "bg-btn text-sky-50 p-1"} flex font-semibold`}>
       <img className='mr-2' width={'20px'} src={lg} alt=''/> Pet clinic
    </NavLink>

    <NavLink to={'/categories/pet-daycare'} className={({isActive})=>`px-2 ${isActive && "bg-btn text-sky-50 p-1"} flex font-semibold`}>
       <img className='mr-2' width={'20px'} src={lg} alt=''/> Pet DayCare
    </NavLink>

    <NavLink to={'/categories/pet-traning'} className={({isActive})=>`px-2 ${isActive && "bg-btn text-sky-50 p-1"} flex font-semibold`}>
       <img className='mr-2' width={'20px'} src={lg} alt=''/> Pet Training
    </NavLink>
     </nav>
     <Outlet /> 
     </>
  )
}

export default Nav;