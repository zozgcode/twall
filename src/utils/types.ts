// src/utils/types.ts
export interface Account {
  account_id: string;
  holder: {
    firstName?: string;
    lastName?: string;
    email?: string;
    jointNames: string;
    accountWalletAddress: string;
    accountWalletAddressBarCodeImg?: string;
  };
  account_details: {
    wallet_address: string;
    balance_usd?: number;
  };
  transaction_mgs_code: {
    transaction_text_msg?: string;
    transaction_code?: string;
    wireDate: boolean;
  };
  transaction_history: Transaction[];
  assets: Assets[];
}

export interface Transaction {
  transaction_id: string;
  date: string;
  time?: string;
  description: string;
  walletAddress: string;
  status: string;
  quantity: number;
  amount_in_usd: number;
  assets: string;
}

export interface Assets {
  assetsLogo: string;
  assetsName: string;
  quantity: number;
  assetRecentPrice: number;
}
