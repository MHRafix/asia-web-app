import { Box, Flex, Space, Text, Title } from '@mantine/core';
import Image from 'next/image';
import React from 'react';
import { BsFillStarFill } from 'react-icons/bs';
import { FiStar } from 'react-icons/fi';
import { MdLocationPin } from 'react-icons/md';
import Rating from 'react-rating';

const CardItem: React.FC<{}> = () => {
	return (
		<Box className=' bg-white rounded-lg  drop-shadow-2xl grid'>
			<div className=''>
				<Image
					src='https://gozayaan.sgp1.digitaloceanspaces.com/media/discount_images/campaign_INTSTAY0223.jpg'
					alt='card image'
					className='rounded-t-lg'
					width={265}
					height={120}
				/>
			</div>
			{/*
			
			<Space h={10} /> 

			*/}

			<div className='p-2'>
				<Flex justify='space-between' align='center'>
					<Title order={6} ff='Poppins, sans-serif'>
						Marine drive
					</Title>

					<div className='text-sm font-semibold'>$ 120</div>
				</Flex>

				<Flex justify='space-between' align='center'>
					<Flex gap={2} align='center'>
						<MdLocationPin size={16} color='#FF597B' />
						<span className='text-xs text-slate-400'>Canada</span>
					</Flex>
					<Flex>
						<Text color='cyan' size='sm'>
							<Rating
								initialRating={4.5}
								readonly
								emptySymbol={<FiStar />}
								fullSymbol={<BsFillStarFill />}
							/>
						</Text>
					</Flex>
				</Flex>

				<Space h={10} />

				<Box className='border-solid border-t-[1px] border-t-slate-100'>
					aaaaaaaaaaaa
				</Box>
			</div>
		</Box>
	);
};

export default CardItem;
