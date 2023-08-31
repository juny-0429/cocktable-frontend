// PcLayout.js (or .jsx)
import React from 'react';
import PLstyle from './PcLayout.module.scss';
import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import NaviBar from '../components/naviBar/NaviBer';

function PcLayout() {
  return (
    <div className={PLstyle.centerDiv}>
      <div className={PLstyle.mainDiv}>
        <Header></Header>
        <NaviBar></NaviBar>
        <Outlet />
      </div>
    </div>
  );
}

export default PcLayout;
