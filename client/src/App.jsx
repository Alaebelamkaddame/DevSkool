import {Routes, Route} from 'react-router-dom'
import NavBar from './Component/NavBar'
import HomePage from './Component/HomePage'
import Courses from './Component/Courses'
import ContactUs from './Component/ContactUs'
import Blog from './Component/Blog'
import Instructor from './Component/Instructor'
import Footer from './Component/footer'


function App() {

  return (
    <>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path='/Instructor' element={<Instructor />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
