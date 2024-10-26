'use client';

import Link from 'next/link';
import { IoIosArrowBack } from 'react-icons/io';

export default function Nfts() {
  return (
    <div className="w-full bg-[#212121]">
      <div className="sticky bg-[#212121] border-b border-b-[#757575] top-0 z-10 p-3 py-5 flex items-center justify-between gap-1">
        <Link href="/dashboard" className="flex text-white items-center gap-2">
          <IoIosArrowBack />
          <span className="font-semibold">Your NFTs</span>
        </Link>
      </div>
      <div className="px-4 mt-4">
        <div className="text-[#c0c0c0] pt-10 text-xl px-4 text-center">No Assets</div>
      </div>
    </div>
  );
}
