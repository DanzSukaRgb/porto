const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden bg-gradient-to-br from-primary-400 to-green-600 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                  <svg
                    className="w-40 h-40 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary-600 text-white px-6 py-3 rounded-full shadow-lg">
                <span className="font-semibold">Developer</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Hello! I'm Danu
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              I'm a passionate Full Stack Developer with expertise in building modern web applications
              and mobile solutions. With a strong foundation in both frontend and backend development,
              I create seamless digital experiences that users love.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              My primary focus is on <span className="text-primary-600 font-semibold">React JS</span> for
              building dynamic and responsive user interfaces, <span className="text-primary-600 font-semibold">Laravel</span> for
              robust backend solutions, and <span className="text-primary-600 font-semibold">Flutter</span> for
              cross-platform mobile applications.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm always eager to learn new technologies and tackle challenging projects. My goal is to
              write clean, maintainable code and deliver products that make a real impact.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-primary-50 rounded-lg">
                <div className="text-3xl font-bold text-primary-600">3+</div>
                <div className="text-sm text-gray-600 mt-1">Years Exp</div>
              </div>
              <div className="text-center p-4 bg-primary-50 rounded-lg">
                <div className="text-3xl font-bold text-primary-600">20+</div>
                <div className="text-sm text-gray-600 mt-1">Projects</div>
              </div>
              <div className="text-center p-4 bg-primary-50 rounded-lg">
                <div className="text-3xl font-bold text-primary-600">15+</div>
                <div className="text-sm text-gray-600 mt-1">Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
