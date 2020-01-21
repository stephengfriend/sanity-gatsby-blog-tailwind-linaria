import React from 'react'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'

function AuthorList ({items, title}) {
  return (
    <div className='mt-8 mx-0 mb-12 border-t border-solid border-gray-300'>
      <h2 className='font-semibold leading-normal mt-2 mx-0 mb-0'>{title}</h2>
      <ul className='list-none m-0 p-0'>
        {items.map(({author, _key}) => {
          const authorName = author && author.name
          return (
            <li key={_key} className='flex justify-center items-center my-4 mx-0 text-sm'>
              <div>
                <div className='relative w-12 h-12 rounded-full bg-gray-300 overflow-hidden'>
                  {author && author.image && author.image.asset && (
                    <img
                      src={imageUrlFor(buildImageObj(author.image))
                        .width(100)
                        .height(100)
                        .fit('crop')
                        .url()}
                      alt=''
                      className='w-full h-full object-cover align-top'
                    />
                  )}
                </div>
              </div>
              <div className='flex-grow ml-2'>
                <div>{authorName || <em>Missing name</em>}</div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default AuthorList
