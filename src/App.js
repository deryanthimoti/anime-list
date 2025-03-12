import './App.css';

import BokuNoAnimeHomepage from './pages/index';
import BokuWaAnimeContext from './contexts/BokuWaAnimeContext/BokuWaAnimeContext';

function App() {
  return (
    <div >
      <BokuWaAnimeContext>
        <BokuNoAnimeHomepage />
      </BokuWaAnimeContext>
    </div>
  );
}

export default App;
