import React from 'react';
import PropTypes from 'prop-types';
import { RiDropLine } from 'react-icons/ri';
import { RiDropFill } from 'react-icons/ri';
import { RiContrastDrop2Fill } from 'react-icons/ri';

const HourListElement = ({ hour, index }) => {
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
			className='flex flex-col items-center shrink-0 text-sm pt-2 border-x-2 snap-start card'
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
};

HourListElement.propTypes = {
	hour: PropTypes.object,
	index: PropTypes.number,
};

export default HourListElement;
