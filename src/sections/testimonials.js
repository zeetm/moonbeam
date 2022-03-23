import React from 'react';
import { Box } from 'theme-ui';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import BlockTitle from 'components/block-title';
import TestimonialsCard from 'components/cards/testimonial-card';
import testimonialsImage1 from 'assets/testimonial-1-1.png';
import indigenousImage from 'assets/indigenous.png';
import testimonialsImage3 from 'assets/testimonial-1-3.png';
import testimonialsImage4 from 'assets/testimonial-1-4.png';
import testimonialsImage5 from 'assets/testimonial-1-5.png';
import testimonialsImage6 from 'assets/testimonial-1-6.png';
import classes from './testimonials.module.css'

SwiperCore.use([Autoplay]);

const TESTIMONIALS_DATA = [
  [
    {
      image: indigenousImage,
      text:
        'Moonbeam Trading Company would like to acknowledge the fact that the land on which we gather, and operate our business, is part of the Treaty Lands and Territory of the Mississaugas of the Credit. For thousands of years, Indigenous peoples inhabited and cared for this land. In particular we acknowledge the territory of the Anishinabek, Huron-Wendat, Haudenosaunee and Ojibway/Chippewa peoples; the land that is home to the Metis; and most recently, the territory of the Mississaugas of the Credit First Nation who are direct descendants of the Mississaugas of the Credit. We are grateful to have the opportunity to work on this land, and by doing so, give our respect to its first inhabitants.',
    }
  ],
  [
    {
      image: testimonialsImage4,
      text:
        'I would just like to compliment Estelle Pestana. She has been most professional and gone to great lengths to assist me. Her patience with me as I continuously changed my plans is to be commended. Her service re-affirms why I always choose to book through an agency instead of directly. Thank you',
    }
  ],
];

const Testimonials = () => {
  const testimonialCarousel = {
    slidesPerView: 2,
    spaceBetween: 0,
    loop: false,
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
    <div className={classes.testimonialsWrapper}>
      <Box as="section" id="testimonials" sx={styles.testimonials} className={classes.testimonials}>
        <BlockTitle
          title="Indigenous and African Diaspora Acknowledgement"
        />
        <div className={classes.swipeWrapper}>
          <Swiper {...testimonialCarousel} className={classes.swipe}>
            {TESTIMONIALS_DATA.map((item, index) => (
              <SwiperSlide key={index}>
                {item.map(({ image, text, name, username }, _index) => (
                  <TestimonialsCard
                    image={image}
                    text={text}
                    name={name}
                    key={_index}
                    username={username}
                  />
                ))}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Box>
    </div>
  );
};

export default Testimonials;

const styles = {
  testimonials: {
    backgroundColor: '#F4F4F6',
    pt: ['20px', null, null, null, '80px', null, '100px'],
    pb: ['60px', null, null, null, '80px', null, '120px'],
    height: '800px',
    backgroundImage: `${TESTIMONIALS_DATA[0]}`
  },
};
