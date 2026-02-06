import { Button, Typography } from "@material-tailwind/react";
import { PiTelegramLogoFill } from "react-icons/pi";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Contact() {

    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true,
            easing: "ease-out-cubic",
        });
    }, []);

    return (
        <div className="contact-section bg-gradient-to-br  from-[#DB8084]  to-[#23314A] pb-[150px]">
            <div className="Container">
                <div className="w-full pt-[80px]">
                    <div className="flex flex-col items-center justify-center gap-6 mb-[60px]">
                        <Typography variant="h1" className="text-[white] zilla-slab-semibold "
                        data-aos="fade-up"
                        data-aos-delay="0"
                        >
                           My Contacts
                        </Typography>
                        <div className="w-[85px] h-[1px] border border-[#a0bef3]"
                        data-aos="fade-up"
                        data-aos-delay="150"
                        ></div>
                    </div>
                    <div className=" contact-list flex flex-wrap items-center justify-center gap-16 mt-8">
                        <Button
                            data-aos="fade-right"
                            data-aos-delay="0"
                            variant="text"
                            className="flex items-center gap-2 text-[16px] text-white border border-white/30 bg-transparent hover:bg-[#e34c26]/20 hover:border-[#e34c26] transition-all duration-300"
                        >
                            <PiTelegramLogoFill className="text-lg" />
                            Telegram
                        </Button>

                        <Button
                            data-aos="fade-right"
                            data-aos-delay="150"
                            variant="text"
                            className="flex items-center gap-2 text-[16px] text-white border border-white/30 bg-transparent hover:bg-[#264de4]/20 hover:border-[#264de4] transition-all duration-300"
                        >
                            <FaLinkedin className="text-lg" />
                            Linkedin
                        </Button>

                        <Button
                            data-aos="fade-right"
                            data-aos-delay="300"
                            variant="text"
                            className="flex items-center gap-2 text-[16px] text-white border border-white/30 bg-transparent hover:bg-[#61dafb]/20 hover:border-[#61dafb] transition-all duration-300"
                        >
                            <FaGithub className="text-lg" />
                            GitHub
                        </Button>

                    </div>
                </div>
            </div>
        </div>
    )
}