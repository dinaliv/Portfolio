function Header(){

    return(
        <header className="font-display text-center py-10">
            <h1 className="text-6xl mb-6 tracking-tight">Diana Nalivaiko</h1>
            <nav>
                <ul className="flex justify-center gap-10 text-3xl">
                    <li><a className="hover:opacity-70 transition" href="#3d-works">3D</a></li>
                    <li><a className="hover:opacity-70 transition" href="#traditional-art">Traditional Art</a></li>
                
                </ul>
            </nav>
            <svg viewBox="0 0 600 20" className="mx-auto mt-8 w-2/3 opacity-80" xmlns="http://www.w3.org/2000/svg">
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
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                    filter="url(#crayon)"
                />
            </svg>
        </header>
    );
}

export default Header