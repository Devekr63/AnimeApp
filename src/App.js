import HomePage from './components/homePage/homePage';
import './App.css';
import React from 'react'
import {useState} from 'react';
import {Routes, Route, NavLink} from 'react-router-dom';
import AnimeContainer from './components/animeDetails/container';
import Header from './components/navigation/Appbar/Appbar';
import Footer from './components/navigation/Footer/Footer';
import Top from './components/topAnime/tophundred';


function App() {

  const [anime, updateAnime] = useState();
  const [navItems, handleNavItems] = useState("Home");

  function getData(data){
    console.log(data);
    updateAnime(data);
  }

  function selectInNav(toDisplay){
    console.log(toDisplay);
    handleNavItems(toDisplay);
  }

  return (
    <div className={!anime ? "App" : "App--Anime--Container"}>
      <Header optionsInNav={option => selectInNav(option)}/>
      {!anime&navItems === "Home"? 
        <HomePage animeData={(data) => getData(data)}/> : 
        !navItems ?
        <AnimeContainer data={anime}/> :
        <Top/>
      }
      <Footer/>
    </div>
  );
}

export default App;