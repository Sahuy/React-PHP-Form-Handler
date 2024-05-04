import React, { useState } from 'react'

const Question = () => {

    const [active, setActive] = useState(1)


    return (
        <div className='mt-24'>

            <div className='text-4xl font-semibold text-center '>Frequently Asked Questions</div>

            <div className=' lg:max-w-[70%] px-4 m-auto space-y-6 mt-9'>

                <div onClick={() => setActive(1)} className={`bg-gray-200/50 cursor-pointer rounded-xl p-4 py-6 overflow-hidden transition-all duration-200  `}>
                    <div className='font-semibold text-lg flex justify-between items-center gap-4'>
                        <div className='md:text-xl'>How long does it take to design a website ?</div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 transition-all duration-200  ${active === 1 && `rotate-180`}`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>

                    </div>

                    <div className={`h-0 overflow-hidden transition-all duration-200 mt-0 ${active === 1 && `  h-auto overflow-visible mt-6`} `}   >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti blanditiis cupiditate temporibus, et tempora ipsam obcaecati soluta deserunt non, aperiam molestias quos!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut quam dolorem id reprehenderit. Dignissimos doloribus autem amet atque numquam sit, obcaecati minima fugiat temporibus ullam iste in. Eligendi corrupti praesentium doloribus id voluptates at impedit consequuntur tenetur, eaque pariatur quasi ullam omnis autem porro quidem dolorem doloremque nam laudantium ipsum! Cumque, error? Fuga, sint vero.
                    </div>
                </div>

                <div onClick={() => setActive(2)} className={`bg-gray-200/50 cursor-pointer rounded-xl p-4  py-6 overflow-hidden transition-all duration-200  `}>
                    <div className='font-semibold text-lg flex justify-between items-center gap-4'>
                        <div className='md:text-xl'> Is it custom design or ready-made themes ?</div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 transition-all duration-200  ${active === 2 && `rotate-180`}`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>

                    </div>

                    <div className={`h-0 overflow-hidden transition-all duration-200 mt-0 ${active === 2 && `  h-auto overflow-visible mt-6`} `}   >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti blanditiis cupiditate temporibus, et tempora ipsam obcaecati soluta deserunt non, aperiam molestias quos!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut quam dolorem id reprehenderit. Dignissimos doloribus autem amet atque numquam sit, obcaecati minima fugiat temporibus ullam iste in. Eligendi corrupti praesentium doloribus id voluptates at impedit consequuntur tenetur, eaque pariatur quasi ullam omnis autem porro quidem dolorem doloremque nam laudantium ipsum! Cumque, error? Fuga, sint vero.
                    </div>
                </div>

                <div onClick={() => setActive(3)} className={`bg-gray-200/50 cursor-pointer rounded-xl p-4  py-6 overflow-hidden transition-all duration-200  `}>
                    <div className='font-semibold text-lg flex justify-between items-center gap-4'>
                        <div className='md:text-xl'> Do you also help in housing. Payment gateway etc ?</div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 transition-all duration-200  ${active === 3 && `rotate-180`}`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>

                    </div>

                    <div className={`h-0 overflow-hidden transition-all duration-200 mt-0 ${active === 3 && `  h-auto overflow-visible mt-6`} `}   >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti blanditiis cupiditate temporibus, et tempora ipsam obcaecati soluta deserunt non, aperiam molestias quos!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut quam dolorem id reprehenderit. Dignissimos doloribus autem amet atque numquam sit, obcaecati minima fugiat temporibus ullam iste in. Eligendi corrupti praesentium doloribus id voluptates at impedit consequuntur tenetur, eaque pariatur quasi ullam omnis autem porro quidem dolorem doloremque nam laudantium ipsum! Cumque, error? Fuga, sint vero.
                    </div>
                </div>

                <div onClick={() => setActive(4)} className={`bg-gray-200/50 cursor-pointer rounded-xl p-4  py-6 overflow-hidden transition-all duration-200  `}>
                    <div className='font-semibold text-lg flex justify-between items-center gap-4'>
                        <div className='md:text-xl'> Do you provide support after website delivery ?</div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 transition-all duration-200  ${active === 4 && `rotate-180`}`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>

                    </div>

                    <div className={`h-0 overflow-hidden transition-all duration-200 mt-0 ${active === 4 && `  h-auto overflow-visible mt-6`} `}   >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti blanditiis cupiditate temporibus, et tempora ipsam obcaecati soluta deserunt non, aperiam molestias quos!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut quam dolorem id reprehenderit. Dignissimos doloribus autem amet atque numquam sit, obcaecati minima fugiat temporibus ullam iste in. Eligendi corrupti praesentium doloribus id voluptates at impedit consequuntur tenetur, eaque pariatur quasi ullam omnis autem porro quidem dolorem doloremque nam laudantium ipsum! Cumque, error? Fuga, sint vero.
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Question