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
      <Route path='/Welcome' element={<RequireAuth><Logout/></RequireAuth>}/>
      <Route path='/Registration' element={<RequireAuth><Registration/></RequireAuth>}/>
      <Route path='/Welcome/Add' element={<RequireAuth><AddForm/></RequireAuth>}/>
      <Route path='/Welcome/Update' element={<RequireAuth><UpdateForm/></RequireAuth>}/>
      </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;