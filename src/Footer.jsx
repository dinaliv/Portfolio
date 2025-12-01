function Footer(){
    return(
        <footer className="font-display text-center py-10 mt-20 border-t border-neutral-300">
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