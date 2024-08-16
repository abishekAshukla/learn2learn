'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import '../app/sidebar.css'

const Sidebar2 = ({ sidebar, showSidebar }) => {
  const router = useRouter()

  const [subItemAbout, setSubItemAbout] = useState(false)
  const showSubItemAbout = () => {
    setSubItemAbout(!subItemAbout)
  }

  return (
    <>
      <div id="container">
        <div
          id="lgMenu"
          className={sidebar ? 'enter' : ''}
          style={{ boxShadow: sidebar ? '5px 5px 15px grey' : '' }}
        >
          <span onClick={showSidebar} id="exit">
            &times;
          </span>
          <ul className="side-ul">
            <li
              onClick={() => {
                showSidebar()
              }}
              className="side-li"
            >
              <a href="#homeSection">HOME</a>
            </li>
            <li
              onClick={() => {
                showSidebar()
              }}
              className="side-li"
            >
              <a href="#courseSection">COURSES</a>
            </li>
            <li
              onClick={() => {
                showSidebar()
              }}
              className="side-li"
            >
              <a href="#aboutSection">ABOUT US</a>
            </li>
            <li
              onClick={() => {
                showSidebar()
              }}
              className="side-li"
            >
              <a href="#blogSection">BLOGS</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Sidebar2
