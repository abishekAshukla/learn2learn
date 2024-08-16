'use client'
import { MdArrowOutward } from 'react-icons/md'

const SubBlog = ({ imgUrl, txt1, txt2, txt3, link }) => {
  return (
    <div
      id="blogSection"
      style={{ boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.3)' }}
      className="bg-white  rounded-[20px] w-[90%] sm:w-[30%]  text-[#0E61CB] mt-6 sm:mt-3 border border-[#0E61CB] flex flex-col items-center p-3 pb-5"
    >
      <img className="w-full rounded-t-[20px]" src={imgUrl} alt="" />
      <div className="px-3 w-full">
        <p className="mt-2">{txt1}</p>
        <p className="font-semibold text-lg">{txt2}</p>
        <p className="font-semibold text-xs italic mt-1">{txt3}</p>
        <div
          onClick={() => (window.location.href = link)}
          className="flex font-semibold mt-3 items-center cursor-pointer border-b-2 border-b-[#0E61CB] w-32"
        >
          <span className="text-base">READ MORE</span>
          <div className="text-2xl">
            <MdArrowOutward />
          </div>
        </div>
      </div>
    </div>
  )
}

const Blogs = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center font-bold text-[#0E61CB] text-5xl">BLOGS</h1>
      <div className="w-[90%]">
        <div className="flex flex-col sm:flex-row justify-between items-center mt-9">
          <SubBlog
            imgUrl="/blog1.png"
            txt1="NEET TIPS"
            txt2=" Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            txt3="By Eva Sans"
            link="http://www.facebook.com"
          />
          <SubBlog
            imgUrl="/blog2.png"
            txt1="NEET TIPS"
            txt2=" Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            txt3="By Eva Sans"
            link="http://www.facebook.com"
          />
          <SubBlog
            imgUrl="/blog3.png"
            txt1="NEET TIPS"
            txt2=" Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            txt3="By Eva Sans"
            link="http://www.facebook.com"
          />
        </div>
      </div>
      <div className="mb-5"></div>
    </div>
  )
}

export default Blogs
