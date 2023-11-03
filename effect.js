import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from an API
    fetchData()
      .then(response => setData(response))
      .catch(error => console.error(error));
  }, []); // Empty dependency array means this effect will run once after the initial render

  return <div>{data ? <p>{data}</p> : <p>Loading...</p>}</div>;
}
