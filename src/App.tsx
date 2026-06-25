import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, MapPin, Phone, ExternalLink, Code, Database, Terminal, Award, GraduationCap, ChevronDown, GitBranch, Link2 } from 'lucide-react'
import ResumePage from './ResumePage'

// Navigation Component
function Navigation({ activeSection, setActiveSection }: { activeSection: string, setActiveSection: (section: string) => void }) {
  const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'resume', 'contact']
  
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-md border-b border-violet-200"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.h1 
            className="text-2xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            YM
          </motion.h1>
          <div className="hidden md:flex space-x-1">
            {sections.map((section) => (
              <motion.button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeSection === section 
                    ? 'bg-violet-500/20 text-violet-700' 
                    : 'text-gray-600 hover:text-violet-700 hover:bg-violet-100/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.button>
            ))}
          </div>
          <div className="flex space-x-4">
            <motion.a
              href="https://github.com/Yogendra630"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <GitBranch className="w-5 h-5 text-gray-600 hover:text-violet-700 transition-colors" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yogendra-maurya-04a510288"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link2 className="w-5 h-5 text-gray-600 hover:text-violet-700 transition-colors" />
            </motion.a>
            <motion.a
              href="mailto:yogendramaurya954@gmail.com"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="w-5 h-5 text-gray-600 hover:text-violet-700 transition-colors" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

// Hero Section
function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="text-center z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 rounded-full blur-xl opacity-50" />
              <img
                src="/images/profile.jpg"
                alt="Yogendra Maurya"
                className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-white shadow-2xl"
              />
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Yogendra Maurya
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-700 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Computer Science Engineering Student
          </motion.p>
          
          <motion.div 
            className="flex justify-center gap-6 text-gray-600 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <motion.div className="flex items-center gap-2" whileHover={{ x: 5 }}>
              <Phone className="w-4 h-4" />
              <span>+91-6307874173</span>
            </motion.div>
            <motion.div className="flex items-center gap-2" whileHover={{ x: 5 }}>
              <Mail className="w-4 h-4" />
              <span>yogendramaurya954@gmail.com</span>
            </motion.div>
            <motion.div className="flex items-center gap-2" whileHover={{ x: 5 }}>
              <MapPin className="w-4 h-4" />
              <span>Greater Noida, UP, India</span>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-gray-600 animate-bounce" />
        </motion.div>
      </div>
    </section>
  )
}

// About Section
function AboutSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6">
      <motion.div 
        className="max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        
        <motion.div 
          className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-violet-200 shadow-lg"
          whileHover={{ scale: 1.02, borderColor: 'rgba(139, 92, 246, 0.5)' }}
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            Motivated Computer Science undergraduate seeking an SDE / Frontend Developer role where I can apply my 
            problem-solving skills, contribute to real-world projects, and continuously grow as an engineer.
          </p>
          
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <motion.div 
              className="text-center p-6 bg-gradient-to-br from-violet-100 to-purple-100 rounded-xl border border-violet-200"
              whileHover={{ scale: 1.05 }}
            >
              <GraduationCap className="w-12 h-12 mx-auto mb-4 text-violet-600" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Education</h3>
              <p className="text-gray-600">B.Tech in Computer Science</p>
              <p className="text-gray-600">Expected: May 2027</p>
            </motion.div>
            
            <motion.div 
              className="text-center p-6 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl border border-purple-200"
              whileHover={{ scale: 1.05 }}
            >
              <Code className="w-12 h-12 mx-auto mb-4 text-purple-600" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Focus</h3>
              <p className="text-gray-600">Frontend Development</p>
              <p className="text-gray-600">Machine Learning</p>
            </motion.div>
            
            <motion.div 
              className="text-center p-6 bg-gradient-to-br from-pink-100 to-rose-100 rounded-xl border border-pink-200"
              whileHover={{ scale: 1.05 }}
            >
              <Award className="w-12 h-12 mx-auto mb-4 text-pink-600" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Achievements</h3>
              <p className="text-gray-600">Infosys Certified</p>
              <p className="text-gray-600">84.25% in Class XII</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

