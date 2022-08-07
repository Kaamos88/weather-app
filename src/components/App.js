import React, { useState } from 'react';
import LandingPage from './LandingPage';
import weatherApi from './api/weatherApi';
import Details from './Details';

const App = () => {
	const [weather, setWeather] = useState('');
	const [start, setStart] = useState(true);

	const fetchWeather = async (term) => {
		try {
			const forecast = await weatherApi.get('/forecast.json', {
				params: {
					q: term,
					days: 3,
				},
			});

			setWeather(forecast.data);
			setStart(false);
		} catch (error) {
			console.log('error', error);
		}
	};

	if (start) {
		return (
			<div className='flex bg-gradient-to-r from-cyan-200 to-blue-200 h-screen text-green-900'>
				<LandingPage fetchWeather={fetchWeather} />
			</div>
		);
	}

	return (
		<div className='flex bg-gradient-to-r from-cyan-200 to-blue-200 h-screen text-green-900'>
			<Details weather={weather} fetchWeather={fetchWeather} />
		</div>
	);
};

export default App;
