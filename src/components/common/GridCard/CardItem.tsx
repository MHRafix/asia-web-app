import { Box, Button, Flex, Space, Text, Title } from '@mantine/core';
import Image from 'next/image';
import React from 'react';
import { BsFillStarFill } from 'react-icons/bs';
import { FiArrowUpRight, FiStar } from 'react-icons/fi';
import { MdLocationPin } from 'react-icons/md';

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
						<Text color='cyan' size='sm'>
						rattting
						</Text>
					</Flex>
				</Flex>

				<Space h={10} />

				<Box
					bg='cyan'
					className='px-5 py-2 border-solid border-t-[1px] border-t-slate-100 mb-2 rounded-full shadow-lg shadow-cyan-200'
				>
					<Flex justify='space-between' align='center'>
						<div className='bg-transparent text-md font-semibold text-white'>
							<div>05</div>
						</div>
						<div className='bg-transparent text-md font-semibold text-white'>
							:
						</div>
						<div className='bg-transparent text-md font-semibold text-white'>
							<div>12</div>
						</div>
						<div className='bg-transparent text-md font-semibold text-white'>
							:
						</div>
						<div className='bg-transparent text-md font-semibold text-white'>
							<div>59</div>
						</div>
						<div className='bg-transparent text-md font-semibold text-white'>
							:
						</div>
						<div className='bg-transparent text-md font-semibold text-white'>
							<div>00</div>
						</div>
					</Flex>
					<Flex justify='space-between' align='center'>
						<div className='text-white text-xs font-light'>Days</div>
						<div className='text-white text-xs font-light'>Hrs</div>
						<div className='text-white text-xs font-light'>Min</div>
						<div className='text-white text-xs font-light'>Sec</div>
					</Flex>
				</Box>
				<Flex justify='flex-end'>
					<Button
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
