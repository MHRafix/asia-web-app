import ServiceCard from '@/components/common/GridCard/Service/ServiceCard';
import React from 'react';

const Services: React.FC<{}> = () => {
	return (
		<div className='grid grid-cols-4 gap-x-5 gap-y-10 '>
			<ServiceCard />
			<ServiceCard />
			<ServiceCard />
			<ServiceCard />
			<ServiceCard />
			<ServiceCard />
			<ServiceCard />
		</div>
	);
};

export default Services;
