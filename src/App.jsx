import React from 'react';
import "./App.scss";
import Logo from "./assets/images/logo.svg";
import data from "./assets/data/data.json"
import Bar from './Bar';

const App = () => {
  return (
    <div className='app'>
      <div className='header-container'>
        <div>
          <p>My Balance</p>
          <h2>$921.5</h2>
        </div>
        <img src={Logo} alt="Logo" className='logo' />
      </div>
      <div className='main-container'>
        <h2>Spending - Last 7 Days</h2>
        <div className='bars-container'>
          {
            data.map((item, index) => (
              <Bar key={index} item={item} />
            ))
          }
        </div>
        <div className='summary-container'>
          <div className='summary-total'>
            <p>Total this month</p>
            <h2>$427.5</h2>
          </div>
          <div className='summary-last-month'>
            <h3>+2.4%</h3>
            <p>from Last Month</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App