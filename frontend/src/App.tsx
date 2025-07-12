import "./App.css";
import GenreForm from "./components/genreForm";
import GenreList from "./components/genreList";
import { useState } from "react";

function App() {
const [genres, setGenres] = useState<string[]>([
  "Action",
  "Comedy",
  "Drama",
  "Sci-Fi",
  "Horror",
]);

const handleDelete = (genre: string) => {
  setGenres(()=> genres.filter((i)=>i!==genre), )
}

  return (
    <>
      <h1 className="header text-center">Welcome to Vidly!</h1>
      <GenreForm onSubmit={(data) => setGenres([...genres, data.name])} />
      <GenreList genres={genres} onDelete={handleDelete}/>
    </>
  );
}

export default App;
