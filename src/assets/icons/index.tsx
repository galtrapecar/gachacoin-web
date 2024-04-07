import { ReactComponent as CheckmarkIcon } from './Checkmark.svg';
import { ReactComponent as Coin } from './GachaCoin.svg';
import { ReactComponent as CollectionIcon } from './Collection.svg';
import { ReactComponent as EthIcon } from './Eth.svg';
import { ReactComponent as GearIcon } from './Gear.svg';
import MaticCoin from './MaticCoin.png';
import { ReactComponent as MetaMaskIcon } from './MetaMask.svg';
import { ReactComponent as PhantomIcon } from './Phantom.svg';
import { ReactComponent as PlusCircleIcon } from './PlusCircle.svg';

const Icons = {
  CheckmarkIcon,
  Coin,
  CollectionIcon,
  EthIcon,
  GearIcon,
  MaticCoin: <img src={MaticCoin} draggable={false} />,
  MetaMaskIcon,
  PhantomIcon,
  PlusCircleIcon,
};

export default Icons;
