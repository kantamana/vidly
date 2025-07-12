
import './App.css'
import GenreForm from './components/genreForm'
import GenreList from './components/genreList'

function App() {
  return (
    <>
      <h1 className='header text-center' >Welcome to Vidly!</h1>
      <GenreForm></GenreForm>
      <GenreList></GenreList>
    </>
  )
}

export default App
