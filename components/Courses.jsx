const SubCourses = ({ imgUrl, text }) => {
  return (
    <div className="bg-[#0E61CB] mx-2 rounded-[20px] w-[320px] h-[400px] text-white mt-3">
      <img className="w-[320px]" src={imgUrl} alt="" />
      <div className="p-3">
        <p className="font-semibold">{text}</p>
        <button className="text-[#0E61CB] bg-white text-sm rounded-[20px] px-3 py-1 mt-2">
          Learn More
        </button>
      </div>
    </div>
  )
}

const Courses = () => {
  return (
    <div className="">
      <h1 className="text-center font-bold text-[#0E61CB] text-5xl">
        OUR COURSES
      </h1>
      <div className="flex justify-center items-center flex-wrap mt-9">
        <SubCourses
          imgUrl="/course1.png"
          text="Basic Mathematics for physics - (ONLINE)"
        />
        <SubCourses imgUrl="/course2.png" text="11th Neet" />
        <SubCourses imgUrl="/course3.png" text="12th Neet" />
        <SubCourses imgUrl="/course4.png" text="Neet Repeater" />
      </div>
    </div>
  )
}

export default Courses
