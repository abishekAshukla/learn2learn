const Footer = () => {
  return (
    <div className="relative text-white mt-7">
      <img
        className="w-full h-[180vh] sm:h-[160vh] lg:h-[110vh] absolute"
        src="/footer.png"
        alt=""
      />
      <div className="z-10 absolute flex flex-col items-center pt-12">
        <div className="form text-[#0E61CB] bg-white border-2 border-[#0E61CB] w-1/3 min-w-[300px] rounded-2xl p-6 text-center">
          <h1 className="font-bold text-2xl lg:text-3xl">FOR ANY QUERY</h1>
          <p className="mt-3 text-sm">
            For inquiries about our programs, admissions, or any other
            non-urgent matters, please feel free to contact us via email at 
            <span className="text-red-500 font-bold">
              info@l2l-academy.local
            </span>
            . We aim to respond to all emails within 24-48 hours.
          </p>
          <form
            className="pt-3 text-left  flex flex-col justify-center items-center"
            action=""
          >
            <div className="mt-3">
              <span className="font-bold">Full Name : </span>
              <input
                className="bg-[#E4E4E4] rounded placeholder:text-xs px-2"
                type="text"
                placeholder="Eg. John Doe"
              />
            </div>
            <div className="mt-3">
              <span className="font-bold">Email : </span>
              <input
                className="bg-[#E4E4E4] rounded placeholder:text-xs px-2 lg:ml-9"
                type="email"
                placeholder="E.g. johndoes@gmail.com"
              />
            </div>
            <div className="mt-3">
              <span className="font-bold">Phone no: </span>
              <input
                className="bg-[#E4E4E4] rounded placeholder:text-xs px-2 lg:ml-3"
                type="number"
                placeholder="Eg. 12345-67890"
              />
            </div>
            <div className="mt-3 flex flex-col lg:flex-row w-full lg:w-auto">
              <div className="font-bold">Message : </div>
              <textarea
                className="bg-[#E4E4E4] rounded placeholder:text-xs p-2 lg:ml-4"
                type="text"
                placeholder="Enter your message here"
                rows={2}
                cols={22}
              />
            </div>
            <button className="bg-[#0E61CB] rounded-2xl text-white px-10 py-1 mt-4">
              Send
            </button>
          </form>
        </div>
        <div className="flex flex-col lg:flex-row justify-center pt-12 w-screen px-5 lg:px-20">
          <div className="left w-full lg:w-[20%] text-center">
            <h1 className="font-semibold text-2xl">Links</h1>
            <div className="flex flex-col mt-3">
              <a className="underline text-sm" href="">
                INSTAGRAM
              </a>
              <a className="underline mt-2 text-sm" href="">
                LINKEDIN
              </a>
              <a className="underline mt-2 text-sm" href="">
                MEDIUM
              </a>
            </div>
            <h1 className="mt-5 font-semibold text-2xl">Contacts</h1>
            <div className="flex flex-col mt-3">
              <a href="">info@thel2lacademy.com</a>
              <a className="mt-1">+918983167199</a>
            </div>
          </div>
          <div className="mid w-full lg:w-[50%] mt-3 lg:mt-0 text-center">
            <h1 className="text-3xl font-bold">Learn 2 Learn Academy</h1>
            <div className="mt-5 text-xl">
              Address: Office No. 9 & 10, Yogiraj Apt , near Kotak Mahindra
              Bank, Balewadi Phata, Baner, Pune, Maharashtra, India – 411045
            </div>
          </div>
          <div className="right flex justify-center items-center w-full lg:w-[30%] lg:pl-3 mt-3 lg:mt-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15128.845678587704!2d73.7838215!3d18.5645048!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bed20fffffff%3A0x9cb59e631dafcc94!2sLearn%202%20Learn%20Academy!5e0!3m2!1sen!2sin!4v1723617120661!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="rounded-xl w-full h-[80%]"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
