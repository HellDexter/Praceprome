import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { UploadPage } from './pages/UploadPage';
import { BrowseJobsPage } from './pages/BrowseJobsPage';
import { MarketOverviewPage } from './pages/MarketOverviewPage';
import { InterviewPrepPage } from './pages/InterviewPrepPage';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/upload" element={<UploadPage />} />
            <Route path="/jobs" element={<BrowseJobsPage />} />
            <Route path="/market" element={<MarketOverviewPage />} />
            <Route path="/interview" element={<InterviewPrepPage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

export default App;