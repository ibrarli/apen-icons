import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-8 text-center">
      <div className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-xs font-bold mb-6">
        VERSION 1.0.6 IS LIVE
      </div>
      <h1 className="text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
        Icons for your <br />
        <span className="text-blue-600">next big project.</span>
      </h1>
      <p className="text-lg text-slate-500 max-w-2xl mb-10 leading-relaxed">
        ApenIcons is a collection of pixel-perfect, manual-crafted React components. 
        Fully customizable, accessible, and lightweight.
      </p>
      <div className="flex gap-4">
        <Link 
          to="/icons" 
          className="bg-slate-900 text-white px-8 py-3 rounded-xl font-semibold hover:bg-slate-800 transition-all"
        >
          Browse Icons
        </Link>
        <code className="bg-white border px-6 py-3 rounded-xl font-mono text-slate-600">
          npm install apenicons
        </code>
      </div>
    </div>
  );
};

export default Home;