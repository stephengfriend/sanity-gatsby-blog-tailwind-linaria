import {format, distanceInWords, differenceInDays} from 'date-fns'
import {cx, css} from 'linaria'
import React from 'react'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import PortableText from './portableText'
import Container from './container'
import AuthorList from './author-list'

const grid = css`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 2em;
    grid-template-columns: 3fr 1fr;
  }
`

const blockContent = css`
  & a {
    color: #38a169;

    @media (hover: hover) {
      &:hover {
        color: inherit;
      }
    }
  }

  & h2, & h3, & h4, & h5, & h6 {
    margin-top: 1.5rem;
    font-weight: 600;
  }

  & figure {
    margin: 0;
    padding: 0;

    & img {
      max-width: 100%;
    }
  }

  & p {
    margin-top: 1.5rem;
  }
`

function BlogPost (props) {
  const {_rawBody, authors, categories, title, mainImage, publishedAt} = props
  return (
    <article>
      {mainImage && mainImage.asset && (
        <div className={cx('relative bg-gray-300', css`padding-bottom: calc(9 / 16 * 100%);`)}>
          <img
            className='absolute top-0 left-0 w-full h-full object-cover'
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit('crop')
              .auto('format')
              .url()}
            alt={mainImage.alt}
          />
        </div>
      )}
      <Container>
        <div className={grid}>
          <div className={blockContent}>
            <h1 className='font-semibold text-2xl leading-normal mt-4 mx-0 mb-8 md:text-3xl lg:text-4xl md:leading-relaxed lg:leading-loose'>{title}</h1>
            {_rawBody && <PortableText blocks={_rawBody} />}
          </div>
          <aside>
            {publishedAt && (
              <div className='text-sm leading-snug mt-8 mx-0 mb-12 text-gray-600'>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'MMMM Do, YYYY')}
              </div>
            )}
            {authors && <AuthorList items={authors} title='Authors' />}
            {categories && (
              <div className='mt-8 mx-0 mb-12 border-t border-gray-300 border-solid'>
                <h3 className='mt-2 mx-0 mb-0'>Categories</h3>
                <ul className='list-none my-3 mx-0 p-0'>
                  {categories.map(category => (
                    <li key={category._id} className='py-1 px-0'>{category.title}</li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </Container>
    </article>
  )
}

export default BlogPost
