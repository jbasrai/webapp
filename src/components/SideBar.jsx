import React from 'react'
import { getURLParameter } from '../utils'
import { articleTypes, specialties } from '../values'

const Option = ({ name, value, isSelected, onClick }) => (
    <li 
        onClick={ onClick }
        className={ isSelected ? 'selected' : '' }>
        { name }
    </li>
)

const Filter = ({ title, options, selected, onOptionSelect }) => (
    <div className="filter">
        <h3 className="filter-name">{ title }</h3>
        <ul className="filter-list">{ options.map(({ name, value }) =>
            <Option
                key={ value }
                name={ name }
                value={ value } 
                isSelected={ selected === value } 
                onClick={ onOptionSelect.bind(null, value) } /> )}
        </ul>
    </div>
)

export default () => {
    const selectedArticleType =
        getURLParameter('articleType') ||
        'clinicalResources'

    const selectedSpecialty =
        getURLParameter('specialty') ||
        'internalMedicine'

    const onArticleTypeSelect = (articleType) => {
        const q = getURLParameter('q')

        window.location.href = `/search?q=${q}&articleType=${articleType}`
    }

    const ArticleTypes = (
        <Filter
            title="Article Types"
            options={ articleTypes }
            selected={ selectedArticleType } 
            onOptionSelect={ onArticleTypeSelect } />
    )

    const Specialties = (
        <Filter
            title="Specialties"
            options={ specialties }
            selected={ selectedSpecialty } />
    )

    return (
        <div className="side-bar">
            { ArticleTypes }
        </div>
    )
}