import { Box, Space, Tabs, Title } from '@mantine/core';
import React, { useState } from 'react';
import { HiOutlineViewGrid } from 'react-icons/hi';
import { TbBrandAsana } from 'react-icons/tb';
import { TiPlaneOutline } from 'react-icons/ti';
import Services from './Services/Services';
import TourCarousel from './Tour/TourCarousel';
import YoutubeLayer from './YoutubeNews/YoutubeLayer';

const ContentTabsMain: React.FC<{}> = () => {
	const [title, setTitle] = useState<string>('Upcomming Tours');

	return (
		<Tabs color='cyan' variant='pills' radius='xl' defaultValue='tour'>
			<Box
				sx={{
					'@media (min-width: 755px)': {
						display: 'flex',
					},

					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<Title order={2} color='cyan' sx={{ fontFamily: 'Poppins' }}>
					{title}
				</Title>
				<Space h={20} />
				<Tabs.List className=' bg-white  md:px-4 xs:py-1 md:py-2 rounded-full drop-shadow !justify-evenly'>
					<Tabs.Tab
						py={8}
						className='md:px-5'
						value='tour'
						icon={<TiPlaneOutline size={16} />}
						onClick={() => setTitle('Upcomming Tours')}
					>
						Tour
					</Tabs.Tab>
					<Tabs.Tab
						py={8}
						className='md:px-5'
						value='services'
						icon={<TbBrandAsana size={16} />}
						onClick={() => setTitle('Our Services')}
					>
						Services
					</Tabs.Tab>
					<Tabs.Tab
						py={8}
						className='md:px-5'
						value='news'
						icon={<HiOutlineViewGrid size={16} />}
						onClick={() => setTitle('Latest News')}
					>
						News
					</Tabs.Tab>
				</Tabs.List>
			</Box>

			<Tabs.Panel py={25} value='tour' pt='xs'>
				<TourCarousel />
			</Tabs.Panel>

			<Tabs.Panel py={25} value='services' pt='xs'>
				<Services />
			</Tabs.Panel>
			<Tabs.Panel py={25} value='news' pt='xs'>
				<YoutubeLayer />
			</Tabs.Panel>
		</Tabs>
	);
};

export default ContentTabsMain;
