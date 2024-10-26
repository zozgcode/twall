'use client';

import React from 'react';
import { fMenuLink } from './data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="fixed bg-[#212121] z-50 px-4 py-3 border-t border-t-[#414141] bottom-0 left-0 w-full shadow-md">
      <div className="mx-auto max-w-[250px] flex items-center justify-between py-[10px] gap-[20px]">
        {fMenuLink.map((link, i) => (
          <Link href={link.slug} key={i} className={`flex flex-col items-center gap-1 ${pathname === link.slug ? 'text-[#ab9ff2]' : 'text-[#c0c0c0]'}`}>
            <span className="text-xl">{link.icon}</span>
            <span className="text-[13px]">{link.label}</span>
          </Link>
        ))}
      </div>
    </footer>
  );
}
