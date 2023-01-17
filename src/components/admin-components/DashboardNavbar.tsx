import { IReduxUserPayload, IUser } from '@/app/api/model/user.model';
import { Group, Navbar, Text, ThemeIcon, UnstyledButton } from '@mantine/core';
import {
	IconCheckbox,
	IconId,
	IconLayoutGridAdd,
	IconMapPins,
	IconParachute,
	IconPhoto,
	IconRefresh,
} from '@tabler/icons';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';

const menus = [
	{
		icon: <IconLayoutGridAdd size={16} />,
		color: 'blue',
		label: 'Home',
		href: '/',
	},
	{
		icon: <IconRefresh size={16} />,
		color: 'teal',
		label: 'Latest Update',
		href: '/latest_update',
	},
	{
		icon: <IconParachute size={16} />,
		color: 'violet',
		label: 'Tour Packages',
		href: '/tour_packages',
	},
	{
		icon: <IconPhoto size={16} />,
		color: 'grape',
		label: 'Tour Gallery',
		href: '/tour_gallery',
	},
	{
		icon: <IconMapPins size={16} />,
		color: 'blue',
		label: 'Best Destination',
		href: '/best_destination',
	},
	{
		icon: <IconId size={16} />,
		color: 'teal',
		label: 'About Us',
		href: '/about_us',
	},
	{
		icon: <IconCheckbox size={16} />,
		color: 'violet',
		label: 'Book Appointment',
		href: '/book_appointment',
	},
];

interface MainLinkProps {
	icon: React.ReactNode;
	color: string;
	label: string;
	href: string;
}

function MainLink({ icon, color, label, href }: MainLinkProps) {
	return (
		<UnstyledButton
			component={Link}
			href={href}
			sx={(theme) => ({
				display: 'block',
				width: '100%',
				padding: theme.spacing.xs,
				borderRadius: theme.radius.sm,
				color:
					theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

				'&:hover': {
					backgroundColor:
						theme.colorScheme === 'dark'
							? theme.colors.dark[6]
							: theme.colors.gray[0],
				},
			})}
		>
			<Group>
				<ThemeIcon color={color} variant='light'>
					{icon}
				</ThemeIcon>

				<Text size='sm'>{label}</Text>
			</Group>
		</UnstyledButton>
	);
}

interface DashboardNavbarProps {
	opened: boolean;
}
const DashboardNavbar: React.FC<DashboardNavbarProps> = ({ opened }) => {
	const links = menus.map((link) => <MainLink {...link} key={link.label} />);
	const user: IUser = useSelector(
		(state: IReduxUserPayload) => state?.user?.user
	);
	return (
		<Navbar
			p='md'
			hiddenBreakpoint='sm'
			hidden={!opened}
			width={{ sm: 200, lg: 220 }}
		>
			<Navbar.Section>{/* Header with logo */}</Navbar.Section>
			<Navbar.Section grow mt='md'>
				{links}
			</Navbar.Section>
			{/* logout section */}
		</Navbar>
	);
};

export default DashboardNavbar;
