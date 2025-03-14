import Image from 'next/image';
import Link from 'next/link';
import MenuLinks from './MenuLinks';
import { FaPhoneVolume } from 'react-icons/fa6';

export default function Header() {
  return (
    <div className='navbar fixed top-0 right-0 left-0 m-auto max-w-6xl'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div
            tabIndex={0}
            role='button'
            className='btn btn-ghost text-primary-content hover:text-inherit focus:text-inherit lg:hidden'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              {' '}
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-xl dropdown-content rounded-box z-1 mt-3 w-80 space-y-1 border border-neutral-800 bg-neutral-950 px-4 py-12 font-bold text-white shadow'
          >
            <MenuLinks />
            <li>
              <a
                href='tel:+971 51 115 4114'
                className='mt-8 flex gap-2 text-lg text-neutral-400'
              >
                <FaPhoneVolume />
                +971 51 115 4114
              </a>
            </li>
          </ul>
        </div>
        <Link href='/' className='p-4'>
          <Image
            src='/images/pelican-logo.png'
            alt='Pelican Cargo Transport Logo'
            width={100}
            height={100}
            className='brightness-0 invert'
          />
        </Link>
      </div>
      <div className='navbar-center text-primary-content hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          <MenuLinks />
        </ul>
      </div>
      <div className='navbar-end p-4'>
        <a href='tel:+971 51 115 4114' className='btn'>
          Call Now
        </a>
      </div>
    </div>
  );
}
