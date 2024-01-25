import './App.css'
import Content from './components/Content'
import Feature from './components/Feature'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import NewsLetter from './components/NewsLetter'
import Partners from './components/Partners'
import Testimonial from './components/Testimonial'

function App() {
  return (
    <>
      <Navbar />
      <Content />
      <Partners />
      <Feature />
      <Testimonial />
      <NewsLetter />
      <Footer />
    </>
  )
}

export default App
