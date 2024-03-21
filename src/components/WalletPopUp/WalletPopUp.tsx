import React from 'react'
import Button from '../Button/Button'

export type WalletPopUpProps = {
  isVisible: boolean
};

const WalletPopUp = ({ isVisible }: WalletPopUpProps) => {
  return isVisible ? (
    <div className='WalletPopUp'>
      <h1>Select the wallet to connect</h1>
      <Button style='primary' label='Use MetaMask' />
      <Button style='primary' label='Use Phantom' />
    </div>
  ) : null
}

export default WalletPopUp