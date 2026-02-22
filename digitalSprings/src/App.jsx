import React from 'react';
import NavBar from './Pages/NavBar';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Reset  from './Pages/Reset';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import Jobslayout from './layout/Jobslayout';
import Jobs, { JobsLoader } from './Pages/Jobs';
import JobDetails, { JobDetailsLoader } from './Components/JobDetails';
import NotFound from './Components/NotFound';
/*import Error from './Components/Error';*/

function App() {
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<RootLayout/>}>
              <Route path="Home" element={<Home/>} />
        <Route path="Dashboard" element={<Dashboard/>} />
        <Route path="Register" element={<Register/>} />
        <Route path="Login" element={<Login />}/>
        <Route path="Services" element={<Services />} />
        <Route path="Contact" element={<Contact/>} />
        <Route path="Reset" element={<Reset />} />
      </Route>
      <Route path='Jobs' element={<Jobslayout/>}/*errorElement={<Error/>}*/>
        <Route index element={<Jobs />} loader={JobsLoader}/>
        <Route path=':id' element={<JobDetails/>} loader= {JobDetailsLoader} />
      </Route>
      <Route path='*' element={<NotFound/>} />
      
    </>
    
  )
);

  return (
   <RouterProvider router={router}/>
  );
}

export default App;
