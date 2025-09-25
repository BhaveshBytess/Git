import React, { useState, useEffect } from 'react';
import { ChevronDown, Instagram, Mail, Phone, Star, ArrowRight, Play, Pause } from 'lucide-react';

const SkincarePortfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [visibleElements, setVisibleElements] = useState(new Set());

  // Mock data
  const services = [
    {
      title: "Custom Routine Consult",
      description: "Personalized skincare routine designed for your unique skin type",
      price: "$89",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop"
    },
    {
      title: "Vitamin C Serum",
      description: "Brightens + protects against environmental damage",
      price: "$45",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=300&fit=crop"
    },
    {
      title: "Hydrating Cleanser",
      description: "Gentle cleanse that maintains your skin's natural barrier",
      price: "$28",
      image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=400&h=300&fit=crop"
    },
    {
      title: "Skin Analysis Session",
      description: "Deep-dive consultation to understand your skin's needs",
      price: "$65",
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=300&fit=crop"
    }
  ];

  const testimonials = [
    {
      quote: "My skin has never looked better! The routine is so simple yet effective.",
      name: "Sarah M.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b2e6237e?w=80&h=80&fit=crop&crop=face"
    },
    {
      quote: "Finally found products that work for my sensitive skin. Game changer!",
      name: "Emma K.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    },
    {
      quote: "The consultation was worth every penny. My acne cleared up in weeks!",
      name: "Jessica L.",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=80&h=80&fit=crop&crop=face"
    }
  ];

  const instagramPosts = [
    { id: 1, image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop", caption: "Morning routine essentials" },
    { id: 2, image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&h=300&fit=crop", caption: "Vitamin C benefits" },
    { id: 3, image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=300&h=300&fit=crop", caption: "Gentle cleansing tips" },
    { id: 4, image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=300&h=300&fit=crop", caption: "Skin analysis results" },
    { id: 5, image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300&h=300&fit=crop", caption: "Evening skincare ritual" },
    { id: 6, image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=300&h=300&fit=crop", caption: "Natural ingredients spotlight" }
  ];

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Intersection observer for animations
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
          setTimeout(() => {
            setVisibleElements(prev => new Set([...prev, index]));
          }, index * 100);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Testimonial carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F5F2] text-[#333333] overflow-x-hidden">
      {/* Custom cursor styles */}
      

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#F8F5F2]/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight">GlowSkin</div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-[#A3B18A] transition-colors">About</a>
            <a href="#services" className="hover:text-[#A3B18A] transition-colors">Services</a>
            <a href="#gallery" className="hover:text-[#A3B18A] transition-colors">Gallery</a>
            <a href="#contact" className="hover:text-[#A3B18A] transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video/Image */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=1080&fit=crop"
            alt="Skincare routine"
            className="w-full h-full object-cover parallax-bg"
            style={{
              transform: `translateY(${window.scrollY * 0.5}px)`
            }}
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-4xl px-6">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-up">
            Skin That Glows,<br />Naturally
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-up" style={{animationDelay: '0.5s'}}>
            Curated skincare for your routine—rooted in science, inspired by nature
          </p>
          <button className="bg-[#A3B18A] hover:bg-[#8FA176] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 animate-fade-up" style={{animationDelay: '1s'}}>
            Explore My Routine
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white w-8 h-8" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="animate-on-scroll">
            <img 
              src="https://images.unsplash.com/photo-1494790108755-2616b2e6237e?w=600&h=700&fit=crop&crop=face"
              alt="About portrait"
              className={`rounded-lg shadow-lg w-full max-w-md mx-auto ${
                visibleElements.has(0) ? 'animate-fade-in' : 'opacity-0'
              }`}
            />
          </div>
          <div className={`animate-on-scroll ${
            visibleElements.has(1) ? 'animate-slide-right' : 'opacity-0'
          }`}>
            <h2 className="text-5xl font-bold mb-6">About Me</h2>
            <p className="text-lg mb-6 leading-relaxed font-serif">
              I’m Yayati — a skincare and makeup enthusiast, passionate about creating engaging, high-quality video content with honest reviews that explore in-depth benefits,
            </p>
            
            
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 animate-on-scroll">Services & Products</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-serif">
              Carefully curated treatments and products for your skin's unique journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`group bg-[#F8F5F2] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-on-scroll ${
                  visibleElements.has(index + 2) ? 'animate-fade-up' : 'opacity-0'
                }`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4 font-serif">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-[#A3B18A]">{service.price}</span>
                    <button className="bg-[#A3B18A] hover:bg-[#8FA176] text-white px-4 py-2 rounded-full text-sm transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Gallery */}
      <section id="gallery" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">From My Instagram</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-serif">
              Daily skincare tips, product reviews, and behind-the-scenes content
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {instagramPosts.map((post, index) => (
              <div 
                key={post.id}
                className={`group relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll ${
                  visibleElements.has(index + 6) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <img 
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <p className="mb-2 font-serif">{post.caption}</p>
                    <div className="flex items-center justify-center space-x-2 text-sm">
                      <Instagram className="w-4 h-4" />
                      <span>View on Instagram</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Client Love</h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative h-48 flex items-center justify-center">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ${
                    index === currentTestimonial ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  <div className="text-center">
                    <div className="flex justify-center mb-6">
                      <img 
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    </div>
                    <blockquote className="text-2xl font-serif italic mb-4 text-gray-700">
                      "{testimonial.quote}"
                    </blockquote>
                    <cite className="text-lg font-semibold text-[#A3B18A]">
                      — {testimonial.name}
                    </cite>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Testimonial Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-[#A3B18A]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6">Let's Chat</h2>
              <p className="text-xl text-gray-600 font-serif">
                DM me on Instagram or fill out the form below
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name</label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#A3B18A] focus:ring-2 focus:ring-[#A3B18A]/20 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input 
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#A3B18A] focus:ring-2 focus:ring-[#A3B18A]/20 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#A3B18A] focus:ring-2 focus:ring-[#A3B18A]/20 transition-all resize-none"
                    placeholder="Tell me about your skin goals..."
                  ></textarea>
                </div>
                <button className="w-full bg-[#A3B18A] hover:bg-[#8FA176] text-white py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-[1.02] flex items-center justify-center space-x-2">
                  <span>Send Message</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                  <div className="space-y-4">
                    <a href="mailto:thebluntbabee@gmail.com" className="flex items-center space-x-3 hover:text-[#A3B18A] transition-colors">
                      <Mail className="w-5 h-5" />
                      <span>thebluntbabee@gmail.com</span>
                    </a>
                    
                    <a href="https://instagram.com/thebluntbabee" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-[#A3B18A] transition-colors">
                      <Instagram className="w-5 h-5" />
                      <span>@thebluntbabee</span>
                    </a>
                  </div>
                </div>
                
                <div className="bg-[#A3B18A]/10 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">Book a Consultation</h4>
                  <p className="text-sm text-gray-600 mb-4 font-serif">
                    Ready to transform your skin? Let's create a personalized routine that works for you.
                  </p>
                  <button className="text-[#A3B18A] font-semibold hover:underline">
                    Schedule Now →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#333333] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="text-3xl font-bold mb-4">GlowSkin</div>
            <p className="text-gray-400 mb-6 font-serif">
              Skin that glows, naturally
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="https://instagram.com/thebluntbabee" target="_blank" rel="noopener noreferrer"><Instagram className="w-6 h-6 hover:text-[#A3B18A] transition-colors cursor-pointer" /></a>
              <a href="mailto:thebluntbabee@gmail.com"><Mail className="w-6 h-6 hover:text-[#A3B18A] transition-colors cursor-pointer" /></a>
            </div>
            <div className="text-sm text-gray-500">
              © 2024 GlowSkin. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SkincarePortfolio;