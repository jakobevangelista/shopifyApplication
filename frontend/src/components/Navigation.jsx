import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <div className='navigation'>
      <nav className='navbar navbar-expand navbar-dark bg-dark'>
        <div className='container'>
          <NavLink className='navbar-brand' to='/'>
            Shopify App
          </NavLink>
          <div>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/'>
                  My Items
                  <span className='sr-only'>(current)</span>
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/about'>
                  Manufacturers
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/AddItem'>
                  Add Item
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/AddManufacturer'>
                  Add Manufacturer
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
