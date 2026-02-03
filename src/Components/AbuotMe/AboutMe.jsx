import { Card, CardBody, Typography } from "@material-tailwind/react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function AboutMe() {

    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true,
            easing: "ease-out-cubic",
        });
    }, []);

    return (
        <div className="bg-gradient-to-bl from-[#23314A]  to-[#DB8084] pb-[150px] ">
            <div className="Container">
                <div className="w-full pt-[90px] ">
                    <div className="flex flex-col items-center justify-center gap-6 mb-[60px]">
                        <Typography variant="h1" className="text-[white] zilla-slab-semibold "
                            data-aos="fade-up"
                            data-aos-delay="0"
                        >
                            About Me
                        </Typography>
                        <div className="w-[85px] h-[2px] border border-[#a0bef3]"
                            data-aos="fade-up"
                            data-aos-delay="150"
                        ></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <Card className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                            <CardBody className="flex flex-col items-center text-center gap-4">
                                <h3 className="text-xl font-semibold text-white">
                                    Who I Am
                                </h3>
                                <p className="text-gray-200 text-sm leading-relaxed">
                                    I’m Feruza, a passionate frontend developer who loves building modern, responsive, and user-friendly web interfaces.
                                </p>
                            </CardBody>
                        </Card>

                        <Card className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                            <CardBody className="flex flex-col items-center text-center gap-4">
                                <h3 className="text-xl font-semibold text-white">
                                    What I Do
                                </h3>
                                <p className="text-gray-200 text-sm leading-relaxed">
                                    I create web applications using React and Tailwind CSS, focusing on clean code and smooth user experiences.
                                </p>
                            </CardBody>
                        </Card>

                        <Card className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                            <CardBody className="flex flex-col items-center text-center gap-4">
                                <h3 className="text-xl font-semibold text-white">
                                    My Goal
                                </h3>
                                <p className="text-gray-200 text-sm leading-relaxed">
                                    My goal is to grow as a developer, learn new technologies, and build beautiful, high-quality digital products.
                                </p>
                            </CardBody>
                        </Card>
                    </div>

                </div>

            </div>
        </div>
    )
}