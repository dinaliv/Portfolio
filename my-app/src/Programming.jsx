import { useState } from "react"

const projects = [
  {
    id: "fitkin",
    title: "Fitkin",
    subtitle: "StormHacks 2026 · 24-hour Hackathon",
    image: `${import.meta.env.BASE_URL}fitkin-preview.jpg`,
    summary: "A group wellness web app where users complete daily tasks to earn EXP and coins. Levelling up unlocks items in a shop where coins are spent on cosmetics that appear directly on a 3D otter mascot in real time.",
    contributionsLabel: "My Contributions",
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
    video: "https://www.youtube.com/embed/MUTxM895OD0",
  },
  {
    id: "coffee-shop",
    title: "Diana's Coffee Shop",
    subtitle: "IAT 265: Multimedia Programming for Art and Design · Solo",
    image: `${import.meta.env.BASE_URL}coffee-shop-preview.png`,
    summary: "A Java desktop barista simulator where players manage a coffee shop — taking orders and crafting drinks through a fully custom-illustrated interactive GUI.",
    contributionsLabel: "Project Highlights",
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
    video: "https://www.youtube.com/embed/IMyy-_CTd28",
  },
]

export default function Programming() {
  const [expanded, setExpanded] = useState(null)

  const toggle = (id) => setExpanded((prev) => (prev === id ? null : id))

  return (
    <section id="programming" className="flex flex-col gap-8 scroll-mt-32">
      <h2 className="font-display text-xl font-bold bg-[#ede8f5] px-3 py-1 self-start">Programming</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => {
          const isOpen = expanded === project.id
          return (
            <div key={project.id} className="border border-neutral-200 flex flex-col">

              {/* Preview image */}
              <div className="w-full bg-neutral-100 overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-contain"
                  />
                ) : (
                  <div className="w-full min-h-48 flex items-center justify-center text-neutral-300 font-body text-sm">
                    No image yet
                  </div>
                )}
              </div>

              {/* Always visible info */}
              <div className="flex flex-col gap-3 p-5">
                <div>
                  <h3 className="font-display text-base font-bold">{project.title}</h3>
                  <p className="font-body text-xs text-neutral-500 mt-1">{project.subtitle}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="font-body text-xs bg-[#ede8f5] px-2 py-0.5">{t}</span>
                  ))}
                </div>

                <p className="font-body text-sm leading-relaxed text-neutral-600">{project.summary}</p>

                {/* Toggle button */}
                <button
                  onClick={() => toggle(project.id)}
                  className="font-display text-xs text-neutral-400 hover:text-neutral-700 transition text-left"
                >
                  {isOpen ? "▲ Show less" : "▼ Show more"}
                </button>
              </div>

              {/* Expanded info */}
              {isOpen && (
                <div className="flex flex-col gap-4 px-5 pb-5 border-t border-neutral-100 pt-4">
                  <div className="flex flex-col gap-1">
                    <h4 className="font-display text-sm font-bold bg-[#ede8f5] px-3 py-1 self-start">{project.contributionsLabel}</h4>
                    <ul className="flex flex-col gap-1">
                      {project.contributions.map((c, i) => (
                        <li key={i} className="font-body text-sm text-neutral-700 leading-relaxed list-disc list-inside">
                          {c}
                        </li>
                      ))}
                    </ul>
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
