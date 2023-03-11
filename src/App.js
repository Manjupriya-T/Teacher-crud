import './App.css';
import AddDetails from './Component/AddDetails';
import DataBoard from './Component/DataBoard';
import NavBar from './Component/NavBar';
import EditDetails from './Component/EditDetails';
import { useState } from 'react';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
function App() {
  const [userdata,setuserData]=useState([])
  fetch("https://632161eafd698dfa29f6a0c4.mockapi.io/student")
  .then((data)=>data.json())
  .then((get)=>console.log(get))
  return (
    <div>
      <BrowserRouter>
          <NavBar/>
          <Routes>
      <Route path='/databoard'element={<DataBoard data={{userdata,setuserData}}/>}/>
    
      <Route path='/add-details'element={ <AddDetails data={{userdata , setuserData}}/>}/>
      <Route path='*'element={<Navigate to='/databoard'/>}/>
      <Route path='/edit-user/:id' element={<EditDetails data={{userdata , setuserData}}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;