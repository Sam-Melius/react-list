
import './App.css';
// import your arrays here
import { genres } from './Genres';
import GenresList from './GenresList';
import { instruments } from './instruments';
import InstrumentsList from './InstrumentsList';
import { musicians } from './musicians';
import MusiciansList from './MusiciansList';


function App() {
  return (
    <div className="App">
        Render all your lists here. Pass the arrays as props.
      <GenresList genres={genres} />
      <InstrumentsList instruments={instruments} />
      <MusiciansList musicians={musicians} />
    </div>
  );
}

export default App;
