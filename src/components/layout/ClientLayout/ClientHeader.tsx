import { useGetUser } from '@/logic/getUserData';
import {
	Avatar,
	Button,
	Container,
	Divider,
	Header,
	Menu,
	Text,
	UnstyledButton,
} from '@mantine/core';
import Link from 'next/link';
import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { MdManageAccounts, MdOpenInNew } from 'react-icons/md';
import { TbLayoutGrid, TbLogout } from 'react-icons/tb';

const ClientHeader: React.FC<{}> = () => {
	const { user } = useGetUser();
	const scaleY = {
		in: { opacity: 1, transform: 'scaleY(1)' },
		out: { opacity: 0, transform: 'scaleY(0)' },
		common: { transformOrigin: 'top' },
		transitionProperty: 'transform, opacity',
	};
	return (
		<Header height={60} withBorder={false} py={10}>
			<Container size='lg' px='xs'>
				<div className='grid grid-cols-3'>
					<div>
						<Text fz={25} fw={700} color='teal'>
							Travelities
						</Text>
					</div>
					<div className='flex justify-between items-center'>
						<UnstyledButton color='#333333' component={Link} href='/' fw={500}>
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

						{!user && (
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
						)}

						{user && (
							<Menu shadow='md' width={200}>
								<Menu.Target>
									<Avatar
										className='cursor-pointer capitalize'
										size='md'
										color='teal'
										radius='xl'
									>
										{user?.email.slice(0, 2)}
									</Avatar>
								</Menu.Target>

								<Menu.Dropdown>
									<div className='p-2 pb-0'>
										<Text size='md' color='#000' className='capitalize'>
											{user?.email?.split('@')[0]}
										</Text>
										<Text size='sm' color='gray'>
											{user?.email}
										</Text>
									</div>
									<Divider my='sm' />
									<Menu.Item
										component={Link}
										href='/my_account/profile_settings'
										icon={<MdManageAccounts size={18} />}
									>
										Profile Settings
									</Menu.Item>
									<Menu.Item icon={<TbLayoutGrid size={18} />}>
										Admin Dashboard
									</Menu.Item>
									<Menu.Item color='red' icon={<TbLogout size={18} />}>
										Logout
									</Menu.Item>
								</Menu.Dropdown>
							</Menu>
						)}
					</div>
				</div>
			</Container>
		</Header>
	);
};

export default ClientHeader;
