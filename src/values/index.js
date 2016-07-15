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
    }, {
        name: 'Case Reports',
        value: 'caseReports'
    }],
    selected: getURLParameter(ARTICLE_TYPE) || 'clinicalResources'
}]