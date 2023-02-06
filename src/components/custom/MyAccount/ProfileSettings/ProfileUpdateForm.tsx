import { useGetUser } from '@/logic/getUserData';
import {
	Button,
	Group,
	Input,
	Space,
	Text,
	TextInput,
	Tooltip,
} from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { useForm, yupResolver } from '@mantine/form';
import React, { useEffect, useState } from 'react';
import { FiUpload } from 'react-icons/fi';
import { HiOutlinePhotograph } from 'react-icons/hi';
import { ImCross } from 'react-icons/im';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
	name: Yup.string()
		.required('Name field is required.')
		.min(3, 'Name should have atleast 3 letters.'),
	phone: Yup.string()
		.required('Phone field is required.')
		.min(11, 'Phone should have atleast 8 digits.'),
});

const ProfileUpdateForm: React.FC<{}> = () => {
	const { user } = useGetUser();
	const [pic, setPic] = useState<any>();

	const updateProfileForm = useForm({
		initialValues: {
			name: '',
			phone: '',
		},
		validate: yupResolver(validationSchema),
	});

	useEffect(() => {
		updateProfileForm.setValues({
			name: user?.email?.split('@')[0],
			phone: user?.phone || '+880 16118 59722',
		});
	}, [user]);

	const handleUpdate = (values: any) => {
		console.log(values);
	};

	return (
		<div className='bg-white drop-shadow-xl p-5 rounded-md'>
			{pic ? (
				<img
					src={pic && URL.createObjectURL(pic)}
					alt='Pic'
					width={120}
					height={120}
					className='p-1 rounded-full shadow-md'
				/>
			) : (
				<Dropzone
					onDrop={(files) => setPic(files[0])}
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
			)}
			<form onSubmit={updateProfileForm.onSubmit(handleUpdate)}>
				<Input.Wrapper
					label='Name'
					size='sm'
					my={10}
					error={updateProfileForm?.errors?.name}
				>
					<Input
						variant='filled'
						{...updateProfileForm.getInputProps('name')}
					/>
				</Input.Wrapper>

				<Tooltip
					label="Email isn't editble"
					position='right-end'
					color='red'
					withArrow
				>
					<Input.Wrapper label='Email' size='sm' my={10}>
						<TextInput
							disabled={true}
							variant='filled'
							defaultValue={user?.email}
						/>
					</Input.Wrapper>
				</Tooltip>
				<Input.Wrapper
					label='Phone'
					size='sm'
					my={10}
					error={updateProfileForm?.errors?.phone}
				>
					<PhoneInput
						international
						defaultCountry='BD'
						{...updateProfileForm.getInputProps('phone')}
					/>
				</Input.Wrapper>
				<Space h={8} />
				<Button type='submit' color='teal' fullWidth>
					Save
				</Button>
			</form>
		</div>
	);
};

export default ProfileUpdateForm;
