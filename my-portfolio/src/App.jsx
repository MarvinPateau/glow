import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentSkill, setCurrentSkill] = useState(0)

  const skills = [
    'Développeur Frontend',
    'Designer UI/UX',
    'Créateur d\'expériences',
    'Innovateur Digital'
  ]

  useEffect(() => {
    setIsLoaded(true)
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    
    const skillInterval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length)
    }, 3000)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clearInterval(skillInterval)
    }
  }, [])

  return (
    <div className="app">
      {/* Cursor follower */}
      <div 
        className="cursor-glow"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`
        }}
      />
      
      {/* Floating particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`particle particle-${i}`} />
        ))}
      </div>

      {/* Main content */}
      <div className={`container ${isLoaded ? 'loaded' : ''}`}>
        <div className="hero-section">
          <div className="profile-container">
            <div className="profile-image">
              <div className="profile-ring"></div>
              <div className="profile-avatar">
                <span>👨‍💻</span>
              </div>
            </div>
          </div>

          <h1 className="title">
            <span className="title-line">Bonjour, je suis</span>
            <span className="title-name">Alex Dupont</span>
          </h1>
          
          <div className="skill-container">
            <span className="skill-text">
              {skills[currentSkill]}
            </span>
          </div>

          <p className="subtitle">
            Je crée des expériences numériques exceptionnelles qui allient 
            créativité, technologie et innovation pour donner vie à vos idées.
          </p>

          <div className="cta-buttons">
            <button className="btn btn-primary">
              <span>Découvrir mon travail</span>
              <div className="btn-glow"></div>
            </button>
            <button className="btn btn-secondary">
              <span>Me contacter</span>
            </button>
          </div>

          <div className="social-links">
            <a href="#" className="social-link">
              <span>GitHub</span>
            </a>
            <a href="#" className="social-link">
              <span>LinkedIn</span>
            </a>
            <a href="#" className="social-link">
              <span>Twitter</span>
            </a>
          </div>
        </div>

        {/* Stats section */}
        <div className="stats-section">
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Projets réalisés</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">3+</div>
            <div className="stat-label">Années d'expérience</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Satisfaction client</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <div className="scroll-line"></div>
          <span>Scroll pour explorer</span>
        </div>
      </div>
    </div>
  )
}

export default App