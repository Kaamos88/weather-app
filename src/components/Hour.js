import React from 'react';
import PropTypes from 'prop-types';
import HourListElement from './HourListElement';

const Hour = ({ weather }) => {
	const time = new Date();
	const hour = time.getHours();

	const todayConditions = weather.forecast.forecastday[0].hour;
	const forecastList = weather.forecast.forecastday[1].hour;
	const a = todayConditions.slice(hour + 1);
	const b = forecastList.slice(0, hour + 1);

	const hours = a.map((hour, index) => {
		return <HourListElement key={index} hour={hour} index={index} />;
	});
	const hoursB = b.map((hour, index) => {
		return <HourListElement key={index} hour={hour} index={index} />;
	});

	return (
		<div className='bg-white h-1/6 w-5/6 mx-auto rounded-3xl shadow-xl overflow-hidden'>
			<div className='flex overflow-x-auto scroll-smooth h-full'>
				{hours}
				{hoursB}
			</div>
		</div>
	);
};

Hour.propTypes = {
	weather: PropTypes.object,
};

export default Hour;
