import {
	Box,
	Button,
	Flex,
	Input,
	PasswordInput,
	TextInput,
	Title,
} from '@mantine/core/';
import Link from 'next/link';
import { FaEnvelope, FaLock } from 'react-icons/fa';

const Login = () => {
	return (
		<Flex justify='center' align='center' h='100vh'>
			<Box className='xs:w-10/12 lg:w-5/12 bg-white p-10 drop-shadow-xl rounded-md'>
				<Title order={2} mb={10} color='teal'>
					Sign In
				</Title>
				<form>
					<Input.Wrapper label='Email' my={10}>
						<TextInput
							icon={<FaEnvelope size={20} />}
							placeholder='Your email'
							size='md'
						/>
					</Input.Wrapper>
					<Input.Wrapper label='Password' my={10}>
						<PasswordInput
							icon={<FaLock size={20} />}
							placeholder='Your password'
							size='md'
						/>
					</Input.Wrapper>
					<Input.Wrapper>
						<Button color='teal' size='md' fullWidth mt={10}>
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
