const Story = () => {
  return (
    <div id="aboutSection" className="flex flex-col items-center mt-10">
      <h1 className="text-center font-bold text-[#0E61CB] text-5xl">
        ABOUT US
      </h1>
      <div className="w-[90%] flex flex-col md:flex-row mt-10 text-white">
        <div className="left w-full lg:w-[40%]">
          <div className="bg-[#F15928] md:mr-5 p-5 rounded-xl h-full">
            <h1 className="font-semibold text-3xl">Our Story</h1>
            <p className="mt-3 text-base">
              Established under the leadership of Mr. Ganesh Chopade, L2L
              Academy stands as a distinguished institution dedicated to the
              meticulous preparation of aspiring NEET students. With a
              specialized focus on comprehensive coaching and personalized
              counseling, we provide a structured platform for success in
              medical entrance examinations.
            </p>
          </div>
        </div>
        <div className="right w-full lg:w-[60%]">
          <div className="bg-[#0E61CB]  p-5 rounded-xl mt-5 md:mt-0">
            <h1 className="font-semibold text-3xl">Our Story</h1>
            <p className="mt-3 text-base">
              Established under the leadership of Mr. Ganesh Chopade, L2L
              Academy stands as a distinguished institution dedicated to the
              meticulous preparation of aspiring NEET students. With a
              specialized focus on comprehensive coaching and personalized
              counseling,{' '}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row mt-5">
            <div className="bg-[#0E61CB] p-5 rounded-xl sm:mr-2">
              <h1 className="font-semibold text-3xl sm:text-xl">Our Values</h1>
              <p className="mt-3 text-base sm:text-sm">
                Established under the leadership of Mr. Ganesh Chopade, L2L
                Academy stands as a distinguished institution dedicated to the
                meticulous preparation of aspiring NEET students.{' '}
              </p>
            </div>
            <div className="bg-[#0E61CB] p-5 rounded-xl sm:ml-2 mt-5 sm:mt-0">
              <h1 className="font-semibold text-3xl sm:text-xl">
                Our Philsophy
              </h1>
              <p className="mt-3 text-base sm:text-sm">
                Established under the leadership of Mr. Ganesh Chopade, L2L
                Academy stands as a distinguished institution dedicated to the
                meticulous preparation of aspiring NEET students.{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-10"></div>
    </div>
  )
}

export default Story
