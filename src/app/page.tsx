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

export default function Home() {
    const skillStyle =
        "border-2 p-4 border-theDarkBlue rounded-lg font-bold flex flex-col justify-center items-center text-theDarkBlue hover:bg-theDarkBlue hover:text-theDarkRed select-none";
    const transitionStyle = "transition-colors duration-300 ease-linear";
    return (
        <main className="h-full font-mono p-5 text-theDarkBlue">
            <div className="h-full overflow-auto duration- bg-theLightGray p-5 md:p-10 flex flex-col items-center gap-4 relative border-[0.25rem] border-theDarkBlue rounded-xl">
                <Image
                    src="/images/jay.png"
                    alt="Jay"
                    width={300}
                    height={300}
                    className="rounded-full border-4 border-theDarkBlue"
                />
                <h1 className="font-bold text-theDarkBlue pb-5 text-6xl font-serif select-none">
                    Jaspreet <span className="text-theDarkRed">(Jay)</span>{" "}
                    Bhatti
                </h1>
                <article
                    className={classNames(
                        "m-4 bg-theLightGray rounded-lg border-2 border-theDarkGray flex flex-col gap-4",
                        "lg:w-[50%]",
                        "hover:bg-theDarkBlue hover:text-theBrightRed",
                        transitionStyle
                    )}
                >
                    <section className="flex flex-col gap-10 justify-center p-4">
                        <p className="text-2xl">
                            Hi 👋🏻, I&apos;m Jay, a passionate full-stack web
                            developer with 2.5+ years of experience 🚀 in
                            Next.js, React, Node.js, and Flutter. My strong
                            understanding of agile methodologies and design
                            thinking, coupled with my dedication to ongoing
                            learning and emerging tech trends, enables me to
                            deliver innovative solutions that exceed user
                            expectations and achieve business goals. Let&apos;s
                            build great apps together.
                        </p>
                        <div className="text-6xl flex gap-4 justify-center">
                            <Link
                                href={
                                    "https://www.linkedin.com/in/ijaspreetbhatti/"
                                }
                                title="Linkedin"
                                className={classNames(
                                    "hover:text-theDarkRed",
                                    transitionStyle
                                )}
                            >
                                <FaLinkedin />
                            </Link>
                            <Link
                                href={"https://github.com/ijaspreetbhatti/"}
                                title="Github"
                                className={classNames(
                                    "hover:text-theDarkRed",
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
                                    "hover:text-theDarkRed",
                                    transitionStyle
                                )}
                            >
                                <HiDocumentText />
                            </Link>
                        </div>
                    </section>
                </article>
                <article className="w-full">
                    <h2 className="text-4xl font-bold text-theDarkBlue">
                        Skills
                    </h2>
                    <hr className="w-full border-2 border-theDarkBlue" />
                    <section className="w-full text-2xl py-4">
                        <ul className="flex flex-col gap-1">
                            <li>
                                I&apos;m well versed with:
                                <ul className="flex gap-2 justify-evenly py-2 flex-wrap">
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
                <article className="w-full">
                    <h2 className="text-4xl font-bold text-theDarkBlue">
                        Experience
                    </h2>
                    <hr className="w-full border-2 border-theDarkBlue" />
                    <p className="w-full"></p>
                </article>
            </div>
        </main>
    );
}
