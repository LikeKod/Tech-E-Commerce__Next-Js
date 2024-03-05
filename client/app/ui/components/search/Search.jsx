
export default function Search(className) {
    return (
        <label htmlFor="">
            <span></span>
            <input
                className='w-[230px] h-[40px] rounded-lg bg-neutral-100 px-12 box-border mb-[16px] mt-[24px]'
                type="search"
                placeholder="Search"
                name="name" />
        </label>
    )
}