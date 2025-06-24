import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Calendar, Users, MessageCircle, Plane, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Task Manager Pro',
      description: 'A comprehensive task management application built with React and Node.js. Features include task creation, assignment, deadlines, and team collaboration.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      icon: Calendar,
      color: 'from-blue-500 to-cyan-500',
      features: ['Task Assignment', 'Deadline Tracking', 'Team Collaboration', 'Progress Analytics'],
      longDescription: 'A full-featured task management system designed for teams and individuals. Built with modern React patterns and a robust Node.js backend, this application provides real-time updates, advanced filtering, and comprehensive project analytics.',
      demoUrl: 'https://github.com/Jaydeepkumar0p/todo-y',
      githubUrl: 'https://github.com/Jaydeepkumar0p/todo-y'
    },
    {
      title: 'Real-Time Chat App',
      description: 'A modern chat application with real-time messaging, file sharing, and group chat functionality using Socket.io and React.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      icon: MessageCircle,
      color: 'from-green-500 to-teal-500',
      features: ['Real-time Messaging', 'File Sharing', 'Group Chats', 'Online Status'],
      longDescription: 'A sophisticated real-time chat application featuring instant messaging, file uploads, emoji support, and group management. Built with Socket.io for seamless real-time communication and React for a responsive user interface.',
      demoUrl: 'https://full-stack-chatapp-jwu6.onrender.com/',
      githubUrl: 'https://github.com/Jaydeepkumar0p/full-stack-chatapp'
    },
    {
      title: 'CRM Platform',
      description: 'Customer Relationship Management system with lead tracking, sales pipeline, and analytics dashboard for businesses.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'PostgreSQL', 'Node.js', 'Chart.js'],
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      features: ['Lead Management', 'Sales Pipeline', 'Analytics Dashboard', 'Customer Insights'],
      longDescription: 'A comprehensive CRM solution designed for small to medium businesses. Features advanced lead tracking, sales pipeline management, detailed analytics, and customer relationship tools to help businesses grow and maintain customer relationships.',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Travel Advisor',
      description: 'Travel planning application with destination recommendations, weather information, and booking integration.',
      image: 'https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'APIs', 'Node.js', 'MongoDB'],
      icon: Plane,
      color: 'from-orange-500 to-red-500',
      features: ['Destination Search', 'Weather Integration', 'Travel Planning', 'Reviews & Ratings'],
      longDescription: 'An intelligent travel planning platform that helps users discover destinations, plan itineraries, check weather conditions, and read reviews. Integrates with multiple APIs to provide comprehensive travel information and booking capabilities.',
      demoUrl: '#',
      githubUrl: '#'
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

  const projectVariants = {
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

  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      rotateY: -15,
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.3,
        ease: [0.6, -0.05, 0.01, 0.99],
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      rotateY: 15,
      transition: {
        duration: 0.2,
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-slate-800/50 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={projectVariants} className="text-center mb-16">
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold text-white mb-4"
              whileInView={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
            </motion.h2>
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-4"
              initial={{ width: 0 }}
              animate={inView ? { width: 80 } : { width: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Here are some of the projects I've worked on, showcasing my skills in full-stack development
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={projectVariants}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-slate-600 transition-all duration-300 group cursor-pointer relative"
                whileHover={{ 
                  y: -10,
                  rotateY: 5,
                  scale: 1.02,
                }}
                style={{ transformStyle: 'preserve-3d' }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Hover glow effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
                />

                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 sm:h-56 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <motion.div 
                    className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-r ${project.color} rounded-lg flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <project.icon className="w-6 h-6 text-white" />
                  </motion.div>
                </div>

                <div className="p-6 relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <motion.div 
                          key={featureIndex} 
                          className="flex items-center text-sm text-gray-300"
                          initial={{ opacity: 0, x: -10 }}
                          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                          transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                        >
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-700/70 backdrop-blur-sm text-gray-300 text-sm rounded-full border border-slate-600 hover:border-blue-500 transition-colors duration-300"
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <motion.button 
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex-1 justify-center relative overflow-hidden group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.3 }}
                      />
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </motion.button>
                    <motion.button 
                      className="flex items-center space-x-2 px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-blue-400 hover:text-blue-400 transition-all duration-300 flex-1 justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-700"
              style={{ transformStyle: 'preserve-3d' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 sm:h-80 object-cover rounded-t-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent rounded-t-2xl"></div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-slate-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-slate-900 transition-colors duration-300"
                >
                  <X size={20} />
                </button>
                <div className={`absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-r ${selectedProject.color} rounded-xl flex items-center justify-center shadow-lg`}>
                  <selectedProject.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {selectedProject.longDescription}
                </p>

                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-slate-700 text-gray-300 text-sm rounded-full border border-slate-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Key Features</h3>
                    <div className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href={selectedProject.demoUrl}
                    className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex-1"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={20} />
                    <span>View Live Demo</span>
                  </motion.a>
                  <motion.a
                    href={selectedProject.githubUrl}
                    className="flex items-center justify-center space-x-2 px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-blue-400 hover:text-blue-400 transition-all duration-300 flex-1"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={20} />
                    <span>View Source Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;