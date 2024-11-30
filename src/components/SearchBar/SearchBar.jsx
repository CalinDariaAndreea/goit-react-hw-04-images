import '../styles.css';
import { useState } from 'react';

export const Searchbar = ({ handleSearch }) => {
  const [query, setQuery] = useState('');

  const onChange = e => {
    setQuery(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      alert('Please enter a valid search term.');
      return;
    }
    handleSearch(query);
  };

  return (
    <header className="searchbar">
      <form className="searchForm" onSubmit={onSubmit}>
        <button type="submit" className="searchForm-button">
          <span className="searchForm-button-label">Search</span>
        </button>

        <input
          className="searchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={onChange}
        />
      </form>
    </header>
  );
};