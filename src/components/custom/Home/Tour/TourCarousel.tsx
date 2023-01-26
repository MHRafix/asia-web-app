import TourCard from '@/components/common/GridCard/CardItem';
import React from 'react';

const TourCarousel: React.FC<{}> = () => {
	return (
		<div className='grid grid-cols-3 gap-10'>
			<TourCard />
			<TourCard />
			<TourCard />
		</div>
	);
};

export default TourCarousel;