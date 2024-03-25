import React from 'react';
import placeholder from '../../assets/images/placeholder.jpeg';

export type TeamMemberCardProps = {
  name: string;
  position: string;
  image?: string;
};

const TeamMemberCard = ({ name, position, image }: TeamMemberCardProps) => {
  return (
    <div className="TeamMemberCard">
      <div className="__image__container">
        <img
          src={require('../../assets/images/placeholder.jpeg')}
          alt="profile"
        />
      </div>
      <div className="__name">{name}</div>
      <div className="__position">{position}</div>
    </div>
  );
};

export default TeamMemberCard;

// FIXME: dynamical image rendering
