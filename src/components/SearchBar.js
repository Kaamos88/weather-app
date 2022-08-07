import React, { useState } from "react";


const SearchBar = ({fetchWeather}) => {
  const [term, setTerm] = useState('');
  const onSearchSubmit = (event) => {
    event.preventDefault();
    fetchWeather(term)
    setTerm('');
  };
return (
  <div>
    <form onSubmit={onSearchSubmit}>
      <input className="rounded-xl mx-auto px-4 shadow-sm shadow-green-900 focus:outline-green-900 " type="text" value={term} onChange={e => setTerm(e.target.value)} />
    </form>
  </div>
);
}

export default SearchBar;