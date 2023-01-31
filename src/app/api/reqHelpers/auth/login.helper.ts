import { supabase } from '@/lib/supabse/supabseClient';

export const loginAction = async ({ email }: { email: string }) => {
	return await supabase.auth.signInWithOtp({
		email,
		options: {
			shouldCreateUser: true,
			emailRedirectTo: process.env.NEXT_PUBLIC_LOGIN_ACCESS,
		},
	});
};
