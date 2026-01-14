const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-full max-w-md mx-auto">
                <div className="aspect-square bg-gray-200 rounded-3xl overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <svg className="w-48 h-48 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-200 rounded-2xl -z-10"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-100 rounded-2xl -z-10"></div>
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-8 py-4 rounded-2xl shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">3+</div>
                  <div className="text-sm text-gray-600">Years of Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                About Me
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Turning ideas into real life products is my calling
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Hey there! I'm Danu, a passionate developer who loves building things for the web. 
                I started my journey in web development 3 years ago, and it's been an amazing ride ever since.
              </p>
              
              <p>
                My main focus these days is building accessible, user-centered products with <span className="font-semibold text-gray-900">React</span> and modern web technologies. 
                I also enjoy working with <span className="font-semibold text-gray-900">Laravel</span> for backend development 
                and <span className="font-semibold text-gray-900">Flutter</span> for mobile apps.
              </p>

              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source, 
                or sharing what I've learned with the developer community.
              </p>
            </div>

            {/* Skills Tags */}
            <div className="mt-8 flex flex-wrap gap-3">
              {['React', 'Laravel', 'Flutter', 'JavaScript', 'Tailwind CSS', 'MySQL', 'Git'].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-primary-400 transition-colors">
                  {skill}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-primary-600 font-medium hover:gap-3 transition-all"
              >
                Let's work together
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
