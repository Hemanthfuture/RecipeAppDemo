import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Details from './pages/Details';
import { createContext, useContext } from 'react';
import { GlobalContext } from './components/hookcontext';

function App() {
  return (
      <div className='container'>
        <div>

        <Navbar/>
        </div>
        <Routes>
          <Route
          path='/'
          element={
            <Home/>
          }
          />
          <Route
          path='/favorites/'
          element={
            <Favorites/>
          }
          />
          <Route
          path='/details/:id'
          element={
            <Details/>
          }
          />
        </Routes>
      </div>
     
    
  );
}

export default App;
