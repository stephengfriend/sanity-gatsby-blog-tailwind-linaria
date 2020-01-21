import {format} from 'date-fns'
import {css} from 'linaria'
import cx from 'classnames'
import {Link} from 'gatsby'
import React from 'react'

import {buildImageObj, getBlogUrl} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import PortableText from './portableText'

// TODO: Figure out a better way to get tailwind config in here for media query
const horizontal = css`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 2em;

    & h3 {
      margin-top: 0;
    }

    &:hover h3 {
      text-decoration: underline;
    }
  }
`

function BlogPostPreview (props) {
  const {isInList} = props

  return (
    <Link
      className={cx('block', {[horizontal]: isInList})}
      to={getBlogUrl(props.publishedAt, props.slug.current)}
    >
      <div className={cx('relative bg-gray-300', css`padding-bottom: 66.666667%;`)}>
        {props.mainImage && props.mainImage.asset && (
          <img
            className='absolute top-0 left-0 w-full h-full object-cover'
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .auto('format')
              .url()}
            alt={props.mainImage.alt}
          />
        )}
      </div>
      <div>
        <h3 className='font-semibold text-lg leading-relaxed sm:leading-loose mt-6 mx-0 mb-2 sm:text-xl md:text-2xl'>{props.title}</h3>
        <div className='text-sm normal-leading text-gray-600'>{format(props.publishedAt, 'MMMM Do, YYYY')}</div>
        {props._rawExcerpt && (
          // TODO: Find a better way to assign styles to portable text blocks
          <div className={css`& p { margin: 0.5em 0; } & strong { font-weight: 600; }`}>
            <PortableText blocks={props._rawExcerpt} />
          </div>
        )}
      </div>
    </Link>
  )
}

export default BlogPostPreview
