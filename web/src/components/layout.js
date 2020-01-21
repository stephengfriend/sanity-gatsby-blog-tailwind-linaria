
import React from 'react'
import {css} from 'linaria'
import cx from 'classnames'
import Header from './header'

let minHeight = css`
  min-height: calc(100% - 73px - 120px);

  @media (--media-min-small) {
    min-height: calc(100% - 91px - 155px);
  }
`

// https://dev.to/suin/visualize-responsive-breakpoint-with-tailwindcss-2aj4
const Breakpoints = props => (<div className='fixed z-50 bottom-0 right-0 my-8 mx-8 p-3 text-xs font-mono text-white h-6 w-6 rounded-full flex items-center justify-center bg-gray-700 sm:bg-pink-500 md:bg-orange-500 lg:bg-green-500 xl:bg-blue-500' {...props}>
  <div className='block  sm:hidden md:hidden lg:hidden xl:hidden'>all</div>
  <div className='hidden sm:block  md:hidden lg:hidden xl:hidden'>sm</div>
  <div className='hidden sm:hidden md:block  lg:hidden xl:hidden'>md</div>
  <div className='hidden sm:hidden md:hidden lg:block  xl:hidden'>lg</div>
  <div className='hidden sm:hidden md:hidden lg:hidden xl:block'>xl</div>
</div>)

const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle}) => (
  <>
    <Breakpoints />
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <content className={cx('bg-white', minHeight)}>{children}</content>
    <footer className='border-t border-solid border-gray-200'>
      <div className='max-w-5xl my-0 mx-auto pt-16 px-6 pb-6 sm:pt-24 sm:px-8 sm:pb-8'>
        <div className='text-center text-sm leading-snug'>
          &copy; {new Date().getFullYear()}, Built with <a href='https://www.sanity.io'>Sanity</a>{' '}
          &amp;
          {` `}
          <a href='https://www.gatsbyjs.org' className='text-current no-underline hover:text-green-600'>Gatsby</a>
        </div>
      </div>
    </footer>
  </>
)

export default Layout
