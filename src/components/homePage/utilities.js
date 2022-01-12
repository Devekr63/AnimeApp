import axios from "axios";

export function getAnimeName(response){
    return response.data.documents.map(anime => ({title:anime.titles.en, id:anime.id}));
}

export function getAnime(animeList, animeTitle){
    return animeList.find(
        anime => anime.title.toLowerCase().includes(animeTitle.toLowerCase().trim())
    )
}

export async function getAnimeFromApi(animeList, animeTitle){
    const animeObj = animeList.find(
        anime => anime.title.toLowerCase().includes(animeTitle.toLowerCase().trim())
    );
    if(animeObj){
        return animeObj;
    }

    let response = await axios.get(`https://api.aniapi.com/v1/anime?title=${animeTitle}`);
    // console.log(response.data.data.documents.map(anime => anime.titles.en));
    animeList.push(...response.data.data.documents.map((anime => ({title:anime.titles.en, id:anime.id}))));
    
}

export function getAnimeDesc(response){
    // console.log(response.data.data)
    return response.data.data
}

export function removeHtmlTags (str, replacer) {
	const regex = /<(\/*?)(?!(em|p|br\s*\/|strong))\w+?.+?>/gim;
    return str.replaceAll(regex, replacer);
};


