import Header from '@/components/layout/Header'
import Courses from '@/components/Courses'
import LatestVideos from '@/components/LatestVideos'
import Story from '@/components/Story'
import Gallery from '@/components/Gallery'
import Blogs from '@/components/Blogs'
import Testimonial from '@/components/Testimonial'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main className="">
      <Header />
      <div className="pt-[47rem]"></div>
      <Courses />
      <LatestVideos />
      <Story />
      <Gallery />
      <Blogs />
      <Testimonial />
      <Footer />
    </main>
  )
}
