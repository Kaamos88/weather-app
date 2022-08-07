import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const WeatherCard = ({ index, weather, day }) => {
	const [temp, setTemp] = useState('');

	useEffect(() => {
		setTemp(conditions.celcius);
	}, [weather]);

	const currentConditions = {
		celcius: Math.trunc(weather.current.temp_c),
		farenheit: Math.trunc(weather.current.temp_f),
		rain: 'Rain: ' + weather.current.precip_mm + 'mm',
		humidity: 'Humidity: ' + weather.current.humidity + '%',
		wind: 'Wind: ' + weather.current.wind_kph + ' km/h',
		uv: 'UV level: ' + weather.current.uv,
		icon: weather.current.condition.icon,
		text: weather.current.condition.text,
	};

	const forecastConditions = {
		celcius: Math.trunc(weather.forecast.forecastday[index].day.avgtemp_c),
		farenheit: Math.trunc(weather.forecast.forecastday[index].day.avgtemp_f),
		rain:
			'Rain: ' +
			weather.forecast.forecastday[index].day.daily_will_it_rain +
			'mm',
		humidity:
			'Humidity: ' + weather.forecast.forecastday[index].day.avghumidity + '%',
		wind:
			'Wind: ' + weather.forecast.forecastday[index].day.avgvis_km + ' km/h',
		uv: 'UV level: ' + weather.forecast.forecastday[index].day.uv,
		icon: weather.forecast.forecastday[index].day.condition.icon,
		text: weather.forecast.forecastday[index].day.condition.text,
	};

	const conditions = index === 0 ? currentConditions : forecastConditions;

	return (
		<div className='flex justify-between bg-white h-1/6 w-5/6 mx-auto rounded-3xl shadow-xl overflow-hidden'>
			<h4 className='absolute inset-x-0 pt-1 text-center'>{day}</h4>
			<div className='flex flex-col justify-evenly w-1/3 h-full text-center'>
				<img alt='condition-icon' className='mx-auto' src={conditions.icon} />
				<p>{conditions.text}</p>
			</div>
			<div className='text-center self-center '>
				<p className='text-5xl pb-3'>{temp}</p>
				<span
					className='cursor-pointer'
					onClick={() => {
						setTemp(conditions.celcius);
					}}
				>
					⁰C
				</span>
				<span> | </span>
				<span
					className='cursor-pointer'
					onClick={() => {
						setTemp(conditions.farenheit);
					}}
				>
					⁰F
				</span>
			</div>
			<div className='text-center text-sm self-center w-1/3 pr-2'>
				<p>{conditions.rain}</p>
				<p>{conditions.humidity}</p>
				<p>{conditions.wind}</p>
				<p>{conditions.uv}</p>
			</div>
		</div>
	);
};

WeatherCard.propTypes = {
	index: PropTypes.number,
	weather: PropTypes.array,
	day: PropTypes.string,
};

export default WeatherCard;
