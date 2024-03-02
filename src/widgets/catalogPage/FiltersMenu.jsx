import Filters from '../../../public/images/Icons/Filters-24.svg'
import Image from 'next/image'


export default function FiltersMenu({ isOpen, setIsOpen }) {
    return (
        <div className="block justify-between my-[24px] sm:flex">
            <div className='flex justify-around'>
                <button onClick={() => setIsOpen(!isOpen)} className='flex px-[16px] w-[164px] h-[56px] items-center justify-between rounded-lg bg-white border text-base sm:hidden'>
                    Filters
                    <Image alt="Icon" src={Filters} />
                </button>
            </div>
        </div>
    )
}