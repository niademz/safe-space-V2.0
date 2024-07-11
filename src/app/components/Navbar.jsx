"use client"
import { Button } from '@/components/ui/button';
import Link from 'next/link'
import React, { useState } from 'react';
import Image from 'next/image'
import Navimage from './safe-waving.png' // imports the image you wanna use can call it anything
import LoginButton from '@/components/LoginLogoutButton'

const Navbar = () => {

  const [isClick, setisClick] = useState(false);

  const toggleNavbar = () => {
    setisClick(!isClick)
  }

  return (
    <>
    <nav className="background-color: #14004b">
    <div className='flex items-start'>
            <div className='flex-shrink-0 justify-start'>
             <Image
               src={Navimage} //source same name as the import
               alt='safe waving' //normal alt text
               width={200} //auto scales height based on width
               placeholder='blur' //shows while the image loads like colours of the image
               quality={100} //maximum quality
               className='block'
              />
            </div>
          </div>
      <div className="max-w-7xl ml-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16"> 
          
          <div className="hidden md:block">
            <div className='ml-4 flex items-center space-x-4'>
              <a href='/' className="text-white hover:bg-white hover:text-gray-400 rounded-lg p-2">
                Home
              </a>
              <a href='/account' className="text-white hover:bg-white hover:text-gray-400 rounded-lg p-2">
                Account
              </a><a href='/chatroom' className="text-white hover:bg-white hover:text-gray-400 rounded-lg p-2">
                Chat
              </a><a href='/resources' className="text-white hover:bg-white hover:text-gray-400 rounded-lg p-2">
                Resources
              </a><a href='/challenge' className="text-white hover:bg-white hover:text-gray-400 rounded-lg p-2">
                Challenges
              </a>
              <LoginButton />
            </div>
          </div>
          <div className='md:hidden flex items-center ml-auto'>
            <button
            className='inline-flex items-center justify-center p-2 rounded-md text-white md:text-white 
            hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
            onClick={toggleNavbar}
            >
              {isClick ?(
                <svg
                className='h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke="currentColor"
                >
                  <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                  />

                </svg>
              ) : (
                <svg
                className='h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                >
                  <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16m-7 6h7'
                  />
                </svg>
              ) 

              }
            </button>
          </div>
        </div>
      </div>
      {isClick && (
        <div className='md:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
          <a href='/' className="text-white block hover:bg-white hover:text-gray-400 rounded-lg p-2">
                Home
              </a>
              <a href='/account' className="text-white block hover:bg-white hover:text-gray-400 rounded-lg p-2">
                Account
              </a><a href='/chatroom' className="text-white block hover:bg-white hover:text-gray-400 rounded-lg p-2">
                Chat
              </a><a href='/resources' className="text-white block hover:bg-white hover:text-gray-400 rounded-lg p-2">
                Resources
              </a><a href='/challenge' className="text-white block hover:bg-white hover:text-gray-400 rounded-lg p-2">
                Challenges
              </a>
              <LoginButton />
          </div>
        </div>
      )}
    </nav>
    
    </>
  );
};

export default Navbar;