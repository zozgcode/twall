import Image from 'next/image';
import React, { useState } from 'react';
import { HiArrowLeft } from 'react-icons/hi';

interface SendCoinsModalProps {
  coin: {
    name: string;
    symbol: string;
    iconUrl: string;
  };
  asset: {
    quantity: number;
    assetRecentPrice: number; // Recent price of the asset in USD
  };
  onClose: () => void;
}

export default function SendCoinsModal({ coin, asset, onClose }: SendCoinsModalProps) {
  const [amount, setAmount] = useState<number | ''>('');
  const [recipient, setRecipient] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [loading, setLoading] = useState(false); // Loader state for send confirmation
  const [loadingConfirm, setLoadingConfirm] = useState(false); // Loader state for error confirmation

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const enteredAmount = parseFloat(e.target.value);
    setAmount(e.target.value ? enteredAmount : '');

    if (enteredAmount > asset.quantity) {
      setError(`Amount exceeds available ${coin.symbol}`);
    } else {
      setError(null);
    }
  };

  const handleMaxAmount = () => {
    setAmount(asset.quantity); // Set the amount to the maximum available quantity
    setError(null); // Clear the error since it's now valid
  };

  const equivalentInUSD = amount ? (amount * asset.assetRecentPrice).toFixed(2) : '0.00';

  const handleSend = () => {
    if (!recipient) {
      setError("Recipient's address is required");
      return;
    }
    if (amount === '' || amount <= 0) {
      setError('Amount is required and must be greater than 0');
      return;
    }
    if (amount > asset.quantity) {
      setError(`Amount exceeds available ${coin.symbol}`);
      return;
    }

    setError(null); // Reset error if validation passes
    setLoading(true); // Start loading for confirmation

    // Simulate a delay before showing the confirmation modal
    setTimeout(() => {
      setLoading(false); // Stop loading
      setShowConfirmation(true); // Show confirmation modal
    }, 2000); // 2 seconds delay
  };

  const handleConfirm = () => {
    setLoadingConfirm(true); // Start loading for error modal

    // Simulate a delay before showing the error modal
    setTimeout(() => {
      setLoadingConfirm(false); // Stop loading
      setShowConfirmation(false); // Close confirmation modal
      setShowErrorModal(true); // Show error modal
    }, 2000); // 2 seconds delay
  };

  const handleCloseErrorModal = () => {
    setShowErrorModal(false); // Close error modal
  };

  return (
    <div className="absolute p-4 pt-20 bg-[#212121] w-full h-screen top-0 left-0 right-0">
      <div className="relative">
        <HiArrowLeft onClick={onClose} className="absolute text-2xl text-[#c0c0c0] left-0 cursor-pointer" />
        <h2 className="font-medium text-xl text-white text-center">Send {coin.name}</h2>
      </div>
      <div className="flex items-center justify-center my-7">
        <Image src={coin.iconUrl} width={50} height={50} className="w-[50px] h-[50px] rounded-full" alt={coin.name} />
      </div>
      <div className="flex flex-col gap-3 relative">
        <input
          type="text"
          placeholder={`Recipient's ${coin.symbol} address`}
          value={recipient}
          onChange={e => setRecipient(e.target.value)}
          className={`p-5 w-full rounded-[10px] bg-[#181818] text-white border border-[#2F2F2F] outline-none ${!recipient && error ? 'border-red-500' : ''}`}
        />
        <div className="relative">
          <input
            type="number"
            placeholder="Amount"
            value={amount === '' ? '' : amount}
            onChange={handleAmountChange}
            className={`p-5 pr-[130px] w-full rounded-[10px] bg-[#181818] text-white border border-[#2F2F2F] outline-none ${amount === '' && error ? 'border-red-500' : ''}`}
          />
          <div className="absolute flex items-center gap-3 pr-3 py-[14px] right-0 bottom-0">
            <span className="text-[#c0c0c0]">{coin.symbol}</span>
            <button className="p-2 rounded-[100px] flex items-center justify-center bg-[#333333] w-[65px] text-[13px] text-white" onClick={handleMaxAmount}>
              MAX
            </button>
          </div>
        </div>
      </div>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      <div className="flex items-center justify-between mt-2">
        <span className="text-[#c0c0c0] text-sm">${equivalentInUSD}</span>
        <span className="text-[#c0c0c0] text-sm">
          Available {asset.quantity.toFixed(2)} {coin.symbol}
        </span>
      </div>
      <div className="flex items-center justify-between gap-5 mt-[100px]">
        <button onClick={onClose} className="w-full p-5 bg-[#333333] text-white text-base font-[600] rounded-[6px]">
          Cancel
        </button>
        <button
          onClick={handleSend}
          disabled={!recipient || amount === '' || error !== null || loading}
          className={`w-full p-5 ${!recipient || amount === '' || error || loading ? 'bg-gray-500/20 text-[#aaaaaa] cursor-none' : 'bg-[#333333]'} text-white text-base font-[600] rounded-[6px]`}
        >
          Send
        </button>
      </div>

      {/* Loader for Send Action */}
      {loading && <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-75"><div className="loader" /></div>}

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="absolute p-4 top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-[#181818] p-5 rounded-lg">
            <h2 className="text-white text-lg mb-3">Confirmation</h2>
            <p className="text-[#c0c0c0]">
              You are about to send {amount} {coin.symbol} ~ ${equivalentInUSD} to {recipient}.
            </p>
            <div className="flex justify-end mt-4">
              <button onClick={() => setShowConfirmation(false)} className="p-2 mr-2 bg-[#333333] text-white rounded">
                Cancel
              </button>
              <button onClick={handleConfirm} className="p-2 bg-[#1a73e8] text-white rounded">
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Loader for Confirm Action */}
      {loadingConfirm && <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-75"><div className="loader" /></div>}

      {/* Error Modal */}
      {showErrorModal && (
        <div className="absolute p-4 top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-[#181818] p-5 rounded-lg">
            <h2 className="text-white text-lg mb-3">Error</h2>
            <p className="text-[#c0c0c0]">Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.</p>
            <div className="flex justify-end mt-4">
              <button onClick={handleCloseErrorModal} className="p-2 bg-[#1a73e8] text-white rounded">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
