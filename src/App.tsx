import profileImage from './assets/profile pic.png';
import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Code, 
  User, 
  Briefcase, 
  FolderOpen, 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  ExternalLink,
  ChevronRight,
  Database,
  Cloud,
  Cpu,
  Globe,
  Zap,
  Moon,
  Sun
} from 'lucide-react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [terminalText, setTerminalText] = useState('');
  const [currentSection, setCurrentSection] = useState('home');

  const fullText = "jyothika@portfolio:~$ whoami\n> Aspiring Software Engineer | Full-Stack & AI/ML Developer\njyothika@portfolio:~$ cat mission.txt\n> Turning ideas into efficient, intelligent solutions.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTerminalText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const skills = [
    { category: 'Languages', items: ['Python', 'Java', 'C++', 'C', 'C#', 'JavaScript'], icon: Code, level: 85 },
    { category: 'Web Development', items: ['HTML', 'CSS', 'Node.js', 'React.js', 'Express.js'], icon: Globe, level: 80 },
    { category: 'AI/ML', items: ['TensorFlow', 'Keras', 'YOLO', 'OpenCV'], icon: Cpu, level: 75 },
    { category: 'Databases', items: ['MySQL', 'H2 SQL', 'MongoDB (Basics)'], icon: Database, level: 70 },
    { category: 'Testing/Tools', items: ['Postman', 'Selenium', 'Git', 'JUnit (Basics)', 'Agile Workflow'], icon: Cloud, level: 75 },
    { category: 'Operating Systems', items: ['Windows', 'Linux'], icon: Terminal, level: 70 },
    { category: 'Data Structures & Algorithms', items: ['Arrays', 'Linked Lists', 'Stacks', 'Queues', 'Trees', 'Graphs', 'Algorithm Optimization'], icon: Zap, level: 80 },
    { category: 'DevOps & Cloud', items: ['Azure', 'AWS', 'Git', 'CI/CD (Basics)'], icon: Cloud, level: 85 },
    { category: 'Soft Skills', items: ['Analytical Thinking', 'Problem Solving', 'Communication', 'Adaptability', 'Critical Thinking', 'Attention to Detail'], icon: User, level: 85 },
  ];

  const projects = [
    {
      title: 'Weapon Detection using Deep Learning',
      description: 'Real-time detection system using YOLO, CNNs, and TensorFlow. Optimized for high accuracy across various environments with advanced computer vision techniques.',
      tech: ['Python', 'YOLO', 'TensorFlow', 'OpenCV', 'Deep Learning'],
      github: 'https://github.com/jyothikakokkula3/Weapon-Detection',
      type: 'AI/ML'
    },
    {
      title: 'Job Portal Management System',
      description: 'Full-stack job portal featuring user authentication, job posting capabilities, and comprehensive admin dashboard. Built with modern web technologies.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript'],
      github: 'https://github.com/jyothikakokkula3/Job-Portal',
      type: 'Full-Stack'
    }
  ];

  const themeClasses = isDarkMode 
    ? 'bg-gray-900 text-gray-100' 
    : 'bg-gray-50 text-gray-900';

  const cardClasses = isDarkMode 
    ? 'bg-gray-800 border-gray-700' 
    : 'bg-white border-gray-200';

  const accentColor = isDarkMode ? 'text-green-400' : 'text-blue-600';

  return (
    <div className={`min-h-screen transition-colors duration-300 ${themeClasses}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md border-b transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-900/80 border-gray-800' : 'bg-gray-50/80 border-gray-200'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Terminal className={`w-6 h-6 ${accentColor}`} />
              <span className="font-mono text-lg font-semibold">jyothika.dev</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`font-mono text-sm transition-colors hover:${accentColor.replace('text-', 'text-')} ${
                    currentSection === item ? accentColor : ''
                  }`}
                >
                  ./{item}
                </button>
              ))}
            </div>

            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'
              }`}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="pt-20 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div>
              <div className={`${cardClasses} border rounded-lg p-6 font-mono text-sm mb-8`}>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-500">terminal</span>
                </div>
                <div className="whitespace-pre-wrap">
                  {terminalText}
                  <span className={`animate-pulse ${accentColor}`}>|</span>
                </div>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                <span className={accentColor}>const</span> developer = {'{'}
                <br />
                <span className="ml-4">name: <span className="text-orange-400">"Jyothika Kokkula"</span>,</span>
                <br />
                <span className="ml-4">role: <span className="text-orange-400">"Software Engineer"</span></span>
                <br />
                {'}'}
              </h1>

              <button
                onClick={() => scrollToSection('projects')}
                className={`group flex items-center space-x-2 ${accentColor} hover:underline font-mono transition-all`}
              >
                <span>view_projects()</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="flex justify-center">
              <div className={`${cardClasses} border rounded-lg p-8 text-center`}>
                <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-gray-200 dark:border-gray-700">
                  <img 
                    src={profileImage} 
                    alt="Jyothika Kokkula" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-mono text-lg font-semibold mb-2">Jyothika Kokkula</h3>
                <p className="text-gray-500 font-mono text-sm">B.Tech CSE Graduate 2025</p>
                <div className="flex justify-center space-x-4 mt-4">
                  <a href="https://github.com/jyothikakokkula3" target="_blank" rel="noopener noreferrer" 
                     className={`${accentColor} hover:opacity-70 transition-opacity`}>
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/in/jyothika-kokkula/" target="_blank" rel="noopener noreferrer"
                     className={`${accentColor} hover:opacity-70 transition-opacity`}>
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-mono mb-12 flex items-center">
            <User className={`w-8 h-8 mr-3 ${accentColor}`} />
            about.json
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className={`${cardClasses} border rounded-lg p-6`}>
              <h3 className="font-mono text-lg font-semibold mb-4 flex items-center">
                <Code className={`w-5 h-5 mr-2 ${accentColor}`} />
                bio.txt
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                I'm Jyothika Kokkula, a Software Engineer passionate about Full-Stack Web Development 
                and AI/ML technologies. I enjoy building scalable, meaningful applications that combine 
                logic, design, and intelligent automation.
              </p>
              
              <div className="space-y-3">
                <h4 className="font-mono font-semibold">Career Goals:</h4>
                <div className="space-y-2 font-mono text-sm">
                  {['Software Engineer', 'Full-Stack Developer', 'AI/ML Developer'].map((role, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <ChevronRight className={`w-4 h-4 ${accentColor}`} />
                      <span>{role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={`${cardClasses} border rounded-lg p-6`}>
              <h3 className="font-mono text-lg font-semibold mb-4">education.log</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-green-400 pl-4">
                  <h4 className="font-semibold">B.Tech Computer Science Engineering</h4>
                  <p className="text-sm text-gray-500">Christu Jyothi Institute of Technology and Science</p>
                  <p className="text-sm font-mono text-green-400">2021 - 2025</p>
                </div>
                <div className="border-l-2 border-blue-400 pl-4">
                  <h4 className="font-semibold">Intermediate</h4>
                  <p className="text-sm text-gray-500">ABV Junior College</p>
                  <p className="text-sm font-mono text-blue-400">2019 - 2021</p>
                </div>
                <div className="border-l-2 border-purple-400 pl-4">
                  <h4 className="font-semibold">Secondary Education</h4>
                  <p className="text-sm text-gray-500">Telangana Model School</p>
                  <p className="text-sm font-mono text-purple-400">2018 - 2019</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-mono mb-12 flex items-center">
            <Briefcase className={`w-8 h-8 mr-3 ${accentColor}`} />
            experience.js
          </h2>

          <div className={`${cardClasses} border rounded-lg p-8`}>
            <div className="flex items-start space-x-6">
              <div className={`w-16 h-16 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-lg flex items-center justify-center flex-shrink-0`}>
                <Briefcase className={`w-8 h-8 ${accentColor}`} />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h3 className="text-xl font-bold">Virtual Internship</h3>
                  <span className={`px-2 py-1 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded text-xs font-mono`}>
                    May 2025
                  </span>
                </div>
                <p className={`${accentColor} font-semibold mb-4`}>JPMorgan Chase & Co</p>
                
                <div className="space-y-2 mb-6 font-mono text-sm">
                  <p>• Spring Boot microservices for financial transactions using Kafka & REST APIs</p>
                  <p>• Integrated SQL, tested APIs with Postman</p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {['Java', 'Spring Boot', 'Kafka', 'H2 SQL', 'REST API', 'Postman'].map((tech, index) => (
                    <span key={index} className={`px-3 py-1 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full text-xs font-mono`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-mono mb-12 flex items-center">
            <FolderOpen className={`w-8 h-8 mr-3 ${accentColor}`} />
            projects/
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`${cardClasses} border rounded-lg p-6 hover:shadow-lg transition-all duration-300 group`}>
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-2 py-1 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded text-xs font-mono`}>
                    {project.type}
                  </span>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${accentColor} hover:opacity-70 transition-opacity`}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
                
                <h3 className="text-xl font-bold mb-3 font-mono">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className={`px-2 py-1 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded text-xs font-mono`}>
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center space-x-2 ${accentColor} hover:underline font-mono text-sm group-hover:translate-x-1 transition-transform`}
                >
                  <span>view_code()</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-mono mb-12 flex items-center">
            <Zap className={`w-8 h-8 mr-3 ${accentColor}`} />
            skills.config
          </h2>

          <div className="space-y-8">
            {skills.map((skillGroup, index) => {
              const IconComponent = skillGroup.icon;
              return (
                <div key={index} className={`${cardClasses} border rounded-lg p-6`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <IconComponent className={`w-6 h-6 ${accentColor}`} />
                      <h3 className="text-lg font-bold font-mono">{skillGroup.category}</h3>
                    </div>
                    <span className="font-mono text-sm text-gray-500">{skillGroup.level}%</span>
                  </div>
                  
                  <div className={`w-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2 mb-4`}>
                    <div 
                      className={`h-2 rounded-full transition-all duration-1000 ${
                        isDarkMode ? 'bg-green-400' : 'bg-blue-600'
                      }`}
                      style={{ width: `${skillGroup.level}%` }}
                    ></div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span key={skillIndex} className={`px-3 py-1 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full text-sm font-mono`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-mono mb-12 flex items-center">
            <Mail className={`w-8 h-8 mr-3 ${accentColor}`} />
            contact.me
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className={`${cardClasses} border rounded-lg p-6`}>
                <h3 className="font-mono text-lg font-semibold mb-4">get_in_touch()</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Let's discuss opportunities and collaborate on exciting projects!
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className={`w-5 h-5 ${accentColor}`} />
                    <a href="mailto:jyothikakokkula3@gmail.com" className={`${accentColor} hover:underline font-mono`}>
                      jyothikakokkula3@gmail.com
              
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Linkedin className={`w-5 h-5 ${accentColor}`} />
                    <a href="https://www.linkedin.com/in/jyothika-kokkula/" target="_blank" rel="noopener noreferrer" 
                       className={`${accentColor} hover:underline font-mono`}>
                      linkedin.com/in/jyothika-kokkula
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Github className={`w-5 h-5 ${accentColor}`} />
                    <a href="https://github.com/jyothikakokkula3" target="_blank" rel="noopener noreferrer"
                       className={`${accentColor} hover:underline font-mono`}>
                      github.com/jyothikakokkula3
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${cardClasses} border rounded-lg p-6`}>
              <h3 className="font-mono text-lg font-semibold mb-4">send_message()</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-mono mb-2">name:</label>
                  <input 
                    type="text" 
                    className={`w-full px-4 py-2 border rounded-lg font-mono text-sm transition-colors ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 focus:border-green-400' 
                        : 'bg-white border-gray-300 focus:border-blue-600'
                    } focus:outline-none focus:ring-1`}
                    placeholder="your_name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-mono mb-2">email:</label>
                  <input 
                    type="email" 
                    className={`w-full px-4 py-2 border rounded-lg font-mono text-sm transition-colors ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 focus:border-green-400' 
                        : 'bg-white border-gray-300 focus:border-blue-600'
                    } focus:outline-none focus:ring-1`}
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-mono mb-2">message:</label>
                  <textarea 
                    rows={4}
                    className={`w-full px-4 py-2 border rounded-lg font-mono text-sm transition-colors resize-none ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 focus:border-green-400' 
                        : 'bg-white border-gray-300 focus:border-blue-600'
                    } focus:outline-none focus:ring-1`}
                    placeholder="your_message_here..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className={`w-full py-2 rounded-lg font-mono text-sm transition-colors ${
                    isDarkMode 
                      ? 'bg-green-400 text-gray-900 hover:bg-green-500' 
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  submit()
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`border-t py-12 px-6 ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Terminal className={`w-6 h-6 ${accentColor}`} />
            <span className="font-mono text-lg font-semibold">jyothika.dev</span>
          </div>
          <p className="text-gray-500 font-mono text-sm mb-6">
            © 2025 Jyothika Kokkula. Built with React & Tailwind CSS
          </p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:jyothikakokkula3@gmail.com" className={`${accentColor} hover:opacity-70 transition-opacity`}>
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/jyothika-kokkula/" target="_blank" rel="noopener noreferrer" 
               className={`${accentColor} hover:opacity-70 transition-opacity`}>
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/jyothikakokkula3" target="_blank" rel="noopener noreferrer"
               className={`${accentColor} hover:opacity-70 transition-opacity`}>
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;