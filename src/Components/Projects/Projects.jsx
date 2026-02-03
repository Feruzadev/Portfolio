import { Card, CardBody, Typography } from "@material-tailwind/react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import PayApi from "../Img/photo_2026-01-31_14-32-52.jpg"

export default function Projects() {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true,
            easing: "ease-out-cubic",
        });
    }, []);

    return (
        <div className="bg-gradient-to-bl from-[#23314A]  to-[#DB8084] pb-[150px]">
            <div className="Container">
                <div className="w-full pt-[90px]">
                    <div className="flex flex-col items-center justify-center gap-6 mb-[60px]">
                        <Typography variant="h1" className="text-[white] zilla-slab-semibold "
                            data-aos="fade-up"
                            data-aos-delay="0"
                        >
                            Projects
                        </Typography>
                        <div className="w-[85px] h-[1px] border border-[#a0bef3]"
                            data-aos="fade-up"
                            data-aos-delay="150"
                        ></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <Card className="bg-white/10 w-[380px] backdrop-blur-md rounded-2xl shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                            <CardBody className="flex flex-col items-center text-center gap-4">
                                <img src={PayApi} alt="payapi img" className="w-[300px]" />

                                <h3 className="text-xl font-semibold text-white">
                                    Start building PayApi
                                </h3>

                                <a
                                    href="https://feruzadev.github.io/payapi-multi-page-website/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-[white] hover:text-[#23314A] underline transition"
                                >
                                    View Live Website →
                                </a>
                            </CardBody>
                        </Card>

                        <Card className="bg-white/10 w-[380px] backdrop-blur-md rounded-2xl shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                            <CardBody className="flex flex-col items-center text-center gap-4">
                                <img src={PayApi} alt="payapi img" className="w-[300px]" />

                                <h3 className="text-xl font-semibold text-white">
                                    Start building PayApi
                                </h3>

                                <a
                                    href="https://feruzadev.github.io/payapi-multi-page-website/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-[white] hover:text-[#23314A] underline transition"
                                >
                                    View Live Website →
                                </a>
                            </CardBody>
                        </Card>
                        <Card className="bg-white/10 w-[380px] backdrop-blur-md rounded-2xl shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                            <CardBody className="flex flex-col items-center text-center gap-4">
                                <img src={PayApi} alt="payapi img" className="w-[300px]" />

                                <h3 className="text-xl font-semibold text-white">
                                    Start building PayApi
                                </h3>

                                <a
                                    href="https://feruzadev.github.io/payapi-multi-page-website/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-[white] hover:text-[#23314A] underline transition"
                                >
                                    View Live Website →
                                </a>
                            </CardBody>
                        </Card>
                    </div>
                </div>

            </div>
        </div>
    )
}