import ProfileDetails from '@/components/custom/MyAccount/ProfileSettings/ProfileDetails';
import ProfileUpdateForm from '@/components/custom/MyAccount/ProfileSettings/ProfileUpdateForm';
import ClientAppLayout from '@/components/layout/ClientLayout/ClientAppLayout';
import { useGetUser } from '@/logic/getUserData';
import { Container } from '@mantine/core';
import React from 'react';

const ProfileSettings: React.FC<{}> = () => {
	const { user } = useGetUser();

	return (
		<ClientAppLayout backIcon={true}>
			<Container size='lg' p='sm'>
				<div className='flex items-center '>
					<div className='sm:w-10/12 md:w-7/12 lg:w-5/12 mx-auto grid gap-5'>
						<ProfileDetails />
						<ProfileUpdateForm />
					</div>
				</div>
			</Container>
		</ClientAppLayout>
	);
};

export default ProfileSettings;
