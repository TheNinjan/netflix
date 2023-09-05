import React from 'react'
import Link from 'next/link'
import MovieCard from '@/components/MovieCard'
const Movies = async () => {
// const fetch = require('node-fetch');
const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en'
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'f35817735bmsh36d713fff567ae9p11ca8cjsnf2da1b71020e',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com',
  }
};

  const res =await fetch(url,options);
  const data =await res.json()
  const main_data = data.titles;
  // console.log(main_data)
  

  return(
    <>
    <section className='movieSection'>
        <div className='container'>
            <h1>Series & Movie</h1>
            <div className='card_section'>
                {
                    main_data.map((curElem) => {
                        return <MovieCard key={curElem.id} {...curElem} />
                    })
                }
            </div>
        </div>
    </section>
</>
  )}

  
export default Movies
