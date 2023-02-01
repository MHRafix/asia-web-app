import { RestTimeCalculator } from '@/utils/dayjsTimer/restTime.calculator';
import React from 'react';

const CountDownTimer: React.FC<{ countdownTimestampMs: any }> = ({
	countdownTimestampMs,
}) => {
	const { remainingTime } = RestTimeCalculator(countdownTimestampMs);

	return (
		<>
			<div className='rest_time_wrapper'>
				<div className='time_title'>
					<div className='font-semibold text-xl text-white'>
						{remainingTime.days}
					</div>
					<div className='font-medium text-[12px] text-white uppercase'>
						dys
					</div>
				</div>
				<div className='timer_devider'>:</div>
				<div className='time_title'>
					<div className='font-semibold text-xl text-white'>
						{remainingTime.hours}
					</div>
					<div className='font-medium text-[12px] text-white uppercase'>
						hrs
					</div>
				</div>
				<div className='timer_devider'>:</div>
				<div className='time_title'>
					<div className='font-semibold text-xl text-white'>
						{remainingTime.minutes}
					</div>
					<div className='font-medium text-[12px] text-white uppercase'>
						min
					</div>
				</div>
				<div className='timer_devider'>:</div>
				<div className='time_title'>
					<div className='font-semibold text-xl text-white'>
						{remainingTime.seconds}
					</div>
					<div className='font-medium text-[12px] text-white uppercase'>
						sec
					</div>
				</div>
			</div>
		</>
	);
};

export default CountDownTimer;
