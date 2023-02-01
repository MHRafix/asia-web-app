import { useGetUser } from '@/logic/getUserData';
import {
	AppShell,
	Avatar,
	Button,
	Container,
	Header,
	Menu,
	Text,
	UnstyledButton,
} from '@mantine/core';
import Link from 'next/link';
import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { MdOpenInNew } from 'react-icons/md';

const ClientLayout: React.FC<{ children: JSX.Element }> = ({ children }) => {
	const { user } = useGetUser();

	return (
		<AppShell
			header={
				<Header height={60} bg='#fff' withBorder={false} py={10}>
					<Container size='lg' px='xs'>
						<div className='grid grid-cols-3'>
							<div>
								<Text fz={25} fw={700} color='teal'>
									Travelities
								</Text>
							</div>
							<div className='flex justify-between items-center'>
								<UnstyledButton
									color='#333333'
									component={Link}
									href='/'
									fw={500}
								>
									Home
								</UnstyledButton>
								<UnstyledButton
									color='#333333'
									component={Link}
									href='/explore'
									fw={500}
								>
									Explore
								</UnstyledButton>
								<UnstyledButton
									color='#333333'
									component={Link}
									href='/trips'
									fw={500}
								>
									Trips
								</UnstyledButton>
								<UnstyledButton
									color='#333333'
									component={Link}
									href='/news'
									fw={500}
								>
									News Update
								</UnstyledButton>
							</div>
							<div className='flex justify-end gap-3'>
								<Button
									rightIcon={<MdOpenInNew size={18} />}
									fw={400}
									color='teal'
									radius={100}
								>
									Request a trip
								</Button>
								{/* <Button fw={400} color='pink' radius={100}>
									Appointment
								</Button> */}
								<Button
									component={Link}
									href='/auth/magic_login'
									rightIcon={<FiLogIn size={18} />}
									fw={400}
									color='pink'
									radius={100}
								>
									Sign in
								</Button>
								{!user && (
									<Menu shadow='md' width={200}>
										{' '}
										<Menu.Target>
											<Avatar
												className='cursor-pointer'
												size='md'
												color='teal'
												radius='xl'
											>
												{user?.email.slice(0, 2)}
											</Avatar>
										</Menu.Target>
										<Menu.Dropdown>
											<Menu.Label>Profile action</Menu.Label>
											<Menu.Item>Profile Settings</Menu.Item>
											<Menu.Item>Admin Dashboard</Menu.Item>
											<Menu.Item color='red'>Logout</Menu.Item>
										</Menu.Dropdown>
									</Menu>
								)}
							</div>
						</div>
					</Container>
				</Header>
			}
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

export default ClientLayout;
