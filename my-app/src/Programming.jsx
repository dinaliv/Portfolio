import { useState } from "react"

const projects = [
  {
    id: "fitkin",
    title: "Fitkin",
    subtitle: "StormHacks 2026 · Hackathon",
    summary: "A group wellness web app where users complete daily tasks — meditation, steps, eating vegetables — to earn EXP and coins. Levelling up unlocks items in a shop where coins are spent on hats that appear directly on a 3D otter mascot in real time.",
    contributions: [
      "Created and textured the otter mascot character in Blender, exported as GLB",
      "Integrated the 3D otter model into the React web app using Three.js",
      "Integrated 3D cosmetic assets into the character model — each item purchased from the store is scaled and anchored to the correct position on the character, appearing on the mascot in real time when equipped",
      "Designed the level progression system: players earn EXP to level up, which unlocks items in the store that can be purchased with coins",
    ],
    tech: ["Blender", "Three.js", "React", "JavaScript"],
    links: [
      { label: "GitHub", href: "https://github.com/kelsiei/stormhacks2026" },
      { label: "Devpost", href: "https://devpost.com/software/finkit-q0ivnj" },
    ],
  },
  {
    id: "coffee-shop",
    title: "Diana's Coffee Shop",
    subtitle: "IAT 265: Multimedia Programming for Art and Design · Solo",
    summary: "A Java desktop barista simulator where players manage a coffee shop — taking orders and crafting drinks through a fully custom-illustrated interactive GUI.",
    contributions: [
      "Designed the game concept, user interface, and all custom visual assets",
      "Built the game in Java using Swing for the interactive GUI",
      "Implemented a finite state machine to manage all gameplay state transitions",
      "Applied Factory and Decorator design patterns for modular, extensible game systems",
    ],
    tech: ["Java", "Swing", "OOP"],
    links: [
      { label: "GitHub", href: "https://github.com/dinaliv/Diana-s-Coffee-Shop" },
    ],
    video: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
  },
]

export default function Programming() {
  const [expanded, setExpanded] = useState(null)

  const toggle = (id) => setExpanded((prev) => (prev === id ? null : id))

  return (
    <section id="programming" className="flex flex-col gap-8 scroll-mt-32">
      <h2 className="font-display text-xl font-bold bg-[#ede8f5] px-3 py-1 self-start">Programming</h2>

      <div className="flex flex-col gap-4">
        {projects.map((project) => {
          const isOpen = expanded === project.id
          return (
            <div key={project.id} className="border border-neutral-200">
              {/* Card header — always visible */}
              <button
                onClick={() => toggle(project.id)}
                className="w-full text-left px-5 py-4 flex items-start justify-between gap-4 hover:bg-neutral-50 transition"
              >
                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-base font-bold">{project.title}</h3>
                  <p className="font-body text-xs text-neutral-500">{project.subtitle}</p>
                </div>
                <span className="font-body text-neutral-400 text-sm mt-1 shrink-0">
                  {isOpen ? "▲" : "▼"}
                </span>
              </button>

              {/* Expanded detail */}
              {isOpen && (
                <div className="px-5 pb-6 flex flex-col gap-6 border-t border-neutral-200">

                  <p className="font-body text-sm leading-relaxed text-neutral-600 pt-4">
                    {project.summary}
                  </p>

                  <div className="flex flex-col gap-2">
                    <h4 className="font-display text-sm font-bold">My Contributions</h4>
                    <ul className="flex flex-col gap-1">
                      {project.contributions.map((c, i) => (
                        <li key={i} className="font-body text-sm text-neutral-700 leading-relaxed list-disc list-inside">
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="font-body text-xs bg-[#ede8f5] px-2 py-0.5">{t}</span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-display text-sm underline underline-offset-2 hover:opacity-60 transition"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>

                  {project.video && (
                    <div className="aspect-video w-full">
                      <iframe
                        src={project.video}
                        title={`${project.title} demo`}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
