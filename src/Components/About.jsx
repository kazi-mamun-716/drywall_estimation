import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const About = () => {
    const projectImages = [
        { src: '/assets/kazi_mamun.jpg', title: "Kazi Mamun" },
        { src: '/assets/kazi_mamun_full.png', title: "Kazi_Mamun" },
      ];
  return (
    <section id="about" className="py-20 bg-white">
  <div className="container mx-auto px-6">
    <div className="flex flex-col md:flex-row items-center gap-12">
      
      {/* Image Part */}
      <div className="w-full md:w-1/3 flex justify-center">
        <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              className="h-[400px] lg:h-[550px]"
            >
              {projectImages.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="relative h-full w-full">
                    <img
                      src={img.src}
                      alt={img.title}
                      className="w-full h-full object-contain p-4"
                    />
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-1 rounded-full text-sm backdrop-blur-sm">
                      {img.title}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
      </div>

      {/* Text Part */}
      <div className="w-full md:w-2/3">
        <h2 className="text-3xl font-bold mb-4 text-slate-800">About Me</h2>
        <p className="text-slate-600 leading-relaxed mb-6">
          I am Kazi Mamun, a dedicated **Drywall Estimator** with a focus on accuracy and efficiency. 
          Through **The KMR**, I provide detailed quantity takeoffs that help contractors 
          win bids and manage projects effectively.
        </p>
        <div className="flex gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <span className="block font-bold text-blue-600 text-xl">2+</span>
            <span className="text-sm text-slate-500">Years Experience</span>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <span className="block font-bold text-blue-600 text-xl">50+</span>
            <span className="text-sm text-slate-500">Projects Done</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
  )
}

export default About