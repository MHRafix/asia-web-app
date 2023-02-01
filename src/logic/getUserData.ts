import { supabase } from '@/lib/supabse/supabseClient';
import { useEffect, useState } from 'react';

export const useGetUser = () => {
	const [user, setUser] = useState<any>(null);

	useEffect(() => {
		supabase.auth.getSession().then(({ data }) => setUser(data?.session?.user));
	}, []);
	return { user };
};
