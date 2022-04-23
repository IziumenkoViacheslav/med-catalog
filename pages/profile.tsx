import { useUser } from '@auth0/nextjs-auth0';

export default function Profile() {
  const { user, isLoading } = useUser();
  return (
    <>
      <h1 className='text-3xl font-bold underline'>{user?.name}</h1>
    </>
  );
}
