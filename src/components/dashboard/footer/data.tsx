import { FaWallet, FaMoneyBillTransfer } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";

export const fMenuLink = [
    {
      label: "Wallet",
      icon: <FaWallet />,
      slug: "/dashboard",
    },
    {
      label: "NFT",
      icon: <FaMoneyBillTransfer />,
      slug: "/dashboard/nfts",
    },
    {
      label: "Settings",
      icon: <IoSettingsOutline />,
      slug: "/dashboard/settings",
    },
  ];