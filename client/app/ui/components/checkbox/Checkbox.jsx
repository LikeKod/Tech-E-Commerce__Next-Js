'use client'

import { useContext } from 'react'
import '../filter/Filter.css'
import { AppContext } from '../../../context/ShopingCartContext'

export default function Checkbox({ tryq }) {

    const { filteredData, setFilteredData } = useContext(AppContext)
    const name = tryq.name

    if (filteredData.indexOf(name) === -1) {
        return
    } else {

        filteredData.push(name)
        console.log(filteredData)
    }


    return (

        <div key={tryq.id} className="Checkbox mb-[8px]">
            <input type="checkbox" value={name} className="custom-checkbox" id={name} />
            <label htmlFor={name}>{name}
                <p className="checkbox_number">125</p>
            </label>
        </div>

    )
}