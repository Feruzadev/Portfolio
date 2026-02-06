import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import headerImg from "../Img/photo_2026-01-30_22-05-32.jpg"
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";


export default function Header() {

    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true,
            easing: "ease-out-cubic",
        });
    }, []);

    return (
        <div className="bg-gradient-to-br from-[#DB8084]  to-[#23314A]">
            <div className="Container">
                <div className="w-full h-screen flex items-center justify-center text-white">
                    <div className="flex items-center justify-between gap-[150px]">
                        <div className="flex flex-col items-center gap-6">
                            <Typography variant="h1" className="zilla-slab-semibold"
                                data-aos="fade-up"
                                data-aos-delay="0"
                            >
                                Hi there, I’m Feruza
                            </Typography>
                            <p className="text-[30px] zilla-slab-medium "
                                data-aos="fade-up"
                                data-aos-delay="150"
                            >I am a frontend developer</p>
                            <Button
                                className="px-7 py-3 text-[16px] zilla-slab-semibold rounded-xl 
    bg-gradient-to-r from-[#d69699] to-[#9965a6] text-white font-semibold  
    hover:opacity-90 transition hover:text-[#2d2b2b]"
                                data-aos="fade-up"
                                data-aos-delay="300"
                                onClick={() => {
                                    document.getElementById("projects")?.scrollIntoView({
                                        behavior: "smooth"
                                    });
                                }}
                            >
                                My creations
                            </Button>

                        </div>

                        <div className=" w-96 p-6 rounded-3xl bg-gradient-to-br from-[#DB8084] to-[#23314A] shadow-2xl" data-aos="fade-up"
                            data-aos-delay="400">
                            {/* Inner Card */}
                            <div className=" group relative rounded-2xl p-4 overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-separate" >
                                {/* Image */}
                                <div className="overflow-hidden rounded-xl ">
                                    <img
                                        src={headerImg}
                                        alt="card image"
                                        className="w-full  object-cover transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1 "
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}