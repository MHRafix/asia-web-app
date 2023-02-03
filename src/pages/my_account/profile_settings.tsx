import ClientAppLayout from '@/components/layout/ClientLayout/ClientAppLayout';
import { useGetUser } from '@/logic/getUserData';
import {
	Avatar,
	Button,
	Container,
	Group,
	Input,
	Space,
	Text,
	TextInput,
	Title,
} from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import React from 'react';
import { FiUpload } from 'react-icons/fi';
import { HiOutlinePhotograph } from 'react-icons/hi';
import { ImCross } from 'react-icons/im';

const ProfileSettings: React.FC<{}> = () => {
	const { user } = useGetUser();

	return (
		<ClientAppLayout>
			<Container size='lg' p='sm'>
				<div className='flex  items-center '>
					<div className='lg:w-5/12 mx-auto grid gap-5'>
						<div className='bg-white drop-shadow-xl p-5 rounded-md'>
							<Avatar
								className='cursor-pointer capitalize mx-auto'
								size='xl'
								color='teal'
								radius='xl'
							>
								RA
							</Avatar>

							<Title order={5} color='gray' mt={10} ff='Poppins' fw={600}>
								Profile Details
							</Title>
							<Text fz={15} className='capitalize'>
								{user?.email.split('@')[0]}
							</Text>
							<Text fz={15}>{user?.email}</Text>
							<Text fz={15}>+880 {user?.phone || '16118 59722'}</Text>
						</div>
						<div className='bg-white drop-shadow-xl p-8 rounded-md'>
							<form>
								<Dropzone
									onDrop={(files) => console.log('accepted files', files)}
									onReject={(files) => console.log('rejected files', files)}
									w={250}
									mx='auto'
									h={130}
									maxSize={3 * 1024 ** 2}
									accept={IMAGE_MIME_TYPE}
									sx={{
										border: '1px dotted #24BE90',
									}}
								>
									<Group
										position='center'
										spacing='xl'
										style={{
											minHeight: 80,
											pointerEvents: 'none',
										}}
									>
										<Dropzone.Accept>
											<FiUpload size={50} color={'dark'} />
										</Dropzone.Accept>
										<Dropzone.Reject>
											<ImCross size={50} color={'dark'} />
										</Dropzone.Reject>
										<Dropzone.Idle>
											<HiOutlinePhotograph color='#24BE90' size={50} />
										</Dropzone.Idle>

										<div>
											<Text size='md' inline>
												Drag or select profile pic
											</Text>
										</div>
									</Group>
								</Dropzone>
								<Input.Wrapper label='Name' size='xs' my={10}>
									<TextInput
										variant='filled'
										defaultValue={user?.email?.split('@')[0]}
									/>
								</Input.Wrapper>
								<Input.Wrapper label='Email' size='xs' my={10}>
									<TextInput
										disabled={true}
										variant='filled'
										defaultValue={user?.email}
									/>
								</Input.Wrapper>
								<Input.Wrapper label='Phone' size='xs' my={10}>
									<TextInput
										variant='filled'
										defaultValue={user?.phone || '+880 16118 59722'}
									/>
								</Input.Wrapper>
								<Space h={8} />
								<Button type='submit' color='teal' fullWidth>
									Save
								</Button>
							</form>
						</div>
					</div>
				</div>
			</Container>
		</ClientAppLayout>
	);
};

export default ProfileSettings;
