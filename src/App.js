import HomePage from './components/homePage/homePage';
import './App.css';
import React from 'react'
import {useState} from 'react';
import AnimeContainer from './components/animeDetails/container';
import Header from './components/navigation/Appbar/Appbar';
import Footer from './components/navigation/Footer/Footer';


function App() {

  const [anime, updateAnime] = useState();

  function getData(data){
    console.log(data);
    updateAnime(data);
  }

  return (
    <div className={!anime ? "App" : "App--Anime--Container"}>
      <Header/>
      {!anime ? 
        <HomePage animeData={(data) => getData(data)}/> : 
        <AnimeContainer data={anime}/>
      }
      <Footer/>
    </div>
  );
}

export default App;