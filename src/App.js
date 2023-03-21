import React, {useState} from 'react';
import './App.css';
import { moviesList } from './movieData';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './Components/MovieList';
import Navbar1 from './Components/Navbar';
import OpenModal from './Components/Modal2';


function App() {
  const [movies,setMovies] = useState(moviesList);
  const [movie,setMovie] = useState(
    { id:movies.length + 1,
    title:"",
    posterURL:"",
    description:"",
    rating: "",})
 
  function AddMovie() {
   return setMovies ( [...movies,movie])
  }
   
  
  return (
    <div className="App">
     <Navbar1 />
     <MovieList  movies={movies} />
    
     <OpenModal add={AddMovie} 
     addtitle={e => setMovie({...movie, title:e.target.value})} 
     addimage={e => setMovie({...movie, posterURL:e.target.value})}
     adddescription={e => setMovie({...movie, description:e.target.value})}
     addrating={e => setMovie({...movie, rating:e.target.value})}
      />
     {console.log(movies)}
    </div>
  );
}

export default App;
