import Image from 'next/image';
import React from 'react';
import Banner from '../../../../../public/assets/Banner/seassonBanner.webp';

const SeassionBanner: React.FC<{}> = () => {
	return (
		<div>
			<Image className='rounded-2xl' src={Banner} alt='Banner' />
		</div>
	);
};

export default SeassionBanner;
