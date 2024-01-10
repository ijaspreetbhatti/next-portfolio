import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export default function Footer() {
    return (
        <footer
            id="contact"
            className="bg-theBlue w-full text-white p-12 flex gap-8 justify-center md:justify-start"
        >
            <h2 className="font-bold text-xl">Contact</h2>
            <a href="mailto:ijaspreetbhatti@outlook.com">
                <HiMail className="text-3xl" />
            </a>
            <a href="https://www.linkedin.com/in/ijaspreetbhatti/">
                <FaLinkedin className="text-3xl" />
            </a>
            <a href="https://github.com/ijaspreetbhatti/">
                <FaGithub className="text-3xl" />
            </a>
        </footer>
    );
}
