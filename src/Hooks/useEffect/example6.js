import React, { useState } from "react";
import axios from "axios";

function App() {
  const [results, setResults] = useState([]);
  const [searchParam, setSearchparam] = useState("");

  const fetchData = async (event) => {
    event.preventDefault();
    const response = await axios.get(
      `https://hn.algolia.com/api/v1/search?query=${searchParam}`
    );
    console.log(response);
    setResults(response.data.hits);
    setSearchparam("");
  };

  const handleChange = (event) => {
    setSearchparam(event.target.value);
  };

  const clearField = () => {
    setSearchparam("");
  };

  return (
    <>
      <form onSubmit={fetchData}>
        <input type="text" value={searchParam} onChange={handleChange} />
        <button type="submit">Fetch results</button>
        <button type="button" onClick={clearField}>
          Clear
        </button>
      </form>
      <h2>Search results</h2>
      <ul>
        {results.map((item, idx) => {
          if (!item.url) {
            return "";
          }
          return (
            <li key={idx}>
              <a target="_blank" rel="noreferrer" href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
