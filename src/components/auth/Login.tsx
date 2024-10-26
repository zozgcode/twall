'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { mockAccounts } from '../mockData/MockData';
import Header from '../header/Header';

export default function Login() {
  const router = useRouter();
  const [accountWalletAddress, setAccountWalletAddress] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Find the user account based on the wallet address
    const userAccount = mockAccounts.find(account => account.holder.accountWalletAddress === accountWalletAddress);

    if (!accountWalletAddress) {
      setError('Please enter your wallet address to continue');
      return;
    }

    if (!userAccount) {
      setError('Account not found');
      return;
    }

    // Store user data in localStorage
    localStorage.setItem('loggedInUser', JSON.stringify(userAccount));
    router.push('/dashboard');
  };

  return (
    <div className="w-full bg-[#FFFFFF] h-screen px-4 pt-[30px]">
      <Header />
      <div className="mx-auto rounded-xl max-w-[350px] py-7">
        <form onSubmit={handleLogin}>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <label htmlFor="accountWalletAddress" className="text-[#000000] text-[16px]">
                Enter your wallet address
              </label>
              <input
                type="text"
                value={accountWalletAddress}
                className="px-[23px] py-[10px] w-full h-[60px] rounded-[15px] border outline-none"
                placeholder="Wallet Address"
                onChange={e => setAccountWalletAddress(e.target.value)}
              />
            </div>
          </div>

          {error && <p className="text-red-500 mt-2">{error}</p>}

          <div className="flex flex-col items-center justify-between gap-2 mt-6">
            <button type="submit" className="px-[23px] py-[6px] w-full h-[60px] bg-[#3375BB] text-[#FFFFFF] font-semibold rounded-[15px]">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
