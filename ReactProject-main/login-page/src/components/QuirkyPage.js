// QuirkyPage.js

import React, { useState } from 'react';

const QuirkyPage = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const [searchInfo, setSearchInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (search === '') return;

    setLoading(true);

    try {
      const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${search}`;
      const response = await fetch(endpoint);

      if (!response.ok) {
        throw Error(response.statusText);
      }

      const json = await response.json();
      setResults(json.query.search);
      setSearchInfo(json.query.searchinfo);
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error('Error fetching data:', error.message);
      setError('An error occurred while fetching data.'); // Set an error message
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px', color: '#3498db' }}>Quirky Page</h1>
      <form
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '20px',
        }}
        className="search-box"
        onSubmit={handleSearch}
      >
        <input
          type="search"
          placeholder="Search Wikipedia..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: '2px solid #3498db',
            marginRight: '10px',
            width: '300px',
            fontSize: '1rem',
            fontWeight: 'bold',
            color: '#333',
          }}
        />
        <button
          type="submit"
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#3498db',
            color: 'white',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
        >
          Search
        </button>
      </form>
      {loading && <p style={{ fontSize: '1rem', fontWeight: 'bold', color: '#3498db' }}>Loading...</p>}
      {error && <p style={{ fontSize: '1rem', fontWeight: 'bold', color: 'red' }}>Error: {error}</p>}
      {searchInfo.totalhits ? (
        <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#3498db' }}>
          Search Results: {searchInfo.totalhits}
        </p>
      ) : (
        ''
      )}
      <div className="results">
        {results.map((result, i) => {
          const url = `https://en.wikipedia.org/?curid=${result.pageid}`;
          return (
            <div
              key={i}
              style={{
                marginBottom: '20px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => (e.target.style.transform = 'scale(1.02)')}
              onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
            >
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#3498db',
                  marginBottom: '10px',
                }}
              >
                {result.title}
              </h3>
              <p
                dangerouslySetInnerHTML={{ __html: result.snippet }}
                style={{ fontSize: '1rem', color: '#555', lineHeight: '1.6' }}
              ></p>
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  color: '#3498db',
                  textDecoration: 'none',
                  display: 'inline-block',
                  marginTop: '10px',
                  transition: 'color 0.3s ease',
                }}
              >
                Read more
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuirkyPage;
