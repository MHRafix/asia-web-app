import { useGetUser } from '@/logic/getUserData';
import { Avatar, Text, Title } from '@mantine/core';
import React from 'react';

const ProfileDetails: React.FC<{}> = () => {
	const { user } = useGetUser();

	return (
		<div className='bg-white drop-shadow-xl p-5 rounded-md'>
			<Avatar
				className='cursor-pointer capitalize mx-auto'
				size='xl'
				color='teal'
				radius='xl'
			>
				RA
			</Avatar>

			<Title order={5} color='gray' mt={10} ff='Poppins' fw={600}>
				Profile Details
			</Title>
			<Text fz={15} className='capitalize'>
				{user?.email.split('@')[0]}
			</Text>
			<Text fz={15}>{user?.email}</Text>
			<Text fz={15}>+880 {user?.phone || '16118 59722'}</Text>
		</div>
	);
};

export default ProfileDetails;
