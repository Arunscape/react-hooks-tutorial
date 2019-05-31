import React, { useEffect, useState } from 'react';
import axios from 'axios'

interface result {
  url: string,
  title: string,
  objectID: any
}

const App: React.FC = () => {



  const [results, setResults] = useState<result[]>([])
  useEffect(() => {
    axios.get('https://hn.algolia.com/api/v1/search?query=reacthooks')
      .then(res => res.data)
      .then(data => setResults(data.hits))


  }, [])

  return (
    <>
      <ul>
        {results.map(r => (
          <li key={r.objectID}>
            <a href={r.url}> {r.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
