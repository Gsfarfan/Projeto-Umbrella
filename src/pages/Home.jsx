import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";


import './MoviesGrid.css';
import Loader from "../loader";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {

    const [topMovies, setTopMovies]= useState([]);
    const getTopRatedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
       
        setTopMovies(data.results); }
        const [loading, setLoading] = useState(true)
        useEffect(() =>{
        setTimeout(() => setLoading(false), 800)
        }, [])
    

   
    useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
    console.log(topRatedUrl);

    getTopRatedMovies(topRatedUrl);
    },[])

    return (

    <div className="container">
        
        <h2 className="title">Filmes Melhores Avaliados:</h2>
        { 
            loading ? <Loader />:
            <div className="movies-container">
            {topMovies.length > 0 &&
              topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
             </div>
             }
       
        </div>


    );
   
};

export default Home;