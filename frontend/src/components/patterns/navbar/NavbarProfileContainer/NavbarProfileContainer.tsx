import React, { useState, useEffect} from 'react';
import '/src/index.css';
import NavbarProfile from '../NavbarProfile';
import { statusTypes } from '../../../../lib/statusTypes';


const NavbarProfileContainer = () => {
  const [profileState, setProfileState] = useState({
    status: statusTypes.loading,
    data: [],
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const userProfileFetch = await fetch('/api/user-profile');
        const userProfileResponse = await userProfileFetch.json();
        setProfileState({
          status: statusTypes.loaded,
          data: userProfileResponse.data,
        })
      } catch (error) {
        console.log(error);
        setProfileState({
          status: statusTypes.errored,
          data: [],
        })
      }
    }

    getData();
  }, []);

  return (
    <NavbarProfile
      status={profileState.status}
      data={profileState.data}
    />
  )
}

export default NavbarProfileContainer;


