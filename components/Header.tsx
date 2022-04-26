import Link from 'next/link'
import React from 'react'

export default function Header({user}) {
  return (
      !user ? (
    <button className='font-bold text-lg bg-sky-500 rounded-2xl	pl-8 pr-8 pt-1.5 pb-1.5 text-white'>
          <Link href='/api/auth/login'>
            <a>LOGIN</a>
          </Link>
        </button>
      ) : (
        <button className='font-bold text-lg bg-sky-500 rounded-2xl	pl-8 pr-8 pt-1.5 pb-1.5 text-white'>
          <Link href='/api/auth/logout'>
            <a>LOGOUT</a>
          </Link>
        </button>
  ))
}
