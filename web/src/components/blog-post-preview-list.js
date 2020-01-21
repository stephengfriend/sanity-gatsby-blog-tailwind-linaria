import {Link} from 'gatsby'
import {cx, css} from 'linaria'
import React from 'react'
import BlogPostPreview from './blog-post-preview'

const list = css`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 2em;
  grid-row-gap: 2em;
`

function BlogPostPreviewGrid (props) {
  return (
    <div className='mt-8 mx-0 mb-16'>
      {props.title && <h2 className='uppercase my-8 mx-0 font-semibold text-xs leading-tight tracking-wider'>{props.title}</h2>}
      <ul className={cx('m-0 p-0 list-none', list)}>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <BlogPostPreview {...node} isInList />
            </li>
          ))}
      </ul>
      {props.browseMoreHref && (
        <div className='text-sm leading-snug mt-8 text-center'>
          <Link to={props.browseMoreHref} className='inline-block py-2 px-0 no-underline hover:bg-green-600'>Browse more</Link>
        </div>
      )}
    </div>
  )
}

BlogPostPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default BlogPostPreviewGrid
