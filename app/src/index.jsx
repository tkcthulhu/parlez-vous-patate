import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';

import { Header } from './Header'
import { HomeButton, AppetizerButton, BreakfastButton, BrunchButton, LunchButton, DinnerButton, SidesButton, DessertButton, ContactUsButton } from './Navbar';

function AppInfo() {

  const [menu, setMenu] = useState([]);
  const [page, setPage] = useState('Home')

  useEffect(() => {
    axios.get('https://astute-baton-362318.ue.r.appspot.com/api/json/')
      .then((resp) => setMenu(resp.data));
  }, [])

  if (menu.length === 0) {
    return (
      <div className='container-fluid'><div className='row justify-content-center'><div className='col-8'><h1>Hold le damn horses...</h1></div></div></div>
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
                <li className="nav-item">
                  <button id='appButton' className='btn btn-light' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" onClick={() => setPage('Appetizers')}>
                    Appetizer</button>
                </li>
                <li className="nav-item">
                  <button id='breakfastButton' className='btn btn-light' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" onClick={() => setPage('Breakfast')}>
                    Breakfast
                  </button>
                </li>
                <li className="nav-item">
                  <button id='brunchButton' className='btn btn-light' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" onClick={() => setPage('Brunch')}>
                    Brunch
                  </button>
                </li>
                <li className="nav-item">
                  <button id='lunchButton' className='btn btn-light' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" onClick={() => setPage('Lunch')}>
                    Lunch
                  </button>
                </li>
                <li className="nav-item">
                  <button id='dinnerButton' className='btn btn-light' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" onClick={() => setPage('Dinner')}>
                    Dinner
                  </button>
                </li>
                <li className="nav-item">
                  <button id='sidesButton' className='btn btn-light' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" onClick={() => setPage('Sides')}>
                    Sides
                  </button>
                </li>
                <li className="nav-item">
                  <button id='dessertButton' className='btn btn-light' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" onClick={() => setPage('Desserts')}>
                    Desserts
                  </button>
                </li>
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
      {page === 'Appetizers' && <AppetizerButton menu={menu} />}
      {page === 'Breakfast' && <BreakfastButton menu={menu} />}
      {page === 'Brunch' && <BrunchButton menu={menu} />}
      {page === 'Lunch' && <LunchButton menu={menu} />}
      {page === 'Dinner' && <DinnerButton menu={menu} />}
      {page === 'Sides' && <SidesButton menu={menu} />}
      {page === 'Desserts' && <DessertButton menu={menu} />}
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
