import { useGetUser } from '@/logic/getUserData';
import {
	Avatar,
	Box,
	Button,
	Flex,
	Group,
	Indicator,
	Input,
	Title,
} from '@mantine/core';
import React from 'react';
import { FaEnvelope, FaMobile, FaUser } from 'react-icons/fa';
import 'react-phone-number-input/style.css';

const ProfileDetails: React.FC<{}> = () => {
	const { user } = useGetUser();

	return (
		<div className='bg-white drop-shadow-xl p-5 rounded-md'>
			<Group position='center'>
				<Indicator
					dot
					inline
					size={15}
					offset={7}
					position='top-end'
					color='teal'
				>
					<Avatar
						className='cursor-pointer capitalize mx-auto'
						size='xl'
						color='teal'
						radius='xl'
					>
						RA
					</Avatar>
				</Indicator>
			</Group>

			<Flex justify='space-between' align='center'>
				<Title order={4} color='gray' mt={10} ff='Poppins' fw={600}>
					Profile Details
				</Title>
				<Button color='red' radius='md' size='sm'>
					Logout
				</Button>
			</Flex>
			<Box>
				<Input
					ml={-7}
					mb={-5}
					size='md'
					readOnly
					icon={<FaUser color='#15AABF' size={25} opacity={1} />}
					variant='unstyled'
					value={user?.email.split('@')[0]}
					color={'#000'}
				/>
				<Input
					ml={-7}
					my={-5}
					size='md'
					readOnly
					icon={<FaEnvelope color='#D6336C' size={25} opacity={1} />}
					variant='unstyled'
					value={user?.email}
					color={'#000'}
				/>
				<Input
					ml={-7}
					my={-5}
					size='md'
					readOnly
					icon={<FaMobile color='#7950F2' size={25} opacity={1} />}
					variant='unstyled'
					value={user?.phone || '+880 1*** ******'}
					color={'#000'}
				/>
			</Box>
		</div>
	);
};

export default ProfileDetails;
