import React, { useState } from 'react'

const Work = () => {


    const [active, setActive] = useState("corporate")
 

    return (

        <div className='container mt-16'>

            <div className='text-4xl font-semibold'>What we do</div>
            <div className='mt-4 text-gray-600'>we were focused on web development and e-commerce solutions for small and mid-size companies.</div>

            <div className='grid xl:grid-cols-2 gap-24 mt-9'>

                <div className='space-y-2'>
                    <div onClick={() => setActive("corporate")} className={`py-4  px-3 rounded-2xl transition-all duration-300 relative cursor-pointer  ${active === "corporate" && `bg-gray-200/45`}`}>
                        <div className='flex justify-between gap-4 font-medium'>
                            <div className='text-lg md:text-xl'>Corporate Website Designing</div>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-9 h-9 text-colorTwo`}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>

                        </div>

                        <div className={`text-sm  mt-0  opacity-0  text-gray-700 transition-all duration-300 overflow-hidden h-0 ${active === "corporate" && `mt-6 opacity-100 h-24`}`}>
                            At KKRF Groups we are specialize in idea-based

                            website designing that help you stand out from the

                            competition. Our team of creative designers and developers

                            collaborate with you to understand your unique vision and

                            business needs and create a customized website that
                        </div>

                    </div>

                    <div onClick={() => setActive("ecommerce")} className={`py-4  px-3 rounded-2xl transition-all duration-300 relative cursor-pointer  ${active === "ecommerce" && `bg-gray-200/45`}`}>
                        <div className='flex justify-between  font-medium'>
                            <div className='text-lg md:text-xl'>E-Commerce website</div>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-9 h-9 text-colorTwo`}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>

                        </div>

                        <div className={`text-sm  mt-0  opacity-0  text-gray-700 transition-all duration-300 overflow-hidden h-0 ${active === "ecommerce" && `mt-6 opacity-100 h-24`}`}>
                            At KKRF Groups we are specialize in idea-based

                            website designing that help you stand out from the

                            competition. Our team of creative designers and developers

                            collaborate with you to understand your unique vision and

                            business needs and create a customized website that
                        </div>

                    </div>

                    <div onClick={() => setActive("ideal")} className={`py-4  px-3 rounded-2xl transition-all duration-300 relative cursor-pointer  ${active === "ideal" && `bg-gray-200/45`}`}>
                        <div className='flex justify-between font-medium'>
                            <div className='text-lg md:text-xl'>Idea Based website</div>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-9 h-9 text-colorTwo`}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>

                        </div>

                        <div className={`text-sm  mt-0  opacity-0  text-gray-700 transition-all duration-300 overflow-hidden h-0 ${active === "ideal" && `mt-6 opacity-100 h-24`}`}>
                            At KKRF Groups we are specialize in idea-based

                            website designing that help you stand out from the

                            competition. Our team of creative designers and developers

                            collaborate with you to understand your unique vision and

                            business needs and create a customized website that
                        </div>

                    </div>
                </div>

                {/* ///////////////////////////////////////////////////////////////////// */}

                <div>
                    <div className='rounded-2xl overflow-hidden relative'>
                        <img src="work/w1.jpg" className={` object-cover w-full h-[400px] transition-all duration-300 absolute delay-200 opacity-0 ${active === "corporate" && `opacity-100`} `} alt="img 1" />
                        <img src="work/w2.jpg" className={` object-cover w-full h-[400px] transition-all duration-300 absolute  delay-200 opacity-0 ${active === "ecommerce" && `opacity-100`} `} alt="img 1" />
                        <img src="work/w3.jpg" className={` object-cover w-full h-[400px] transition-all duration-300  asbolute delay-200 opacity-0 ${active === "ideal" && `opacity-100`} `} alt="img 1" />
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Work