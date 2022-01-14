import React from "react";
import {useState, useEffect} from 'react';
import { getAnimeName } from "../homePage/utilities";
import axios from "axios";
import { getAnimeDesc } from "../homePage/utilities";
import Card from '../cards/cardOne'
import './styles.css'

function TopAnime(){

    const[topAnimeList, updatetopAnimeList] = useState([]);

    useEffect(
        async () => {
            let response = await axios.get('https://api.aniapi.com/v1/anime')
            // console.log(getAnimeName(response.data));
            // console.log(response);
            updatetopAnimeList(getAnimeDesc(response).documents);

        }    
    ,[])
    return(
        <div className="top--list--App">
            <div className="cards--container">
                {topAnimeList.map(
                    anime =>
                        <div>
                            <Card
                                title={anime.titles.en}
                                image={anime.cover_image}
                                brief={anime.descriptions.en}
                                key={anime.id}
                            />
                        </div>
                )}
            </div>
        </div>
    )
}

export default TopAnime;