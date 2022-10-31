import './App.css';
import {MyFridge, Register, Reset, Login} from './pages/index';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import PrivateRoute from './pages/auth/PrivateRoute';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path="/myfridge" element={<PrivateRoute><MyFridge/></PrivateRoute>}/>
        <Route path="/" element={<Login/>}/>                         
        <Route path="/login" element={<Login/>}/>                         
        <Route path="/register" element={<Register/>}/>
        <Route path="/reset" element={<Reset/>}/>
        
       
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
