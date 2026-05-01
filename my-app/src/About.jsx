export default function About() {
  return (
    <section id="about" className="flex flex-col gap-8 scroll-mt-32">
      <h2 className="font-display text-3xl">About Me</h2>

      <div className="flex flex-col gap-5">
        <p className="font-body text-lg leading-relaxed text-neutral-700">
          Hi! I'm Diana, a third-year Interactive Arts and Technology student at SFU, minoring in Computing Science. I recently completed my Associate's degree in Computer Science, where I built a strong foundation in data structures, algorithms, linear algebra, and mathematics.

        </p>
        <p className="font-body text-lg leading-relaxed text-neutral-700">
          I work with C++, Java, JavaScript, React, and React Three Fiber. I’m also passionate about art and 3D graphics, with experience in Blender, Maya, Substance Painter, 3DCoat, and ZBrush, especially creating hand-painted textures. 
        </p>
        <p className="font-body text-lg leading-relaxed text-neutral-700">
          I'm most interested in technical art roles, where I can combine creativity and code. I'm based in Vancouver and currently looking for co-op or internship opportunities.
        </p>
        <p className="font-body text-lg leading-relaxed text-neutral-700">
          In my free time, I'm usually exploring nature, reading, sketching, watching films or animation, or just enjoying a good coffee.
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
