import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Navbar from './components/Navbar';
import SavedBooks from './pages/SavedBooks';
import SearchBooks from './pages/SearchBooks';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route
  path = '/'
  element = {
    <SearchBooks />
  } />
          <Route 
            path='/saved'  element = {
    <SavedBooks />
  } />
          <Route 
            path='*'
            element={<h1 className='display-2'>Wrong page!</h1 >
}
          />
        </Routes>
      </>
    </Router>
  );
          }

          export default App;
