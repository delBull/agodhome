// components/INOComponent.tsx
import React from 'react';
import web3 from 'web3';
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';

const INOComponent = () => {
  const { account, library } = useWeb3React();

  const handleConnectWallet = async () => {
    // Conectar con la billetera
  };

  const handlePurchaseToken = async () => {
    // Comprar token
  };

  return (
    <div>
      <h2>Oferta Inicial de NFT (INO)</h2>
      <p>Compre tokens y reciba un NFT único!</p>
      <button onClick={handleConnectWallet}>Conectar billetera</button>
      <button onClick={handlePurchaseToken}>Comprar token</button>
    </div>
  );
};

export default INOComponent;
