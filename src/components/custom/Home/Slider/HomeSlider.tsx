import { Box } from '@mantine/core';
import React from 'react';
import { Autoplay, Controller, Pagination, Scrollbar, Zoom } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/controller';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';
import { Swiper, SwiperSlide } from 'swiper/react';

const HomeSlider: React.FC<{}> = () => {
	return (
		<Box>
			<Swiper
				// install Swiper modules
				modules={[Pagination, Scrollbar, Autoplay, Controller, Zoom]}
				spaceBetween={50}
				slidesPerView={1}
				navigation
				pagination={{ clickable: true }}
			>
				<SwiperSlide
					style={{
						backgroundImage: `url('https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/summertime-background-img-2.jpg')`,
						height: '580px',
						width: '100%',
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
						transform: ' translate(0px, 0px)',
						visibility: 'visible',
						backgroundPositionY: 'top',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				></SwiperSlide>
				<SwiperSlide
					style={{
						backgroundImage: `url('https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/summertime-background-img-6.jpg')`,
						height: '580px',
						width: '100%',
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
						transform: ' translate(0px, 0px)',
						visibility: 'visible',
						backgroundPositionY: 'top',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				></SwiperSlide>
				<SwiperSlide
					style={{
						backgroundImage: `url('https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/far-destinations-slider-img-2.jpg')`,
						height: '580px',
						width: '100%',
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
						transform: ' translate(0px, 0px)',
						visibility: 'visible',
						backgroundPositionY: 'top',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				></SwiperSlide>
				<SwiperSlide
					style={{
						backgroundImage: `url('https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/cities-slide-3.jpg')`,
						height: '580px',
						width: '100%',
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
						transform: ' translate(0px, 0px)',
						visibility: 'visible',
						backgroundPositionY: 'top',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				></SwiperSlide>
			</Swiper>
		</Box>
	);
};

export default HomeSlider;
