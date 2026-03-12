import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import IconGallery from './pages/IconGallery';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50">
        {/* Navigation Bar */}
        <nav className="border-b bg-white sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
            <Link to="/" className="text-xl font-bold text-slate-900 tracking-tight">
              Apen<span className="text-blue-600">Icons</span>
            </Link>
            <div className="space-x-8 text-sm font-medium">
              <Link to="/" className="text-slate-600 hover:text-blue-600">Home</Link>
              <Link to="/icons" className="text-slate-600 hover:text-blue-600">Icons</Link>
              <a href="https://github.com/ibrarli/apen-icons" className="text-slate-600 hover:text-blue-600">GitHub</a>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/icons" element={<IconGallery />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;