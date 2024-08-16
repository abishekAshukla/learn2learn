import { BiSolidQuoteSingleLeft, BiSolidQuoteSingleRight } from 'react-icons/bi'

const SubBlog = ({ txt, author, bg, color }) => {
  return (
    <div
      className="bg-white  rounded-[20px] w-[90%] md:w-[32%] min-h-[250px] text-[#0E61CB] mt-6 sm:mt-3 border border-[#0E61CB] flex flex-col items-center justify-center"
      style={{ backgroundColor: bg }}
    >
      <div className="flex">
        <div
          className="text-6xl"
          style={{ color: bg == '#1F70D7' ? '3b82f6 ' : '#9ca3af' }}
        >
          <BiSolidQuoteSingleLeft />
        </div>
        <div style={{ color: color }} className="text-sm py-6">
          <p className="">{txt}</p>
          <p className="text-right font-bold mt-1">{author}</p>
        </div>
        <div
          style={{ color: bg == '#1F70D7' ? '3b82f6 ' : '#9ca3af' }}
          className="flex items-end text-6xl"
        >
          <BiSolidQuoteSingleRight />
        </div>
      </div>
    </div>
  )
}

const Testimonial = () => {
  return (
    <div className="flex flex-col items-center mt-9">
      <h1 className="text-center font-bold text-[#0E61CB] text-5xl">
        TESTIMONIAL
      </h1>
      <div className="w-[90%]">
        <div className="flex flex-col md:flex-row justify-between items-center mt-9">
          <SubBlog
            txt="Ganesh Sir taught me physics before I appeared for NEET exam. He is a phenomenal teacher and taught every topic so clearly, all my doubts were solved and I started to like a subject I once hated. As a result of his guidance I am now a medical student at the college I was aiming forThank you so much Sir"
            author="~ Zeal Gandhi"
            bg="#E5E4E4"
            color="#626262"
          />
          <SubBlog
            txt="Ganesh sir is a great motivating, inspiring and admiring personality, learning quantum physics, wave theory, photon nature or escape velocity he is great mentor. When sunlight helps to make electrons perform photosynthesis without any coherence similarly sir help me to learn physics and wisdom in life"
            author="~ Pushkraj Charwad"
            bg="#1F70D7"
            color="white"
          />
          <SubBlog
            txt="Ganesh sir taught me during the lockdown and helped me a lot during my 12th studies. He is a really good teacher and focuses on clearing the concept first which helps in better understanding and longer retention."
            author="~ Arnav K"
            bg="#E5E4E4"
            color="#626262"
          />
        </div>
      </div>
      <div className="mb-8"></div>
    </div>
  )
}

export default Testimonial
