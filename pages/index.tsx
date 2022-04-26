import { useUser } from '@auth0/nextjs-auth0';
import { NextPage } from 'next';
import Link from 'next/link';
import Header from '../components/Header';
import Profile from './profile';

export default function Home() {
  const { user } = useUser();

  return (
    <>
    <Header user={user}/>
      <h1 className='text-3xl font-bold underline'>Hello world!</h1>
      <Profile />
    </>
  );
}
