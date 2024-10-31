import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Movies from './components/Movies';
import MovieDetails from './components/MovieDetails';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/movies/:id' element={<MovieDetails />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
