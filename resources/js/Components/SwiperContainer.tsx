import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Grid } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import PrimaryButton from '@/Components/PrimaryButton';

interface Slide {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

interface SwiperComponentProps {
  slides: Slide[];
  isGrid : boolean
}

const SwiperComponent: React.FC<SwiperComponentProps> = ({ slides, isGrid }) => {


  return (
    <Swiper
      modules={[Navigation, Pagination, Grid]}
        navigation
        spaceBetween={30}
        pagination={{
            clickable: true,
        }}
        grid={{
          rows: isGrid ? 3 : 1,
          fill: "row"
        }}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id} className="rounded-lg ">
          <div className="relative w-full min-h-[200px] overflow-hidden bg-center bg-cover rounded-lg">
            <img
              src={slide.imageUrl}
              alt={slide.title}
              className="object-cover w-full h-full min-h-[200px]"
            />
            <div className="absolute inset-0 top-0 flex flex-col justify-end p-4 bg-black bg-opacity-30">
              <h3 className="text-lg font-bold text-white md:text-xl">{slide.title}</h3>
              <p className="text-sm text-white md:text-base">{slide.description}</p>

            <div>
                <PrimaryButton className="mt-8">Listen Now</PrimaryButton>
            </div>

            </div>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
