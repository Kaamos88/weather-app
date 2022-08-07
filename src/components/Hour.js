import React from 'react';
import { RiDropLine } from 'react-icons/ri';
import { RiDropFill } from 'react-icons/ri';
import { RiContrastDrop2Fill } from 'react-icons/ri';
import PropTypes from 'prop-types';

const Hour = ({ weather }) => {
	const hourConditions = weather.forecast.forecastday[0].hour;

	const hours = hourConditions.map((hour, index) => {
		let icon;
		if (hour.chance_of_rain <= 50 && hour.chance_of_rain >= 25) {
			icon = <RiContrastDrop2Fill className=' text-blue-900 text-xl' />;
		} else if (hour.chance_of_rain >= 50) {
			icon = <RiDropFill className=' text-blue-900 text-xl' />;
		} else {
			icon = <RiDropLine className=' text-blue-900 text-xl' />;
		}

		return (
			<div
				key={index}
				className='flex flex-col items-center shrink-0 text-sm pt-2 border-x-2 snap-start'
			>
				<p>{hour.time.slice(11)}</p>
				<img alt='condition-icon' className='w-2/3' src={hour.condition.icon} />
				<p>{Math.trunc(hour.temp_c)}⁰C</p>
				<div className='flex pt-3'>
					{icon}
					<span>{hour.chance_of_rain}%</span>
				</div>
			</div>
		);
	});

	return (
		<div className='bg-white h-1/6 w-5/6 mx-auto rounded-3xl shadow-xl overflow-hidden'>
			<div className='flex overflow-x-auto scroll-smooth h-full curso pointer snap-x'>
				{hours}
			</div>
		</div>
	);
};

Hour.propTypes = {
	weather: PropTypes.object,
};

export default Hour;
