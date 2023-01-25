import { Flex, Tabs, Title } from '@mantine/core';
import { IconBackhoe, IconCar, IconLayoutGrid } from '@tabler/icons';
import React from 'react';
import TourCarousel from '../Tour/TourCarousel';

const ContentTabsMain: React.FC<{}> = () => {
	return (
		<Tabs color='cyan' variant='pills' radius='xl' defaultValue='gallery'>
			<Flex justify='space-between' align='center'>
				<Title order={2} color='cyan' sx={{ fontFamily: 'Poppins' }}>
					Hot Deals
				</Title>
				<Tabs.List className=' bg-white px-4 py-2 rounded-full drop-shadow'>
					<Tabs.Tab
						py={8}
						px={20}
						value='gallery'
						icon={<IconLayoutGrid size={16} />}
					>
						All
					</Tabs.Tab>
					<Tabs.Tab
						py={8}
						px={20}
						value='messages'
						icon={<IconCar size={16} />}
					>
						Tour
					</Tabs.Tab>
					<Tabs.Tab
						py={8}
						px={20}
						value='settings'
						icon={<IconBackhoe size={16} />}
					>
						Services
					</Tabs.Tab>
				</Tabs.List>
			</Flex>

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
