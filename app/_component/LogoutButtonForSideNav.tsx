'use client';

import { signOut } from 'next-auth/react';
import { FiLogOut } from "react-icons/fi";

export default function LogoutButton() {
  const handleLogout = async () => {
    await signOut({ callbackUrl: '/login' });
  };

  return (
    <button onClick={handleLogout} className="flex gap-6 group-hover:text-veryDarkBlue transform duration-500">
      <FiLogOut size={25} className="flex justify-center items-center" />Logout
    </button>
  );
}