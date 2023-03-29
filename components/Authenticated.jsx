import React from 'react'
import { getSession, signOut, status, useSession } from 'next-auth/react';


const Authenticated = () => {
  const {data: session} = useSession();
  if(status === 'authenticated') {
    return (
      <div>
        <p>Welcome, {session.user.name}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    )
    
  }
}

export default Authenticated

export const getServerSideProps = async (context) => {
  const session = await getSession(context); 
  if(!session){
    return {
      redirect: {
        destination: '/',
      }
    };
  }

  return {
    props:{session},
  }
}