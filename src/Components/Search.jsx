import React, { useState } from 'react';

const Search = () => {
  const [query, setQuery] = useState('');
  const [articles, setArticles] = useState([]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=Y${import.meta.env.VITE_API_KEY}`);
      const data = await response.json();
      setArticles(data.articles);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Enter keywords..."
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
