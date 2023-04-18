import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Header from '../components/header/header'
import Home from '../pages/home'
import Movies from '../pages/movies'
import Favorites from '../pages/favorites/indes'

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<Movies />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  )
}
