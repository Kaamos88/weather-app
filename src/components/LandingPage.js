import React from 'react';
import SearchBar from './SearchBar';
import { IoLocationSharp } from 'react-icons/io5';
import PropTypes from 'prop-types';

const LandingPage = ({ fetchWeather }) => {
	return (
		<div className='w-full text-center rounded-xl shadow-2xl bg-green-500 sm:border-4 sm:w-4/5 sm:h-[85%] sm:rounded-3xl sm:shadow-2xl sm:m-auto lg:w-3/5 2xl:w-2/5'>
			<div className='relative inset-y-1/4'>
				<h1 className='text-4xl font-bold'>Weather App</h1>
				<p className='pt-10 pb-5'>Search your location</p>
				<SearchBar fetchWeather={fetchWeather} />
				<p className='pt-5'>Or</p>
				<p className='pt-3'>Let us locate you :) </p>
				<div className='mx-auto pt-5 hover:cursor-pointer'>
					<IoLocationSharp
						onClick={() => alert('Not woking yet :(')}
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
