// eslint-disable-next-line no-unused-vars

import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Project'
import Service from './components/Service'

function App() {

  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Service />
        <Projects />
        <Contact />
        <Footer />
    </div>
  )
}

export default App
