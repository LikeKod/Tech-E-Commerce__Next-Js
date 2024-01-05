'use client'

import MainLayout from "../../layouts/MainLayout"
import Breadcrumbs from "../../ui/components/Breadcrumbs/Breadcrumbs"

import ScreenshotIcon from '@mui/icons-material/Screenshot';

export default function Product() {
    return (
        <MainLayout>

            <div className="porduct">

                <section className="breadcrumb py-10">
                    <div className="container">
                        <Breadcrumbs />
                    </div>
                </section>

                <section className="product__info py-28">
                    <div className="container">
                        <div className="flex flex-row justify-between h-[672px]">

                                <div className="flex gap-x-12 my-auto">
                                    <ul className="flex flex-col gap-y-6 overflow-auto h-full w-20">
                                        <li>
                                            <img src="../images/products/Iphone14pro-1.png" alt="" />
                                        </li>
                                        <li>
                                            <img src="../images/products/Iphone14pro-1.png" alt="" />
                                        </li>
                                        <li>
                                            <img src="../images/products/Iphone14pro-1.png" alt="" />
                                        </li>
                                        <li>
                                            <img src="../images/products/Iphone14pro-1.png" alt="" />
                                        </li>
                                        <li>
                                            <img src="../images/products/Iphone14pro-1.png" alt="" />
                                        </li>
                                    </ul>
                                    
                                    <div className="max-w-[413px]">
                                        <img className="w-full" src="../images/products/Iphone14pro-1.png" alt="product-photo" />
                                    </div>
                                </div>

                            <div className="w-1/2">
                                <h1 className="text-4xl/[40px] font-semibold mb-6">Apple iPhone 14 Pro Max</h1>
                                <p className="text-3xl/[32px] font-semibold mb-6">$1399<span className="text-2xl line-through ml-4 text-gray-500 font-normal">$1499</span></p>
                                <div className="flex items-center gap-x-6 mb-6">
                                    <h4 className="text-[15px]">Select color:</h4>
                                    <div className="flex gap-2">
                                        <button className="w-8 h-8 rounded-full bg-black w-full h-full hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-200"></button>
                                        <button className="w-8 h-8 rounded-full bg-violet-500 w-full h-full hover:bg-violet-600 focus:outline-none focus:ring-4 focus:ring-gray-200"></button>
                                        <button className="w-8 h-8 rounded-full bg-red-500 w-full h-full hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-gray-200"></button>
                                        <button className="w-8 h-8 rounded-full bg-yellow-300 w-full h-full hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-gray-200"></button>
                                        <button className="w-8 h-8 rounded-full bg-gray-200 w-full h-full hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200"></button>
                                    </div>
                                </div>
                                <div className="flex flex-wrap items-center gap-2 mb-6">
                                    
                                        <button type="button" className=" min-w-[96px] text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 ">128Gb</button>
                                        <button type="button" className="min-w-[96px] text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 ">256GB</button>
                                        <button type="button" className="min-w-[96px] text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 ">512GB</button>
                                        <button type="button" className=" min-w-[96px] text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 ">1TB</button>
                                    
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-4"> 
                                    <div className=" flex gap-x-2 items-center min-w-[168px] min-h-[64px] text-gray-900  bg-gray-100 rounded-lg p-4 text-[14px]">
                                        <div>
                                            <ScreenshotIcon fontSize='medium' />
                                        </div>
                                        <div>
                                            <p className="text-gray-500 font-normal">Screen size</p>
                                            <p className="">6.7"</p>
                                        </div>
                                    </div>
                                    <div className=" flex gap-x-2 items-center min-w-[168px] min-h-[64px] text-gray-900  bg-gray-100 rounded-lg p-4 text-[14px]">
                                        <div>
                                            <ScreenshotIcon fontSize='medium' />
                                        </div>
                                        <div>
                                            <p className="text-gray-500 font-normal">CPU</p>
                                            <p className="">Apple A16 Bionic"</p>
                                        </div>
                                    </div>
                                    <div className=" flex gap-x-2 items-center min-w-[168px] min-h-[64px] text-gray-900  bg-gray-100 rounded-lg p-4 text-[14px]">
                                        <div>
                                            <ScreenshotIcon fontSize='medium' />
                                        </div>
                                        <div>
                                            <p className="text-gray-500 font-normal">Number of Cores</p>
                                            <p className="">6"</p>
                                        </div>
                                    </div>
                                    <div className=" flex gap-x-2 items-center min-w-[168px] min-h-[64px] text-gray-900  bg-gray-100 rounded-lg p-4 text-[14px]">
                                        <div>
                                            <ScreenshotIcon fontSize='medium' />
                                        </div>
                                        <div>
                                            <p className="text-gray-500 font-normal">Main camera </p>
                                            <p className="">48-12 -12 MP</p>
                                        </div>
                                    </div>
                                    <div className=" flex gap-x-2 items-center min-w-[168px] min-h-[64px] text-gray-900  bg-gray-100 rounded-lg p-4 text-[14px]">
                                        <div>
                                            <ScreenshotIcon fontSize='medium' />
                                        </div>
                                        <div>
                                            <p className="text-gray-500 font-normal">Front-camera</p>
                                            <p className="">12</p>
                                        </div>
                                    </div>
                                    <div className=" flex gap-x-2 items-center min-w-[168px] min-h-[64px] text-gray-900  bg-gray-100 rounded-lg p-4 text-[14px]">
                                        <div>
                                            <ScreenshotIcon fontSize='medium' />
                                        </div>
                                        <div>
                                            <p className="text-gray-500 font-normal">Battery capacity</p>
                                            <p className="">4323 mAh</p>
                                        </div>
                                    </div>
                                    
                                </div>

                            </div>
                        </div>

                        <h1>Product</h1>

                    </div>
                </section>

            </div>


        </MainLayout>
    )
}