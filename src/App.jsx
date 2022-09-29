import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import NewsId from './components/home/sections/NewsId';
import Libary from './components/libary/Libary';
import InfoLists from './components/listsInfo/InfoLists';
import Register from './components/navbar/Register';
import TodoList from './components/todo/TodoList';
import AnimationCircles from './utils/AnimationCircles';
// AOS
import AOS from "aos";
import "aos/dist/aos.css"

export default function App() {

  // initing AOS

  useEffect(() => {
     AOS.init();
  }, [])

  return (
    <>
      {/* Animated Circles */}
      <AnimationCircles />
      {/* Components */}
      <Routes>
        <Route index path='/' element={<Register/>} />
        <Route path='/bosh-menyu' element={<Home />} />
        <Route path='/' element={<Navigate to="/bosh-menyu" />} />
        <Route path='/foydali/:id' element={<NewsId />} />
        <Route path='/kutubxona' element={<Libary />} />
        <Route path='/qaydnomalar' element={<TodoList />} />
        <Route path="/sinf-ro'yxati" element={<InfoLists />} />
      </Routes>
      {/* Footer */}
      <Footer />
    </>
  )
}
