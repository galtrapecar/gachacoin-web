import { useRecoilValue } from 'recoil';
import PageHeading from '../../components/PageHeading/PageHeading';
import { symbolAtom } from '../../state';
import Button from '../../components/Button/Button';
import Icons from '../../assets/icons/index';
import TeamMemberCard from '../../components/TeamMemberCard/TeamMemberCard';

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
      <div className="__navigation__panel">
        <Button
          style={'secondary'}
          label={'About'}
          icon={<Icons.Heart width={24} height={24} />}
        />
        <Button
          style="secondary"
          label="Technical details"
          icon={<Icons.Wrench width={24} height={24} />}
        />
        <Button
          style="secondary"
          label="White paper"
          icon={<Icons.Paper width={24} height={24} />}
        />
        <Button
          style="secondary"
          label="FAQ"
          icon={<Icons.Questionmark width={24} height={24} />}
        />
      </div>
      <div className="AboutPage__content">
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
        <div className="__title__wrapper">
          <h5 className="__title">GochaCoin Team</h5>
        </div>
        <div className="__teamMember__cards__container">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
        <div className="__title__wrapper">
          <h5 className="__title">The Gocha Manifesto</h5>
        </div>

        <div className="__manifesto__container">
          <p className="__column first">
            What we believe in, what we stand for, and why we're building Gocha.
            The future is exciting. And we believe that blockchain is the
            future—but blockchain is about as approachable as a bunch of ones
            and zeroes. We want a future for everyone, not one exclusive to
            Bitcoin miners, VCs, ICOs, and other equally fun acronyms.
          </p>
          <p className="__column second">
            So why Digital weeaboo Collectables? Cats are impossible to
            understand. They're ambassadors for pharaohs, memes, and your mom's
            facebook page. They don't discriminate; they despise everyone
            equally
            <h5 className="__ending">The future is Gocha</h5>
          </p>
        </div>
      </div>
      <div className="AboutPage__footer" />
    </div>
  );
};

export default AboutPage;

// FIXME: The Gocha manifesto columns not equal width
// TODO: Add navigation buttons functionality
// TODO: Update footer with content
