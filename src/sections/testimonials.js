import React from 'react';
import { Box } from 'theme-ui';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import BlockTitle from 'components/block-title';
import TestimonialsCard from 'components/cards/testimonial-card';
import AcknowledgementCard from 'components/cards/acknowledgement-card';

SwiperCore.use([Autoplay]);

const Testimonials = () => {
  const testimonialCarousel = {
    slidesPerView: 'auto',
    spaceBetween: 0,
    loop: true,
    speed: 1000,
    centeredSlides: false,
    autoHeight: true,
    autoplay: {
      waitForTransition: false,
      delay: 4000,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  };
  return (
    <Box as="section" id="testimonials" sx={styles.testi}>
      <BlockTitle
        title="Indigenous and African Diaspora Acknowledgement"
      />
      <Swiper {...testimonialCarousel}>
          <SwiperSlide>
              <TestimonialsCard/>
          </SwiperSlide>
          <SwiperSlide>
              <AcknowledgementCard/>
          </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Testimonials;

const styles = {
  testi: {
    backgroundColor: '#F4F4F6',
    pt: ['20px', null, null, null, '80px', null, '100px'],
    pb: ['60px', null, null, null, '80px', null, '120px'],
    height: '800px'
  },
};
