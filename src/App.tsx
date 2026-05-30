import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Team from './components/Team'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Location from './components/Location'
import FAQ from './components/FAQ'
import GiftCards from './components/GiftCards'
import Loyalty from './components/Loyalty'
import Promotions from './components/Promotions'
import Footer from './components/Footer'
import StickyBookButton from './components/StickyBookButton'
import Watermark from './components/Watermark'

export default function App() {
  return (
    <div className="min-h-screen bg-charcoal text-cream">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-gold focus:px-4 focus:py-2 focus:font-semibold focus:text-charcoal"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Team />
        <Gallery />
        <Reviews />
        <Promotions />
        <GiftCards />
        <Loyalty />
        <FAQ />
        <Location />
      </main>

      <Footer />
      <StickyBookButton />
      <Watermark />

      <div className="h-20 sm:hidden" aria-hidden="true" />
    </div>
  )
}
