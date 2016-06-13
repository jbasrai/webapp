import React from 'react'
import List from '../reusable/List'
import { getURLParameter } from '../utils'
import { articleTypes, specialties } from '../values'

export default () => {
    const selectedArticleType =
        getURLParameter('articleType') ||
        'clinicalResources'

    const selectedSpecialty =
        getURLParameter('specialty') ||
        'internalMedicine'

    const renderFilters = (title, filters, selected) => {
        const renderedFilters = 
            filters.map(({ name, value }) => {
                const className = selected === value ?
                    'selected' : ''

                return (
                    <span 
                        key={ value }
                        className={ className }>
                        { name }
                    </span>
                )
            })

        return (
            <List title={ title }>
                { renderedFilters }
            </List>
        )
    }

    const ArticleTypes = renderFilters(
        'Article Types',
        articleTypes,
        selectedArticleType
    )

    const Specialties = renderFilters(
        'Specialties',
        specialties,
        selectedSpecialty
    )

    return (
        <div className="side-bar">
            { ArticleTypes }
            { Specialties }
        </div>
    )
}