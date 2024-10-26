'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BiSolidCopy } from 'react-icons/bi';
import { FaCircleExclamation } from 'react-icons/fa6';
import { IoIosArrowBack } from 'react-icons/io';
import { PiHashStraightFill } from 'react-icons/pi';
import { FaShareAlt } from 'react-icons/fa';
import { Account } from '@/utils/types';
import { useRouter } from 'next/navigation';

export default function Receive() {
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

  return (
    <div className="border w-full">
      <div className="sticky text-[#ffffff] top-0 z-10 p-3 py-5 flex items-center justify-between gap-1">
        <Link href="/dashboard" className="flex items-center gap-2">
          <IoIosArrowBack className="text-2xl text-[#ffffff]/70" />
        </Link>
        <span className=" font-semibold">Receive</span>
        <FaCircleExclamation className="text-[#ffffff]/70 text-xl mt-1 rotate-180" />
      </div>
      <div className="px-4 mt-3 mb-20">
        <div className="bg-[#1f1b08] rounded-[10px] text-[#ffffff] top-0 z-10 p-3 py-5 flex gap-3 justify-between">
          <FaCircleExclamation className="text-yellow-400 text-2xl mt-1 rotate-180" />
          <span className="text-yellow-400 text-xs">Only send Bitcoin (BTC) network assets to this address. Other assets will be lost forever.</span>
        </div>
      </div>
      <div className="">
        <div className="flex flex-col items-center justify-center text-xl px-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <Image src="https://i.imgur.com/N6UMWP2.png" width={100} height={100} alt="logo" className="w-[25px] h-[25px]" />
            <span className="font-bold text-white">BTC</span>
            <span className="text-sm bg-[#f5f5f5] px-3 py-1 rounded-[20px]">COIN</span>
          </div>

          <div className="border flex items-start flex-col justify-between p-4 my-5 rounded-[15px] bg-white w-[300px] mx-auto min-h-[300px]">
            <div className="h-full">
              
            </div>
            <span className="break-all w-full text-base">{user?.holder.accountWalletAddress}</span>
          </div>
          <div className="w-[280px] flex items-center justify-between">
            <div className="flex flex-col gap-2 items-center">
              <button className="bg-[#181717] flex items-center justify-center rounded-[100%] w-[50px] h-[50px]">
                <BiSolidCopy className="text-white/70" />
              </button>
              <span className="text-white/70 text-sm">Copy</span>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <button className="bg-[#181717] flex items-center justify-center rounded-[100%] w-[50px] h-[50px]">
                <PiHashStraightFill className="text-white/70" />
              </button>
              <span className="text-white/70 text-sm">Set Amount</span>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <button className="bg-[#181717] flex items-center justify-center rounded-[100%] w-[50px] h-[50px]">
                <FaShareAlt className="text-white/70" />
              </button>
              <span className="text-white/70 text-sm">Share</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
