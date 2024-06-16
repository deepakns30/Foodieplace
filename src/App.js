import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import Navigation from './components/Navigation';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Logout from './components/Logout';
import AddRecipe from './components/AddRecipe';
import RecipeList from './components/RecipeList';
import FavoriteRecipes from './components/FavoriteRecipes';

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/add-recipe" element={<AddRecipe />} />
          <Route path="/recipes" element={<RecipeList />} />
          <Route path="/favorites" element={<FavoriteRecipes />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
