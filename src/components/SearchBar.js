import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ fetchWeather }) => {
	const [term, setTerm] = useState('');
	const onSearchSubmit = (event) => {
		event.preventDefault();
		fetchWeather(term);
		setTerm('');
	};
	return (
		<div>
			<form onSubmit={onSearchSubmit}>
				<input
					className='rounded-xl mx-auto px-4 shadow-sm shadow-green-900 focus:outline-green-900 '
					type='text'
					value={term}
					onChange={(e) => setTerm(e.target.value)}
				/>
			</form>
		</div>
	);
};

SearchBar.propTypes = {
	fetchWeather: PropTypes.func,
};

export default SearchBar;
