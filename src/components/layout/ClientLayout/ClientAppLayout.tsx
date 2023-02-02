import { AppShell } from '@mantine/core';
import React from 'react';
import ClientHeader from './ClientHeader';

const ClientAppLayout: React.FC<{ children: JSX.Element }> = ({ children }) => {
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
			<main className='mt-[60px]'>{children}</main>
		</AppShell>
	);
};

export default ClientAppLayout;
