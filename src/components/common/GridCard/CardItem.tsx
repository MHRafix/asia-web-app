import { Flex } from '@mantine/core';
import Image from 'next/image';
import React from 'react';
import CardImg from '../../../../public/assets/Banner/seassonBanner.webp';

const CardItem: React.FC<{}> = () => {
	return (
		<Flex
			className='bg-white rounded-md  drop-shadow-2xl'
			align='center'
			gap={10}
		>
			<Image src={CardImg} alt='card image' width={100} height={140} />

			<div className='card-content'>content goes to here</div>
		</Flex>
	);
};

export default CardItem;
