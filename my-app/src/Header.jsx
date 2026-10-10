function Header(){

    return(
        <>
            <header className="font-display text-center">
                <h1 className="text-5xl tracking-tight font-bold py-4">Diana Nalivaiko</h1>
            </header>
            <nav className="font-display bg-[#ede8f5] py-2 mx-4 lg:mx-[10%] sticky top-0 z-50 text-center">
                <ul className="flex justify-center gap-10 text-xl">
                    <li><a className="px-3 py-1 hover:bg-white transition" href="#3d-works">3D</a></li>
                    <li><a className="px-3 py-1 hover:bg-white transition" href="#traditional-art">Traditional Art</a></li>
                    <li><a className="px-3 py-1 hover:bg-white transition" href="#about">About</a></li>
                </ul>
            </nav>
        </>
    );
}

export default Header
