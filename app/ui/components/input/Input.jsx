import './Input.css'

export default function Search({searchValue, setSearchValue}) {
    return (
        <label htmlFor="" className={"search header__search"}>
            <span></span>
            <input 
            value={searchValue}
            onChange={event => setSearchValue(event.target.value)} type="search" 
            placeholder="Search" 
            name="name" />
        </label>
    )
}