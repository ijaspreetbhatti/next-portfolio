import Image from "next/image";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import {
    SiNextdotjs,
    SiReact,
    SiFlutter,
    SiTailwindcss,
    SiTypescript,
} from "react-icons/si";
import classNames from "classnames";
import Link from "next/link";
import Header from "./header";
import Footer from "./footer";

export default function Home() {
    const skillStyle =
        "p-4 rounded-2xl font-bold flex flex-col justify-center items-center text-theDarkBlue hover:bg-theDarkBlue hover:text-white select-none";
    const transitionStyle = "transition-colors duration-300 ease-linear";
    return (
        <>
            <Header />
            <main className="p-12 text-theDarkBlue font-body flex flex-col justify-center">
                <article className="flex flex-col md:flex-row gap-8 justify-center items-center">
                    <section className="flex flex-col justify-center md:px-12">
                        <p className="font-extrabold text-theDarkBlue md:text-justify font-mono text-xl max-w-xl">
                            Hi 👋🏻, I&apos;m{" "}
                            <span className="text-theBlue font-extrabold">
                                Jaspreet
                            </span>
                            , an agile full-stack dev with{" "}
                            <span className="text-theBlue">3 years</span> of
                            experience 🚀 in{" "}
                            <span className="text-theBlue">
                                Next.js, React, Node.js, and Flutter
                            </span>
                            . A life long techie who believes in technolgy for
                            <span className="text-theBlue"> human progess</span>
                            . Let&apos;s make the world more humane.
                        </p>
                        <hr className="border-2 mx-24 my-6" />
                        <div className="text-4xl flex gap-4 justify-center">
                            <Link
                                href={
                                    "https://www.linkedin.com/in/ijaspreetbhatti/"
                                }
                                title="Linkedin"
                                className={classNames(
                                    "hover:text-theBlue",
                                    transitionStyle
                                )}
                            >
                                <FaLinkedin />
                            </Link>
                            <Link
                                href={"https://github.com/ijaspreetbhatti/"}
                                title="Github"
                                className={classNames(
                                    "hover:text-theBlue",
                                    transitionStyle
                                )}
                            >
                                <FaGithubSquare />
                            </Link>
                            <Link
                                href={
                                    "https://1drv.ms/w/s!ApEMZrQ_gSvqwVVH75Txj4OqW17A?e=KSBvCJ"
                                }
                                title="Resume"
                                className={classNames(
                                    "hover:text-theBlue",
                                    transitionStyle
                                )}
                            >
                                <HiDocumentText />
                            </Link>
                        </div>
                    </section>{" "}
                    <Image
                        className="rounded-3xl border-[0.25rem] border-theBlue hover:scale-105 transition-all"
                        src="/images/jay.png"
                        alt="Jay"
                        width={320}
                        height={320}
                    />
                </article>
                <article className="my-8 md:px-28">
                    <div className="flex flex-col items-center">
                        <h2 className="text-2xl font-bold text-theDarkBlue ">
                            Skills
                        </h2>
                        <hr className="my-2 border-2 w-48" />
                    </div>
                    <section className="w-full py-4">
                        <ul className="flex flex-col gap-1 items-center">
                            <li className="text-base">
                                <ul className="flex gap-2 justify-center py-2 flex-wrap">
                                    <li
                                        className={classNames(
                                            skillStyle,
                                            transitionStyle
                                        )}
                                    >
                                        <SiFlutter className="text-4xl" />
                                        Flutter
                                    </li>
                                    <li
                                        className={classNames(
                                            skillStyle,
                                            transitionStyle
                                        )}
                                    >
                                        <SiReact className="text-4xl" />
                                        React&nbsp;js
                                    </li>
                                    <li
                                        className={classNames(
                                            skillStyle,
                                            transitionStyle
                                        )}
                                    >
                                        <SiNextdotjs className="text-4xl" />
                                        Next&nbsp;js
                                    </li>
                                    <li
                                        className={classNames(
                                            skillStyle,
                                            transitionStyle
                                        )}
                                    >
                                        <SiTypescript className="text-4xl" />
                                        Typescript
                                    </li>
                                    <li
                                        className={classNames(
                                            skillStyle,
                                            transitionStyle
                                        )}
                                    >
                                        <SiTailwindcss className="text-4xl" />
                                        Tailwind
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Proficient in Node js, JavaScript, HTML 5, CSS
                                3, Express js, PostgreSQL, AWS, EC2, and GitHub.
                            </li>
                            <li>
                                Also, experienced in Cypress, Agile, SASS, React
                                Query, Redux, Context API, Angular 8, Angular
                                Material, Test driven development and JIRA.
                            </li>
                        </ul>
                    </section>
                </article>
                <article id="projects" className="mb-8 md:px-28">
                    <div className="flex flex-col items-center">
                        <h2 className="text-2xl font-bold text-theDarkBlue ">
                            Projects
                        </h2>
                        <hr className="my-2 border-2 w-48" />
                    </div>
                    <section className="py-4 flex justify-center animate-pulse">
                        COMING SOON ...
                    </section>
                </article>
                <article id="services" className="mb-8 md:px-28">
                    <div className="flex flex-col items-center">
                        <h2 className="text-2xl font-bold text-theDarkBlue ">
                            Services
                        </h2>
                        <hr className="my-2 border-2 w-48" />
                    </div>
                    <section className="py-4 flex justify-center animate-pulse">
                        COMING SOON ...
                    </section>
                </article>
                <article id="experience" className="mb-8 md:px-28">
                    <div className="flex flex-col items-center">
                        <h2 className="text-2xl font-bold text-theDarkBlue ">
                            Experience
                        </h2>
                        <hr className="my-2 border-2 w-64" />
                    </div>
                    <ul className="flex flex-col gap-2 justify-center">
                        <li className="flex flex-col items-center">
                            <Image
                                className="rounded-md hover:scale-105 transition-all p-2 my-2"
                                src="/images/tap-and-go.png"
                                alt="Tap&Go EV"
                                width={200}
                                height={200}
                            />
                            <h3 className="text-lg text-theBlue">
                                Software Developer @ Tap&Go EV
                            </h3>
                            <p>
                                Flutter · React.js · Tailwind CSS · React Query
                                · Next.js · JavaScript · TypeScript · GitHub
                            </p>
                            <hr className="my-2 border-2 w-16" />
                        </li>
                        <li className="flex flex-col items-center">
                            <Image
                                className="rounded-md hover:scale-105 transition-all bg-green-900 p-2 my-2"
                                src="/images/garden.png"
                                alt="Garden Intelligence"
                                width={128}
                                height={128}
                            />
                            <h3 className="text-lg text-theBlue">
                                Full Stack Developer @ Garden Intelligence
                            </h3>
                            <p>
                                React.js · Tailwind CSS · JavaScript · Node.js ·
                                Express.js
                            </p>
                            <hr className="my-2 border-2 w-16" />
                        </li>
                        <li className="flex flex-col items-center">
                            <Image
                                className="rounded-md hover:scale-105 transition-all p-2"
                                src="/images/langara.jpeg"
                                alt="Langara College"
                                width={256}
                                height={256}
                            />
                            <h3 className="text-lg text-theBlue">
                                Frontend Developer @ Langara College
                            </h3>
                            <p>
                                Front-End Development · Software Infrastructure
                                · styled-components · Headless CMS · Next.js ·
                                JavaScript
                            </p>
                            <hr className="my-2 border-2 w-16" />
                        </li>
                        <li className="flex flex-col items-center">
                            <Image
                                className="rounded-md hover:scale-105 transition-all p-2"
                                src="/images/ibm.jpeg"
                                alt="IBM"
                                width={120}
                                height={120}
                            />
                            <h3 className="text-lg text-theBlue">
                                Application Developer @ IBM
                            </h3>
                            <p>
                                Mean Stack · Angular · Redux.js · SASS · Angular
                                Material · Node.js · TypeScript
                            </p>
                            <hr className="my-2 border-2 w-16" />
                        </li>
                    </ul>
                </article>
            </main>
            <Footer />
        </>
    );
}
