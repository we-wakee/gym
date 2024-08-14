// import { useState } from 'react'
// import React from 'react'
// import { BrowserRouter as Route,Router,Routes} from 'react-router-dom'
// import { Box } from '@mui/material'
// import { Home } from './pages/Home'
// import { ExcerciseDetail } from './pages/ExcerciseDetail'
// import { Navbar } from './components/Navbar'
// import { Footer } from './components/Footer'


// function App() {
  
//   return (
//     <>
//       <Router>
//       <Box width="400px" sx={{width: {xl: '1488px'}}} m="auto" >
//           <Navbar/>
//           <Routes>
//               <Outlet/>
//               <Route path='/' element={<Home/> }/>
//               <Route path='/exercise/:id' element={<ExcerciseDetail/> }/>
//           </Routes>

//           <Footer/>
//       </Box>
//       </Router>
//     </>
//   )
// }

// export default App


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import { Home } from './pages/Home';
import { ExerciseDetail } from './pages/ExerciseDetail';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

function App() {
  return (
    <Router>
      <Box width="400px" sx={{ width: { xl: '1488px' }}} m="auto">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/exercise/:id' element={<ExerciseDetail />} />
        </Routes>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;

