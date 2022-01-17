
import './App.css';
import Header from './components/Header/Header';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import LandingPage from './Screens/LandingPage/LandingPage';
import AddRecipe from './Screens/AddRecipe/AddRecipe';
import UpdateRecipe from './Screens/UpdateRecipe/UpdateRecipe';


export default function App() {
  

  return (
    <Router>
    <Header />
    <main>
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/add" element={<AddRecipe />} />
          <Route path="/add/:id" element={<UpdateRecipe />} />
      </Routes>   
          </main>
    </Router>
  );
}


