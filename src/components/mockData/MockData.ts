import { Account } from '@/utils/types';

export const mockAccounts: Account[] = [
  {
    account_id: 'ACC001',
    holder: {
      firstName: '',
      lastName: '',
      email: 'a*@gmail.com',
      jointNames: '',
      accountWalletAddress: 'sample1'
    },
    account_details: {
      wallet_address: 'bc1qw508d...za67d7',
      balance_usd: 20000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, Please enter the code sent to you',
      transaction_code: '',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: 'TXN001',
        date: 'August 1, 2024',
        description: 'Bonus Deposit',
        walletAddress: '1A1zP1eP...z8AEuR',
        status: 'Success',
        quantity: 0.0047,
        amount_in_usd: 300.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN002',
        date: 'August 1, 2024',
        description: 'Deposit BTC',
        walletAddress: '3J98t1Wp...X5hA5B',
        status: 'Success',
        quantity: 0.024,
        amount_in_usd: 1500.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN003',
        date: 'June 24, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qw508d...za67d7',
        status: 'Success',
        quantity: 0.00095,
        amount_in_usd: 60.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN004',
        date: 'June 18, 2024',
        description: 'Deposit BTC',
        walletAddress: '1BoatSLR...21aF5W',
        status: 'Success',
        quantity: 0.00039,
        amount_in_usd: 25.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN005',
        date: 'June 3, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qar0s8...53kw5n',
        status: 'Success',
        quantity: 0.013,
        amount_in_usd: 800.0,
        assets: 'BTC'
      }
    ],
    assets: [
      {
        assetsName: 'BTC',
        assetsLogo: 'https://i.imgur.com/N6UMWP2.png',
        quantity: 0.042,
        assetRecentPrice: 2685.0
      },
      {
        assetsName: 'BCH',
        assetsLogo: 'https://i.imgur.com/eZTcmSl.png',
        quantity: 0,
        assetRecentPrice: 0.0
      },
      {
        assetsName: 'ETH',
        assetsLogo: 'https://i.imgur.com/feMQhL4.png',
        quantity: 0,
        assetRecentPrice: 0.0
      },
      {
        assetsName: 'BNB',
        assetsLogo: 'https://i.imgur.com/EKHVvWB.png',
        quantity: 0,
        assetRecentPrice: 0.0
      }
    ]
  },
  {
    account_id: 'ACC002',
    holder: {
      firstName: '',
      lastName: '',
      email: 'a*@gmail.com',
      jointNames: '',
      accountWalletAddress: 'bc1qfdchqquz4t29q4lxu2gaycr408w5045eljn2tx',
      accountWalletAddressBarCodeImg: ''
    },
    account_details: {
      wallet_address: '35tuPvcdn...81mHffLpX',
      balance_usd: 200000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, Please enter the code sent to you',
      transaction_code: '',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: 'TXN001',
        date: 'August 1, 2024',
        description: 'Bonus Deposit',
        walletAddress: '1A1zP1eP...z8AEuR',
        status: 'Success',
        quantity: 0.0047,
        amount_in_usd: 300.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN002',
        date: 'August 1, 2024',
        description: 'Deposit BTC',
        walletAddress: '3J98t1Wp...X5hA5B',
        status: 'Success',
        quantity: 0.024,
        amount_in_usd: 1500.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN003',
        date: 'June 24, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qw508d...za67d7',
        status: 'Success',
        quantity: 0.00095,
        amount_in_usd: 60.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN004',
        date: 'June 18, 2024',
        description: 'Deposit BTC',
        walletAddress: '1BoatSLR...21aF5W',
        status: 'Success',
        quantity: 0.00039,
        amount_in_usd: 25.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN005',
        date: 'June 3, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qar0s8...53kw5n',
        status: 'Success',
        quantity: 0.013,
        amount_in_usd: 800.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN004',
        date: 'August 8, 2023',
        description: 'Deposit BTC',
        walletAddress: '1BoatSLR...21aF5W',
        status: 'Success',
        quantity: 0.012,
        amount_in_usd: 756.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN004',
        date: 'July 20, 2023',
        description: 'Deposit BTC',
        walletAddress: '1BoatSLR...21aF5W',
        status: 'Success',
        quantity: 0.0067,
        amount_in_usd: 421.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN005',
        date: 'March 4, 2023',
        description: 'Deposit BTC',
        walletAddress: 'bc1qar0s8...53kw5n',
        status: 'Success',
        quantity: 0.015,
        amount_in_usd: 962.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN005',
        date: 'January 4, 2023',
        description: 'Deposit BTC',
        walletAddress: 'bc1qar0s8...53kw5n',
        status: 'Success',
        quantity: 0.0061,
        amount_in_usd: 385.0,
        assets: 'BTC'
      }
    ],
    assets: [
      {
        assetsName: 'BTC',
        assetsLogo: 'https://i.imgur.com/N6UMWP2.png',
        quantity: 0.083,
        assetRecentPrice: 20000.0
      }
      // {
      //   assetsName: 'BCH',
      //   assetsLogo: 'https://i.imgur.com/eZTcmSl.png',
      //   quantity: 0,
      //   assetRecentPrice: 0.0
      // },
      // {
      //   assetsName: 'ETH',
      //   assetsLogo: 'https://i.imgur.com/feMQhL4.png',
      //   quantity: 0,
      //   assetRecentPrice: 0.0
      // },
      // {
      //   assetsName: 'BNB',
      //   assetsLogo: 'https://i.imgur.com/EKHVvWB.png',
      //   quantity: 0,
      //   assetRecentPrice: 0.0
      // }
    ]
  }
];
