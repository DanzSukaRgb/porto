import { useState } from 'react';
import Portfolio from './pages/Portfolio';
import Documentation from './pages/Documentation';

function App() {
  const [currentPage, setCurrentPage] = useState('portfolio'); // 'portfolio' or 'docs'

  return (
    <div className="min-h-screen">
      {currentPage === 'portfolio' ? (
        <Portfolio onNavigateToDocs={() => setCurrentPage('docs')} />
      ) : (
        <Documentation onNavigateToPortfolio={() => setCurrentPage('portfolio')} />
      )}
    </div>
  );
}

export default App;
