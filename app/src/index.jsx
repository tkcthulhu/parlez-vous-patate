import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { Header } from './Header'
import { AppetizerButton, BreakfastButton, BrunchButton, LunchButton, DinnerButton, SidesButton, DessertButton } from './Navbar';

function AppInfo() {

  const [menu, setMenu] = useState([]);
  const [page, setPage] = useState('Home')

  useEffect(() => {
      axios.get('https://astute-baton-362318.ue.r.appspot.com/api/json/')
          .then((resp) => setMenu(resp.data));
  }, [])

  if(menu.length === 0) {
    return(
      <div>HOLD YOUR DAMN HORSES...</div>
    )
  }

  return(
      <>
        <button onClick={() => setPage('Home')}>Home</button>
        <button onClick={() => setPage('Appetizers')}>Appetizer</button>        
        <button onClick={() => setPage('Breakfast')}>Breakfast</button>
        <button onClick={() => setPage('Brunch')}>Brunch</button>
        <button onClick={() => setPage('Lunch')}>Lunch</button>
        <button onClick={() => setPage('Dinner')}>Dinner</button>
        <button onClick={() => setPage('Sides')}>Sides</button>
        <button onClick={() => setPage('Desserts')}>Desserts</button>    
        {page === 'Home'}
        {page === 'Appetizers' && <AppetizerButton menu={menu}/>}
        {page === 'Breakfast' && <BreakfastButton menu={menu}/>}
        {page === 'Brunch' && <BrunchButton menu={menu}/>}
        {page === 'Lunch' && <LunchButton menu={menu}/>}
        {page === 'Dinner' && <DinnerButton menu={menu}/>}
        {page === 'Sides' && <SidesButton menu={menu}/>}
        {page === 'Desserts' && <DessertButton menu={menu}/>}    
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
