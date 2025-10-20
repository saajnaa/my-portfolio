import {  Routes, Route } from 'react-router-dom'


import Home from './Home'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
 

import './App.css'
import { GrResume } from 'react-icons/gr'




function App() {





  return (


    <>
    <div className="app">

      <NavBar></NavBar>

      <Routes>

        <Route path='/' element={<Home />}></Route>
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/Projects' element={<Projects />}></Route>
        <Route path='/Resume' element={<Resume />}></Route>
        <Route path='/Blog' element={<Blog />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>




      </Routes>





      <Footer></Footer>

      </div>

    </>

  )
}

export default App
