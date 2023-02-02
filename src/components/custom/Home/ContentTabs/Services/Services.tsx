import ServiceCard from '@/components/common/GridCard/Service/ServiceCard';
import React from 'react';

const Services: React.FC<{}> = () => {
	return (
		<div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10 '>
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