// Experience Section
function ExperienceSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6">
      <motion.div 
        className="max-w-4xl w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        
        <motion.div 
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500" />
          
          <motion.div 
            className="ml-16 relative"
            whileHover={{ x: 10 }}
          >
            <div className="absolute -left-10 top-0 w-5 h-5 bg-purple-500 rounded-full border-4 border-[#e5eaf5]" />
            
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-purple-200 shadow-lg mb-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Python Developer Intern</h3>
                  <p className="text-purple-600">CodSoft, India (Remote)</p>
                </div>
                <span className="text-gray-600 mt-2 md:mt-0">Jan 2024 – Mar 2024</span>
              </div>
              
              <ul className="space-y-3">
                {[
                  'Built 3 ML classification and prediction models achieving up to 92% accuracy on 10,000+ record datasets',
                  'Improved model prediction accuracy by 15% through feature engineering, hyperparameter tuning, and cross-validation',
                  'Delivered PEP8-compliant, well-documented code; visualized model performance with Matplotlib dashboards'
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start gap-3 text-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <span className="text-purple-600 mt-1">▹</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

// Projects Section
function ProjectsSection() {
  const projects = [
    {
      title: 'GitHub Profile Analyzer',
      tech: ['React', 'Vite', 'Chart.js', 'Framer Motion', 'GitHub REST API', 'CSS'],
      description: 'Engineered a responsive SPA consuming the GitHub REST API to deliver instant profile analytics — solving scattered developer data discovery — with search history and profile bookmarks.',
      features: [
        'Built interactive Chart.js dashboards (language distribution + star trends) with Framer Motion animations',
        'Dark/light mode toggle, and lazy-loaded repo list with language filters',
        'Deployed to Netlify via CI/CD pipeline; achieved mobile-first responsive layout'
      ],
      color: 'from-violet-500 to-purple-500'
    },
    {
      title: 'Stock Price Prediction',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
      description: 'Trained Linear Regression, Random Forest, and SVR models on 5+ years of market data achieving 89% accuracy.',
      features: [
        'Applied RSI and lag-based feature engineering to boost signal quality',
        'Multiple ML models for comprehensive analysis',
        'Data visualization with Matplotlib'
      ],
      color: 'from-pink-500 to-rose-500'
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6">
      <motion.div 
        className="max-w-6xl w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-violet-200 shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.03, borderColor: 'rgba(139, 92, 246, 0.5)' }}
            >
              <div className={`h-2 bg-gradient-to-r ${project.color} rounded-full mb-6`} />
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{project.title}</h3>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-violet-100 rounded-full text-sm text-violet-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <p className="text-gray-700 mb-6">{project.description}</p>
              
              <ul className="space-y-2">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                    <span className="text-violet-600 mt-1">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <motion.a
                href="#"
                className="inline-flex items-center gap-2 mt-6 text-violet-600 hover:text-violet-800 transition-colors"
                whileHover={{ x: 5 }}
              >
                <Code className="w-4 h-4" />
                <span>View Code</span>
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

// Skills Section
function SkillsSection() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Terminal,
      skills: ['Java', 'Python', 'JavaScript'],
      color: 'text-violet-600',
      gradient: 'from-violet-100 to-purple-100',
      border: 'border-violet-200'
    },
    {
      title: 'CS Fundamentals',
      icon: Code,
      skills: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'Operating Systems'],
      color: 'text-purple-600',
      gradient: 'from-purple-100 to-pink-100',
      border: 'border-purple-200'
    },
    {
      title: 'Web & Frontend',
      icon: Code,
      skills: ['React', 'HTML5', 'CSS', 'Chart.js', 'Vite'],
      color: 'text-pink-600',
      gradient: 'from-pink-100 to-rose-100',
      border: 'border-pink-200'
    },
    {
      title: 'ML & Data Science',
      icon: Database,
      skills: ['Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Linear Regression', 'Classification'],
      color: 'text-cyan-600',
      gradient: 'from-cyan-100 to-blue-100',
      border: 'border-cyan-200'
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MySQL', 'MongoDB'],
      color: 'text-amber-600',
      gradient: 'from-amber-100 to-orange-100',
      border: 'border-amber-200'
    },
    {
      title: 'Tools & Platforms',
      icon: Terminal,
      skills: ['Git', 'GitHub', 'VS Code', 'Netlify', 'AWS', 'Docker'],
      color: 'text-emerald-600',
      gradient: 'from-emerald-100 to-teal-100',
      border: 'border-emerald-200'
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6">
      <motion.div 
        className="max-w-6xl w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Technical Skills
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                className={`bg-gradient-to-br ${category.gradient} backdrop-blur-md rounded-2xl p-6 border ${category.border}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <Icon className={`w-8 h-8 ${category.color}`} />
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1.5 bg-white/60 rounded-lg text-sm text-gray-700"
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.9)' }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}

// Education Section
function EducationSection() {
  const education = [
    {
      institution: 'Noida Institute of Engineering and Technology (NIET)',
      degree: 'Bachelor of Technology (B.Tech.) in Computer Science',
      location: 'Greater Noida, UP',
      year: 'Expected: May 2027',
      icon: GraduationCap,
      color: 'from-violet-500 to-purple-500'
    },
    {
      institution: 'Ma Durga Ji Senior Secondary Vidyalaya',
      degree: 'Higher Secondary Certificate (Class XII) — Science',
      location: 'Jaunpur, UP',
      year: '2021',
      grade: '84.25%',
      icon: Award,
      color: 'from-purple-500 to-pink-500'
    },
    {
      institution: 'Ma Durga Ji Senior Secondary Vidyalaya',
      degree: 'Secondary School Certificate (Class X)',
      location: 'Jaunpur, UP',
      year: '2019',
      grade: '83.24%',
      icon: Award,
      color: 'from-pink-500 to-rose-500'
    }
  ]

  const certifications = [
    'Infosys Springboard Certified — Data Structures & Algorithms using Java (2024)',
    'Infosys Springboard Certified — Object-Oriented Programming (OOP) using Python (2024)'
  ]

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6">
      <motion.div 
        className="max-w-4xl w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
            Education & Certifications
          </span>
        </h2>
        
        <div className="space-y-6 mb-12">
          {education.map((edu, index) => {
            const Icon = edu.icon
            return (
              <motion.div
                key={edu.institution}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, borderColor: 'rgba(255,255,255,0.3)' }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${edu.color}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1 text-gray-800">{edu.institution}</h3>
                    <p className="text-gray-700 mb-2">{edu.degree}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span>{edu.location}</span>
                      <span>{edu.year}</span>
                      {edu.grade && <span className="text-emerald-600">Grade: {edu.grade}</span>}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
        
        <motion.div
          className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-amber-200 shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-800">
            <Award className="w-6 h-6 text-amber-600" />
            Certifications
          </h3>
          
          <ul className="space-y-4">
            {certifications.map((cert, index) => (
              <motion.li
                key={cert}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <span className="text-amber-600 mt-1">✓</span>
                <span className="text-gray-700">{cert}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  )
}

// Contact Section
function ContactSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6">
      <motion.div 
        className="max-w-4xl w-full text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>
        
        <p className="text-xl text-gray-700 mb-12">
          I'm currently looking for internship and full-time opportunities. 
          Feel free to reach out!
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <motion.a
            href="mailto:yogendramaurya954@gmail.com"
            className="bg-gradient-to-br from-violet-100 to-purple-100 backdrop-blur-md rounded-2xl p-8 border border-violet-200 shadow-lg"
            whileHover={{ scale: 1.05, borderColor: 'rgba(139, 92, 246, 0.5)' }}
          >
            <Mail className="w-12 h-12 mx-auto mb-4 text-violet-600" />
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Email</h3>
            <p className="text-gray-600">yogendramaurya954@gmail.com</p>
          </motion.a>
          
          <motion.a
            href="tel:+916307874173"
            className="bg-gradient-to-br from-purple-100 to-pink-100 backdrop-blur-md rounded-2xl p-8 border border-purple-200 shadow-lg"
            whileHover={{ scale: 1.05, borderColor: 'rgba(168, 85, 247, 0.5)' }}
          >
            <Phone className="w-12 h-12 mx-auto mb-4 text-purple-600" />
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Phone</h3>
            <p className="text-gray-600">+91-6307874173</p>
          </motion.a>
          
          <motion.a
            href="https://linkedin.com/in/yogendra-maurya-04a510288"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-pink-100 to-rose-100 backdrop-blur-md rounded-2xl p-8 border border-pink-200 shadow-lg"
            whileHover={{ scale: 1.05, borderColor: 'rgba(236, 72, 153, 0.5)' }}
          >
            <Link2 className="w-12 h-12 mx-auto mb-4 text-pink-600" />
            <h3 className="text-lg font-semibold mb-2 text-gray-800">LinkedIn</h3>
            <p className="text-gray-600">Connect with me</p>
          </motion.a>
        </div>
        
        <motion.div
          className="flex justify-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.a
            href="https://github.com/Yogendra630"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-white/60 rounded-full hover:bg-white/90 transition-colors text-gray-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <GitBranch className="w-5 h-5" />
            <span>GitHub</span>
          </motion.a>
          
          <motion.a
            href="https://linkedin.com/in/yogendra-maurya-04a510288"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-white/60 rounded-full hover:bg-white/90 transition-colors text-gray-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link2 className="w-5 h-5" />
            <span>LinkedIn</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

// Main App Component
export default function App() {
  const [activeSection, setActiveSection] = useState('home')

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HeroSection />
      case 'about':
        return <AboutSection />
      case 'experience':
        return <ExperienceSection />
      case 'projects':
        return <ProjectsSection />
      case 'skills':
        return <SkillsSection />
      case 'education':
        return <EducationSection />
      case 'resume':
        return <ResumePage />
      case 'contact':
        return <ContactSection />
      default:
        return <HeroSection />
    }
  }

  return (
    <div className="min-h-screen overflow-x-hidden relative" style={{ backgroundColor: '#e5eaf5' }}>
      {/* Aesthetic Gradient Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#e5eaf5] via-[#d5dbe8] to-[#e5eaf5]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-300/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-300/20 rounded-full blur-3xl" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
        
        <AnimatePresence mode="wait">
          <motion.main
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderSection()}
          </motion.main>
        </AnimatePresence>
        
        {/* Footer */}
        <footer className="py-8 text-center text-gray-600 text-sm relative z-10">
          <p>© 2024 Yogendra Maurya. All rights reserved.</p>
          <p className="mt-2">Built with React, Framer Motion & Tailwind CSS</p>
        </footer>
      </div>
    </div>
  )
}
