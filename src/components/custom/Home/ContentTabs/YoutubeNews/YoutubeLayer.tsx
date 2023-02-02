import VideoCard from '@/components/common/GridCard/YoutubeNews/VideoCard';
import React from 'react';

const YoutubeLayer: React.FC<{}> = () => {
	return (
		<div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5'>
			<VideoCard />
			<VideoCard />
			<VideoCard />
			<VideoCard />
			<VideoCard />
			<VideoCard />
		</div>
	);
};

export default YoutubeLayer;
