import React, { useState } from 'react';
import LandingPage from './LandingPage';
import weatherApi from './api/weatherApi';
import Details from './Details';
import Spinner from './Spinner';

const App = () => {
	const [weather, setWeather] = useState('');
	const [start, setStart] = useState(true);
	const [spin, setSpin] = useState(false);

	const fetchWeather = async (term) => {
		setSpin(true);
		try {
			const forecast = await weatherApi.get('/forecast.json', {
				params: {
					q: term,
					days: 3,
				},
			});
			setSpin(false);
			setWeather(forecast.data);
			setStart(false);
		} catch (error) {
			console.log('error', error);
			alert(
				'City not found- we only accept english names or you make typo. Try again :)'
			);
			window.location.reload();
		}
	};

	const showSpinner = spin ? (
		<div className='absolute w-full h-full flex justify-center items-center bg-green-500 z-10 opacity-90'>
			<Spinner />
		</div>
	) : (
		''
	);

	if (start) {
		return (
			<div className='flex bg-gradient-to-r from-cyan-200 to-blue-200 h-screen text-green-900'>
				{showSpinner}
				<LandingPage fetchWeather={fetchWeather} />
			</div>
		);
	}

	return (
		<div className='flex bg-gradient-to-r from-cyan-200 to-blue-200 h-screen text-green-900'>
			{showSpinner}
			<Details weather={weather} fetchWeather={fetchWeather} />
		</div>
	);
};

export default App;
