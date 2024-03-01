const { useEffect } = require("react")
const { useState } = require("react")


const FilterableList = ({ data }) => {
    const [filteredData, setFilteredData] = useState(data)
    const [selectedFilters, setSelectedFilters] = useState([])

    const handleCheckboxChange = (filter) => {
        if (selectedFilters.includes(filter)) {
            setSelectedFilters(selectedFilters.filter(item => item != filter))
        } else {
            setSelectedFilters([...selectedFilters, filter])
        }
    }

    const filterData = () => {
        let filteredResult = data.filter(item => {
            return selectedFilters.every(filter => item.tags.includes(filter))
        })
        setFilteredData(filteredResult)
    }

    useEffect(() => {
        filterData()
    }, [selectedFilters])

    return (
        <div>
            <label>
                <input type="checkbox" value='filter_1' checked={selectedFilters.includes('filter_1')} onChange={() => handleCheckboxChange('filter_1')} />
                Filter 1
            </label>
            <label>
                <input type="checkbox" value='filter_2' checked={selectedFilters.includes('filter_2')} onChange={() => handleCheckboxChange('filter_2')} />
                Filter 2
            </label>
            <ul>
                {filteredData.map(item => {
                    <li key={item.id}>{item.name}</li>
                })}
            </ul>
        </div>
    )
}

export default FilterableList;