import React, { useEffect, useState } from 'react';
import './App.css';
import './DarkTheme.css';
import './DarkTheme-NoBlur.css';
import './HeaderFix.css';
import './MobileResponsive.css';
import './MobileResponsiveEnhanced.css';
import './ComprehensiveResponsive.css'; // MUST load last for comprehensive responsive fixes
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import Blog from './Components/Blog';
import LoadingScreen from './Components/LoadingScreen';

const App = () => {
  const [resumeData, setResumeData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function loadResumeData() {
      setLoading(true);
      setError(null);
      try {
        // Minimum loading time for smooth animation
        const minLoadTime = new Promise(resolve => setTimeout(resolve, 3000));
        
        const res = await fetch('/resumeData.json', { signal });
        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
        }
        const data = await res.json();
        
        // Wait for minimum load time
        await minLoadTime;
        
        setResumeData(data);
      } catch (err) {
        if (err.name === 'AbortError') return; // fetch aborted
        console.error('Error loading resumeData:', err);
        setError(err.message || 'Unknown error');
      } finally {
        setLoading(false);
        // Keep loader visible briefly for fade out animation
        setTimeout(() => setShowLoader(false), 500);
      }
    }

    loadResumeData();

    return () => controller.abort();
  }, []);

  // Show loading screen
  if (showLoader) {
    return <LoadingScreen />;
  }

  // Optional: show error UI
  if (error) {
    return (
      <div className="App error-state">
        <div style={{ 
          textAlign: 'center', 
          padding: '100px 20px',
          color: 'var(--text-primary)'
        }}>
          <h2>⚠️ Error Loading Portfolio</h2>
          <p>Error: {error}</p>
          <button 
            onClick={() => window.location.reload()}
            style={{
              marginTop: '20px',
              padding: '12px 30px',
              background: 'var(--accent-primary)',
              color: '#0a0a0f',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600'
            }}
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Resume data={resumeData.resume} />
      <Portfolio data={resumeData.portfolio} />
      <Blog data={resumeData.main} />
      <Contact data={resumeData.main} />
      <Footer data={resumeData.main} />
    </div>
  );
};

export default App;
