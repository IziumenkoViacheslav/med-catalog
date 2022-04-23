import Link from 'next/link';

export default function Home() {
  return (
    <h1 className='text-3xl font-bold underline'>
      Hello world!
      <Link href='/api/auth/login'>
        <a>LOGIN</a>
      </Link>
    </h1>
  );
}
