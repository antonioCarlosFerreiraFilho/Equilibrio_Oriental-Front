//react router dom 
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
//react 
import {useState, useEffect} from 'react';
//pages
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import Article from './pages/Article/Article';
import AuthUser from './pages/AuthUser/AuthUser';
import KindnessChek from './pages/KindnessChek/KindnessChek';
//components
import Navbar from './components/Navbar/Navbar';
//redux
import { useAuth } from './hooks/useAuth';

function App() {

  //verify auth
  const {auth, loading} = useAuth();

  if(loading) {

    return <p>Loading.........</p>
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/article' element={<Article />} />
          <Route path='/login' element={!auth ? <AuthUser /> : <Navigate to="/"/>} />
          <Route path='/Kindness' element={<KindnessChek />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
