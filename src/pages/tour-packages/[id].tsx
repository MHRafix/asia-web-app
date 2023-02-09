import StickyPriceArea from '@/components/custom/SinglePackages/StickyPriceArea';
import ClientAppLayout from '@/components/layout/ClientLayout/ClientAppLayout';
import {
	ActionIcon,
	Avatar,
	Box,
	Button,
	Card,
	Container,
	Divider,
	Flex,
	Rating,
	Text,
	Timeline,
	Title,
	Tooltip,
} from '@mantine/core';
import { NextPage } from 'next';
import Image from 'next/image';
import { MdLocationPin } from 'react-icons/md';
import { RiShareForward2Line } from 'react-icons/ri';
import { TbMapSearch, TbPlaneDeparture } from 'react-icons/tb';

const SingleTourPage: NextPage = () => {
	return (
		<ClientAppLayout>
			<>
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
											<Button
												variant='light'
												color='teal'
												fw={500}
												rightIcon={<RiShareForward2Line size={20} />}
											>
												Share
											</Button>
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
								<Divider my='sm' color='#e1e1e1' />
								<div className='px-[10px]'>
									<Title order={3} my={10}>
										Tour Outline
									</Title>
									<Timeline
										color='teal'
										active={1}
										lineWidth={2}
										bulletSize={22}
									>
										<Timeline.Item
											bullet={<TbPlaneDeparture size={30} />}
											bulletSize={55}
										>
											<Card px='lg' radius='md' mx={10} shadow='lg'>
												<Flex justify='space-between' align='center'>
													<Text fw={500}>Travel from Dhaka</Text>
													<Button variant='light' color='gray'>
														<Title order={5} ff='Poppins' color='#444'>
															Tue, Mar 28
														</Title>
													</Button>
												</Flex>

												<Divider my='xs' color='#e1e1e1' />

												<div>
													<div className='grid md:grid-cols-3 gap-5 '>
														<Flex align='center' gap={8}>
															<Image
																src={planeImage}
																alt='transportIcon'
																width={40}
																height={40}
															/>
															Qatar Airlines
														</Flex>
														<div>
															<Text fz={15} fw={500}>
																New York LGA - Turkey
															</Text>
															<Text size='sm' color='#c1c1c1'>
																03:29 pm
															</Text>
														</div>
														<div className='md:text-right'>
															<Text fz={15} fw={500}>
																2 stops
															</Text>
															<Text size='sm' color='#c1c1c1'>
																12h 45m
															</Text>
														</div>
													</div>
												</div>
											</Card>
										</Timeline.Item>

										<Timeline.Item
											title='Avatar'
											bulletSize={55}
											bullet={
												<Avatar
													size={55}
													radius='xl'
													src='https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4'
												/>
											}
										>
											<Text color='dimmed' size='sm'>
												Timeline bullet as avatar image
											</Text>
										</Timeline.Item>
									</Timeline>
								</div>
							</div>
						</div>
					</div>
				</Container>
				<StickyPriceArea />
			</>
		</ClientAppLayout>
	);
};

export default SingleTourPage;

const planeImage = 'https://cdn-icons-png.flaticon.com/512/9129/9129518.png';
