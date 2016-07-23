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
        name: 'Blogs',
        value: 'blogs'
    }, {
        name: 'Case Reports',
        value: 'caseReports'
    }],
    selected: getURLParameter(ARTICLE_TYPE) || 'clinicalResources'
}]

export const footerLinks = [{
    name: 'About',
    value: 'about',
    url: '/about.html'
}, {
    name: 'Terms of Service',
    value: 'tos',
    url: '/tos.html'
}, {
    name: 'Blog',
    value: 'blog',
    url: 'http://www.blog.numose.com/'
}, {
    name: 'Contact',
    value: 'contact',
    url: '/contact.html'
}]