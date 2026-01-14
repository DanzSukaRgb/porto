import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks for reaching out! This is a demo form.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left - Info */}
          <div>
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                Get in Touch
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Let's work together
            </h2>
            
            <p className="text-lg text-gray-600 mb-12">
              Have a project in mind or just want to chat? Feel free to reach out. 
              I'm always open to discussing new projects and opportunities.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">danu@example.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                  <p className="text-gray-600">Indonesia</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Response Time</h4>
                  <p className="text-gray-600">Within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-4">Follow me on</p>
              <div className="flex gap-3">
                {['Github', 'LinkedIn', 'Twitter', 'Instagram'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 bg-gray-100 hover:bg-gray-900 text-gray-600 hover:text-white rounded-lg flex items-center justify-center transition-all"
                  >
                    <span className="sr-only">{social}</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-gray-50 p-8 lg:p-12 rounded-3xl border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 text-white font-semibold py-4 px-6 rounded-xl hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 group"
              >
                Send Message
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
