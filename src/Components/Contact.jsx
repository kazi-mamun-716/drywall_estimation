import React from 'react'
import { Mail, Linkedin, Send } from 'lucide-react';

const Contact = ({form, sendEmail}) => {
  return (
    <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-sky-400 rounded-3xl p-12 text-white shadow-2xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-4">Let's Work Together</h3>
              <p className="text-blue-100 mb-8">Available for remote contracts in flexible time.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4"><Mail size={20}/> kazimamun716@gmail.com</div>
                <div className="flex items-center gap-4"><Linkedin size={20}/> linkedin.com/in/kazi-mamun-bd</div>
              </div>
            </div>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <input type="text" name="user_name" placeholder="Your Name" className="w-full p-3 rounded-lg text-slate-900 outline-none" required />
              <input type="email" name="user_email" placeholder="Your Email" className="w-full p-3 rounded-lg text-slate-900 outline-none" required />
              <textarea name="message" placeholder="Project Details || Your Message" rows="4" className="w-full p-3 rounded-lg text-slate-900 outline-none" required></textarea>
              <button className="w-full bg-slate-900 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-black transition cursor-pointer">
                <Send size={18}/> Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
  )
}

export default Contact