import { useGetUser } from '@/logic/getUserData';
import { AppShell } from '@mantine/core';
import React from 'react';
import ClientHeader from './ClientHeader';

const ClientAppLayout: React.FC<{ children: JSX.Element }> = ({ children }) => {
	const { user } = useGetUser();

	return (
		<AppShell
			header={<ClientHeader />}
			styles={(theme) => ({
				main: {
					width: '100%',
					backgroundColor:
						theme.colorScheme === 'dark'
							? theme.colors.dark[8]
							: theme.colors.gray[0],
					padding: '0px',
				},
			})}
		>
			{children}
		</AppShell>
	);
};

export default ClientAppLayout;
