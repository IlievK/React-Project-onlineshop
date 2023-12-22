// import { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/footer/Footer'
import Shop from './components/shop/Shop'
import Slider from './components/slider/Slider'
import { Route, Routes } from 'react-router-dom'
import Why from './components/why/Why'
import Contacts from './components/contacts/contacts'



function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="hero_area">
      <Header />
      {/* <Slider /> */}
     
      <Routes>
        <Route path="/shop" element={<Shop />}/>
        <Route path='/' element={<Slider />} />
        <Route path='/why' element={<Why />} />
      </Routes>
      {/* <Why /> */}
      <Contacts />
      <Footer />
    </div>
  )
}

export default App
