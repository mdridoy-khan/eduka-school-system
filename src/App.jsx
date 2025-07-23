
import './App.css'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Footer from './components/Footer'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel';
import Courses from './pages/courses/Courses'
import TermsAndConditions from './pages/terms-and-conditions/TermsAndConditions'
import PrivacyPolicy from './pages/privacy-policy/PrivacyPolicy'
import WhoWeAre from './pages/about-us/WhoWeAre'
import CourseSingle from './pages/courses/CourseSingle'
import HowToApply from './pages/how-to-apply/HowToApply'
import ApplicationForm from './pages/application-form/ApplicationForm'
import TuitionFee from './pages/tuition-fee/TuitionFee'
import Alumni from './pages/alumni/Alumni'
import Scholarship from './pages/scholarship/Scholarship'
import Registration from './Auth/Registration'
import Contact from './pages/contact/Contact'
import Login from './Auth/Login'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  const location = useLocation();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [location]);

  return (
    <>
      <div>
        <Header />
          <Routes>
            <Route path='/' element={<Home />}>

            </Route>
            <Route path='/who-we-are' element={<WhoWeAre />}>

            </Route>
            <Route path='/courses' element={<Courses />}>

            </Route>
            <Route path='/course-single' element={<CourseSingle />}>

            </Route>
            <Route path='/terms-and-conditions' element={<TermsAndConditions />}>

            </Route>
            <Route path='/privacy-policy' element={<PrivacyPolicy />}>

            </Route>
            <Route path='/how-to-apply' element={<HowToApply />}>

            </Route>
            <Route path='/application-form' element={<ApplicationForm />}>

            </Route>
            <Route path='/tuition-fee' element={<TuitionFee />}>

            </Route>
            <Route path='/alumni' element={<Alumni />}>

            </Route>
            <Route path='/scholarship' element={<Scholarship />}>

            </Route>
            <Route path='/registration' element={<Registration />}>

            </Route>
            <Route path='/login' element={<Login />}>

            </Route>
            <Route path='/contact' element={<Contact />}>

            </Route>
          </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
