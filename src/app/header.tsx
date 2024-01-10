export default function Header() {
    return (
        <header className="w-full bg-theBlue text-white flex flex-col md:flex-row justify-between items-center px-12 py-8 font-heading gap-8">
            <h1 className="font-bold text-xl">
                Jaspreet&nbsp;Singh&nbsp;Bhatti
            </h1>
            <ul className="flex gap-8 items-center">
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#services">Services</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#contact" className="text-xl">
                        Contact
                    </a>
                </li>
            </ul>
        </header>
    );
}
