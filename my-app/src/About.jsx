export default function About() {
  return (
    <section id="about" className="flex flex-col gap-8 scroll-mt-32">
      <h2 className="font-display text-xl font-bold bg-[#ede8f5] px-3 py-1 self-start">About Me</h2>

      <div className="flex flex-col gap-5">
        <p className="font-body text-sm leading-relaxed text-neutral-700">
          Hi! I’m Diana, a third-year student at SFU studying Interactive Arts and Technology. I recently completed an Associate of Science degree in Computer Science, where I developed a strong foundation in data structures, algorithms, linear algebra, and mathematics.
        </p>
        <p className="font-body text-sm leading-relaxed text-neutral-700">
          I work with C++, Python, Java, JavaScript, React, and React Three Fiber. Alongside programming, I’m passionate about art and 3D graphics, with experience in Blender, Maya, Substance 3D Painter, 3DCoat, and ZBrush. My particular strength is creating hand-painted textures for 3D models.
        </p>
        <p className="font-body text-sm leading-relaxed text-neutral-700">
          I’m especially interested in technical art roles that bring together programming and visual creativity. Based in Vancouver, I’m currently looking for co-op and internship opportunities where I can continue developing my skills and contribute to creative, technical projects.
        </p>
        <p className="font-body text-sm leading-relaxed text-neutral-700">
          Outside of school and work, I enjoy exploring nature, reading, sketching, watching films and finding a good coffee spot.
        </p>
      </div>
      {/* resume download button
        <a
        href="/resume.pdf"
        download
        className="font-display self-start border border-neutral-800 px-6 py-3 hover:bg-neutral-800 hover:text-white transition"
      >
        Download Resume
      </a>
      */}
      
    </section>
  )
}
