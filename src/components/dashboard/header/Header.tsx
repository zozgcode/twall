'use client';

import { UimBars } from '@/components/svgIcons';
import Image from 'next/image';
import React, { useState } from 'react';
import { PiCopySimpleFill } from "react-icons/pi";

export default function Header({ handleLogout, user }: any) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(user.account_details.wallet_address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <div className="w-full mb-2 min-h-[30px] relative flex items-center justify-between p-[16px] py-[15px]">
      {/* <div className="flex items-center gap-2">
        <Image src="https://i.imgur.com/zELSpwE.png" width={200} height={200} className="w-[20px] h-20px] rounded-full" alt="logo" />
        <div className="">
          <p className="text-black text-xs font-semibold">Public Address</p>
          <p className="text-black/60 text-xs flex gap-2 items-center font-light">
            {user.account_details.dubWalletAddress}
            <PiCopySimpleFill onClick={copyToClipboard} className="cursor-pointer" />
            {copied && <span className="text-green-500 text-xs">Copied!</span>}
          </p>
        </div>
      </div> */}
    </div>
  );
}
