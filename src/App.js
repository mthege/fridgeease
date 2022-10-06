import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";

import Fridge from "./pages/Fridge/Fridge";
import Recipes from './pages/Recipes/Recipes';
import ShoppingList from "./pages/ShoppingList/ShoppingList";
import MyPage from "./pages/MyPage/MyPage"; 
import Topbar from './components/Topbar/Topbar';
import FilterBar from './components/FilterBar/FilterBar';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Topbar/>
      <FilterBar/>
      <Routes>
        <Route path="/recipes" element= {<Recipes/>}/>
        <Route path="/" element= {<Fridge/>}/>
        <Route path="/shoppinglist" element= {<ShoppingList/>}/>
        <Route path="/mypage" element= {<MyPage/>}/>

      </Routes> 
      <Navbar/>   
    </div>
    </BrowserRouter>
  );
}

export default App;
