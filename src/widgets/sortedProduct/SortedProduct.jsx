import Filter from '../../../public/images/Icons/Filters-24.svg'
import Image from 'next/image'

export default function SortedProduct() {
    return (
        <>
            <div className="block justify-between my-[24px] sm:flex">
                <div className="text-neutral-400 text-sm hidden sm:block">Selected Products: <span className="text-black text-xl">85</span></div>
                <div>
                    <div className='flex justify-around'>
                    <button className='flex px-[16px] w-[164px] h-[56px] items-center justify-between rounded-lg bg-white border text-base sm:hidden'>
                        Filters
                        <Image alt="Icon" src={Filter}/>
                    </button>
                    <select className="w-[164px] h-[56px] rounded-lg px-[16px] bg-white border text-base sm:w-[256px] sm:h-[40px]" name="filter" id="">
                        <option value="rating">By rating</option>
                        <option value="price">By price</option>
                        <option value="novelty">By novelty</option>
                    </select>
                    </div>
                </div>
                <div className="text-neutral-400 mt-[24px] text-sm sm:hidden">Selected Products: <span className="text-black text-xl">85</span></div>
            </div>
        </>
    )
}