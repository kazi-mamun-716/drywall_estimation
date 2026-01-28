import React from 'react'

const Navbar = () => {
    return (
        <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <img 
  src="/assets/logo.png" 
  alt="The KMR Logo" 
  className="h-12 w-auto object-contain" 
  title="The KMR"
/>
                <div className="space-x-8 hidden md:flex font-medium">
                    <a href="#home" className="hover:text-blue-600 transition">Home</a>
                    <a href="#about" className="hover:text-blue-600 transition">About</a>
                    <a href="#skills" className="hover:text-blue-600 transition">Skills</a>
                    <a href="#portfolio" className="hover:text-blue-600 transition">Portfolio</a>
                    <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar