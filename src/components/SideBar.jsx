import React from 'react'
import { getURLParameter, joinOptionalClass, getDocumentHeight } from '../utils'
import { articleTypes, specialties } from '../values'

const Option = ({ name, value, isSelected, onClick }) => (
    <li> 
        <span
            onClick={ onClick }
            className={ joinOptionalClass('option', isSelected, 'selected') }>
            { name }
        </span>
    </li>
)

const Filter = ({ title, options, selected, onOptionSelect }) => (
    <div className="filter">
        <h3 className="filter-name">{ title }</h3>
        <ul className="filter-list">{ options.map(o =>
            <Option
                key={o.value}
                name={o.name}
                value={o.value} 
                isSelected={selected === o.value} 
                onClick={onOptionSelect.bind(null, o.value)} /> )}
        </ul>
    </div>
)

export default ({ filters, onFilterOptionSelect }) => {
console.log(filters)
    return (
        <div className="side-bar">
            { filters.map(f => (
                <Filter
                    key={f.value}
                    title={f.name}
                    options={f.options}
                    selected={f.selected}
                    onOptionSelect={onFilterOptionSelect.bind(null, f.value)} />
            )) }
        </div>
    )
}
