import { projects } from '../data/portfolioData.jsx';

const ProjectCard = ({ project, index }) => {
  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-primary-400 transition-all duration-300">
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex gap-3">
              <a
                href={project.demoLink}
                className="px-4 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors text-sm"
              >
                Live Demo
              </a>
              <a
                href={project.codeLink}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg font-medium hover:bg-white/20 transition-colors text-sm border border-white/20"
              >
                View Code
              </a>
            </div>
          </div>
        </div>

        {/* Number Badge */}
        <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
          <span className="text-lg font-bold text-gray-900">#{index + 1}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-gray-50 border border-gray-200 text-gray-700 text-xs font-medium rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
              Portfolio
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600">
            A collection of projects I've worked on. Each one taught me something new and helped me grow as a developer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View More */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Have a project in mind?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            Let's Talk
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
