import MainLayout from "../../layouts/MainLayout"
import Breadcrumbs from "../../ui/components/Breadcrumbs/Breadcrumbs"
import ScreenshotIcon from '@mui/icons-material/Screenshot';
import { getProducts } from '../../lib/data';
import { NextResponse } from "next/server"

import { wooApi } from "../../api/products/route"




export default async function Product({ params }) {
    const { data } = await getProducts();

    // Находим из массива продукт по праметру из пути
    const product = data?.products.find(item =>
        item.slug === params.id
    )

    
    const getVariations = async (productId) => {
        const responseData = {
            variants: []
        }        
        // Fetch data from external API
        const res = await wooApi.get(`products/${productId}/variations`);
        responseData.variants = res.data;
		return  responseData;
    }

    const {variants} = await getVariations(product.id)

    // получаем первое фото из массива фотографий
    let img = '';
    if (product.images) {
        img = product?.images[0];
    }

    console.log('------------variations--------', variants , 'end') 
    
    

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

                                    {product?.images
                                        ? product.images.map((image, index) =>
                                            <li key={image.id}>
                                                <img src={image.src} alt="" />
                                            </li>
                                        )
                                        : <li></li>
                                    }
                                </ul>

                                <div className="max-w-[413px]">
                                    <img className="w-full h-full object-cover object-center" src={img.src} />
                                </div>
                            </div>

                            <div className="w-1/2">
                                <h1 className="text-4xl/[40px] font-semibold mb-6">{product?.name}</h1>
                                <p className="text-3xl/[32px] font-semibold mb-6">${product?.price}<span className="text-2xl line-through ml-4 text-gray-500 font-normal">{product?.regular_price ?? ''}</span></p>
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
                                    {variants ? 
                                        variants.map(variant => 
                                            <button type="button" className=" min-w-[96px] text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 ">{variant.name}</button>
                                            ) : ''
                                    }
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-4 mb-6">
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

                                <p className=" text-[14px] tracking-wide leading-6 text-gray-500 mb-8 ">
                                    {product?.description}
                                    <span className="text-gray-700 "> <a className="underline" href="#">more...</a> </span>
                                </p>

                                <div className="flex gap-x-4">
                                    <button type="button" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center px-14 py-4">
                                        Add to Wishlist
                                    </button>

                                    <button type="button" className="text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center px-14 py-4">
                                        Add to Card
                                    </button>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>

            </div>


        </MainLayout>
    )
}