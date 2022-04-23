import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';

export default function Profile() {
  const { user, isLoading } = useUser();
console.log(user)
  return (
    <>
      <h1 className='text-3xl font-bold underline'>{user?.name}</h1>
    </>
  );
}
