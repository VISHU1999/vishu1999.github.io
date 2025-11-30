import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';

const App = () => {
  const [resumeData, setResumeData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function loadResumeData() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch('/resumeData.json', { signal });
        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
        }
        const data = await res.json();
        setResumeData(data);
      } catch (err) {
        if (err.name === 'AbortError') return; // fetch aborted
        console.error('Error loading resumeData:', err);
        setError(err.message || 'Unknown error');
      } finally {
        setLoading(false);
      }
    }

    loadResumeData();

    return () => controller.abort();
  }, []);

  // Optional: show a simple loading / error UI
  if (loading) {
    return <div className="App">Loading...</div>;
  }

  if (error) {
    return <div className="App">Error loading data: {error}</div>;
  }

  return (
    <div className="App">
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Resume data={resumeData.resume} />
      <Portfolio data={resumeData.portfolio} />
      <Contact data={resumeData.main} />
      <Footer data={resumeData.main} />
    </div>
  );
};

export default App;
