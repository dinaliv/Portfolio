function Footer(){
    return(
        <footer className="font-display text-center py-10 mt-20">

            {/* Social Links Section */}
            <div className="flex justify-center gap-8 text-lg mb-6">
                <a 
                    href="https://www.linkedin.com/in/diana-naliv/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:opacity-70 transition"
                >
                    LinkedIn
                </a>
                <a 
                    href="https://github.com/dinaliv" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:opacity-70 transition"
                >
                    GitHub
                </a>
                <a 
                    href="mailto:diana_nalivaiko@sfu.ca" 
                    className="hover:opacity-70 transition"
                >
                    Email
                </a>
            </div>

            {/* Resume Download */}
            <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                download="Diana_Nalivaiko_Resume.pdf"
                className="inline-block border border-neutral-800 px-6 py-2 text-sm hover:bg-neutral-800 hover:text-white transition mb-8"
            >
                Download Resume
            </a>

            {/* Copyright */}
            <p className="text-neutral-500 text-sm">
                &copy; {new Date().getFullYear()} Diana Nalivaiko
            </p>
        </footer>
    );

   
}

export default Footer