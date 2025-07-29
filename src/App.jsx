import Home from './components/Home'
import Header from './components/Header'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'


export default function App() {
  return (
    <div className='bg-black flex justify-center flex-col items-center'>
      <Header />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  )
}
