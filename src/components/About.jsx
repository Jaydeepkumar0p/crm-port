import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, MapPin, Calendar, Award, Code, Coffee, Heart } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, rotateX: -15 },
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

  const stats = [
    { number: '2+', label: 'Years Learning', icon: Calendar },
    { number: '10+', label: 'Projects Built', icon: Code },
    { number: '5+', label: 'Technologies', icon: Award },
    { number: '∞', label: 'Cups of Coffee', icon: Coffee },
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/50 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold text-white mb-4"
              whileInView={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
            </motion.h2>
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={inView ? { width: 80 } : { width: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div variants={itemVariants}>
              <div className="relative group">
                <motion.div 
                  className="w-full h-96 rounded-2xl overflow-hidden shadow-2xl relative"
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 10,
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <motion.img
                    src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="About Jaydeep"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
                  
                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                  }}
                >
                  <Award className="w-12 h-12 text-white" />
                </motion.div>

                {/* Floating elements */}
                <motion.div
                  className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                  animate={{
                    y: [-10, 10, -10],
                    x: [-5, 5, -5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute top-10 -right-8 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
                  animate={{
                    y: [10, -10, 10],
                    x: [5, -5, 5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <motion.h3 
                  className="text-2xl sm:text-3xl font-bold text-white mb-4"
                  whileInView={{ scale: [0.9, 1.05, 1] }}
                  transition={{ duration: 0.5 }}
                >
                  Passionate Full Stack Developer
                </motion.h3>
                <motion.p 
                  className="text-gray-300 text-lg leading-relaxed mb-6"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  I'm a dedicated Computer Science student with a passion for creating innovative 
                  web applications. My journey in programming started with curiosity and has evolved 
                  into a deep love for building solutions that make a difference.
                </motion.p>
                <motion.p 
                  className="text-gray-300 text-lg leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  I specialize in the MERN stack and enjoy working with modern technologies 
                  to create seamless user experiences and robust backend systems.
                </motion.p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {[
                  { icon: GraduationCap, label: 'Education', value: 'Chandigarh University', color: 'from-blue-500 to-cyan-500' },
                  { icon: MapPin, label: 'Location', value: 'Ramgarh, Jharkhand', color: 'from-green-500 to-teal-500' },
                  { icon: Calendar, label: 'Experience', value: '2+ Years Learning', color: 'from-purple-500 to-pink-500' },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    variants={itemVariants}
                    className="flex items-center space-x-4 p-4 bg-slate-700/50 backdrop-blur-sm rounded-lg border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300 group"
                    whileHover={{ 
                      scale: 1.02,
                      y: -2,
                    }}
                  >
                    <motion.div 
                      className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <p className="text-gray-400 text-sm">{item.label}</p>
                      <p className="text-white font-semibold">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-slate-600 transition-all duration-300 group"
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  rotateY: 5,
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>
                <motion.h3 
                  className="text-3xl font-bold text-white mb-2"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.5, type: "spring" }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-gray-400 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Personal Touch */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <motion.div
              className="inline-flex items-center space-x-2 px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700/50"
              whileHover={{ scale: 1.05 }}
            >
              <Heart className="w-5 h-5 text-red-500 fill-current" />
              <span className="text-gray-300">Coding with passion, building with purpose</span>
              <Coffee className="w-5 h-5 text-yellow-500" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;