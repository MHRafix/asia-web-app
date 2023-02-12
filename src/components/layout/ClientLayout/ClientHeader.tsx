import { supabase } from '@/lib/supabse/supabseClient';
import { useGetUser } from '@/logic/getUserData';
import {
	ActionIcon,
	Avatar,
	Button,
	Container,
	Divider,
	Flex,
	Header,
	Menu,
	Text,
	UnstyledButton,
} from '@mantine/core';
import { openConfirmModal } from '@mantine/modals';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import {
	MdManageAccounts,
	MdOpenInNew,
	MdOutlineArrowBackIosNew,
} from 'react-icons/md';
import { TbLayoutGrid, TbLogout } from 'react-icons/tb';

const ClientHeader: React.FC<{ backIcon?: boolean }> = ({ backIcon }) => {
	const { user } = useGetUser();
	const router = useRouter();

	// signout action function
	const signOut = async () => {
		const { error } = await supabase.auth.signOut();

		if (!error) {
			router?.push('/auth/magic_login');
		}
	};

	return (
		<Header height={60} bg='#FAFAFA' withBorder={false} py={10}>
			<Container size='lg' px='xs'>
				<div className='grid grid-cols-3'>
					<Flex align='center' gap={10}>
						{backIcon && (
							<ActionIcon
								onClick={() => Router.back()}
								size={40}
								radius='xl'
								variant='light'
								className='!bg-slate-100 hover:!bg-slate-200 hover:duration-300'
							>
								<MdOutlineArrowBackIosNew size={20} color='#000' />
							</ActionIcon>
						)}
						<Text fz={25} fw={700} color='teal'>
							Travelities
						</Text>
					</Flex>
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
					<div className='flex justify-end items-center gap-3'>
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
										size={42}
										color='teal'
										radius='xl'
									>
										{user?.email.slice(0, 1)}
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
									<Menu.Item
										color='red'
										icon={<TbLogout size={18} />}
										onClick={() =>
											openConfirmModal({
												title: 'Confirm your logout action',
												centered: true,
												children: (
													<Text size='sm'>
														Are you sure you want to logout.
													</Text>
												),
												labels: {
													confirm: 'Logout',
													cancel: 'No, Let me logged in',
												},
												confirmProps: { color: 'red' },
												onCancel: () => {},
												onConfirm: () => signOut(),
											})
										}
									>
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
