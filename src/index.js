import React from 'react';
import ReactDOM from 'react-dom';
import AnimeSearch from './components/AnimeSearch'; // Import your main component

import './styles.css'; // You can also import a global CSS file if needed

ReactDOM.render(
  <React.StrictMode>
    <AnimeSearch />
  </React.StrictMode>,
  document.getElementById('root')
);
