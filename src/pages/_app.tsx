import GlobalWrapper from '@/components/GlobalWrapper';
import { store } from '@/store';
import { Auth0Provider } from '@auth0/auth0-react';
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { NotificationsProvider } from '@mantine/notifications';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				retry: false,
				refetchOnWindowFocus: false,
			},
		},
	});

	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<Auth0Provider
					domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN!}
					clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID!}
					audience={process.env.NEXT_PUBLIC_AUTH0_AUDIENCE!}
					redirectUri={process.env.NEXT_PUBLIC_ROOT_URL!}
				>
					<NotificationsProvider position='top-right'>
						<GlobalWrapper>
							<MantineProvider
								withGlobalStyles
								withNormalizeCSS
								theme={{ colorScheme: 'light' }}
							>
								<ModalsProvider>
									<Component {...pageProps} />
								</ModalsProvider>
							</MantineProvider>
						</GlobalWrapper>
					</NotificationsProvider>
				</Auth0Provider>
			</Provider>
		</QueryClientProvider>
	);
}
