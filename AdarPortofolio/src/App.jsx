
import { useEffect, useMemo, useState } from 'react'
import './App.css'
import presT from './assets/PresT.jpg'
import Behealthy from './assets/Behealthy.jpg'
import adarImg from './assets/adar.jpg'
import reactIcon from './assets/react.svg'
import Reservasi from './assets/Reservasi.png'
import Mido from './assets/Mido.jpg'

function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved) {
      setTheme(saved)
      document.documentElement.dataset.theme = saved
      return
    }
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initialTheme = prefersDark ? 'dark' : 'light'
    setTheme(initialTheme)
    document.documentElement.dataset.theme = initialTheme
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const projects = useMemo(
    () => [
      {
        title: 'PresT',
        stack: 'Figma',
        description:
          'Website untuk manajement poin keaktifan siswa SMK Telkom Makassar',
        tag: 'UI/UX Design',
        image: presT,
      },
      {
        title: 'Be-Healthy',
        stack: 'Tailwind, Laravel, MongoDB',
        description:
          'Website penjualan produk kesehatan dengan fitur rekomendasi berbasis preferensi pengguna untuk update stok real-time dan juga memiliki fitur cek kesehatan.',
        tag: 'UI/UX Design, Fullstack',
        image: Behealthy,
      },

      {
        title: 'Reservasi Restorant',
        stack: 'Java, MySQL',
        description:
          'Website untuk reservasi restoran dengan fitur pemesanan meja secara online dan manajemen menu.',
        tag: 'UI/UX Design, Fullstack',
        image: Reservasi,
      },

      {
        title: 'MIDO Smart Plant',
        stack: 'Arduino, C++',
        description:
          'Website untuk monitoring dan kontrol sistem irigasi otomatis berbasis IoT dengan fitur pemantauan kelembaban tanah dan pengaturan jadwal penyiraman.',
        tag: 'IoT',
        image: Mido,
      },
    ],
    [],
  )

  const skills = useMemo(
    () => [
      {
        title: 'Programming Language',
        icon: '💻',
        items: [
          { name: 'HTML', level: 91 },
          { name: 'CSS', level: 87 },
          { name: 'JavaScript', level: 76 },
          { name: 'PHP', level: 79 },
          { name: 'Python', level: 80 },
          { name: 'Java', level: 76 },
          { name: 'C/C++', level: 82 },
          { name: 'Dart', level: 67 },
        ],
      },
      {
        title: 'Framework & Libraries',
        icon: '🧩',
        items: [
          { name: 'Laravel', level: 79 },
          { name: 'React', level: 70 },
          { name: 'Node.js', level: 78 },
          { name: 'Express', level: 74 },
          { name: 'Flutter', level: 63 },
        ],
      },
      {
        title: 'Database & Tools',
        icon: '🗃️',
        items: [
          { name: 'MySQL', level: 88 },
          { name: 'MongoDB', level: 85 },
          { name: 'Git & GitHub', level: 75 },
          
        ],
      },
      {
        title: 'Design & Dev Tools',
        icon: '🎨',
        items: [
          { name: 'Figma', level: 85 },
          { name: 'Canva', level: 90 },
          { name: 'VS Code', level: 83 },
          { name: 'Netbeans IDE', level: 68 },
          { name: 'Dev C/C++', level: 76 },
          { name: 'Arduino IDE', level: 76 },
        ],
      },
    ],
    [],
  )

  const experiences = useMemo(
    () => [
      {
        role: 'IT Support',
        company: 'Universitas Negeri Makassar',
        period: 'Jan - Mar 2022',
        highlights: [
          'Instalasi software untuk lab kampus di gedung utama.',
          'Pemasangan dan konfigurasi jaringan LAN untuk 5 ruangan.',
          'Pembuatan Dashboard Website Absensi mahasiswa ',
        ],
        stack: '-',
        photos: [
          {
            src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80',
            alt: 'Team collaboration session',
          },
          {
            src: 'https://images.unsplash.com/photo-1522071901873-411886a10004?auto=format&fit=crop&w=900&q=80',
            alt: 'Sprint planning board',
          },
        ],
      },
     
    ],
    [],
  )

  const organizations = useMemo(
    () => [
      {
        title: 'Anggota Divisi PDD',
        org: 'HMIT Telkom University Jakarta',
        detail: 'Bertanggung jawab dalam pengelolaan publikasi digital, pembuatan desain visual, serta dokumentasi kegiatan organisasi. Berperan dalam menjaga konsistensi identitas visual dan meningkatkan engagement media sosial himpunan.',
        photo: 'https://images.unsplash.com/photo-1528892952291-009c663ce843?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Anggota',
        org: 'GDOC Telkom University Jakarta',
        detail: 'Berpartisipasi dalam pengembangan proyek teknologi dan kolaborasi antar anggota untuk menciptakan solusi inovatif di bidang IT.',
        photo: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
      },
    ],
    [],
  )

  // certificates removed per request

  return (
    <div className="page">
      <header className="nav">
        <div className="container nav-inner">
          <div className="logo-mark">Adar Sarx</div>
          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#organization">Organization</a>
            <a href="#contact" className="button small">Contact</a>
          </nav>
          <button
            className="theme-toggle"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="eyebrow">Information Technology Student</p>
            <h1>
              Hi, I’m <span>Adar Sarx Christian Firdaus Junior</span>
            </h1>
            <p className="subtitle">
              FrontEnd Developer | UI/UX Enthusiast | AI & IoT Explorer
            </p>
            <p className="description">
              Saya membangun produk digital dengan performa tinggi, UI yang rapi,
              dan alur interaksi yang efisien. Fokus pada solusi modern berbasis
              data dan teknologi terkini.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="button primary">
                View Projects
              </a>
              <a href="#contact" className="button ghost">
                Get in Touch
              </a>
            </div>
            <div className="hero-socials">
              <a className="icon-pill" href="https://share.google/I7IkorQTDfK2SZuUr" target="_blank" rel="noopener noreferrer" title="LinkedIn">ln</a>
              <a className="icon-pill" href="https://medium.com/@adar.sarx" target="_blank" rel="noopener noreferrer" title="Medium">md</a>
              <a className="icon-pill" href="https://github.com/AdarSarx" target="_blank" rel="noopener noreferrer" title="GitHub">gh</a>
              <a className="icon-pill" href="https://www.instagram.com/adar_sarx?igsh=a2xhd2Npemc4emZ1&utm_source=qr" target="_blank" rel="noopener noreferrer" title="Instagram">ig</a>
            </div>
            <div className="badge-row">
              <span>Web Development</span>
              <span>UI/UX Design</span>
              <span>AI Integration</span>
              <span>IoT Systems</span>
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-avatar" aria-hidden="true">
              AS
            </div>
            <div className="hero-meta">
              <p className="hero-label">Campus</p>
              <p>Telkom University Jakarta</p>
              <p className="hero-label">Focus</p>
              <p>Web Developer • UI/UX • AI • IoT</p>
            </div>
            <div className="hero-stats">
              <div>
                <p className="stat-number"></p>
                <p className="stat-label">Projects</p>
              </div>
              <div>
                <p className="stat-number"></p>
                <p className="stat-label">Internships</p>
              </div>
              <div>
                <p className="stat-number"></p>
                <p className="stat-label">Tools</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-blob" aria-hidden="true" />
      </section>

      <section id="about" className="section">
        <div className="container two-col">
          <div>
            <p className="section-kicker">About Me</p>
            <h2 className="section-title">
              <span>About</span> Me
            </h2>
            <p>
              Saya mahasiswa Teknologi Informasi yang fokus membangun aplikasi web
              modern dari riset kebutuhan, desain antarmuka, hingga implementasi dan
              optimasi. Saya menyukai tantangan untuk membuat produk yang cepat,
              aman, dan mudah digunakan.
            </p>
            <div className="info-grid">
              <div className="info-card">
                <p className="label">Education</p>
                <p>Telkom University Jakarta</p>
              </div>
              <div className="info-card">
                <p className="label">Major</p>
                <p>Information Technology</p>
              </div>
              <div className="info-card">
                <p className="label">Location</p>
                <p>Jakarta, Indonesia</p>
              </div>
              <div className="info-card">
                <p className="label">Status</p>
                <p>Undergraduate Student</p>
              </div>
            </div>
          </div>
          <div className="about-card">
            <img className="about-photo" src={adarImg} alt="Adar Sarx" />
            <h3>Adar Sarx Christian Firdaus Junior</h3>
            <p className="muted">
              Telkom University Jakarta • Information Technology
            </p>
            <p>
              Passionate about building modern web products and crafting delightful
              UI/UX experiences backed by data and emerging technologies.
            </p>
            <div className="about-badges">
              <span>Web Dev</span>
              <span>UI/UX</span>
              <span>AI</span>
              <span>IoT</span>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section alt">
        <div className="container">
          <div className="section-head">
            <p className="section-kicker">Technical Skills</p>
            <h2 className="section-title">
              <span>Technical</span> Skills
            </h2>
            <p>Kompetensi teknis utama untuk membangun produk end-to-end.</p>
          </div>
          <div className="skill-grid">
            {skills.map((group) => (
              <div key={group.title} className="card">
                <div className="skill-head">
                  <span className="skill-icon">{group.icon}</span>
                  <h3>{group.title}</h3>
                </div>
                <div className="skill-list">
                  {group.items.map((item) => (
                    <div key={item.name} className="skill-item">
                      <div className="skill-row">
                        <span>{item.name}</span>
                        <span>{item.level}%</span>
                      </div>
                      <div className="progress">
                        <span style={{ width: `${item.level}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <div className="section-head">
            <p className="section-kicker">Featured Projects</p>
            <h2 className="section-title">
              <span>Featured</span> Projects
            </h2>
            <p>Proyek kuliah dan pribadi yang menonjolkan aspek teknis dan impact.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article key={project.title} className="card project-card">
                {project.image ? (
                  <img className="project-thumb" src={project.image} alt={project.title + ' screenshot'} />
                ) : (
                  <div className={`project-thumb thumb-${index + 1}`} />
                )}
                <h3>{project.title}</h3>
                <span className="project-tag">{project.tag}</span>
                <p className="stack">{project.stack}</p>
                <p>{project.description}</p>
                <div className="project-actions">
                  <button className="chip">Demo</button>
                  <button className="chip">Repo</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section alt">
        <div className="container">
          <div className="section-head">
            <p className="section-kicker">Work Experience</p>
            <h2 className="section-title">
              <span>Work</span> Experience
            </h2>
            <p>Pengalaman magang dengan impact terukur dan fokus engineering.</p>
          </div>
          <div className="timeline">
            {experiences.map((exp) => (
              <div key={exp.role} className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content card">
                  <div className="timeline-header">
                    <div>
                      <h3>{exp.role}</h3>
                      <p className="company">{exp.company}</p>
                    </div>
                    <span className="period">{exp.period}</span>
                  </div>
                  <ul>
                    {exp.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="experience-photos">
                    {exp.photos.map((photo) => (
                      <figure key={photo.src} className="photo-card">
                        <img src={photo.src} alt={photo.alt} loading="lazy" />
                      </figure>
                    ))}
                  </div>
                  <p className="stack">Tech stack: {exp.stack}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="organization" className="section">
        <div className="container">
          <div className="section-head">
            <p className="section-kicker">Organizations & Leadership</p>
            <h2 className="section-title">
              <span>Organizations</span> & Leadership
            </h2>
            <p>Kontribusi organisasi kampus yang memperkuat leadership dan teamwork.</p>
          </div>
          <div className="org-grid">
            {organizations.map((org) => (
              <div key={org.title} className="card org-card">
                <figure className="org-photo">
                  <img src={org.photo} alt="Organization documentation" loading="lazy" />
                </figure>
                <h3>{org.title}</h3>
                <p className="stack">{org.org}</p>
                <p>{org.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates section removed per request */}

      <section id="contact" className="section">
        <div className="container two-col">
          <div>
            <p className="section-kicker">Get In Touch</p>
            <h2 className="section-title">
              <span>Get</span> In Touch
            </h2>
            <p>
              Tertarik kolaborasi atau proyek baru? Mari berdiskusi tentang solusi
              digital yang berdampak.
            </p>
            <div className="contact-info">
              <p>Email: adar.sarx@mail.com</p>
              <p>LinkedIn: linkedin.com/in/adarsarx</p>
              <p>GitHub: github.com/adarsarx</p>
              <p>Location: Jakarta, Indonesia</p>
            </div>
          </div>
          <form className="card contact-form">
            <label>
              Full Name
              <input type="text" placeholder="Your name" required />
            </label>
            <label>
              Email Address
              <input type="email" placeholder="you@email.com" required />
            </label>
            <label>
              Message
              <textarea rows="4" placeholder="Tell me about your project" />
            </label>
            <button type="submit" className="button primary">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <p>© 2026 Adar Sarx Christian Firdaus Junior. All rights reserved.</p>
          <div className="footer-links">
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
