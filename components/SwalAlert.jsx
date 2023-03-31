import React from 'react'
import { getSession, signOut, status, useSession } from "next-auth/react";
import Swal from "sweetalert2";

const SwalAlert = () => {
    const { data: session } = useSession();

 if (!session) {
   Swal.fire({
     title: "Oops! It looks like you're not logged in.",
     text: "Please log in to continue.",
     icon: "warning",
     confirmButtonText: "Ok",
   });
   return;
 }
}

export default SwalAlert