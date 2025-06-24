import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  Database, 
  Globe, 
  Server, 
  GitBranch, 
  Terminal,
  Layers,
  Coffee
} from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      category: 'Frontend',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML5/CSS3', level: 95 },
        { name: 'Tailwind CSS', level: 80 }
      ]
    },
    {
      category: 'Backend',
      icon: Server,
      color: 'from-green-500 to-teal-500',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'PostgreSQL', level: 70 }
      ]
    },
    {
      category: 'Programming',
      icon: Code,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'JavaScript', level: 85 },
        { name: 'C++', level: 80 },
        { name: 'Java', level: 75 },
        { name: 'Python', level: 65 }
      ]
    },
    {
      category: 'Tools & Others',
      icon: Terminal,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git/GitHub', level: 85 },
        { name: 'Socket.io', level: 70 },
        { name: 'Docker', level: 60 },
        { name: 'AWS', level: 55 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={cardVariants} className="text-center mb-16">
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold text-white mb-4"
              whileInView={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
            </motion.h2>
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-4"
              initial={{ width: 0 }}
              animate={inView ? { width: 80 } : { width: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
            {skills.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                variants={cardVariants}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600 transition-all duration-300 group relative overflow-hidden"
                whileHover={{ 
                  y: -10,
                  rotateY: 5,
                  scale: 1.02,
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Hover glow effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
                />

                <div className="flex items-center mb-6 relative z-10">
                  <motion.div 
                    className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-4 shadow-lg`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 360,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white">{category.category}</h3>
                </div>

                <div className="space-y-4 relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <motion.span 
                          className="text-gray-400 text-sm"
                          initial={{ opacity: 0 }}
                          animate={inView ? { opacity: 1 } : { opacity: 0 }}
                          transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5 }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-2 bg-gradient-to-r ${category.color} rounded-full relative`}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: [0.6, -0.05, 0.01, 0.99],
                          }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-white/20 rounded-full"
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "linear",
                              delay: categoryIndex * 0.2 + skillIndex * 0.1 + 1,
                            }}
                          />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Enhanced Technologies Section */}
          <motion.div variants={cardVariants} className="mt-16">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {[
                'React', 'Node.js', 'MongoDB', 'Express.js', 'PostgreSQL', 
                'JavaScript', 'C++', 'Java', 'Git', 'GitHub', 'Socket.io',
                'Tailwind CSS', 'HTML5', 'CSS3', 'REST APIs'
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                  animate={inView ? { 
                    opacity: 1, 
                    scale: 1, 
                    rotateY: 0 
                  } : { 
                    opacity: 0, 
                    scale: 0.8, 
                    rotateY: -90 
                  }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.05,
                    ease: [0.6, -0.05, 0.01, 0.99],
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    y: -5,
                    rotateY: 10,
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                  }}
                  className="px-3 sm:px-4 py-2 bg-slate-800/70 backdrop-blur-sm text-gray-300 rounded-full border border-slate-600 hover:border-blue-500 hover:text-blue-400 transition-all duration-300 cursor-default text-sm sm:text-base"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;