import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/homepage/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ViewRecipePage from './components/viewrecipepage/ViewRecipePage';
import FooterSection from './components/FooterSection';
import RecipeForm from './components/recipedetailsformpage/RecipeForm';
import AboutSection from './components/aboutpage/AboutSection';

function App() {

  return (

    <>
      <Router>
        <div className="flex flex-col">
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<AboutSection/>}></Route>
            <Route path='/viewrecipe/:id' element={<ViewRecipePage />}></Route>
            {/* <Route path="/viewrecipe/:id" element={<TestViewRecipePage />} /> */}

            <Route path='/recipeform' element={<RecipeForm />}></Route>
          </Routes>
          <FooterSection />
        </div>
      </Router>
    </>
  )
}

export default App
