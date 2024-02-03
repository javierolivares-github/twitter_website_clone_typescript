import React from 'react';
import '/src/index.css';
import '/src/css/placeholderAnimation.css';
import { UserProfileInfoTypes } from '../../../../lib/types';
import { statusTypes } from '../../../../lib/statusTypes';
import NavbarProfileLoading from '../NavbarProfileLoading';
import ErrorMessage from '../../../atoms/ErrorMessage';
import NavbarProfileItem from '../NavbarProfileItem/NavbarProfileItem';
import { handleClick } from '../../../../lib/helpers';


type NavbarProfileProps = {
  status: string;
  data: UserProfileInfoTypes;
}

const NavbarProfile = ({ status, data }: NavbarProfileProps) => {
  if (status === statusTypes.loading) {
    return (
      <NavbarProfileLoading />
    )
  }

  if (status === statusTypes.errored) {
    return (
      <ErrorMessage message="Failed to load data" />
    )
  }

  return (
    <NavbarProfileItem 
      profileImageUrl={data[0].imageUrl} 
      username={data[0].username}
      account={data[0].account}
      onClick={handleClick}
    />
  )
}

export default NavbarProfile;


