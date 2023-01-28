import { Box, Space, Tabs, Title } from '@mantine/core';
import React from 'react';
import { GrServices } from 'react-icons/gr';
import { SiYourtraveldottv } from 'react-icons/si';
import { TbLayoutGrid } from 'react-icons/tb';
import TourCarousel from '../Tour/TourCarousel';

const ContentTabsMain: React.FC<{}> = () => {
	return (
		<Tabs color='cyan' variant='pills' radius='xl' defaultValue='gallery'>
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
					Upcoming Deals
				</Title>
				<Space h={20} />
				<Tabs.List className=' bg-white px-4 py-2 rounded-full drop-shadow'>
					<Tabs.Tab
						py={8}
						px={20}
						value='gallery'
						icon={<TbLayoutGrid size={16} />}
					>
						All
					</Tabs.Tab>
					<Tabs.Tab
						py={8}
						px={20}
						value='messages'
						icon={<SiYourtraveldottv size={16} />}
					>
						Tour
					</Tabs.Tab>
					<Tabs.Tab
						py={8}
						px={20}
						value='settings'
						icon={<GrServices color='red' size={16} />}
					>
						Services
					</Tabs.Tab>
				</Tabs.List>
			</Box>

			<Tabs.Panel py={25} value='gallery' pt='xs'>
				Gallery tab content
			</Tabs.Panel>

			<Tabs.Panel py={25} value='messages' pt='xs'>
				<TourCarousel />
			</Tabs.Panel>

			<Tabs.Panel py={25} value='settings' pt='xs'>
				Settings tab content
			</Tabs.Panel>
		</Tabs>
	);
};

export default ContentTabsMain;
