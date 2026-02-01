import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, CheckCircle2, Code, TestTube, Sparkles } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const experiences = [
    {
      title: "QA/UAT",
      company: "Q.Labs",
      period: "Jul 2025 - Present",
      location: "Nepal · Hybrid",
      type: "Full-time",
      description: "Conducted product and web application testing to ensure functionality, usability, and performance",
      skills: ["Bug Tracking", "Agile Methodologies", "Web Testing", "Performance Testing"]
    },
    {
      title: "Quality Assurance Intern",
      company: "HiUp Solutions",
      period: "Feb 2025 - Jul 2025",
      location: "Kathmandu, Nepal",
      type: "Internship",
      description: "Gained hands-on experience in quality assurance processes and customer support",
      skills: ["Agile Methodologies", "Customer Support", "Software Testing"]
    }
  ];

  const skills = [
    { category: "Testing", items: ["Manual Testing", "Automated Testing", "Bug Tracking", "Performance Testing", "Usability Testing"] },
    { category: "Methodologies", items: ["Agile", "Scrum", "Test-Driven Development"] },
    { category: "Technical", items: ["HTML", "CSS", "JavaScript", "React", "Software Testing Tools"] },
    { category: "Soft Skills", items: ["Customer Support", "Problem Solving", "Attention to Detail", "Communication"] }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
      color: '#e0e0e0',
      fontFamily: "'Outfit', 'Segoe UI', sans-serif",
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated background gradient following mouse */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: 0,
        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.08), transparent 40%)`,
        transition: 'background 0.3s ease'
      }} />

      {/* Noise texture overlay */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: 1,
        opacity: 0.03,
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")'
      }} />

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 40px',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Header */}
        <header style={{
          padding: '60px 0 40px',
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(-20px)',
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            <div>
              <h1 style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: '700',
                margin: 0,
                background: 'linear-gradient(135deg, #ffffff 0%, #a855f7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-0.02em',
                fontFamily: "'Clash Display', 'Outfit', sans-serif"
              }}>
                Pingala Ghimire
              </h1>
              <p style={{
                fontSize: '1.3rem',
                color: '#9ca3af',
                margin: '8px 0 0',
                fontWeight: '300',
                letterSpacing: '0.02em'
              }}>
                Quality Assurance Engineer
              </p>
            </div>
            
            <div style={{
              display: 'flex',
              gap: '16px',
              alignItems: 'center'
            }}>
              {[
                { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/pingala-ghimire' },
                { icon: <Github size={20} />, href: 'https://github.com/pingala1' },
                { icon: <Mail size={20} />, href: 'mailto:pingalaghimire555@gmail.com' }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(168, 85, 247, 0.1)',
                    border: '1px solid rgba(168, 85, 247, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#a855f7',
                    textDecoration: 'none',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(168, 85, 247, 0.2)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(168, 85, 247, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(168, 85, 247, 0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </header>

        {/* Navigation */}
        <nav style={{
          marginBottom: '60px',
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(-20px)',
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s'
        }}>
          <div style={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap',
            background: 'rgba(255, 255, 255, 0.03)',
            padding: '8px',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)'
          }}>
            {['about', 'experience', 'skills', 'education'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                style={{
                  padding: '12px 28px',
                  borderRadius: '12px',
                  border: 'none',
                  background: activeSection === section 
                    ? 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)'
                    : 'transparent',
                  color: activeSection === section ? '#ffffff' : '#9ca3af',
                  fontSize: '0.95rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'capitalize',
                  fontFamily: 'inherit',
                  letterSpacing: '0.01em'
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== section) {
                    e.currentTarget.style.background = 'rgba(168, 85, 247, 0.1)';
                    e.currentTarget.style.color = '#a855f7';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== section) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#9ca3af';
                  }
                }}
              >
                {section}
              </button>
            ))}
          </div>
        </nav>

        {/* Content Sections */}
        <main style={{
          minHeight: '60vh',
          paddingBottom: '80px'
        }}>
          {/* About Section */}
          {activeSection === 'about' && (
            <section style={{
              animation: 'fadeInUp 0.6s ease-out',
              maxWidth: '900px'
            }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '24px',
                padding: '48px',
                backdropFilter: 'blur(10px)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-50%',
                  right: '-10%',
                  width: '300px',
                  height: '300px',
                  background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
                  borderRadius: '50%',
                  filter: 'blur(60px)'
                }} />
                
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '8px',
                    marginBottom: '24px',
                    padding: '8px 16px',
                    background: 'rgba(168, 85, 247, 0.1)',
                    borderRadius: '20px',
                    border: '1px solid rgba(168, 85, 247, 0.2)'
                  }}>
                    <Sparkles size={16} style={{ color: '#a855f7' }} />
                    <span style={{ fontSize: '0.85rem', color: '#a855f7', fontWeight: '500' }}>About Me</span>
                  </div>
                  
                  <h2 style={{
                    fontSize: '2.2rem',
                    fontWeight: '700',
                    margin: '0 0 24px',
                    color: '#ffffff',
                    lineHeight: '1.2',
                    fontFamily: "'Clash Display', 'Outfit', sans-serif"
                  }}>
                    Ensuring Quality,<br />Building Trust
                  </h2>
                  
                  <div style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.8',
                    color: '#d1d5db',
                    marginBottom: '32px'
                  }}>
                    <p style={{ margin: '0 0 20px' }}>
                      I'm a dedicated Quality Assurance Engineer based in Nepal with a passion for 
                      creating flawless digital experiences. Currently working at Q.Labs, I specialize 
                      in comprehensive testing strategies that ensure products meet the highest 
                      standards of functionality, usability, and performance.
                    </p>
                    <p style={{ margin: '0' }}>
                      With a strong foundation in Computer Science and Information Technology from 
                      Himalayan College of Engineering, I combine technical expertise with meticulous 
                      attention to detail to deliver exceptional quality assurance solutions.
                    </p>
                  </div>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                    gap: '20px',
                    marginTop: '32px'
                  }}>
                    {[
                      { label: 'Location', value: 'Nepal' },
                      { label: 'Experience', value: '1+ Year' },
                      { label: 'Focus', value: 'QA & Testing' }
                    ].map((item, idx) => (
                      <div key={idx} style={{
                        padding: '20px',
                        background: 'rgba(168, 85, 247, 0.05)',
                        borderRadius: '16px',
                        border: '1px solid rgba(168, 85, 247, 0.1)'
                      }}>
                        <div style={{ fontSize: '0.85rem', color: '#9ca3af', marginBottom: '4px' }}>
                          {item.label}
                        </div>
                        <div style={{ fontSize: '1.1rem', fontWeight: '600', color: '#ffffff' }}>
                          {item.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Experience Section */}
          {activeSection === 'experience' && (
            <section style={{
              animation: 'fadeInUp 0.6s ease-out'
            }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '700',
                marginBottom: '32px',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontFamily: "'Clash Display', 'Outfit', sans-serif"
              }}>
                <TestTube size={32} style={{ color: '#a855f7' }} />
                Experience
              </h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {experiences.map((exp, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '20px',
                      padding: '36px',
                      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                      cursor: 'pointer',
                      backdropFilter: 'blur(10px)',
                      position: 'relative',
                      overflow: 'hidden',
                      animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(8px)';
                      e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.3)';
                      e.currentTarget.style.background = 'rgba(168, 85, 247, 0.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                    }}
                  >
                    <div style={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: '4px',
                      background: 'linear-gradient(180deg, #a855f7 0%, #7c3aed 100%)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease'
                    }} />
                    
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
                      <div>
                        <h3 style={{
                          fontSize: '1.4rem',
                          fontWeight: '700',
                          margin: '0 0 8px',
                          color: '#ffffff'
                        }}>
                          {exp.title}
                        </h3>
                        <p style={{
                          margin: 0,
                          color: '#a855f7',
                          fontWeight: '600'
                        }}>
                          {exp.company}
                        </p>
                      </div>
                      
                      <div style={{ textAlign: 'right' }}>
                        <p style={{ margin: '0 0 4px', color: '#d1d5db', fontSize: '0.95rem' }}>
                          {exp.period}
                        </p>
                        <p style={{ margin: 0, color: '#6b7280', fontSize: '0.85rem' }}>
                          {exp.location} · {exp.type}
                        </p>
                      </div>
                    </div>
                    
                    <p style={{
                      color: '#d1d5db',
                      lineHeight: '1.6',
                      margin: '0 0 20px'
                    }}>
                      {exp.description}
                    </p>
                    
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {exp.skills.map((skill, skillIdx) => (
                        <span
                          key={skillIdx}
                          style={{
                            padding: '6px 12px',
                            background: 'rgba(168, 85, 247, 0.1)',
                            borderRadius: '20px',
                            fontSize: '0.8rem',
                            color: '#a855f7',
                            border: '1px solid rgba(168, 85, 247, 0.2)'
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Skills Section */}
          {activeSection === 'skills' && (
            <section style={{
              animation: 'fadeInUp 0.6s ease-out'
            }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '700',
                marginBottom: '32px',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontFamily: "'Clash Display', 'Outfit', sans-serif"
              }}>
                <Code size={32} style={{ color: '#a855f7' }} />
                Skills & Expertise
              </h2>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                {skills.map((skillGroup, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '20px',
                      padding: '32px',
                      animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`
                    }}
                  >
                    <h3 style={{
                      fontSize: '1.2rem',
                      fontWeight: '700',
                      margin: '0 0 16px',
                      color: '#a855f7'
                    }}>
                      {skillGroup.category}
                    </h3>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {skillGroup.items.map((skill, skillIdx) => (
                        <div key={skillIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <CheckCircle2 size={16} style={{ color: '#22c55e' }} />
                          <span style={{ color: '#d1d5db' }}>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Education Section */}
          {activeSection === 'education' && (
            <section style={{
              animation: 'fadeInUp 0.6s ease-out',
              maxWidth: '900px'
            }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '700',
                marginBottom: '32px',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontFamily: "'Clash Display', 'Outfit', sans-serif"
              }}>
                <ExternalLink size={32} style={{ color: '#a855f7' }} />
                Education
              </h2>
              
              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '20px',
                padding: '36px',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-50%',
                  right: '-10%',
                  width: '200px',
                  height: '200px',
                  background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
                  borderRadius: '50%',
                  filter: 'blur(50px)'
                }} />
                
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    margin: '0 0 12px',
                    color: '#ffffff'
                  }}>
                    Bachelor of Computer Engineering
                  </h3>
                  <p style={{
                    margin: '0 0 8px',
                    color: '#a855f7',
                    fontWeight: '600'
                  }}>
                    Himalayan College of Engineering, Kathmandu
                  </p>
                  <p style={{
                    margin: '0 0 24px',
                    color: '#9ca3af'
                  }}>
                    2021 – 2025
                  </p>
                  
                  <div style={{
                    color: '#d1d5db',
                    lineHeight: '1.7',
                    marginBottom: '24px'
                  }}>
                    <p style={{ margin: '0 0 16px' }}>
                      Completed a comprehensive computer engineering program with focus on software 
                      development, testing methodologies, and quality assurance principles.
                    </p>
                    <p style={{ margin: '0' }}>
                      Developed strong technical foundation in programming, web development, and 
                      software testing tools, complemented by practical project experience.
                    </p>
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '12px'
                  }}>
                    {['HTML', 'JavaScript', 'CSS', 'React', 'Software Testing', 'Agile Methodologies'].map((skill, idx) => (
                      <span
                        key={idx}
                        style={{
                          padding: '10px 18px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          borderRadius: '10px',
                          fontSize: '0.9rem',
                          color: '#d1d5db',
                          fontWeight: '500'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}
        </main>

        {/* Footer */}
        <footer style={{
          textAlign: 'center',
          padding: '40px 0',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          color: '#6b7280',
          fontSize: '0.9rem'
        }}>
          <p style={{ margin: '0 0 12px' }}>
            © 2026 Pingala Ghimire. Built with passion for quality.
          </p>
          <p style={{ margin: 0 }}>
            Let's connect and create something amazing together.
          </p>
        </footer>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');
        @import url('https://api.fontshare.com/v2/css?f[]=clash-display@700,600,500&display=swap');
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          overflow-x: hidden;
        }
        
        ::selection {
          background: rgba(168, 85, 247, 0.3);
          color: #ffffff;
        }
        
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: #0a0a0a;
        }
        
        ::-webkit-scrollbar-thumb {
          background: rgba(168, 85, 247, 0.5);
          border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(168, 85, 247, 0.7);
        }
      `}</style>
    </div>
  );
}
