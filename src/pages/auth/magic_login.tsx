import { loginAction } from '@/app/api/reqHelpers/auth/login.helper';
import {
	errorStyle,
	successStyle,
} from '@/components/common/ToastConfig/toastStyle';
import { useGetUser } from '@/logic/getUserData';
import { Box, Button, Flex, Input, TextInput, Title } from '@mantine/core/';
import { useForm, yupResolver } from '@mantine/form';
import { showNotification } from '@mantine/notifications';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { NextPage } from 'next';
import Router from 'next/router';
import { BsCheckCircleFill } from 'react-icons/bs';
import { FaEnvelope } from 'react-icons/fa';
import { TiWarning } from 'react-icons/ti';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
	email: Yup.string()
		.required('Email is a required field')
		.email('Type a valid email.'),
});

const MagicLogin: NextPage = () => {
	const loginForm = useForm({
		initialValues: {
			email: '',
		},
		validate: yupResolver(validationSchema),
	});

	// login req mutation
	const { isLoading: loginLoading, mutate: loginMutate } = useMutation(
		loginAction,
		{
			onSuccess: () => {
				loginForm.reset();
				showNotification({
					title: 'Login link has been sent to your email.',
					icon: <BsCheckCircleFill size={25} />,
					color: 'teal',
					message: 'Please check your email inbox!',
					styles: successStyle,
				});
			},
			onError: (err: AxiosError) => {
				showNotification({
					title: err?.message,
					icon: <TiWarning size={25} />,
					color: 'red',
					message: err?.status,
					styles: errorStyle,
				});
			},
		}
	);

	const handleLogin = async (payload: { email: string }) => {
		loginMutate(payload);
	};

	// prevent fake user
	const { user } = useGetUser();
	if (user) {
		Router.back();
		return null;
	}

	return (
		<Flex justify='center' align='center' h='100vh'>
			<Box className='xs:w-11/12 lg:w-5/12 bg-white  p-5 drop-shadow-xl rounded-md'>
				<Title order={2} mb={10} color='teal'>
					Sign In
				</Title>
				<form onSubmit={loginForm.onSubmit(handleLogin)}>
					<Input.Wrapper label='Email' my={10}>
						<TextInput
							disabled={loginLoading}
							{...loginForm.getInputProps('email')}
							icon={<FaEnvelope size={20} />}
							placeholder='Your email'
							size='md'
						/>
					</Input.Wrapper>
					<Button
						type='submit'
						color='teal'
						size='md'
						loading={loginLoading}
						fullWidth
						mt={10}
					>
						Sign In
					</Button>
				</form>
			</Box>
		</Flex>
	);
};

export default MagicLogin;
