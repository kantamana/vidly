
interface Genre {
  id: number;
  name: string;
}

interface GenreListProps {
  genres: Genre[];
  onDelete: (genre: Genre) => void;
}
const GenreList = ({ genres, onDelete }: GenreListProps) => {
  return (
    <ul className="list-group">
      {genres.map((genre) => (
        <li key={genre.id} className="list-group-item d-flex justify-content-between align-items-center">
          {genre.name}
          <button
            className="btn btn-danger btn-sm"
            onClick={() => onDelete(genre)}
          >
            Delete 🗑️
          </button>
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
