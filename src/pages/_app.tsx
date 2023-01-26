import { createEmotionCache, MantineProvider } from '@mantine/core';
//@ts-ignore
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import '../styles/tailwindcss.css';

export default function App({ Component, pageProps }: AppProps) {
	const myCache = createEmotionCache({
		key: 'mantine',
		prepend: false,
	});

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
			<MantineProvider
				emotionCache={myCache}
				theme={{
					colorScheme: 'light',
					primaryColor: 'blue',
					colors: {
						blue: [
							'#edf8ff',
							'#daf0ff',
							'#c8e9ff',
							'#b5e1ff',
							'#a3daff',
							'#91d3ff',
							'#47b5ff',
							'#6cc4ff',
							'#59bcff',
							'#47b5ff',
						],
					},
				}}
			>
				<Component {...pageProps} />
			</MantineProvider>
		</QueryClientProvider>
	);
}
