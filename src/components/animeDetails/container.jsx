import Card from '../cards/cardOne';
import React from 'react';
import './styles.css'

function removeHtml(str){
    const regex = /<(\/*?)(?!(em|p|br\s*\/|strong))\w+?.+?>/gim;
    return str.replaceAll(regex, "");
}

function container(props) {
    return (
        <>
            <div id='empty--space'></div>
            <div className='anime--container'>
                <div className='image--box'>
                    <img src={props.data.cover_image}/>
                    <p><a href={props.data.trailer_url} target={"_blank"}>{props.data.titles.en}</a></p>
                </div>
                <div className='details--box'>
                    {``}
                </div>
                <div className='desc--box'>
                    {removeHtml(props.data.descriptions.en)}
                </div>
            </div>
        </>
    )
}

export default container;