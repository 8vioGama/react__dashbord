import React from 'react';
import './TopBar.scss';
// Child components
import Notifications from './Notifications/Notifications';
import logo from './logo.png';

const TopBar = () => (
  <div className="top-bar">
    <div className="logo">
      <img src={logo} alt="" />
    </div>
    <div className="top-bar__actions">
      <Notifications />
    </div>
  </div>
);

export default TopBar;
