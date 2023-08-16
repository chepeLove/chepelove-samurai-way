import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Sidebar} from "./components/sidebar/Sidebar";
import {Profile} from "./components/profile/Profile";

function App() {
  return (
    <div className="app__wrapper">
      <Header/>
      <Sidebar/>
      <Profile/>
    </div>
  );
}

export default App;
