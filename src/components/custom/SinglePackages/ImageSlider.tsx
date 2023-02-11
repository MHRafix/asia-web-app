import { Carousel } from '@mantine/carousel';
import Image from 'next/image';
import React from 'react';

const ImageSlider: React.FC<{}> = () => {
	return (
		<Carousel
			// withIndicators
			sx={{
				position: 'relative',
			}}
			height={305}
			slideSize='100%'
			slideGap='md'
			loop
			withControls={false}
			slidesToScroll={1}
			withIndicators
		>
			<Carousel.Slide>
				<Image
					src='https://images.unsplash.com/photo-1613507681723-252eb6b66967?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTAzMzB8MHwxfGFsbHx8fHx8fHx8fDE2Mjc1OTMzMTQ&ixlib=rb-1.2.1&q=80&w=1080&utm_source=travelities&utm_medium=referral&utm_campaign=api-credit'
					alt='single_image'
					width={100}
					height={100}
					className='w-full h-[300px] rounded-2xl'
				/>
			</Carousel.Slide>
			<Carousel.Slide>
				<Image
					src='https://images.unsplash.com/photo-1613507681723-252eb6b66967?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTAzMzB8MHwxfGFsbHx8fHx8fHx8fDE2Mjc1OTMzMTQ&ixlib=rb-1.2.1&q=80&w=1080&utm_source=travelities&utm_medium=referral&utm_campaign=api-credit'
					alt='single_image'
					width={100}
					height={100}
					className='w-full h-[300px] rounded-2xl'
				/>
			</Carousel.Slide>
			<Carousel.Slide>
				<Image
					src='https://images.unsplash.com/photo-1613507681723-252eb6b66967?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTAzMzB8MHwxfGFsbHx8fHx8fHx8fDE2Mjc1OTMzMTQ&ixlib=rb-1.2.1&q=80&w=1080&utm_source=travelities&utm_medium=referral&utm_campaign=api-credit'
					alt='single_image'
					width={100}
					height={100}
					className='w-full h-[300px] rounded-2xl'
				/>
			</Carousel.Slide>
			<Carousel.Slide>
				<Image
					src='https://images.unsplash.com/photo-1613507681723-252eb6b66967?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTAzMzB8MHwxfGFsbHx8fHx8fHx8fDE2Mjc1OTMzMTQ&ixlib=rb-1.2.1&q=80&w=1080&utm_source=travelities&utm_medium=referral&utm_campaign=api-credit'
					alt='single_image'
					width={100}
					height={100}
					className='w-full h-[300px] rounded-2xl'
				/>
			</Carousel.Slide>
			<Carousel.Slide>
				<Image
					src='https://images.unsplash.com/photo-1613507681723-252eb6b66967?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTAzMzB8MHwxfGFsbHx8fHx8fHx8fDE2Mjc1OTMzMTQ&ixlib=rb-1.2.1&q=80&w=1080&utm_source=travelities&utm_medium=referral&utm_campaign=api-credit'
					alt='single_image'
					width={100}
					height={100}
					className='w-full h-[300px] rounded-2xl'
				/>
			</Carousel.Slide>
		</Carousel>
	);
};

export default ImageSlider;
