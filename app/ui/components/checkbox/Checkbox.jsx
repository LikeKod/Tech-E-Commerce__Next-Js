import '../filter/Filter.css'

export default function Checkbox(foFilters, cat) {
    console.log('filters',foFilters)
    return (<>
        {
            foFilters.foFilters.map((category) =>
                category.cat ?
                    <div key={category.id} className="Checkbox mb-[8px]">
                        <input type="checkbox" className="custom-checkbox" id={category?.cat} />
                        <label for={category?.cat}>{category?.cat}
                            <p className="checkbox_number">125</p>
                        </label>
                    </div>
                    : null
            )
        }
    </>
    )
}