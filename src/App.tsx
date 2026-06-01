import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import MonarchButterfly from './pages/MonarchButterfly';
import Firefly from './pages/Firefly';
import BoxTurtle from './pages/BoxTurtle';
import AmericanKestrel from './pages/AmericanKestrel';
import AmericanWoodcock from './pages/AmericanWoodcock';
import PurpleMartin from './pages/PurpleMartin';
import Pesticides from './pages/Pesticides';
import Water from './pages/Water';
import LeaveTheLeaves from './pages/LeaveTheLeaves';
import NativePlants from './pages/NativePlants';
import GetInvolved from './pages/GetInvolved';
import IndicatorSpeciesHub from './pages/IndicatorSpeciesHub';
import SeasonalGuideHub from './pages/SeasonalGuideHub';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-monarch-cream">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/monarch-butterfly" element={<MonarchButterfly />} />
            <Route path="/firefly" element={<Firefly />} />
            <Route path="/box-turtle" element={<BoxTurtle />} />
            <Route path="/american-kestrel" element={<AmericanKestrel />} />
            <Route path="/american-woodcock" element={<AmericanWoodcock />} />
            <Route path="/purple-martin" element={<PurpleMartin />} />
            <Route path="/pesticides" element={<Pesticides />} />
            <Route path="/water" element={<Water />} />
            <Route path="/leave-the-leaves" element={<LeaveTheLeaves />} />
            <Route path="/native-plants" element={<NativePlants />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/indicator-species" element={<IndicatorSpeciesHub />} />
            <Route path="/seasonal-guide" element={<SeasonalGuideHub />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
