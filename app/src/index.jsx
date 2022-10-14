import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useState, useEffect } from 'react';
import { Button } from './OneComponentToRuleThemAll';
import axios from 'axios';
import './styles.css';

import { Header } from './Header'
import { HomeButton, ContactUsButton } from './Navbar';

function AppInfo() {

  const Meals = [
    'Appetizer', 
    'Breakfast', 
    'Brunch', 
    'Lunch', 
    'Dinner', 
    'Side', 
    'Dessert'
  ]

  const [CART, setCART] = useState([])
  const [menu, setMenu] = useState([]);
  const [page, setPage] = useState('Home');
  const [search, setSearch] = useState();

  useEffect(() => {
    axios.get('https://astute-baton-362318.ue.r.appspot.com/api/json/')
      .then((resp) => setMenu(resp.data));
  }, [])

  if (menu.length === 0) {
    return (
      <div className='container-fluid'><div className='row justify-content-center'><div className='col-8'><h1>Hold le damn horses...</h1></div></div></div>
    )
  }

  let Buttons = [];

  for (let i = 0; i < Meals.length; i++) {
    Buttons.push(
      <li className="nav-item">
        <button 
          className='btn btn-light' 
          type="button" 
          data-bs-toggle="offcanvas" 
          data-bs-target="#offcanvasNavbar" 
          aria-controls="offcanvasNavbar" 
          onClick={() => {setPage(Meals[i]); setSearch(Meals[i])}}>
          {Meals[i]}
        </button>
      </li>
    )
  }

  return (
    <> 
      <nav className="navbar navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <h1>Parlez Vous Pomme de Terre</h1><br/>
          <h6>Fine cuisine of Earthlings</h6>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Parlez Vous Pomme de Terre</h5>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <button id='homeButton' className='btn btn-light' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" onClick={() => setPage('Home')}>
                    Home
                  </button>
                </li>
                {Buttons}
                <li className="nav-item">
                  <button id='contactUsButton' className='btn btn-light' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" onClick={() => setPage('ContactUs')}>
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {page === 'Home' && <HomeButton menu={menu} />}
      {page === search && <Button menu={menu} search={search} CART={CART} setCART={setCART}/>}
      {page === 'ContactUs' && <ContactUsButton />}
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header />
    <AppInfo />
  </>
);
