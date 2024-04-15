import React from 'react'

const TopNav = () => {
  return (
    <nav className=" w-full fixed bg-blue-950  h-[60px] flex justify-between items-center p-4 border-b-black col-span-5">
          <span className="font-bold text-white text-2xl">Gallery</span>
          <p className=' text-white font-normal underline underline-offset-2'>
            Sign In
          </p>
        </nav>
  )
}

export default TopNav;
