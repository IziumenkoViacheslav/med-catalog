import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';
import Profile from './profile';

export default function Home() {
  const { user } = useUser();

  return (
    <>
      <h1 className='text-3xl font-bold underline'>Hello world!</h1>
      {!user ? (
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
      )}

      <Profile />
    </>
  );
}
