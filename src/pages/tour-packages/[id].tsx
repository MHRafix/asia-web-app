import ClientAppLayout from '@/components/layout/ClientLayout/ClientAppLayout';
import {
	ActionIcon,
	Box,
	Container,
	Flex,
	Rating,
	Text,
	Title,
	Tooltip,
} from '@mantine/core';
import { NextPage } from 'next';
import Image from 'next/image';
import { MdLocationPin } from 'react-icons/md';
import { TbMapSearch } from 'react-icons/tb';

const SingleTourPage: NextPage = () => {
	return (
		<ClientAppLayout>
			<Container size='lg' p='sm'>
				<div className='flex items-center '>
					<div className='xs:w-full sm:w-10/12 lg:w-8/12 mx-auto grid gap-5 xs:mt-2 md:mt-10'>
						{/* <ProfileDetails />
                <ProfileUpdateForm /> */}
						<div>
							<Image
								src='https://images.unsplash.com/photo-1613507681723-252eb6b66967?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTAzMzB8MHwxfGFsbHx8fHx8fHx8fDE2Mjc1OTMzMTQ&ixlib=rb-1.2.1&q=80&w=1080&utm_source=travelities&utm_medium=referral&utm_campaign=api-credit'
								alt='single_image'
								width={100}
								height={100}
								className='w-full h-[300px] rounded-2xl'
							/>
							<Flex justify='space-between' align='center' my={10} px={10}>
								<Box>
									<Title order={3}>This is title</Title>
									<Flex gap={5} align='center' mt={3}>
										<>
											<MdLocationPin size={16} color='#FF597B' />
											<span className='text-xs text-slate-400'>Canada.</span>
										</>
										<Text color='cyan' size='xs'>
											<Rating
												size='xs'
												color='teal'
												value={4.5}
												fractions={2}
												readOnly
											/>
										</Text>
									</Flex>
								</Box>
								<Box>
									<Tooltip label='Map direction'>
										<ActionIcon
											color='teal'
											size='xl'
											radius='lg'
											variant='filled'
										>
											<TbMapSearch size={25} />
										</ActionIcon>
									</Tooltip>
								</Box>
							</Flex>
						</div>
					</div>
				</div>
			</Container>
		</ClientAppLayout>
	);
};

export default SingleTourPage;
