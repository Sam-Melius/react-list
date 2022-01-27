
import './App.css';
// import your arrays here
import { genres } from './Genres';
import GenresList from './GenresList';


function App() {
  return (
    <div className="App">
        Render all your lists here. Pass the arrays as props.
      <GenresList genres={genres} />
      <InstrumentsList instruments={instruments} />
    </div>
  );
}

export default App;
