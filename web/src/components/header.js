import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'

const Header = ({onHideNav, onShowNav, showNav, siteTitle}) => (
  <div className='relative z-50'>
    <div className='flex max-w-5xl my-0 mx-auto p-4 sm:p-6'>
      <div className='font-semibold flex-grow'>
        <Link to='/' className='inline-block p-2 text-current no-underline hover:text-green-600'>{siteTitle}</Link>
      </div>

      <button className='appearance-none text-2xl border-none m-0 p-3 outline-none text-current md:hidden sm:block' onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' className='block fill-current' />
      </button>

      <nav className={cn(showNav ? 'block' : 'hidden', 'sm:block md:block lg:block xl:block absolute sm:static md:static lg:static xl:static bg-white text-black inset-x-0 shadow-y sm:shadow-none md:shadow-none lg:shadow-none xl:shadow-none')} css={{top: '4.3rem'}}>
        <ul className='m-0 py-4 px-0 sm:flex sm:justify-end sm:list-none sm:py-0'>
          <li>
            <Link to='/archive/' className='block text-current no-underline hover:text-green-600 py-2 px-6 sm:p-2'>Archive</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)

export default Header
