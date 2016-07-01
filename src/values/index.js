import { getURLParameter } from '../utils'
import { Q, ARTICLE_TYPE } from '../queryParams'

export const query = getURLParameter(Q) || ''

export const filters = [{
    name: 'Article Type',
    value: ARTICLE_TYPE,
    options: [{
        name: 'Clinical Resources',
        value: 'clinicalResources'
    }, {
        name: 'Review Articles',
        value: 'reviewArticles'
    }],
    selected: getURLParameter(ARTICLE_TYPE) || 'clinicalResources'
}]