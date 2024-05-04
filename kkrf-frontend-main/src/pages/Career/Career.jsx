import React from "react";
import { Link } from "react-router-dom";

const Career = () => {


    
    return (
        <div className="container">
            <div className="container text-center space-y-6 mt-9 bg-colorTwo rounded-xl py-9 text-white">
                <h1 className="text-4xl font-bold text-colorThree">Join today</h1>
                <div>
                    Welcome to our career hub, where opportunities meet ambition. Explore
                    roles that inspire, growth that's boundless, and a culture where your
                    talents thrive. Join us in shaping the future
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-9">
                <div className="bg-gray-100 rounded-lg p-5 border border-gray-300">
                    <div className="text-2xl font-semibold">Figma Designer</div>

                    <div className="flex gap-3 mt-4 text-gray-600">
                        <div className="flex gap-3 items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                                />
                            </svg>
                            <div>Full time</div>
                        </div>

                        <div className="flex gap-3 items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                />
                            </svg>

                            <div>3 - 4 lakh</div>
                        </div>
                    </div>

                    <div className="mt-3">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
                        quis consectetur tenetur unde excepturi ex, cumque aliquam nisi
                        dolore quibusdam ab autem similique magnam alias suscipit velit
                        aliquid eligendi a, eius fuga aut.
                    </div>

                    <Link
                        to={"/website-types"}
                        className="bg-colorThree  px-8 py-3 text-white font-semibold  text-xs rounded-full  mt-9 inline-block"
                    >
                        Apply
                    </Link>

                </div>

                <div className="bg-gray-100 rounded-lg p-5 border border-gray-300">
                    <div className="text-2xl font-semibold">Figma Designer</div>

                    <div className="flex gap-3 mt-4 text-gray-600">
                        <div className="flex gap-3 items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                                />
                            </svg>
                            <div>Full time</div>
                        </div>

                        <div className="flex gap-3 items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                />
                            </svg>

                            <div>3 - 4 lakh</div>
                        </div>
                    </div>

                    <div className="mt-3">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
                        quis consectetur tenetur unde excepturi ex, cumque aliquam nisi
                        dolore quibusdam ab autem similique magnam alias suscipit velit
                        aliquid eligendi a, eius fuga aut.
                    </div>
                    <Link
                        to={"/website-types"}
                        className="bg-colorThree  px-8 py-3 text-white font-semibold  text-xs rounded-full  mt-9 inline-block"
                    >
                        Apply
                    </Link>
                </div>

                <div className="bg-gray-100 rounded-lg p-5 border border-gray-300">
                    <div className="text-2xl font-semibold">Figma Designer</div>

                    <div className="flex gap-3 mt-4 text-gray-600">
                        <div className="flex gap-3 items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                                />
                            </svg>
                            <div>Full time</div>
                        </div>

                        <div className="flex gap-3 items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                />
                            </svg>

                            <div>3 - 4 lakh</div>
                        </div>
                    </div>

                    <div className="mt-3">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
                        quis consectetur tenetur unde excepturi ex, cumque aliquam nisi
                        dolore quibusdam ab autem similique magnam alias suscipit velit
                        aliquid eligendi a, eius fuga aut.
                    </div>
                    <Link
                        to={"/website-types"}
                        className="bg-colorThree  px-8 py-3 text-white font-semibold  text-xs rounded-full  mt-9 inline-block"
                    >
                        Apply
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Career;
