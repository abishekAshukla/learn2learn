'use client'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'
import Sidebar2 from '../Sidebar2'

const Header = () => {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => {
    setSidebar(!sidebar)
  }
  return (
    <div id="homeSection" className="relative text-white">
      <img className="h-screen w-full absolute" src="/header.png" alt="" />
      <Sidebar2 sidebar={sidebar} showSidebar={showSidebar} />
      <div className="z-10 absolute">
        <div className="sidebar"></div>
        <div
          className="flex md:hidden justify-end pr-5 pt-1 text-4xl"
          onClick={showSidebar}
        >
          <GiHamburgerMenu />
        </div>
        <div className="navbar hidden md:flex justify-end items-center w-screen h-20">
          <span className="px-5">HOME</span>
          <span className="px-5">COURSES</span>
          <span className="px-5">ABOUT US</span>
          <span className="px-5">GALLERY</span>
          <span className="px-5">BLOGS</span>
          <button className="bg-[#F15928] rounded-[30px] px-8 py-1 ml-5 mr-8">
            Sign Up
          </button>
        </div>
        <div className="flex justify-center items-center">
          <div className="left sm:pl-20 mt-10 md:mt-0 text-center sm:text-left w-screen lg:w-[50%]">
            <h1 className="text-[40px] font-[500]">Welcome to</h1>
            <h1 className="text-[60px] font-extrabold">Learn 2 Learn</h1>
            <h1 className="text-[60px] font-extrabold">Academy</h1>
            <p className="italic">
              Individualized mentoring and undemitting encouragement to every
              student. 
            </p>
            <button className="bg-[#F15928] rounded-[30px] px-6 py-1 mt-5">
              Explore Our Courses
            </button>
          </div>
          <div className="right hidden lg:flex justify-center items-center relative">
            <img className="w-[60%]" src="/orange.png" alt="" />
            <div className="bg-white text-[#0E61CB] flex px-3 py-1 rounded-[15px] w-[12rem] items-center z-10 absolute mt-10 mr-[25rem]">
              <div className="bg-[#0E61CB] flex justify-center items-center rounded-full h-12 w-28">
                <img className="w-8" src="/gr1.png" alt="" />
              </div>
              <div className="pl-2">
                <p className="font-bold text-sm">
                  Precise and well curated study material
                </p>
              </div>
            </div>

            <div className="bg-white text-[#0E61CB] flex px-3 py-1 rounded-[15px] w-[12rem] items-center z-10 absolute mt-32 ml-[25rem]">
              <div className="bg-[#0E61CB] flex justify-center items-center rounded-full h-12 w-28">
                <img className="w-8" src="/gr1.png" alt="" />
              </div>
              <div className="pl-2 text-sm">
                <p className="font-bold">Assigned Teachers for doubt solving</p>
              </div>
            </div>

            <div className="bg-white text-[#0E61CB] flex px-3 py-1 rounded-[15px] w-[12rem] items-center z-10 absolute mt-[20rem] mr-[25rem]">
              <div className="bg-[#0E61CB] flex justify-center items-center rounded-full h-12 w-28">
                <img className="w-8" src="/gr1.png" alt="" />
              </div>
              <div className="pl-2 text-sm">
                <p className="font-bold">Live / Scheduled Lectures</p>
              </div>
            </div>

            <div className="bg-white text-[#0E61CB] flex px-3 py-1 rounded-[15px] w-[12rem] items-center z-10 absolute mt-[25rem] ml-[25rem]">
              <div className="bg-[#0E61CB] flex justify-center items-center rounded-full h-12 w-28">
                <img className="w-8" src="/gr1.png" alt="" />
              </div>
              <div className="pl-2 text-sm">
                <p className="font-bold">
                  Weekly Test , Deep Analysys for Individuals
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
