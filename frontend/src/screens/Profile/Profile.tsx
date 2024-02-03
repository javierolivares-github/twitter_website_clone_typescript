import React from 'react';
import '/src/index.css';
import Heading1 from '../../components/atoms/Typography/Heading1';

const Profile = () => {
  return (
    <div data-testid="profile-wrapper" className="py-7 px-4">
      <Heading1 weight="font-bold" color="text-secondary-15">This is the Profile page. Coming soon.</Heading1>
    </div>
  )
}

export default Profile;