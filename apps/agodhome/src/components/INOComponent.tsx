// components/INOComponent.tsx
import React from 'react';
import { useWeb3React } from '@web3-react/core';

const INOComponent = () => {
  const { } = useWeb3React();

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
