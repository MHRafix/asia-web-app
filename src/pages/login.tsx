import { ILoginPayload } from '@/app/api/model/auth.model';
import { loginAction } from '@/app/api/reqHelpers/auth/login';
import {
	errorStyle,
	successStyle,
} from '@/components/common/ToastConfig/toastStyle';
import {
	Box,
	Button,
	Flex,
	Input,
	PasswordInput,
	TextInput,
	Title,
} from '@mantine/core/';
import { useForm, yupResolver } from '@mantine/form';
import { showNotification } from '@mantine/notifications';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import Link from 'next/link';
import { BsCheckCircleFill } from 'react-icons/bs';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { TiWarning } from 'react-icons/ti';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
	email: Yup.string()
		.required('Email is a required field')
		.email('Type a valid email.'),
	password: Yup.string()
		.required('Password is a required field')
		.min(8, 'Password should atleast 8 letters.')
		.max(32, 'Password should less than 32 letters.'),
});

const Login: React.FC<{}> = () => {
	const loginForm = useForm({
		initialValues: {
			email: '',
			password: '',
		},
		validate: yupResolver(validationSchema),
	});

	// login req
	const { isLoading: loginLoading, mutate: loginMutate } = useMutation(
		loginAction,
		{
			onSuccess: () => {
				showNotification({
					title: 'Default notification',
					icon: <BsCheckCircleFill size={25} />,
					color: 'teal',
					message: 'Hey there, your code is awesome! 🤥',
					styles: successStyle,
				});
			},
			onError: (err: AxiosError) => {
				showNotification({
					title: 'Default notification',
					icon: <TiWarning size={25} />,
					color: 'red',
					message: 'Hey there, your code is awesome! 🤥',
					styles: errorStyle,
				});
			},
		}
	);

	const handleLogin = (payload: ILoginPayload) => {
		console.log(payload);
		loginMutate();
	};
	return (
		<Flex justify='center' align='center' h='100vh'>
			<Box className='xs:w-10/12 lg:w-5/12 bg-white p-10 drop-shadow-xl rounded-md'>
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
					<Input.Wrapper label='Password' my={10}>
						<PasswordInput
							disabled={loginLoading}
							{...loginForm.getInputProps('password')}
							icon={<FaLock size={20} />}
							placeholder='Your password'
							size='md'
						/>
					</Input.Wrapper>
					<Input.Wrapper>
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
					</Input.Wrapper>
				</form>
				<div className='text-center my-2'>
					<span className='text-xs text-slate-500'>
						Don&#39;t have an Account?
					</span>{' '}
					<Link href='/signup' className='text-sm'>
						Sign Up
					</Link>
				</div>
			</Box>
		</Flex>
	);
};

export default Login;
