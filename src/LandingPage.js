import React, { useState } from 'react';
import './LandingPage.css';

function LandingPage() {
  const [page, setPage] = useState(0); // 0 = cover, 1 = title, etc.

  const pages = [
    {
      type: 'cover',
      content: (
        <div className="book-cover" onClick={() => setPage(1)}>
          <img src="/images/book-cover.png" alt="Book Cover" className="book-image" />
        </div>
      )
    },
    {
      type: 'title',
      content: (
        <div className="book-page">
          <h1>GameFuel</h1>
          <p>A Dietary Guide for Student-Athletes</p>
        </div>
      )
    },
    {
      type: 'page',
      content: (
        <div className="book-page">
          <h2>Introduction</h2>
          <p>This guide is designed to help student-athletes fuel their performance...</p>
        </div>
      )
    },
    {
      type: 'page',
      content: (
        <div className="book-page">
          <h2>Nutrition Basics</h2>
          <p>Learn about macronutrients, hydration, and timing your meals...</p>
        </div>
      )
    }
    // Add more pages if you want
  ];

  const handleNext = () => {
    if (page < pages.length - 1) setPage(prev => prev + 1);
  };

  const handlePrev = () => {
    if (page > 1) setPage(prev => prev - 1);
  };

  const handleCloseBook = () => {
    setPage(0); // Return to cover page
  };

  return (
    <div className="landing-container">
      <div className="book-wrapper">
        {pages[page].content}

        {/* Navigation Buttons */}
        {page > 0 && (
          <div className="navigation-buttons">
            {page > 1 && <button onClick={handlePrev} className='prev-button'>Previous Page</button>}
            <button onClick={handleCloseBook} className="close-button">Close Book</button>
            {page < pages.length - 1 && <button onClick={handleNext} className='next-button'>Next Page</button>}
          </div>
        )}
      </div>
    </div>
  );
}

export default LandingPage;
