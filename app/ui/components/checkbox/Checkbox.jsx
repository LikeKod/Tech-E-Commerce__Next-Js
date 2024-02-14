import '../filter/Filter.css'
import { categoryFoFilters } from '../../../lib/data'

export default function Checkbox({tags}) {


    return (<>
        {categoryFoFilters.map((category) =>
            category[tags] ?
                <div key={category.id} className="Checkbox mb-[8px]">
                    <input type="checkbox" value={category[tags]}  className="custom-checkbox" id={category[tags]} />
                    <label htmlFor={category[tags]}>{category[tags]}
                        <p className="checkbox_number">125</p>
                    </label>
                </div>
                : null
        )}
    </>
    )
}