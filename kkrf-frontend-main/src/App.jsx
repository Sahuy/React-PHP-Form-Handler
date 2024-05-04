
import Home from './pages/Home/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Webdesigning from './pages/WebDesigning/Webdesigning';
import Navbar from './component/Home/Navbar';
import Footer from './component/Home/Footer';
import WebDevelopment from './pages/WebDevelopment/WebDevelopment';
import AboutUs from './pages/AboutUs/AboutUs';
import MobileDevelopment from './pages/MobileDevelopment/MobileDevelopment';
import EcommerceDevelopment from './pages/EcommerceDevelopment/EcommerceDevelopment';
import WebsiteTyes from './pages/WebsiteTyes/WebsiteTyes';
import ContactUs from './pages/ContactUs/ContactUs';
import Career from './pages/Career/Career';
import Widget from './component/widget/Widget';
import { useEffect, useState } from 'react';

function App() {

  const [pop, setPop] = useState(false)



  useEffect(() => {

    setTimeout(() => {

      setPop(true)

    }, 9000)



  }, [])

  return (
    <>
      <Router>

        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/web-designing" element={<Webdesigning />} />
          <Route exact path="/web-development" element={<WebDevelopment />} />
          <Route exact path="/about-us" element={<AboutUs />} />
          <Route exact path="/mobile-development" element={<MobileDevelopment />} />
          <Route exact path="/ecommerce-development" element={<EcommerceDevelopment />} />
          <Route exact path="/website-types" element={<WebsiteTyes />} />
          <Route exact path="/contact-us" element={<ContactUs />} />
          <Route exact path="/career" element={<Career />} />
        </Routes>

        <Footer />

        <Widget />





      </Router>


      {/* {{{{{{{{{{{Contact us form pop up}}}}}}}}}}} */}

      <div className={`fixed top-0 bg-black/70 w-full h-screen left-0  flex justify-center items-center pointer-events-none opacity-0 transition-all duration-150 ${pop && ` opacity-100 pointer-events-auto`}`}>

        <div className={`w-[300px] md:w-[500px] transition-all duration-150 pointer-events-none  ${pop && ` pointer-events-auto`} `}>
          <div className='p-6 bg-colorTwo text-white rounded-t-lg text-lg font-semibold relative flex justify-between items-center'>
            <div> Contact us </div>


            <svg onClick={() => setPop(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
              <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>

            <div className="up-arrow"></div>
          </div>
          <form
            action=""
            className="space-y-6 shadow-2xl w-full bg-white p-6  rounded-b-lg"
          >
            <div>
              {" "}
              <input placeholder="Name*" type="text" />{" "}
            </div>
            <div>
              {" "}
              <input placeholder="Mobile No*" type="number" />{" "}
            </div>
            <div>
              {" "}
              <input placeholder="Email ID*" type="text" />{" "}
            </div>
            <div>
              {" "}
              <input placeholder="Company*" type="text" />{" "}
            </div>
            <button className="bg-colorThree mt-4 w-full rounded-xl py-3 text-white font-bold">
              Submit
            </button>
            <div></div>
          </form>

        </div>


      </div>

    </>
  )
}

export default App
