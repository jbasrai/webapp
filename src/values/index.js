import { getURLParameter } from '../utils'
import { Q, ARTICLE_TYPE, SPECIALTY } from '../queryParams'

export const query = getURLParameter(Q) || ''

export const filters = [{
    name: 'Article Type',
    value: ARTICLE_TYPE,
    options: [{
        name: 'All',
        value: 'all'
    }, {
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
    }, {
        name: 'Guidelines',
        value: 'guidelines'
    }, {
        name: 'Pharmacopoeia',
        value: 'pharm'
    }, {
        name: 'Calculator',
        value: 'calc'
    }],
    selected: getURLParameter(ARTICLE_TYPE) || 'clinicalResources'
}, {
    name: 'Specialties',
    value: SPECIALTY,
    options: [{
        name: 'Adult',
        value: 'general'
    }, {
        name: 'Pediatrics',
        value: 'pediatrics'
    }],
    selected: getURLParameter(SPECIALTY) || 'general'
}]

export const footerLinks = [{
    name: 'About',
    value: 'about',
    url: '/about.html'
}, {
    name: 'Our Blog',
    value: 'blog',
    url: 'http://www.blog.numose.com/'
}, {
    name: 'Terms of Service',
    value: 'tos',
    url: '/tos.html'
}, {
    name: 'Privacy Policy',
    value: 'privacy',
    url: '/privacy.html'
}, {
    name: 'Contact',
    value: 'contact',
    url: '/contact.html'
}]