export default function About() {
  return (
    <section id="about" className="flex flex-col gap-8 scroll-mt-32">
      <h2 className="font-display text-3xl">About Me</h2>

      <div className="flex flex-col gap-5">
        <p className="font-body text-base leading-relaxed text-neutral-700">
          Hi there! I'm Diana, a third-year Interactive Arts and Technology student at SFU,
          minoring in Computing Science. I recently completed my Associate's degree in Computer
          Science, building a strong foundation in data structures, algorithms, linear algebra,
          and mathematics.
        </p>
        <p className="font-body text-base leading-relaxed text-neutral-700">
          Three Fiber. I'm also deeply passionate about art and 3D graphics, working proficiently
          with tools like Blender, Maya, Substance Painter, 3DCoat, and ZBrush — with a
          particular strength in hand-painted textures.
        </p>
        <p className="font-body text-base leading-relaxed text-neutral-700">
          I'm especially drawn to technical art roles, where creativity and code intersect.
          Currently based in Vancouver, I'm actively looking for co-op or internship opportunities.
        </p>
        <p className="font-body text-base leading-relaxed text-neutral-700">
          Outside of work, you'll find me drinking coffee, exploring nature, drawing, reading,
          or getting lost in films and animations.
        </p>
      </div>

      <a
        href="/resume.pdf"
        download
        className="font-display self-start border border-neutral-800 px-6 py-3 hover:bg-neutral-800 hover:text-white transition"
      >
        Download Resume
      </a>
    </section>
  )
}
