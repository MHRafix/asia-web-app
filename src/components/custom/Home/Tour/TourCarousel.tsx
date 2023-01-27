import TourCard from '@/components/common/GridCard/CardItem';
import React from 'react';

const TourCarousel: React.FC<{}> = () => {
	return (
		<div className='grid grid-cols-4 gap-5'>
			<TourCard />
			<TourCard />
			<TourCard />
			<TourCard />
		</div>
	);
};

export default TourCarousel;
