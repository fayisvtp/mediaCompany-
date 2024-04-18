import './App.css'
import Aboutus from './components/Aboutus'
import Counts from './components/Counts'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Service from './components/Service'
import Testimonials from './components/Testimonials'

function App() {
  

  return (
    <div style={{ backgroundColor: "#07071C" }}>
      <Navbar/>
<Hero/>
<Counts/>
<Aboutus/>
<Service/>
<Testimonials/>
      
    </div>
  )
}

export default App
