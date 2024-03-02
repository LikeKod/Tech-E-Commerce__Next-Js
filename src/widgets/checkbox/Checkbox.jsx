import '../filter/Filter.css'

export default function Checkbox({ tryq }) {
    return (<>
        {/* {tryq?.map((category) =>
            category.categories ? */}
        <div key={tryq.id} className="Checkbox mb-[8px]">
            <input type="checkbox" value={tryq.name} className="custom-checkbox" id={tryq.name} />
            <label htmlFor={tryq.name}>{tryq.name}
                <p className="checkbox_number">125</p>
            </label>
        </div>
        {/* : null
        )} */}
    </>
    )
}