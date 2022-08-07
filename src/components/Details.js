import React from 'react';
import SearchBar from './SearchBar';
import today from './Date';
import WeatherCard from './WeatherCard';
import Hour from './Hour';
import PropTypes from 'prop-types';

const Details = ({ fetchWeather, weather }) => {
	return (
		<div className='flex flex-col justify-evenly w-full  bg-green-300 border-white-l sm:border-4 sm:w-4/5 sm:h-[95%] sm:rounded-3xl sm:shadow-2xl sm:m-auto lg:w-3/5 2xl:w-2/5'>
			<div className='flex items-center justify-around '>
				<h1 className='inline-block text-green-900 text-l font-bold'>
					Weather App
				</h1>
				<SearchBar fetchWeather={fetchWeather} />
			</div>
			<div className='text-center font-bold mt-5'>
				<span className='px-10'>{weather.location.name}</span>
				<span className='px-10'>{today}</span>
			</div>
			<WeatherCard index='0' day={'Now'} weather={weather} />
			<Hour weather={weather} />
			<WeatherCard index='1' day={'Tommorow'} weather={weather} />
			<WeatherCard index='2' day={'After tommorow'} weather={weather} />
			<p className='text-center text-sm'>© Łukasz Knapik</p>
		</div>
	);
};

Details.propTypes = {
	fetchWeather: PropTypes.func,
	weather: PropTypes.object,
};

export default Details;
