const Gallery = () => {
  return (
    <div className="mt-10 flex flex-col justify-center items-center">
      <h1 className="text-center font-bold text-[#0E61CB] text-5xl">GALLERY</h1>
      <div className="mt-10 text-white ">
        <div className="flex flex-col sm:flex-row justify-center items-center">
          <img src="/gal1.png" alt="" className="w-[80%] sm:w-[20%]" />
          <img
            src="/gal2.png"
            alt=""
            className="sm:px-5 w-[80%] sm:w-[50%] mt-3 sm:mt-0"
          />
          <img
            src="/gal3.png"
            alt=""
            className="w-[80%] sm:w-[20%] mt-3 sm:mt-0"
          />
        </div>
        <div className="flex flex-col sm:flex-row mt-5 sm:pr-5 justify-center items-center">
          <div className="left w-[80%] sm:w-[20%] flex justify-center items-center">
            <img src="/gal4.png" alt="" />
          </div>
          <div className="right sm:pl-5 w-[80%] sm:w-[70%]">
            <div className="flex flex-col sm:flex-row justify-center items-center">
              <img
                src="/gal5.png"
                alt=""
                className="w-[100%] sm:w-[32%] mt-3 sm:mt-0"
              />
              <img
                src="/gal6.png"
                alt=""
                className="sm:pl-5 w-[100%] sm:w-[70%] mt-3 sm:mt-0"
              />
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center  mt-3">
              <img
                src="/gal7.png"
                alt=""
                className="w-[100%] sm:w-[70%] sm:mt-0"
              />
              <img
                src="/gal8.png"
                alt=""
                className="sm:pl-5 w-[100%] sm:w-[32%] mt-3 sm:mt-0"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-10"></div>
    </div>
  )
}

export default Gallery
