import { AspectRatio, Box, Title } from '@mantine/core';
import React from 'react';

const VideoCard: React.FC<{}> = () => {
	return (
		<Box>
			<AspectRatio ratio={16 / 11}>
				<iframe
					className='rounded-lg drop-shadow-xl'
					src='https://www.youtube.com/embed/Dorf8i6lCuk'
					title='YouTube video player'
					frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowFullScreen
				/>
			</AspectRatio>
			<Title order={4} my={5} ff='Poppins' fw={500}>
				This is indian visa
			</Title>
		</Box>
	);
};

export default VideoCard;
