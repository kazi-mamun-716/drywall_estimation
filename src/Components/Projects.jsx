import React from 'react'
import { FileText } from 'lucide-react';
import Drywall_Takeoff from '../assets/drywall_Takeoff.png';
import Drywall_Cost_Estimate from '../assets/drywall_takeoff_cost_estimation.png';
// Swiper Imports for Carousel
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Projects = () => {
  const projectImages = [
    { src: Drywall_Takeoff, title: "Allegheny Drywall Takeoff by Kazi Mamun" },
    { src: Drywall_Cost_Estimate, title: "Detailed Cost Estimation by Kazi Mamun" },
  ];
  return (
    <section id="portfolio" className="py-20 bg-slate-100 px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-12 text-center">Featured Project</h3>
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row">
          <div className="lg:w-3/5 w-full bg-slate-900 group relative">
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
          <div className="flex-1 p-10">
            <span className="text-blue-600 font-bold text-sm tracking-widest uppercase">Case Study</span>
            <h4 className="text-2xl font-bold mt-2 mb-4">Allegheny Business Consulting</h4>
            <ul className="space-y-3 mb-8 text-slate-600">
              <li>• Managed 1,600+ SFT of net wall area.</li>
              <li>• 15% Waste Factor applied for Gypsum Boards.</li>
              <li>• Includes 2x4 Wood Studs & Fiberglass Insulation.</li>
              <li>• Final Grand Total: $9,436.95.</li>
            </ul>
            <div className="flex gap-4">
              <button
                onClick={() => window.open('/assets/Drywall_Estimation_by_Kazi_Mamun.pdf', '_blank')}
                className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-200 cursor-pointer"
              >
                <FileText size={18} /> View Full Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects