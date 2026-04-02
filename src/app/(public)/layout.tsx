import BackgroundVideo from '@/components/BackgroundVideo'
import SmoothScroll from '@/components/SmoothScroll'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <BackgroundVideo />
      <SmoothScroll>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </SmoothScroll>
    </>
  )
}
