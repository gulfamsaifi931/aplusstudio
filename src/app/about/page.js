import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const about = () => {
    return (
        <>
            <section class="flex items-center py-10 bg-stone-100 xl:h-screen font-poppins dark:bg-gray-800 ">
                <div class="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
                    <div class="flex flex-wrap ">
                        <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                            <div class="relative z-10 my-4">
                                <Image src="/CEO.jpg" alt=""
                                    width={1000} height={1000}
                                    class="relative z-40 object-cover w-full h-100 lg:rounded-tr-[80px] lg:rounded-bl-[80px] rounded" />
                                <div
                                    class="absolute z-10 hidden w-full h-full bg-blue-400 rounded-bl-[80px] rounded -bottom-6 right-6 lg:block">
                                </div>
                                <div
                                    class="absolute z-50 text-blue-400 transform -translate-y-1/2 cursor-pointer top-1/2 left-[46%] hover:text-blue-500">
                                </div>
                            </div>
                        </div>
                        <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                            <div class="relative">
                                <h1
                                    class="absolute -top-20   left-0 text-[20px] lg:text-[100px] text-gray-900 font-bold  dark:text-gray-200 opacity-5 md:block hidden">
                                    About Us
                                </h1>
                                <h1 class="pl-2 text-3xl font-bold border-l-8 border-blue-400 md:text-5xl dark:text-white">
                                    Welcome to our site
                                </h1>
                            </div>
                            <p class="mt-6 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                                A PLUS STUDIO is specialized in manufacturing engineered products.
                                and It is specialized in manufacturing engineered products, design and installation of residential main gates, railings, shower Cabins,
                                spiders and stair construction for Residence, Commercial, Industrial, Health Care,
                                Educational, Governmental work and so on as we believe in creating difference,
                                by our innovative ideas which then converted into design to make a new product.
                                Our motto is to provide a complete high quality finished product for your dream project’s architectural division.
                            </p>
                            <Link href="/about/1"
                                class="shadow-lg shadow-cyan-500/50 ... text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
                                Learn more
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default about
