import AppLayout from '@/components/layouts/AppLayout';
import { NextPage } from 'next';
import { useState } from 'react';

const HomePage: NextPage = () => {
	const [opened, setOpened] = useState<boolean>(false);
	const [mutatingId, setMutatingId] = useState<string | null>(null);
	// const {
	//   isFetching,
	//   data: my_templates,
	//   refetch: refetchTempates,
	// } = useQuery(["my-templates"], async () => {
	//   const res = await templateApiRepository.getMyTemplates({
	//     page: 1,
	//     limit: 10,
	//     fields: "id,name",
	//   });
	//   return res.data.data.items;
	// });

	// delete template request here
	// const { mutate: mutate__delete } = useMutation(
	//   async (id: string) => {
	//     setMutatingId(id);
	//     await templateApiRepository.deleteTemplate(id);
	//   },
	//   {
	//     onSuccess: () => {
	//       setMutatingId(null);
	//       refetchTempates();
	//       showNotification({
	//         title: "Template were successfully deleted.",
	//         color: "teal",
	//         icon: <IconCheck size={16} />,
	//         message: "",
	//       });
	//     },
	//     onError: () => {
	//       setMutatingId(null);
	//       showNotification({
	//         title: "Failed to delete template.",
	//         color: "red",
	//         icon: <IconX size={16} />,
	//         message: "",
	//       });
	//     },
	//   }
	// );

	return (
		<AppLayout>
			<div className='grid gap-6 lg:grid-cols-3 md:grid-cols-2'>
				content goes to here...!
			</div>
		</AppLayout>
	);
};

export default HomePage;
