"use client"

import { useEffect, useState } from "react"
import ProjectTimeline from "./project-timeline"
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react"

const experience = [
  { date: "OCT 2025 — OCT 2026", role: "Software Engineer", company: "Illoominate Ed Tech", detail: "Building full-stack and mobile tools for the next generation of learning.", stack: "REACT NATIVE · TYPESCRIPT · AWS" },
  { date: "JUL 2025 — SEP 2025", role: "Software Engineer Intern", company: "Illoominate Ed Tech", detail: "Contributed to full-stack and mobile development for education technology.", stack: "REACT NATIVE · TYPESCRIPT · AWS" },
  { date: "2024", role: "Software Engineer", company: "FHL Vive Center for Enhanced Reality", detail: "Backend systems and LLM integrations for immersive experiences.", stack: "PYTHON · FASTAPI · LANGCHAIN" },
  { date: "2023", role: "Data Analyst Intern", company: "See Hau Global", detail: "Data pipelines and analytics infrastructure for business insight.", stack: "PYTHON · SQL · ORACLE ERP" },
]


export default function Home() {
  const [active, setActive] = useState("intro")

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id) })
    }, { threshold: 0.25 })
    document.querySelectorAll("main section[id], main header[id]").forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const nav = [["intro", "01"], ["work", "02"], ["projects", "03"], ["about", "04"], ["connect", "05"]]

  return (
    <main className="portfolio-shell graphite">
      <a className="skip-link" href="#projects">Skip to projects</a>
      <div className="film-grain" aria-hidden="true" />
      <nav className="topbar" aria-label="Main navigation">
        <a className="wordmark" href="#intro">MZC<span> / ENGINEERING</span></a>
        <div className="top-links">{nav.slice(1).map(([id, label]) => <a key={id} className={active === id ? "selected" : ""} href={`#${id}`}><span>{label}</span>{id === "work" ? "Experience" : id === "projects" ? "Projects" : id === "about" ? "About" : "Contact"}</a>)}</div>
        <a className="availability" href="mailto:cheah.min@berkeley.edu"><i /> Available for work</a>
      </nav>

      <header id="intro" className="hero graphite-hero">
        <div className="contour-field" aria-hidden="true" />
        <div className="portrait-stage"><img src="/portfolio/min-zhe-portrait.png" alt="Min Zhe Cheah" width="553" height="571" fetchPriority="high" /><span className="portrait-caption">MIN ZHE CHEAH / SAN FRANCISCO</span></div>
        <div className="hero-identity"><span className="eyebrow">ENGINEER_001 / UC BERKELEY</span><h1>MIN ZHE<br/><span>CHEAH.</span></h1><div className="identity-meta"><span>SOFTWARE ENGINEER</span><span>DATA SCIENCE · BERKELEY ’25</span><span>SAN FRANCISCO, CA</span></div></div>
        <div className="hero-panels"><div className="bracket-panel"><span className="eyebrow">CURRENT CHAPTER</span><h2>BUILDING FOR<br/>HUMAN POTENTIAL.</h2><p>Full-stack and mobile development at Illoominate Ed Tech.</p><a href="#work">Experience <ArrowDown size={15}/></a></div><div className="bracket-panel"><span className="eyebrow">THE PRACTICE</span><p>Full-stack engineering.<br/>Machine learning.<br/>Distributed systems.</p><div className="hero-stats"><span><b>05</b>PROJECTS</span><span><b>04</b>ROLES</span></div></div></div>
        <div className="hero-bottom"><span className="scroll-cue"><span className="scroll-line"/> SCROLL TO DISCOVER</span><a className="hero-work-link" href="#projects">EXPLORE THE WORK <ArrowDown size={18}/></a><span className="hero-year">PORTFOLIO / 2026</span></div>
      </header>

      <section id="work" className="section experience-section">
        <div className="section-heading"><div><span className="eyebrow">01 / THE JOURNEY SO FAR</span><h2>Experience<span className="accent">.</span></h2></div><span className="section-caption">A few chapters<br />along the way.</span></div>
        <div className="experience-list">{experience.map((item, index) => <article className="experience-row" key={item.company}><span className="row-number">0{index + 1}</span><span className="row-date">{item.date}</span><div className="role-copy"><h3>{item.role}</h3><span className="company-name">{item.company}</span><p>{item.detail}</p></div><span className="row-stack">{item.stack}</span><ArrowUpRight className="row-arrow" size={18} /></article>)}</div>
      </section>

      <ProjectTimeline />

      <section id="about" className="section about-section">
        <div className="about-index"><span className="eyebrow">03 / A LITTLE CONTEXT</span><span className="vertical-note">BERKELEY · 2025</span></div>
        <div className="about-main"><h2>Thoughtful by nature.<br /><em>Technical by trade.</em></h2><p className="about-lede">I graduated from UC Berkeley with a B.A. in Data Science. I’m drawn to the places where complex systems meet everyday life—and to the people who make those systems matter.</p><div className="about-details"><div><span className="eyebrow">STUDIED</span><p>Data Science<br />University of California, Berkeley</p></div><div><span className="eyebrow">INTERESTED IN</span><p>Full-stack systems<br />Applied AI · Developer tools<br />Distributed systems</p></div><div><span className="eyebrow">OFTEN WORKING WITH</span><p>TypeScript · React · Python<br />Go · PostgreSQL · Cloud</p></div></div><a className="resume-link" href="/portfolio/MinZhe_Cheah_Resume.pdf" download><span>Download my résumé</span><ArrowUpRight size={17} /></a></div>
      </section>

      <section id="connect" className="contact-section">
        <span className="eyebrow">04 / YOUR TURN</span><div className="contact-content"><h2>Have a good<br /><em>one in mind?</em></h2><a href="mailto:cheah.min@berkeley.edu" className="contact-cta">Let’s talk <ArrowUpRight size={24} /></a></div>
        <div className="contact-bottom"><span>OPEN TO THOUGHTFUL WORK & GOOD CONVERSATIONS.</span><div><a href="mailto:cheah.min@berkeley.edu"><Mail size={15} /> EMAIL</a><a href="https://github.com/MinZheCheah" target="_blank" rel="noreferrer"><Github size={15} /> GITHUB</a><a href="https://www.linkedin.com/in/min-zhe-cheah-13b20025a/" target="_blank" rel="noreferrer"><Linkedin size={15} /> LINKEDIN</a></div></div>
      </section>
      <footer className="footer"><a className="wordmark" href="#intro">MZC<span> / ENGINEERING</span></a><span>© 2026 MIN ZHE CHEAH</span><a href="#intro">BACK TO THE TOP ↑</a><span>MADE WITH INTENTION.</span></footer>
    </main>
  )
}
