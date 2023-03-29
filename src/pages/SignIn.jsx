import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const SignIn = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="d-flex align-items-center ">
        <p className="m-0 me-2 ">{session.user.name}</p>
        <button className="btn btn-danger " onClick={() => signOut()}>
          Sign out
        </button>
      </div>
    );
  } else {
    return (
      <div className="d-flex align-items-center">
        <button className="btn btn-danger " onClick={() => signIn()}>
          Login
        </button>
      </div>
    );
  }
};

export default SignIn;
