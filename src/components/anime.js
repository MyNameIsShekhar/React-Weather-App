import React, { useState } from 'react';

const AnimeSearch = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchIconStyle, setSearchIconStyle] = useState({
    backgroundColor: 'transparent',
    color: 'white',
    borderRadius: '25px'
  });
  const [resultData, setResultData] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value.trim();
    setSearchInput(value);

    const newSearchIconStyle = {
      backgroundColor: value !== '' ? '#fff' : 'transparent',
      color: value !== '' ? 'black' : 'white',
      borderRadius: '25px'
    };

    setSearchIconStyle(newSearchIconStyle);
  };

  const searchAnime = () => {
    const apiUrl = `https://hunt-grab-api.vercel.app/scrape?text=${encodeURIComponent(searchInput)}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setResultData(data))
      .catch(error => console.error('Error:', error));
  };

  return (
    <div>
      <section>
        <input
          type="text"
          id="search-input"
          placeholder="Search Anime"
          value={searchInput}
          onChange={handleInputChange}
          style={searchIconStyle}
        />
        <div id="search-icon-container">
          <div
            id="search-icon"
            className="fas fa-search"
            onClick={searchAnime}
            style={{ fontSize: '20px', cursor: 'pointer', ...searchIconStyle }}
          ></div>
        </div>
      </section>
      <main id="result-container">
        {resultData.cover_images &&
          resultData.cover_images.map((cover, index) => (
            <a
              key={index}
              href={`https://animeheaven.me/${cover.src}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="cover-container">
                <img
                  src={`https://animeheaven.me/${cover.src}`}
                  alt={cover.alt}
                  className="cover-img"
                />
                <div className="alt-text">{cover.alt}</div>
              </div>
            </a>
          ))}
      </main>
    </div>
  );
};

export default AnimeSearch;
