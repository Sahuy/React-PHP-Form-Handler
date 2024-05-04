import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
    return (
        <div className="mt-24">
            <div className="text-2xl font-semibold text-center">
                <div className="text-4xl font-semibold"> Our Services </div>
                <div className="text-gray-600 mt-4 text-sm max-w-[600px] m-auto">
                    We provide a wide range of services to help businesses succeed in
                    their goals . Our services are designed to meet the unique needs of
                    each client and are delivered by a team of experienced professionals
                </div>
            </div>

            <div className="container grid lg:grid-cols-2 mt-24 gap-9">
                <div className="border border-colorTwo rounded-lg p-5 bg-colorTwo text-white shadow-xl">
                    <div>
                        <div>Innovative</div>
                        <div className="text-3xl mt-2 font-semibold">Website Designing</div>
                    </div>

                    <div className="text-gray-300 mt-6">
                        Website design is more than just how your website looks . Designing
                        a website with good UI and UX principle is first milestone for a
                        website which can help you to achieve your goals.
                        <br />
                        <br />
                        At the time of designing the wireframes we keep in mind various
                        elements like, client's industry , targeted geographies , targeted
                        audience , price points , sales TAT and many other elements
                    </div>

                    <Link to={"/web-designing"} className="bg-colorThree  px-8 py-3 text-white font-semibold  text-xs rounded-full  mt-9 inline-block">
                        Read more
                    </Link>
                </div>

                <div className="border border-colorTwo rounded-lg p-5 bg-colorTwo text-white shadow-xl">
                    <div>
                        <div>Robust</div>
                        <div className="text-3xl mt-2 font-semibold">Website Development</div>
                    </div>

                    <div className="text-gray-300 mt-6">
                        Website development is the process of bringing a website to life . A good code quality and seamless
                        functionality is required for great user experience . it includes various processes.
                        <br />
                        <br />
                        We develop website with global standards and with our defined sops to ensure flawless development to ensure that your website is up to the mark and optimised for best performence
                    </div>

                    <Link to={"/web-development"} className="bg-colorThree  px-8 py-3 text-white font-semibold  text-xs rounded-full  mt-9 inline-block">
                        Read more
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Services;
