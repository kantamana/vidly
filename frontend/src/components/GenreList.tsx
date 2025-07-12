

interface GenreListProps {  
    genres: string[];
    onDelete: (genre: string) => void
}
const GenreList = ({ genres, onDelete }: GenreListProps) => {

  return (
    <ul className="list-group">
      {genres.map((genre, index) => (
        <li key={index} className="list-group-item">
          {genre}
          <button className="btn btn-danger btn-sm float-end" onClick={() => onDelete(genre)}> Delete 🗑️</button>
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
