import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import Home from './Home'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'


import './App.css'
import { GrResume } from 'react-icons/gr' 


const router = createBrowserRouter(


  [

    {

      path: "/",
      element:

        <div>
          <NavBar></NavBar>
          <Home></Home>
          <Footer></Footer>
        </div>


    },


    {

      path: "/home",
      element: <div>
        <NavBar></NavBar>
        <Home></Home>
        <Footer></Footer>
      </div>

    },
    {

      path: "/projects",
      element: <div>
        <NavBar></NavBar>
        <Projects> </Projects>
        <Footer></Footer>
      </div>

    },
    {

      path: "/resume",
      element: <div>
        <NavBar></NavBar>
        <Resume></Resume>
        <Footer></Footer>
      </div>





    },
    {

      path: "/blog",
      element: <div>
        <NavBar></NavBar>
        <Blog></Blog>
        <Footer></Footer>
      </div>


    },
    {

      path: "/contact",
      element: <div>
        <NavBar></NavBar>
        <Contact></Contact>
        <Footer></Footer>
      </div>


    }



  ]);


function App() {





  return (


    <>
      <div>
        <RouterProvider router={router}></RouterProvider>

      </div>
    </>

  )
}

export default App
