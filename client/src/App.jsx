import {Routes, Route} from 'react-router-dom'
import NavBar from './Component/NavBar'
import HomePage from './Component/HomePage'
import Categorie from './Component/Categorie'
import ContactUs from './Component/ContactUs'
import Blog from './Component/Blog'

function App() {

  return (
    <>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Categorie" element={<Categorie />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>
      </div>
    </>
  )
}

export default App
