import { skills } from '../data/portfolioData.jsx';

const SkillCard = ({ skill }) => {
  return (
    <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-100 hover:border-primary-400">
      <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        {skill.icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{skill.name}</h3>
      <p className="text-sm text-primary-600 font-medium mb-2 text-center">{skill.category}</p>
      <div className="flex items-center">
        <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r from-primary-500 to-green-500 rounded-full transition-all duration-1000 ${
              skill.level === 'Advanced' ? 'w-11/12' : 'w-8/12'
            }`}
          ></div>
        </div>
        <span className="ml-3 text-xs text-gray-600">{skill.level}</span>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
