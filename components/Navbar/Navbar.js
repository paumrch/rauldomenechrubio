import Link from 'next/link'
import { useState } from 'react'
import { useCart } from '../../hooks/use-cart.js';
import { FaShoppingCart } from 'react-icons/fa';

export const Navbar = () => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  const { subtotal, checkout } = useCart();

  return (
      <nav className='flex items-center flex-wrap bg-red-50 p-8 pb-24'>
        <Link href='/'>
        <a className="flex-shrink-0 font-recoleta text-red-400 text-2xl" href="/">
                        Hola María
                       
                    </a>
        </Link>
        <button
          className=' inline-flex p-3 hover:rounded lg:hidden text-red-400 ml-auto hover:text-red-500 outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-red-400 font-recoleta font-regular items-center justify-center hover:bg-red-50 hover:text-red-500'>
                Home
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-red-400 font-recoleta font-regular items-center justify-center hover:bg-red-50 hover:text-red-500'>
                Services
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-red-400 font-recoleta font-regular items-center justify-center hover:bg-red-50 hover:text-red-500'>
                About us
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-red-400 font-recoleta font-regular items-center justify-center hover:bg-red-50 hover:text-red-500'>
                Contact us
              </a>
            </Link>
            <div>
            <Link href='/cart'>
        <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-red-400 font-recoleta font-regular items-center justify-center hover:bg-red-50 hover:text-red-500'>
          <FaShoppingCart /> {subtotal} €
        </a>
        </Link>
      </div>
          </div>
        </div>
      </nav>
  )
}

export default Navbar;