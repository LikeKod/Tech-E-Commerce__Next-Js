import './Input.css'
import { CiSearch } from "react-icons/ci";
import debounce from "debounce"
import { getProducts } from '../../shared/lib/utils/data';
import { useState } from 'react';
import { BiLoaderCircle } from 'react-icons/bi';
import Link from 'next/link';



export default function Search() {
    const [items, setItems] = useState([])
    const [isSearching, setIsSearching] = useState(null)


    const handleSearchName = debounce(async (event) => {


        if (event.target.value == '') {
            setItems([])
            return
        }

        setIsSearching(true)

        try {
            // setParams()

            const { data } = await getProducts({ search: `${event.target.value}` });

            if (data) {
                setItems(data.products)
                setIsSearching(false)
                return
            }
            setItems([])
            setIsSearching(false)
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }, 500)
    return (
        <>
            {isSearching ? <BiLoaderCircle className="mr-2 animate-spin" size={22} /> : null}

            {items.length > 0 ?
                <div className="absolute bg-white max-w-[910px] h-auto w-full z-20 left-0 top-12 border p-1">
                    {items.map((item) => (
                        <div className="p-1" key={item.id}>
                            <Link
                                href={`/product/${item?.id}`}
                                className="flex items-center justify-between w-full cursor-pointer hover:bg-gray-200 p-1 px-2"
                            >
                                <div className="flex items-center">
                                    <img className="rounded-md" width="40" src={item?.images[0].src} />
                                    <div className="truncate ml-2">{item?.name}</div>
                                </div>
                                <div className="truncate">£{(item?.price / 100).toFixed(2)}</div>
                            </Link>
                        </div>
                    ))}
                </div>
                : null}
            <label htmlFor="" className={"search header__search relative"}>
                <CiSearch size={29} className='text-gray-500 absolute top-3.5 left-2.5' />
                <input
                    className='max-w-[433px] h-[56px] rounded-lg pl-[48px]'
                    onChange={handleSearchName} type="search"
                    placeholder="Search"
                    name="name" />
            </label>
        </>
    )
}