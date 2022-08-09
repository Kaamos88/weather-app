import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import { IoLocationSharp } from 'react-icons/io5';
import PropTypes from 'prop-types';

const LandingPage = ({ fetchWeather }) => {
	const [lat, setLat] = useState('');
	const [long, setLong] = useState('');

	useEffect(() => {
		window.navigator.geolocation.getCurrentPosition(
			(position) => {
				setLat(position.coords.latitude);
				setLong(position.coords.longitude);
			},
			(err) => alert(err.message)
		);
	}, []);

	const cords = lat + ' ' + long;

	return (
		<div className='w-full text-center shadow-2xl bg-green-500 sm:border-4 sm:w-4/5 sm:h-[85%] sm:rounded-3xl sm:shadow-2xl sm:m-auto lg:w-3/5 2xl:w-2/5 custom'>
			<div className='relative inset-y-1/4'>
				<h1 className='text-4xl font-bold'>Weather App</h1>
				<p className='pt-10 pb-5'>Search your location</p>
				<SearchBar fetchWeather={fetchWeather} />
				<p className='pt-5'>Or</p>
				<p className='pt-3'>Let us locate you :) </p>
				<div className='mx-auto pt-5 hover:cursor-pointer'>
					<IoLocationSharp
						onClick={() =>
							lat ? fetchWeather(cords) : alert('accept geolocation')
						}
						className='text-4xl mx-auto hover:text-green-600'
					/>
				</div>
			</div>
		</div>
	);
};

LandingPage.propTypes = {
	fetchWeather: PropTypes.func,
};

export default LandingPage;
