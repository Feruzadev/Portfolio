import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaFigma } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";



export default function Skills() {

    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true,
            easing: "ease-out-cubic",
        });
    }, []);

    return (
        <div className="skills-section  bg-gradient-to-br from-[#DB8084] to-[#23314A] pb-[150px]">
            <div className="Container">
                <div className="w-full pt-[80px] ">
                    <div className="flex flex-col items-center justify-center gap-6  mb-[60px]">
                        <Typography variant="h1" className="text-[white] zilla-slab-semibold "
                            data-aos="fade-up"
                            data-aos-delay="0"
                        >
                            Skills
                        </Typography>
                        <div className="w-[85px] h-[1px] border border-[#a0bef3]"
                            data-aos="fade-up"
                            data-aos-delay="150"
                        ></div>
                    </div>

                    <div className="skills-list flex flex-wrap items-center justify-center gap-8 mt-8">
                        <Button
                            data-aos="fade-right"
                            data-aos-delay="0"
                            variant="text"
                            className="flex items-center gap-2 text-[20px] text-white border border-white/30 bg-transparent hover:bg-[#e34c26]/20 hover:border-[#e34c26] transition-all duration-300"
                        >
                            <FaHtml5 className="text-2xl text-[#e34c26]" />
                            HTML
                        </Button>

                        <Button
                            data-aos="fade-right"
                            data-aos-delay="150"
                            variant="text"
                            className="flex items-center gap-2 text-[20px] text-white border border-white/30 bg-transparent hover:bg-[#264de4]/20 hover:border-[#264de4] transition-all duration-300"
                        >
                            <FaCss3Alt className="text-2xl text-[#264de4]" />
                            CSS
                        </Button>

                        <Button
                            data-aos="fade-right"
                            data-aos-delay="300"
                            variant="text"
                            className="flex items-center gap-2 text-[20px] text-white border border-white/30 bg-transparent hover:bg-[#61dafb]/20 hover:border-[#61dafb] transition-all duration-300"
                        >
                            <FaReact className="text-2xl text-[#61dafb]" />
                            REACT
                        </Button>

                        <Button
                            data-aos="fade-right"
                            data-aos-delay="450"
                            variant="text"
                            className="flex items-center gap-2 text-[20px] text-white border border-white/30 bg-transparent hover:bg-[#38bdf8]/20 hover:border-[#38bdf8] transition-all duration-300"
                        >
                            <SiTailwindcss className="text-2xl text-[#38bdf8]" />
                            TAILWIND
                        </Button>

                        <Button
                            data-aos="fade-right"
                            data-aos-delay="600"
                            variant="text"
                            className="flex items-center gap-2 text-[20px] text-white border border-white/30 bg-transparent hover:bg-[#f1502f]/20 hover:border-[#f1502f] transition-all duration-300"
                        >
                            <FaGitAlt className="text-2xl text-[#f1502f]" />
                            GIT
                        </Button>

                        <Button
                            data-aos="fade-right"
                            data-aos-delay="750"
                            variant="text"
                            className="flex items-center gap-2 text-[20px] text-white border border-white/30 bg-transparent hover:bg-[#a259ff]/20 hover:border-[#a259ff] transition-all duration-300"
                        >
                            <FaFigma className="text-2xl text-[#a259ff]" />
                            FIGMA
                        </Button>

                    </div>

                </div>
            </div>
        </div>
    )
}