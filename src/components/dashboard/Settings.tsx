'use client';

import { Account } from '@/utils/types';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { GoCheckCircleFill } from 'react-icons/go';
import { IoIosArrowBack } from 'react-icons/io';
import Loader from '../Loader';

export default function Settings() {
  const router = useRouter();
  const [user, setUser] = useState<Account | null>(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    } else {
      router.push('/');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    router.push('/');
  };

  if (!user) {
    return <Loader />;
  }
  return (
    <div className="w-full h-screen bg-[#212121]">
      <div className="border-b border-b-[#757575] sticky bg-[#212121] top-0 z-10 p-3 py-5 flex items-center justify-between gap-1">
        <Link href="/dashboard" className="flex text-white items-center gap-2">
          <IoIosArrowBack />
          <span className="font-semibold">Settings</span>
        </Link>
        <button onClick={handleLogout} className="p-3 py-2 rounded-lg border-none outline-none font-medium border bg-[#ab9ff2] text-[#3c3b42] text-sm">
          Sign out
        </button>
      </div>
      <div className="p-4">
        <div className="text-sm flex flex-col items-center justify-center gap-8 mb-4">
          <div className="w-full rounded-[30px] flex bg-[#2A2A2A] border-[#2A2A2A] mb-1 shadow-sm justify-between items-center pr-5 p-4">
            <span className="text-[#c0c0c0] font-normal">Backup Email</span>
            <span className="text-[#c0c0c0] font-medium flex items-center gap-1">
              <span className="bg-[#ab9ff2]/30 text-[#c0c0c0] text-xs p-2 py-1 rounded-lg flex items-center gap-1">
                Verified <GoCheckCircleFill />
              </span>
              <span>{user.holder.email}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
