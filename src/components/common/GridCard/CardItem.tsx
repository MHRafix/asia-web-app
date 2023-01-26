import { Box, Button, Flex, Title } from '@mantine/core';
import Image from 'next/image';
import React from 'react';
import { BiArrowToRight } from 'react-icons/bi';

const CardItem: React.FC<{}> = () => {
	return (
		<Box className='h-[188px] bg-white rounded-lg  drop-shadow-2xl grid grid-flow-row grid-rows-2'>
			<div className='card-content p-3'>
				<Title order={5}>This is title</Title>
			</div>
			<Flex>
				<div className=''>
					<Image
						src='https://gozayaan.sgp1.digitaloceanspaces.com/media/discount_images/campaign_BSTAY0601_PCLC73e.jpg'
						alt='card image'
						className='relative right-5 rounded-lg'
						width={160}
						height={120}
					/>
				</div>
				<Flex className=''>
					<Button color='pink' rightIcon={<BiArrowToRight size={16} />}>
						Learn More
					</Button>
				</Flex>
			</Flex>
		</Box>
	);
};

export default CardItem;
