const Hero = ({ onNavigateToDocs }) => {
  const scrollToSection = (sectionId) => {
    if (sectionId === 'docs' && onNavigateToDocs) {
      onNavigateToDocs();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-white overflow-hidden pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-2 h-2 bg-primary-500 rounded-full"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-primary-400 rounded-full"></div>
          <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-primary-300 rounded-full"></div>
          <div className="absolute top-60 right-1/3 w-4 h-4 bg-primary-200 rounded-full"></div>
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-primary-50/30 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                👋 Welcome to my portfolio
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Danu</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-primary-300/50 -rotate-1"></span>
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-700 mb-4 font-medium">
              Frontend Developer
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
              I craft beautiful and functional web experiences. Currently focused on building responsive applications with React and modern web technologies.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="group px-8 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-all flex items-center gap-2"
              >
                View My Work
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-gray-900 text-gray-900 font-medium rounded-lg hover:bg-gray-900 hover:text-white transition-all"
              >
                Get in Touch
              </button>
            </div>

            <div className="flex items-center gap-6 mt-12 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-gray-900">3+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div>
                <div className="text-3xl font-bold text-gray-900">20+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div>
                <div className="text-3xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image/Illustration Placeholder */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square">
              {/* Abstract Shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-primary-50 to-transparent rounded-[3rem] rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-primary-200/50 to-transparent rounded-[3rem] -rotate-6"></div>
              
              {/* Center Circle - Replace with your image */}
              <div className="absolute inset-0 m-auto w-80 h-80 bg-white rounded-full shadow-2xl flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-32 h-32 mx-auto text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm text-gray-400 mt-2">Your Photo Here</p>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-10 right-10 w-16 h-16 bg-white rounded-2xl shadow-lg p-3 transform rotate-12 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div className="absolute bottom-20 left-10 w-16 h-16 bg-white rounded-2xl shadow-lg p-3 transform -rotate-12 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <div className="absolute top-1/2 -right-4 w-16 h-16 bg-white rounded-2xl shadow-lg p-3 transform rotate-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
