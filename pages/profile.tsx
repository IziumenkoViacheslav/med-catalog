import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';

export default function Profile() {
  const { user, error, isLoading } = useUser();
  return (
    <>
      {isLoading && <p>Loading profile...</p>}
      {error && (
        <>
          <h4>Error</h4>
          <pre>{error.message}</pre>
        </>
      )}
      {user && (
        <>
          <h4>Profile</h4>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
      )}{' '}
    </>
  );
}
export const getServerSideProps = withPageAuthRequired();
