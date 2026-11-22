"use client"

import { useEffect, useRef } from "react"
import { ArrowUpRight } from "lucide-react"

const projects = [
  { name: "AutoTrip", category: "AI / TRAVEL", label: "A better way to get lost.", description: "Personalized itineraries, live maps, and cost breakdowns. Bringing travel planning together with LangChain, OpenAI, Google Maps, and Amadeus.", stack: "TYPESCRIPT · NEXT.JS · PYTHON", url: "https://autotripfrontend.vercel.app/", visual: "route", mark: "EXPLORE / PLAN / GO" },
  { name: "Limau", category: "BUSINESS / INSURANCE", label: "Car insurance. Made simple.", description: "A Malaysia-focused car insurance comparison experience with insurer plans, instant quotes, and a straightforward digital flow.", stack: "PRODUCT DESIGN · WEB APPLICATION", url: "https://limau.lovable.app/", visual: "limau", mark: "COMPARE / CHOOSE / COVER" },
  { name: "Muse", category: "COMMERCE / BEAUTY", label: "Beauty beyond borders.", description: "A beauty storefront bringing global skincare, makeup, fragrance, and beauty discoveries together with curated collections and product browsing.", stack: "NEXT.JS · SHOPIFY · E-COMMERCE", url: "https://my-muselab.com/", visual: "muse", mark: "EXPLORE / DISCOVER / FIND" },
  { name: "Reducto for Logistics", category: "DOCUMENT AI / LOGISTICS", label: "Shipping documents, made searchable.", description: "A document processing and parsing platform for shipping documents, with browser-local review of bills of lading and commercial invoices.", stack: "PDF.JS · OCR · TYPESCRIPT", url: "https://github.com/MinZheCheah/reform-interview", visual: "reducto", mark: "READ / EXTRACT / REVIEW" },
  { name: "PDD", category: "OPEN SOURCE / TOOLING", label: "Make the invisible visible.", description: "An open-source contribution to Prompt Driven Development that captures stdout and stderr across CLI operations, making debugging clearer.", stack: "PYTHON · CLI DEVELOPMENT", url: "https://github.com/promptdriven/pdd", visual: "terminal", mark: "OBSERVE / UNDERSTAND / BUILD" },
]

function ProjectArtwork({ kind }: { kind: string }) {
  return <div className={`project-art art-${kind}`} aria-hidden="true">
    {kind === "route" && <svg viewBox="0 0 600 360"><g className="map-grid">{Array.from({length:12},(_,i)=><path key={i} d={`M${i*60} 0L${i*60-90} 360 M0 ${i*40}H600`} />)}</g><path className="map-route" d="M70 275C110 270 100 140 180 175S240 310 310 210 370 105 425 150 490 95 530 65"/><g className="map-points"><circle cx="70" cy="275" r="9"/><circle cx="310" cy="210" r="9"/><circle cx="530" cy="65" r="9"/></g><text x="70" y="315">START HERE</text><text x="430" y="40">SOMEWHERE NEW</text></svg>}
    {kind === "limau" && <div className="insurance-art"><span>CAR COVER / MALAYSIA</span><strong>Choose your<br/>protection.</strong><div><i>THIRD PARTY</i><i>COMPREHENSIVE</i></div><small>COMPARE PLANS　↗</small></div>}
    {kind === "muse" && <div className="muse-art"><span>MY MUSE LAB</span><strong>BEAUTY<br/>BEYOND<br/>BORDERS.</strong><div><i/><i/><i/><i/><i/></div><small>THE BEAUTY WAREHOUSE</small></div>}
    {kind === "reducto" && <div className="document-art"><div><span>BILL OF LADING</span><b>BL</b><i>SHIPPER</i><i>CONSIGNEE</i><i>PORT OF LOADING</i><i>CONTAINER NO.</i><i>GOODS DESCRIPTION</i></div><section><small>PARSED FIELDS</small><strong>SHIPMENT<br/>DOCUMENT</strong><p>05 FIELDS EXTRACTED</p></section></div>}
    {kind === "terminal" && <div className="terminal-art"><div><i/><i/><i/><span>pdd / output stream</span></div><p><b>❯</b> pdd generate</p><p className="terminal-muted">[stdout] Capturing output…</p><p>[stderr] Trace available</p><p><b>✓</b> Ready to inspect<span className="terminal-cursor">_</span></p></div>}
  </div>
}

export default function ProjectTimeline() {
  const timeline = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const root = timeline.current
    if (!root) return
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)")
    let frame = 0
    const update = () => {
      frame = 0
      const rect = root.getBoundingClientRect()
      const entries = root.querySelectorAll<HTMLElement>(".timeline-entry")
      const last = entries[entries.length - 1]
      const railLength = last ? last.offsetTop + last.offsetHeight / 2 : rect.height
      root.style.setProperty("--rail-length", `${railLength}px`)
      const progress = Math.max(0, Math.min(1, (window.innerHeight * .5 - rect.top) / Math.max(1, railLength)))
      root.style.setProperty("--progress", String(progress))
      root.style.setProperty("--marker-turn", `${reduced.matches ? 0 : progress * 1800}deg`)
      entries.forEach((entry) => {
        const position = entry.getBoundingClientRect()
        const offset = reduced.matches ? 0 : Math.max(-20,Math.min(20,(position.top + position.height/2 - window.innerHeight/2)*.035))
        entry.style.setProperty("--parallax",`${offset}px`)
      })
    }
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update) }
    const observer = new ResizeObserver(schedule)
    observer.observe(root)
    update()
    window.addEventListener("scroll",schedule,{passive:true})
    window.addEventListener("resize",schedule)
    reduced.addEventListener("change",schedule)
    return () => { observer.disconnect(); cancelAnimationFrame(frame); window.removeEventListener("scroll",schedule);window.removeEventListener("resize",schedule);reduced.removeEventListener("change",schedule) }
  },[])

  return <section id="projects" className="timeline-section">
    <div className="timeline-heading"><span className="eyebrow">02 / PROJECTS — FIVE PROJECTS</span><h2>From ideas.<br/><span>To things that work.</span></h2><p>A collection of explorations across AI, systems, and human experiences.</p></div>
    <div ref={timeline} className="project-timeline">
      <div className="timeline-rail" aria-hidden="true"><span/><i/></div>
      {projects.map((project,index)=><article className={`timeline-entry entry-${index%2===0?"center":"side"} ${index===1?"entry-right":""}`} key={project.name}>
        <div className="timeline-number" aria-hidden="true">0{index+1}</div>
        {project.url ? <a className="timeline-plate" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Explore ${project.name} (opens in new tab)`}><ProjectArtwork kind={project.visual}/><div className="plate-meta"><span>{project.category}</span><ArrowUpRight size={20}/></div><span className="plate-bottom">{project.mark}</span></a> : <div className="timeline-plate"><ProjectArtwork kind={project.visual}/><div className="plate-meta"><span>{project.category}</span></div><span className="plate-bottom">{project.mark}</span></div>}
        <div className="timeline-copy"><span className="eyebrow">PROJECT / 0{index+1}</span><h3>{project.url ? <a href={project.url} target="_blank" rel="noopener noreferrer">{project.name}<ArrowUpRight size={18}/></a> : project.name}</h3><p><strong>{project.label}</strong> {project.description}</p><span className="timeline-stack">{project.stack}</span></div>
      </article>)}
    </div>
    <a className="timeline-github" href="https://github.com/MinZheCheah" target="_blank" rel="noopener noreferrer">More on GitHub <ArrowUpRight size={18}/></a>
  </section>
}
