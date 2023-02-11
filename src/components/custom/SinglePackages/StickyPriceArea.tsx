import { Box, Button, Container, Flex, Footer, Text } from '@mantine/core';
import React from 'react';

const StickyPriceArea: React.FC<{}> = () => {
	return (
		<Footer height={70} withBorder={true} px={10} pt={10}>
			<Container size='lg' px='xs'>
				<div className='xs:w-full sm:w-10/12 lg:w-8/12 mx-auto grid gap-5'>
					<Flex justify='space-between' align='center'>
						<Box>
							<Text fz={20} fw={700} ff='Poppins'>
								$6656{' '}
								<span className='text-sm text-[#555] font-medium'>
									/ person
								</span>
							</Text>
							<Text size='sm' fw={500} color='#555'>
								Mar 28 - Apr 06
							</Text>
						</Box>
						<Box>
							<Button color='teal' radius={100}>
								Book Now
							</Button>
						</Box>
					</Flex>
				</div>
			</Container>
		</Footer>
	);
};

export default StickyPriceArea;
