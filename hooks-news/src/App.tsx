import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios'

interface result {
  url: string,
  title: string,
  objectID: any
}

const App: React.FC = () => {


  const [query, setQuery] = useState<string>('react hooks')
  const [results, setResults] = useState<result[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  useEffect(() => {
    // axios.get('https://hn.algolia.com/api/v1/search?query=reacthooks')
    //   .then(res => res.data)
    //   .then(data => setResults(data.hits))
    getResults()

  }, []) //updates on component mount and when query changes
  const searchInputRef = useRef<HTMLInputElement>(null)

  const getResults = async () => {
    setLoading(true)
    const res = await axios.get(`https://hn.algolia.com/api/v1/search?query=${query}`)
    setResults(res.data.hits)
    setLoading(false)
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
          value={query}
          ref={searchInputRef} />

        <button
          type="submit">
          Search
        </button>

        <button
          type="button"
          onClick={() => {
            setQuery("")
            if (searchInputRef.current) {
              searchInputRef.current.focus()
            }
          }}>
          Clear
        </button>
      </form>

      {loading ? <div> Loading... </div> :
        (
          <ul>
            {results.map(r => (
              <li key={r.objectID}>
                <a href={r.url}> {r.title}</a>
              </li>
            ))}
          </ul>
        )}
    </>
  );
}

export default App;
