import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  Navigation,
  Home,
  About,
  AddItem,
  EditItem,
  AddManufacturer,
  EditManufacturer,
} from './components';

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/AddItem' element={<AddItem />} />
      <Route path='/EditItem/:id' element={<EditItem />} />
      <Route path='/AddManufacturer' element={<AddManufacturer />} />
      <Route path='/EditManufacturer/:id' element={<EditManufacturer />} />
    </Routes>
  </Router>,

  document.getElementById('root')
);

// serviceWorker.unregister();
