import Header from './components/Header'
import Hero from './components/Hero'
import ClientModules from './components/ClientModules'
import Testimonials from './components/Testimonials'
import ContactUs from './components/ContactUs'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <Hero />
      <Testimonials />
      <ContactUs />
    </main>
  )
}

