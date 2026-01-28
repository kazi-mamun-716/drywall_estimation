import React, { useRef } from 'react';
import { Code } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
  import { toast, ToastContainer } from 'react-toastify';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const App = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // Replace with your EmailJS IDs
    emailjs.sendForm(`${import.meta.env.VITE_EMAIL_JS_ID}`, `${import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID}`, form.current, `${import.meta.env.VITE_EMAIL_JS_PUBLIC_ID}`)
      .then(() => toast.success("Message sent successfully!, Please check your email for confirmation"), (error) => toast.error("Failed to send: " + error.text));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Navigation */}
      <Navbar/>

      {/* Hero Section */}
      <Hero/>

      {/* About Section */}
      <section id="about" className="py-20 bg-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Professional Summary</h3>
          <p className="text-lg leading-relaxed text-slate-600">
            Mechanical Engineering graduate from Sonargaon University. 
            Working in the field since 2014, I bridge the gap between engineering discipline and 
            detailed drywall quantity takeoffs. I specialize in interpreting complex blueprints 
            and preparing accurate BOQs.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">Core Expertise</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "PlanSwift (Advanced)", desc: "Expert in digital takeoffs, color-coded markups, and area calculations." },
              { title: "Estimation", desc: "Specialist in material takeoffs (Stud, Track, Gypsum, Insulation)." },
              { title: "MEP & HVAC", desc: "Technical proficiency in reviewing mechanical and electrical drawings." }
            ].map((skill, i) => (
              <div key={i} className="p-6 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition">
                <Code className="text-blue-600 mb-4" />
                <h4 className="font-bold text-xl mb-2">{skill.title}</h4>
                <p className="text-slate-600 text-sm">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <Projects />

      {/* Contact Section */}
      {/* <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-blue-600 rounded-3xl p-12 text-white shadow-2xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-4">Let's Work Together</h3>
              <p className="text-blue-100 mb-8">Available for remote contracts in North American time zones.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4"><Mail size={20}/> kazimamun716@gmail.com</div>
                <div className="flex items-center gap-4"><Linkedin size={20}/> linkedin.com/in/kazi-mamun-bd</div>
              </div>
            </div>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <input type="text" name="user_name" placeholder="Your Name" className="w-full p-3 rounded-lg text-slate-900 outline-none" required />
              <input type="email" name="user_email" placeholder="Your Email" className="w-full p-3 rounded-lg text-slate-900 outline-none" required />
              <textarea name="message" placeholder="Project Details" rows="4" className="w-full p-3 rounded-lg text-slate-900 outline-none" required></textarea>
              <button className="w-full bg-slate-900 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-black transition">
                <Send size={18}/> Send Message
              </button>
            </form>
          </div>
        </div>
      </section> */}
      <Contact form={form} sendEmail={sendEmail} />

      {/* Footer */}
      <Footer/>
      <ToastContainer />
    </div>
  );
};

export default App;