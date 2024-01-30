import './Input.css'
import { CiSearch } from "react-icons/ci";

export default function Search({onChange }) {
    return (
        <label htmlFor="" className={"search header__search relative"}>
            <CiSearch size={29} className='text-gray-500 absolute top-3.5 left-2.5'/>
            <input 
            className='max-w-[433px] h-[56px] rounded-lg pl-[48px]'
            onChange={onChange} type="search" 
            placeholder="Search" 
            name="name" />
        </label>
    )
}