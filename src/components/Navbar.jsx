// import React from 'react'
// import { navigation } from '../constant/navigation';
// import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';

// const Navbar = () => {
//   return (
//     <header className='fixed top-0 w-full h-16' style={{zIndex: "1000"}}>
//        <div className='container mx-auto px-3 flex items-center h-full'>
//                 <Link to={"/"}>
//                     <img
//                         src={logo}
//                         alt='logo'
//                         width={120} 
//                     />
//                 </Link>

//                 <nav className='hidden lg:flex items-center gap-1 m-auto'>
//                     {
//                         navigation.map((nav,index)=>{
//                             return(
//                                 <div>
//                                     <NavLink key={nav.label+"header"+index} to={nav.href} className={({isActive})=>`px-2 ${isActive && "text-amber-300"}`}>
//                                         {nav.label}
//                                     </NavLink>
//                                 </div>
//                             )
//                         })
//                     }
//                 </nav>


//                 <div className='ml-auto flex items-center gap-5'>
//                 <button class="rounded-lg p-2 pr-4 pl-4 text-sky-50 bg-btn">Sign in</button>
//                 <button class="rounded-lg p-2 pr-4 pl-4 text-btn bg-btn2">Register</button>
                  
                   
//                 </div>
//         </div>

//     </header>
//   )
// }

// export default Navbar


import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    
            <header className='fixed top-0 w-full h-16' style={{zIndex: "1000"}}>
       <div className='container mx-auto px-3 flex items-center h-full'>
                <Link to={"/"}>
                    <img
                        src={logo}
                        alt='logo'
                        width={120} 
                    />
                </Link>

                <nav className='hidden lg:flex items-center gap-1 m-auto'>
                    
                    <NavLink to={"/"} className={({isActive})=>`px-2 ${isActive && "text-amber-300"}`}>Home</NavLink>
                    <NavLink to={"/categories/pet-gromming"} className={({isActive})=>`px-2 ${isActive && "text-amber-300"}`}>Categories</NavLink>
                    <NavLink to={"/about"} className={({isActive})=>`px-2 ${isActive && "text-amber-300"}`}>About Us</NavLink>
                    <NavLink to={"/products"} className={({isActive})=>`px-2 ${isActive && "text-amber-300"}`}>Products</NavLink>
                    <NavLink to={"/pet-care"} className={({isActive})=>`px-2 ${isActive && "text-amber-300"}`}>Pet care</NavLink>
                    <NavLink to={"/contact"} className={({isActive})=>`px-2 ${isActive && "text-amber-300"}`}>Contact</NavLink>

                </nav>


                <div className='ml-auto flex items-center gap-5'>
                <button class="rounded-lg p-2 pr-4 pl-4 text-sky-50 bg-btn">Sign in</button>
                <button class="rounded-lg p-2 pr-4 pl-4 text-btn bg-btn2">Register</button>
                  
                   
                </div>
        </div>

    </header>
  )
}

export default Navbar