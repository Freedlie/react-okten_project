import React, {useEffect, useState} from 'react';
import {GenreService} from "../services";
import {Genr} from "./genr";

const Genre = () => {
    let {genres,setGenre} = useState([]);
    useEffect(()=>{
        GenreService.getAll().then(({data})=>setGenre(data))
    },[]);
    console.log(genres)
    return (
        <div>
            {
                 genres.map((genre)=>(<Genr key={genre.id} genre={genre}/>))
            }
        </div>
    );
};

export {Genre};