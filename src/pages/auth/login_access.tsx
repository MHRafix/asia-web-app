import { supabase } from '@/lib/supabse/supabseClient';
import { useGetUser } from '@/logic/getUserData';
import { Button, Card, Flex, Loader, Text } from '@mantine/core';
import { NextPage } from 'next';
import Image from 'next/image';
import Router, { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import UnAuthGif from '../../../public/assets/Loader/unauth.gif';
import SuccessGif from '../../../public/assets/Loader/verfiyed.gif';

const LoginAccess: NextPage = () => {
	const router = useRouter();
	const [verified, setVerified] = useState<boolean>();
	const [loading, setLoading] = useState<boolean>(true);

	const accessToken = router?.asPath
		?.split('access_token=')[1]
		?.split('&expires_in')[0];
	const refreshToken = router?.asPath
		?.split('refresh_token=')[1]
		?.split('&token_type')[0];

	useEffect(() => {
		if (!accessToken) {
			setLoading(false);
			setVerified(false);
		} else {
			supabase.auth.setSession({
				access_token: accessToken,
				refresh_token: refreshToken,
			});
			supabase.auth.onAuthStateChange((_event, session) => {
				if (session?.user) {
					setLoading(false);
					setVerified(true);
					router.push('/');
				}
			});
		}
	}, []);

	// prevent fake user
	const { user } = useGetUser();
	if (user) {
		Router.back();
		return <div>Unauthorized:----</div>;
	}
	return (
		<div className='h-screen flex justify-center items-center lg:w-4/12 mx-auto text-center'>
			{loading ? (
				<Loader color='gray' size='sm' />
			) : (
				<>
					<Card shadow='sm' p={30} radius='md' withBorder>
						<Card.Section>
							<Image
								priority
								className='mx-auto'
								src={verified ? SuccessGif : UnAuthGif}
								alt='Verfiyed'
								width={150}
								height={80}
							/>
						</Card.Section>

						<Text size='lg' fw={700} color={verified ? 'dimmed' : 'red'}>
							{verified ? 'Email verification success.' : 'Failed to verify!'}
							{verified && (
								<Flex align='center' gap={10} justify='center'>
									<Text size='sm'>Redirecting</Text>
									<Loader color='teal' variant='dots' size='sm' />
								</Flex>
							)}
						</Text>

						{verified && (
							<Button
								variant='filled'
								color='red'
								fullWidth
								mt='md'
								radius='md'
							>
								Logout Now
							</Button>
						)}
					</Card>
				</>
			)}
		</div>
	);
};

export default LoginAccess;
