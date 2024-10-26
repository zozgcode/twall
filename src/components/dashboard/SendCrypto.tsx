'use client';

import React, { useEffect, useState } from 'react';
import { cryptoCoins } from '../mockData/CoinsList';
import Image from 'next/image';
import { IoIosArrowBack } from 'react-icons/io';
import Link from 'next/link';
import { CiSearch } from 'react-icons/ci';
import SendCoinsModal from '../modal/SendCoinsModal';
import { mockAccounts } from '../mockData/MockData';
import { Account } from '@/utils/types';

export default function SendCrypto() {
  const [user, setUser] = useState<Account | null>(null);
  const [filteredCoins, setFilteredCoins] = useState(cryptoCoins);
  const [selectedCoin, setSelectedCoin] = useState<any>(null);
  const [selectedAsset, setSelectedAsset] = useState<any>(null); // Store selected asset details
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');

    if (loggedInUser) {
      try {
        const user = JSON.parse(loggedInUser) as Account;
        setUser(user);
      } catch (error) {
        console.error('Error parsing loggedInUser from localStorage', error);
      }
    }
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = cryptoCoins.filter(coin => coin.name.toLowerCase().includes(searchTerm) || coin.symbol.toLowerCase().includes(searchTerm));
    setFilteredCoins(filtered);
  };

  const handleSelect = (coin: any) => {
    setSelectedCoin(coin);
    // Check if user is not null before accessing user.assets
    if (user) {
      const asset = user.assets.find(asset => asset.assetsName === coin.symbol);
      setSelectedAsset(asset); // Set the selected asset
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full bg-[#212121]">
      <div className="sticky bg-[#212121] border-b border-b-[#757575] top-0 z-10 p-3 py-5 flex items-center justify-between gap-1">
        <Link href="/dashboard" className="flex text-white items-center gap-2">
          <IoIosArrowBack />
          <span className="font-semibold">Send</span>
        </Link>
        <Link href="/dashboard/transactions" className="text-sm hover:underline underline-offset-4">
          <span className="font-semibold text-white">History</span>
        </Link>
      </div>
      <div className="p-4">
        <div className="relative">
          <CiSearch className="absolute left-3 top-3 text-[30px] text-[#c0c0c0]" />
          <input type="text" placeholder="Search..." className="border-none rounded-[20px] bg-[#2A2A2A] outline-none text-[#c0c0c0] w-full pl-[50px] p-4 mb-4" onChange={handleSearch} />
        </div>

        <div className="space-y-2">
          {filteredCoins.length > 0 ? (
            filteredCoins.map(coin => (
              <div key={coin.id} onClick={() => handleSelect(coin)} className="rounded-[20px] flex items-center p-3 bg-[#2A2A2A] cursor-pointer hover:bg-[#2A2A2A]/90">
                <Image src={coin.iconUrl} alt={coin.name} width={24} height={24} className="w-6 h-6 mr-3" />
                <div>
                  <p className="text-sm font-medium text-[#c0c0c0]">
                    {coin.name} ({coin.symbol})
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-[#c0c0c0] text-center pt-4">No coins found.</p>
          )}
        </div>
      </div>

      {selectedCoin && selectedAsset && isModalOpen && <SendCoinsModal coin={selectedCoin} asset={selectedAsset} onClose={handleCloseModal} />}
    </div>
  );
}
