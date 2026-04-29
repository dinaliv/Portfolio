function Footer(){
    return(
        <footer className="font-display text-center py-10 mt-20">

           
            <svg viewBox="0 0 600 20" className="mx-auto mt-8 w-2/3 opacity-50" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="crayon">
                        <feTurbulence type="turbulence" baseFrequency="0.065" numOctaves="4" seed="8" result="noise" />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" result="displaced" />
                        <feComposite in="displaced" in2="SourceGraphic" operator="in" />
                    </filter>
                </defs>
                <path
                    d="M2,12 C50,5 100,16 160,10 C220,4 280,15 340,9 C400,3 460,14 520,8 C550,5 575,11 598,9"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    filter="url(#crayon)"
                />
            </svg>
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
                    href="mailto:diana.nalivaiko@outlook.com" 
                    className="hover:opacity-70 transition"
                >
                    Email
                </a>
            </div>

            {/* Copyright */}
            <p className="text-neutral-500 text-sm">
                &copy; {new Date().getFullYear()} Diana Nalivaiko
            </p>
        </footer>
    );

   
}

export default Footer