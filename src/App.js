import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Fridge from "./pages/Fridge/Fridge";
import Recipes from './pages/Recipes/Recipes';
import ShoppingList from "./pages/ShoppingList/ShoppingList";
import MyPage from "./pages/MyPage/MyPage"; 
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup'
function App() {



  return (
    <BrowserRouter>
    <div className="App">
        <Routes>
        <Route path ="/" element= {<Login/>}/>
        <Route path ="/signup" element= {<Signup/>}/>
        <Route path="/recipes" element= {<Recipes/>}/>
        <Route path="/fridge" element= {<Fridge/>}/>
        <Route path="/shoppinglist" element= {<ShoppingList/>}/>
        <Route path="/mypage" element= {<MyPage/>}/>

      </Routes> 
       
    </div>
    </BrowserRouter>
  );
}

export default App;
