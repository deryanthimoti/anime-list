import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BokuNoAnimeHomepageContainer from './pages';
import DetailPage from './pages/detail';
import ParkingSystemPageContainer from './pages/parking-system';

function App() {
  return (
    <Router>
      <head>
        <title>Boku wa Anime</title>
      </head>
      <Routes>
        <Route path="/" element={<BokuNoAnimeHomepageContainer />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/parking-system" element={<ParkingSystemPageContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
