import React from 'react';
import Logout from './Components/Logout';
// import {useMediaQuery} from 'react-responsive';
// import Header from './Components/Header';
import Welcome from './Components/Welcome';
import Registration from './Components/Registration';
import AddForm from './Components/AddForm';
import UpdateForm from './Components/UpdateForm';
import {Routes, Route} from 'react-router-dom';
import { AuthProvider } from './Components/auth';
import { RequireAuth } from './Components/RequireAuth';


// import { Link } from 'react-router-dom';

function App() { 
  return (
    <div className="App">
      <AuthProvider>
      <Routes>
      <Route path='/' exact element={<Welcome/>}/>
      <Route path='/welcome' element={<RequireAuth><Logout/></RequireAuth>}/>
      <Route path='/registration' element={<RequireAuth><Registration/></RequireAuth>}/>
      <Route path='/welcome/add' element={<RequireAuth><AddForm/></RequireAuth>}/>
      <Route path='/welcome/update' element={<RequireAuth><UpdateForm/></RequireAuth>}/>
      </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;