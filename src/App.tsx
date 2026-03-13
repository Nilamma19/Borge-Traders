import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import { Home, Systems, HowItWorks, Industries, About } from './pages';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-900">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/systems" element={<Systems />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
