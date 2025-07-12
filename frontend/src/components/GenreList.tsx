import { useState } from "react";

const GenreList = () => {
  const [genres, setGenres] = useState<string[]>([
    "Action",
    "Comedy",
    "Drama",
    "Sci-Fi",
    "Horror",
  ]);

  return (
    <ul className="list-group">
      {genres.map((genre, index) => (
        <li key={index} className="list-group-item">
          {genre}
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
