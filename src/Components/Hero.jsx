import React from 'react'
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id='home' className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }}
            className="flex-1"
          >
            <h2 className="text-5xl font-extrabold mb-4 leading-tight">
              Mechanical Engineer & <span className="text-blue-600">Drywall Estimator</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-lg">
              Specialized in quantity takeoff and construction estimation using PlanSwift. 
              Delivering high-quality remote services for North American projects.
            </p>
            <div className="flex gap-4">
              <a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">Hire Me</a>
              <a href="#portfolio" className="border border-slate-300 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">View Work</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="flex-1">
            <div className="bg-blue-100 p-8 rounded-2xl rotate-3">
              <div className="bg-white p-6 rounded-xl shadow-xl -rotate-3 border border-blue-50">
                <h3 className="font-bold text-blue-800 mb-2">Recent Achievement</h3>
                <p className="text-sm text-slate-500">Allegheny Project Estimation</p>
                <div className="mt-4 text-2xl font-bold text-slate-800">$9,436.95</div>
                <div className="text-xs text-green-600 font-bold mt-1">100% Accurate Takeoff</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
  )
}

export default Hero