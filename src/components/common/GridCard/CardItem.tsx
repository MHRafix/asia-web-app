import { Box, Button, Flex, Rating, Space, Text, Title } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { MdLocationPin } from 'react-icons/md';
import CountDownTimer from './CountDownTimer';

const CardItem: React.FC<{}> = () => {
	return (
		<Box className=' bg-white relative rounded-lg grid'>
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
						<Text color='cyan' size='xs'>
							<Rating
								size='xs'
								color='cyan'
								value={4.5}
								fractions={2}
								readOnly
							/>
						</Text>
					</Flex>
				</Flex>
				<Space h={10} />

				<CountDownTimer countdownTimestampMs={1675000324013} />
				<Flex justify='flex-end'>
					<Button
						component={Link}
						href={`/tour-packages/45878787878`}
						sx={{
							letterSpacing: '1px',
						}}
						className='absolute -bottom-6'
						fw={400}
						radius='md'
						size='sm'
						color='pink'
						rightIcon={<FiArrowUpRight size={20} />}
					>
						Learn more...
					</Button>
				</Flex>
			</div>
		</Box>
	);
};

export default CardItem;
