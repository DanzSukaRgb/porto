import { skills } from '../data/portfolioData.jsx';

const SkillCard = ({ skill }) => {
  return (
    <div className="group relative bg-white p-6 rounded-2xl border border-gray-200 hover:border-primary-400 hover:shadow-xl transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center group-hover:bg-primary-50 transition-colors">
          <div className="scale-75 group-hover:scale-90 transition-transform">
            {skill.icon}
          </div>
        </div>
        
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 mb-1">{skill.name}</h3>
          <p className="text-sm text-gray-600 mb-3">{skill.category}</p>
          
          <div className="flex items-center gap-2">
            <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full transition-all duration-500 ${
                  skill.level === 'Advanced' ? 'w-11/12' : 'w-8/12'
                }`}
              ></div>
            </div>
            <span className="text-xs font-medium text-gray-500">{skill.level}</span>
          </div>
        </div>
      </div>
      
      {/* Hover Effect */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-primary-50 rounded-full -z-10 transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
              Skills & Tools
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Technologies I work with
          </h2>
          <p className="text-lg text-gray-600">
            I'm constantly learning and expanding my skillset. Here are some of the technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Want to see these skills in action?</p>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            View My Projects
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Skills;
