import React, { useEffect, useState } from 'react';
import axios from 'axios'

interface result {
  url: string,
  title: string,
  objectID: any
}

const App: React.FC = () => {


  const [query, setQuery] = useState<string>('react hooks')
  const [results, setResults] = useState<result[]>([])
  useEffect(() => {
    // axios.get('https://hn.algolia.com/api/v1/search?query=reacthooks')
    //   .then(res => res.data)
    //   .then(data => setResults(data.hits))
    getResults()

  }, []) //updates on component mount and when query changes

  const getResults = async () => {
    const res = await axios.get(`https://hn.algolia.com/api/v1/search?query=${query}`)
    setResults(res.data.hits)
  }

  return (
    <>
      <form onSubmit={event => {
        event.preventDefault();
        getResults();
      }}>


        <input
          type="text"
          onChange={event => setQuery(event.target.value)}
          value={query} />

        <button
          type="submit">
          Search
      </button>
        <ul>
          {results.map(r => (
            <li key={r.objectID}>
              <a href={r.url}> {r.title}</a>
            </li>
          ))}
        </ul>
      </form>
    </>
  );
}

export default App;
