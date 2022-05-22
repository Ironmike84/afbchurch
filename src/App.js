import { Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'
import './App.css';
import Home from './Components/Home/Home'
import Services from './Components/Services/Services'
import Childrens  from './Components/Children/Childrens';

function App() {
  return (
    <>
    <div className="App">
      <NavBar/>
    
      <hr></hr>
    </div>
    <Routes>
    <Route path={'/Home'} element={<Home/>}/>
    <Route path={'/Services'} element={<Services/>}/>
    <Route path={'/Children'} element={<Childrens/>}/>
    </Routes>
    </>
  );
}

export default App;
