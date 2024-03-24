import { useRecoilValue } from 'recoil';
import PageHeading from '../../components/PageHeading/PageHeading';
import { symbolAtom } from '../../state';
import Button from '../../components/Button/Button';
import Icons from '../../assets/icons/index';

const AboutPage = () => {
  const symbol = useRecoilValue(symbolAtom);

  const teamMembers = [
    {
      name: 'John Wick',
      position: 'Lead developer',
      image: '../../assets/images/placeholder.jpeg',
    },
    {
      name: 'John Wick',
      position: 'Lead developer',
      image: '../../assets/images/placeholder.jpeg',
    },
    {
      name: 'John Wick',
      position: 'Lead developer',
      image: '../../assets/images/placeholder.jpeg',
    },
    {
      name: 'John Wick',
      position: 'Lead developer',
      image: '../../assets/images/placeholder.jpeg',
    },
    {
      name: 'John Wick',
      position: 'Lead developer',
      image: '../../assets/images/placeholder.jpeg',
    },
    {
      name: 'John Wick',
      position: 'Lead developer',
      image: '../../assets/images/placeholder.jpeg',
    },
    {
      name: 'John Wick',
      position: 'Lead developer',
      image: '../../assets/images/placeholder.jpeg',
    },
  ];
  return (
    <div className="AboutPage">
      <PageHeading title={'About'} symbol={symbol} subtitle={'について'} />
      <div className="AboutPage__content">
        <div className="__navigation__panel">
          <Button style="secondary" label="About" />
          <Button style="secondary" label="Technical details" />
          <Button style="secondary" label="White paper" />
          <Button style="secondary" label="FAQ" />
        </div>
        <Icons.Coin width={125} height={125} className="__coin__icon" />
        <p className="__introduction__text">
          With Gocha, users collect digital Kawaii collectables that can be
          equipped to their avatars! Each Gocha item is released in limited
          amounts, influencing its value. Players can acquire new items by
          either trading with other players or spinning the Gocha-Slot-Machine.
          In both cases different amount of the native GochaCoin crypt currency
          are required.
        </p>
        <p className="__introduction__text">
          Gocha is one of the world's first blockchain digitally wearable
          collectables. Blockchain is the technology that makes things like
          Bitcoin possible. While Gocha isn't a digital currency, it does offer
          the same security: Each Gocha is available in limited supply and 100%
          owned by you. It cannot be replicated, taken away, or destroyed.
        </p>
        <h2 className="__team">GochaCoin Team</h2>
        <div className="__teamMember__cards__container">
          {teamMembers.map((member, index) => (
            <div key={index}>{member.name}</div>
          ))}
        </div>
        <h2 className="__manifesto">The Gocha Manifesto</h2>
        <div className="__manifesto__container">
          <p>
            What we believe in, what we stand for, and why we're building Gocha.
            The future is exciting. And we believe that blockchain is the
            future—but blockchain is about as approachable as a bunch of ones
            and zeroes. We want a future for everyone, not one exclusive to
            Bitcoin miners, VCs, ICOs, and other equally fun acronyms.
          </p>
          <p>
            So why Digital weeaboo Collectables? Cats are impossible to
            understand. They're ambassadors for pharaohs, memes, and your mom's
            facebook page. They don't discriminate; they despise everyone
            equally
          </p>
          <h5>The future is Gocha</h5>
        </div>
        <div className="__footer__container">Footer</div>
      </div>
    </div>
  );
};

export default AboutPage;

// FIXME: Scroll not working
