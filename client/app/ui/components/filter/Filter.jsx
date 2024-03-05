import Brand from './brand/Brand'
import Price from './price/Price'



export default function Filter({ items }) {
    console.log(items)
    
    return (
        <>
            <Price />
            {items.map(it => (
                <Brand key={it.id} item={it.attributes}/>
            ))}
        </>
    )
}