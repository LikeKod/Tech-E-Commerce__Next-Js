import '../filter/Filter.css'

export default function Checkbox({ item }) {
    return (<>
        {/* {tryq?.map((category) =>
            category.categories ? */}
        <div key={item.id} className="Checkbox mb-[8px]">
            <input type="checkbox" value={item.name} className="custom-checkbox" id={item.id} />
            <label htmlFor={item.name}>{item.name}
                <p className="checkbox_number">125</p>
            </label>
        </div>
        {/* : null
        )} */}
    </>
    )
}