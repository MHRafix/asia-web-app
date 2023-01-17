import { IReduxUserPayload, IUser } from '@/app/api/model/user.model';
import { useAuth0 } from '@auth0/auth0-react';
import {
	AppShell,
	Avatar,
	Burger,
	Header,
	MediaQuery,
	Menu,
	Text,
	Title,
	UnstyledButton,
	useMantineTheme,
} from '@mantine/core';
import { openConfirmModal } from '@mantine/modals';
import { PropsWithChildren, useState } from 'react';
import { useSelector } from 'react-redux';
import DashboardNavbar from '../admin-components/DashboardNavbar';

const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
	const user: IUser = useSelector(
		(state: IReduxUserPayload) => state?.user?.user
	);

	const { logout } = useAuth0();
	const theme = useMantineTheme();
	const [opened, setOpened] = useState(false);

	function handleLogout(): void {
		openConfirmModal({
			title: 'Please confirm your logout action',
			children: <Text size='sm'>Are you sure that you want to logout ?</Text>,
			labels: { confirm: 'Yes', cancel: 'No' },
			onCancel: () => {
				// func here
			},
			onConfirm: () => logout(),
		});
	}

	return (
		<AppShell
			styles={{
				main: {
					background:
						theme.colorScheme === 'dark'
							? theme.colors.dark[8]
							: theme.colors.gray[0],
				},
			}}
			navbarOffsetBreakpoint='sm'
			asideOffsetBreakpoint='sm'
			navbar={<DashboardNavbar opened={opened} />}
			header={
				<Header height={{ base: 50, md: 70 }} p='md'>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							height: '100%',
							justifyContent: 'space-between',
						}}
					>
						<MediaQuery largerThan='sm' styles={{ display: 'none' }}>
							<Burger
								opened={opened}
								onClick={() => setOpened((o) => !o)}
								size='sm'
								color={theme.colors.gray[6]}
								mr='xl'
							/>
						</MediaQuery>
						<Title order={3} color='gray.8'>
							MailTrigger
						</Title>

						<Menu shadow='md' width={150!}>
							<Menu.Target>
								<UnstyledButton>
									<Avatar color={'teal'} radius='xl' src={user?.picture}>
										{user?.name}
									</Avatar>
								</UnstyledButton>
							</Menu.Target>

							<Menu.Dropdown>
								{/* <Menu.Divider /> */}
								<Menu.Item onClick={() => handleLogout()}>Logout</Menu.Item>
							</Menu.Dropdown>
						</Menu>
					</div>
				</Header>
			}
		>
			{children}
		</AppShell>
	);
};

export default AppLayout;
