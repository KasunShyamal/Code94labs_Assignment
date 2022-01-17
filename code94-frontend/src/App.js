
import './App.css';
import Header from './components/Header/Header';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import LandingPage from './Screens/LandingPage/LandingPage';
import AddRecipe from './Screens/AddRecipe/AddRecipe';


export default function App() {
  

  return (
    <Router>
    <Header />
    <main>
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/add" element={<AddRecipe />} />
      </Routes>   
          </main>
    </Router>
  );
}


