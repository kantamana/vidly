import "./App.css";
import GenreForm from "./components/genreForm";
import GenreList from "./components/genreList";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {

interface Genre {
  id: number;
  name: string;
}

const [genres, setGenres] = useState<Genre[]>([]);

useEffect(() => {
  axios.get('http://localhost:3000/api/genres')
    .then((res) => {
      setGenres(res.data); // assuming the genres come in res.data
    })
    .catch((err) => {
      console.error('Error fetching genres:', err);
    });
}, []);



const handleDelete = (genreToDelete: Genre) => {
  setGenres((prevGenres) =>
    prevGenres.filter((genre) => genre.id !== genreToDelete.id)
  );
};

  return (
    <>
      <h1 className="header text-center">Welcome to Vidly!</h1>
      <GenreForm
        onSubmit={(data) =>
          setGenres([
            ...genres,
            { id: Date.now(), name: data.name }, // fake id for now
          ])
        }
      />
      <GenreList genres={genres} onDelete={handleDelete}/>
    </>
  );
}

export default App;
