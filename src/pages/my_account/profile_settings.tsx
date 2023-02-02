import ClientAppLayout from '@/components/layout/ClientLayout/ClientAppLayout';
import { Container } from '@mantine/core';
import React from 'react';

const ProfileSettings: React.FC<{}> = () => {
	return (
		<ClientAppLayout>
			<Container size='lg' p='sm'>
				This is profile settings page
			</Container>
		</ClientAppLayout>
	);
};

export default ProfileSettings;
