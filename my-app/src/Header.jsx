function Header(){

    return(
        <header className="font-display text-center py-10 border-b border-neutral-300">
            <h1 className="text-4xl font-semibold mb-6 tracking-tight">Diana Nalivaiko</h1>
            <nav>
                <ul className="flex justify-center gap-10 text-lg">
                    <li><a className="hover:opacity-70 transition" href="">3D</a></li>
                    <li><a className="hover:opacity-70 transition" href="">Traditional Art</a></li>
                    <li><a className="hover:opacity-70 transition" href="">Photogtaphy</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header