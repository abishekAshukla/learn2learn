'use client'

const YouTubeEmbed = ({ videoId, heightL }) => {
  return (
    <div className=" w-full px-10 mt-5 flex justify-center">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-3xl h-[200px] sm:h-[450px] lg:h-[200px] sm:w-full"
      />
    </div>
  )
}

const LatestVideos = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-center font-bold text-[#0E61CB] text-5xl">
        LATEST VIDEO
      </h1>
      <div className="w-[90%] flex flex-col lg:flex-row mt-10">
        <div className="left w-full lg:w-[70%] flex center">
          <div className=" w-full px-10 mt-5 flex justify-center">
            <iframe
              src={`https://www.youtube.com/embed/TGIYl9ns2Dw?si=6o3Ha8YkzVNTE1Dw`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-3xl h-[200px] sm:h-[450px] lg:h-[450pxpx] sm:w-full"
            />
          </div>
        </div>
        <div className="right w-full lg:w-[30%]">
          <YouTubeEmbed
            videoId="Hx3NpK6LPN4?si=INwIDFwGRx77N2SQ"
            heightL={'200px'}
          />
          <div className="mt-5"></div>
          <YouTubeEmbed
            videoId="Ki2WDVFqzKg?si=JVOTtWjnemyzUvWh"
            heightL={'200px'}
          />
          <div
            onClick={() => {
              window.location.href =
                'https://www.youtube.com/@L_2_L_Academy/videos'
            }}
            className="flex justify-center text-[#F15928] font-medium mt-3 underline cursor-pointer"
          >
            Watch More
          </div>
        </div>
      </div>
      <div className="mb-10"></div>
    </div>
  )
}

export default LatestVideos
