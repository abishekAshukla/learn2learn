import Header from '@/components/layout/Header'
import Courses from '@/components/Courses'
import LatestVideos from '@/components/LatestVideos'
import Story from '@/components/Story'
import Gallery from '@/components/Gallery'

export default function Home() {
  return (
    <main className="">
      <Header />
      <div className="pt-[47rem]"></div>
      <Courses />
      <LatestVideos />
      <Story />
      <Gallery />
    </main>
  )
}
