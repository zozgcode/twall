'use client';

import Image from 'next/image';

export default function Header() {
  return (
    <div className="flex h-[170px] items-center flex-col p-4 justify-between w-full">
      <div />
      <Image
        src="https://i.imgur.com/2HH57hV.png" // Replace with the path to your image
        width={5000}
        height={5000}
        className="w-[300px] h-[200px]"
        alt="sdsmmd"
      />
    </div>
  );
}
