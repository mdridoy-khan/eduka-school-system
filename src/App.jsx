
import './App.css'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Footer from './components/Footer'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel';
import Courses from './pages/courses/Courses'
function App() {
  return (
    <>
      <div>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}>

            </Route>
            <Route path='/courses' element={<Courses/>}>

            </Route>
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  )
}

export default App
