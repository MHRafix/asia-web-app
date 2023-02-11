import { Carousel } from '@mantine/carousel';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

import TourCard from '@/components/common/GridCard/Tour/TourCard';
import React from 'react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/controller';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';

const TourCarousel: React.FC<{}> = () => {
	return (
		<div>
			<Carousel
				// withIndicators
				sx={{
					position: 'relative',
				}}
				height={360}
				slideSize='25%'
				slideGap='md'
				loop
				align='start'
				nextControlIcon={
					<div className='p-2'>
						<BiRightArrowAlt size={18} />
					</div>
				}
				previousControlIcon={
					<div className='p-2'>
						<BiLeftArrowAlt size={18} />
					</div>
				}
				slidesToScroll={1}
			>
				<Carousel.Slide>
					<TourCard />
				</Carousel.Slide>
				<Carousel.Slide>
					<TourCard />
				</Carousel.Slide>
				<Carousel.Slide>
					<TourCard />
				</Carousel.Slide>
				<Carousel.Slide>
					<TourCard />
				</Carousel.Slide>
				<Carousel.Slide>
					<TourCard />
				</Carousel.Slide>
			</Carousel>
		</div>
	);
};

export default TourCarousel;
{
	/* <Swiper
				// install Swiper modules
				modules={[
					Pagination,
					Navigation,
					Scrollbar,
					Autoplay,
					Controller,
					Zoom,
				]}
				// spaceBetween={10}
				slidesPerView={4}
				navigation={true}
			>
				<SwiperSlide
					style={{
						height: '400px',
						width: '100%',
						transform: ' translate(0px, 0px)',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<TourCard />
				</SwiperSlide>
				<SwiperSlide
					style={{
						height: '400px',
						width: '100%',
						transform: ' translate(0px, 0px)',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<TourCard />
				</SwiperSlide>
				<SwiperSlide
					style={{
						height: '400px',
						width: '100%',
						transform: ' translate(0px, 0px)',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<TourCard />
				</SwiperSlide>
				<SwiperSlide
					style={{
						height: '400px',
						width: '100%',
						transform: ' translate(0px, 0px)',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<TourCard />
				</SwiperSlide>
				<SwiperSlide
					style={{
						height: '400px',
						width: '100%',
						transform: ' translate(0px, 0px)',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<TourCard />
				</SwiperSlide>
				<SwiperSlide
					style={{
						height: '400px',
						width: '100%',
						transform: ' translate(0px, 0px)',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<TourCard />
				</SwiperSlide>
			</Swiper> */
}
