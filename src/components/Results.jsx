import React from 'react'
import { INITIAL, LOADING, NOT_FOUND, READY } from '../values/results'
import { articleTypes, specialties } from '../values'
import { ARTICLE_TYPE } from '../queryParams'
import Images from './Images.jsx'
//import Lightbox from 'react-images'
import Lightbox from 'react-images'


const Hit = ({ content, title, url, score }) => (
    <div className="hit">
        <a className="hit-title" href={ url }>{ title }</a>
        <div className="hit-url">{ url }</div>
        <div 
            className="hit-contents" 
            dangerouslySetInnerHTML={ {__html: content} } /> 
         <div className="hit-score">{ score }</div>
    </div>
)

const Site = ({ site, results }) => (
    <div className="site">
        <h2 className="site-name">{ site }</h2>
        { results.map(({ content, title, url, score }) =>
            <Hit
                key={ url }
                content={ content }
                title={ title }
                url={ url }
                score = { score } /> 
        )}
    </div>
)

const Message = ({ children }) => (
    <div className="message">{ children }</div>
)

const Results = ({ results, filters, isGalleryOpen, closeGallery, selectImage, selectedImage, nextImage, prevImage }) => {
    const articleType = filters.find(f => f.value === 'articleType')
    const selected = articleType.selected
    
    console.log('selected image', selectedImage)

    if(selected === 'all') {
        return(
            <div className="results">
                { results
                    .map(({ url, content, title, score }) =>
                        <Hit
                            key={ url }
                            content={ content }
                            title={ title }
                            url={ url }
                            score = { score } /> 
                            )}
            </div>
        )
    } else if(selected === 'images') {
        const images = results.map(image => ({ src: image }))
        console.log('selected image', selectedImage)
        const isGalleryOpen = selectedImage > -1
        console.log('isGalleryOpen', isGalleryOpen)
        console.log('selectImage', selectImage)
        return (
            <div>
                {images.map((image, index) => <img src={image.src} key={image.src} onClick={() => selectImage(index)} />)}
                <Lightbox
                    currentImage={selectedImage}
                    images={images}
                    isOpen={isGalleryOpen}
                    onClickNext={nextImage}
                    onClickPrev={prevImage}
                    onClose={closeGallery}
                />
            </div>
        )

    }
    return (
        <div className="results">
            { results
                .filter(({ site, results }) => results.length > 0)
                .map(({ site, results }) =>
                    <Site 
                        key={ site }
                        site={ site }
                        results={ results } />
                )}
    </div>
    )
}

export default ({ results, onSampleSearch, filters, closeGallery, selectImage, selectedImage, nextImage, prevImage }) => {

    switch (results.status) {
        case INITIAL:
            return (
                <Message>
                    <span>Type a </span>
                    <a href="javascript:void(0);" onClick={onSampleSearch}>search</a>
                    <span> in the box above</span>
                </Message>
            )
        case NOT_FOUND:
            return <Message>Results not found</Message>
        case LOADING:
            return <Message>Loading...</Message>
        case READY:
            return <Results results={ results.body } filters={filters} closeGallery={closeGallery} selectImage={selectImage} selectedImage={selectedImage} nextImage={nextImage} prevImage={prevImage} />
    }
}
