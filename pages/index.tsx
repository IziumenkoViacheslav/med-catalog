import Link from 'next/link';
import Profile from './profile';

export default function Home() {
  return (
    <>
      <h1 className='text-3xl font-bold underline'>Hello world!</h1>
      <Link href='/api/auth/login'>
        <a>LOGIN</a>
      </Link>
      <Link href='/api/auth/logout'>
        <a>LOGOUT</a>
      </Link>
      <Profile/>
    </>
  );
}
