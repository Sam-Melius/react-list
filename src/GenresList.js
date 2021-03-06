
import GenreItem from './GenreItem';


export default function GenresList(props) {
  return <div className={'genre-list'}>
     Music Genres: <div>{
      props.genres.map((genre, i) => 
        <GenreItem key={genre, i} genreName={genre} />)      
    } </div>
  </div>;
}

