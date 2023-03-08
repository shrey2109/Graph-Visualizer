import './App.css';
import NavBar from './components/NavBar';
import Grid from './components/Grid';
import Color from './components/Color';
import { useParams } from './context';

function App() {

  return (
    <>
      <h1> Hello For First Time </h1>
      {/* generateMap() */}
      <NavBar/>
      <Grid/>
      <Color/>
    </>
  );
}

export default App;
