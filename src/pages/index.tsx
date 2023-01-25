import SeassionBanner from '@/components/custom/Home/Banner/SeassionBanner';
import ContentTabsMain from '@/components/custom/Home/ContentTabs/ContentTabsMain';
import HomeSlider from '@/components/custom/Home/Slider/HomeSlider';
import { Container, Space } from '@mantine/core';
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
		<div>
			<HomeSlider />
			<Container size='lg' p='xs' mt={50}>
				<SeassionBanner />
				<Space h={50} />
				<ContentTabsMain />
			</Container>
		</div>
	);
};

export default HomePage;
