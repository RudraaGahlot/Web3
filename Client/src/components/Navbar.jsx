import React, { useState } from 'react'
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import  logo  from '../assets/logo.png';

const NavarItems = ({tittle, classProps}) => {
  return (
    <li className={`mx-4 cursor-pointer ${classProps}`}>
      {tittle}

    </li>
  )
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className='w-full flex md:justify-center justify-between items-center p-4'>
      <div className='md:flex-[0.5] flex-initial justify-center items-center'>
        <img src={ logo } alt="logo" className='w-32 cursor-pointer' />
        
      </div>
      <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
          {['Market', 'Exchange', 'Tutorials', 'Wallet'].map((items, index) => (
            <NavarItems key={items + index} tittle={items} />
          ))}
           <li className='bg-blue-600 py-3 px-7 mx-4 rounded-full cursor-pointer hover:bg-blue-700'>
            Login
           </li>
        </ul>

       <div className='flex relative'>
        {toggleMenu
          ? <AiOutlineClose fontSize={28} className='text-white md:hidden cursor-pointer ' onClick={() => setToggleMenu(false)} />
          : <HiMenuAlt4 fontSize={28} className='text-white md:hidden cursor-pointer ' onClick={() => setToggleMenu(true)} />
          }
        { toggleMenu && (
          <ul
            className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in '
            >
            <li className='text-xl w-full my-2 '>
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {['Market', 'Exchange', 'Tutorials', 'Wallet'].map((items, index) => (
              <NavarItems key={items + index} tittle={items} classProps={`my-2 text-lg`} />
            ))}
          </ul>
          )}

       </div>

    </nav>
  )
}

export default Navbar