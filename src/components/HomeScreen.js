import React, { useEffect, useState, useCallback} from "react";

import {BrowserRouter as Router,Route, Link, Routes} from 'react-router-dom';
import Kollywood from './Kollywood';


const HomeScreen = (props)=> {
     let latestMoviesList = []
     let latestMovies = []
     const [movieList, setMovieList] = useState([]);
     const getLatestMovies = useCallback(() => {
        fetch("http://localhost:3000/latestMovies").then(res => {
            return res.json()
        }).then(data=>{
           latestMovies = data.latest;
           latestMovies.map((element, index) => {
               console.log("element",element)
               latestMoviesList.push(
               <div className="latestMovieItem"
                    id={index}>
                       {element}
               </div>)
           });
     });
     useEffect (()=>{
        getLatestMovies();
        setMovieList(latestMoviesList)
        })
     })
     
       
    return(
         <div style={{height:"100%",width:"100%"}}>
             <div className="header">Welcome To Movie bazzar</div>
             <div style={{display:"flex",flexDirection:"row"}}>
                <nav>
                <ul>
                 <li><Link to="/kollywood">Kollywood</Link></li>
                 <li><Link to="/bollywood">Bollywood</Link></li>
                 <li><Link to="/hollywood">Hollywood</Link></li>
                 <li><Link to="/mollywood">Mollywood</Link></li>
                 <li><Link to="/tollywood">Tollywood</Link></li>
                </ul>
                </nav>
                <div id="latestMovieContainer">Latest Movies
                {movieList}
                </div>
                
             </div>
           
            
               
                 
                
          
       </div>)
             
    
        
         
     
}
export default HomeScreen;