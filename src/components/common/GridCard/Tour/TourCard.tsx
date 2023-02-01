import {
	Badge,
	Box,
	Button,
	Flex,
	Rating,
	Space,
	Text,
	Title,
} from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { MdLocationPin } from 'react-icons/md';
import { TbBed, TbBus } from 'react-icons/tb';
import { TiPlaneOutline } from 'react-icons/ti';
import CountDownTimer from './CountDownTimer';

const TourCard: React.FC<{}> = () => {
	return (
		<Box className=' bg-white relative rounded-lg grid drop-shadow-lg'>
			<div>
				<Image
					src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPalFmzItiv41uwG0LGteZ-243tFftPPUb1xfU8MQNo-iEOpBBT_Kflw56iuun22IgT-M&usqp=CAU'
					alt='card image'
					className='rounded-t-lg'
					width={268}
					height={120}
				/>
				<Flex gap={10} className='absolute top-2 left-2'>
					<button>
						<Badge
							className='hover:bg-teal-600'
							variant='filled'
							color='teal'
							radius='md'
							size='md'
							py={18}
						>
							<TiPlaneOutline size={18} />
						</Badge>
					</button>
					<button>
						<Badge
							className='hover:bg-pink-700'
							variant='filled'
							color='pink'
							radius='md'
							size='md'
							py={18}
						>
							<TbBus size={18} />
						</Badge>{' '}
					</button>
					<button>
						<Badge
							className='hover:bg-fuchsia-700'
							variant='filled'
							color='grape'
							radius='md'
							size='md'
							py={18}
						>
							<TbBed size={18} />
						</Badge>
					</button>
				</Flex>
			</div>

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

export default TourCard;
