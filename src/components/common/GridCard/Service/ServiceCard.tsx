import { Box, Button, Flex, Group, Text, ThemeIcon } from '@mantine/core';
import Link from 'next/link';
import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { TiPlaneOutline } from 'react-icons/ti';

const ServiceCard: React.FC<{}> = () => {
	return (
		<Box className=' bg-white relative rounded-lg grid p-3 drop-shadow-lg'>
			<Flex justify='center'>
				<ThemeIcon size={60} color='teal' radius='xl' mb={8}>
					<TiPlaneOutline size={25} />
				</ThemeIcon>
			</Flex>
			<Group position='apart' mb='xs'>
				<Text weight={500}>Norway Fjord Adventures</Text>
			</Group>

			<Text size='sm' color='dimmed'>
				With Fjord Tours you can explore more of the magical fjord landscapes
			</Text>

			<Flex justify='flex-end'>
				<Button
					component={Link}
					href={`/services/45878787878`}
					sx={{
						letterSpacing: '1px',
					}}
					className='absolute -bottom-7'
					fw={400}
					radius='md'
					size='sm'
					color='pink'
					rightIcon={<FiArrowUpRight size={20} />}
				>
					Learn more...
				</Button>
			</Flex>
		</Box>
	);
};

export default ServiceCard;
