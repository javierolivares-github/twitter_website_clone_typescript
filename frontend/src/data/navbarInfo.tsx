import React from 'react';
import HomeIcon from '../components/atoms/Icons/HomeIcon';
import ExploreIcon from '../components/atoms/Icons/ExploreIcon';
import NotificationIcon from '../components/atoms/Icons/NotificationIcon';
import BookmarksIcon from '../components/atoms/Icons/BookmarksIcon';
import ListsIcon from '../components/atoms/Icons/ListsIcon';
import ProfileIcon from '../components/atoms/Icons/ProfileIcon';
import MoreIcon from '../components/atoms/Icons/MoreIcon';

export const navbarInfo = [
  { 
    id: 1, 
    name: "Home", 
    element: <HomeIcon fillColor="text-secondary-15" isFilled={false} width="w-[22px]" height="h-[22px]" /> 
  },
  { 
    id: 2, 
    name: "Explore", 
    element: <ExploreIcon fillColor="text-secondary-15" isFilled={false} width="w-[22px]" height="h-[22px]" /> 
  },
  { 
    id: 3, 
    name: "Notification", 
    element: <NotificationIcon fillColor="text-secondary-15" isFilled={false} width="w-[22px]" height="h-[22px]" /> 
  },
  { 
    id: 4, 
    name: "Bookmarks", 
    element: <BookmarksIcon fillColor="text-secondary-15" isFilled={false} width="w-[22px]" height="h-[22px]" /> 
  },
  { 
    id: 5, 
    name: "Lists", 
    element: <ListsIcon fillColor="text-secondary-15" isFilled={false} width="w-[22px]" height="h-[22px]" /> 
  },
  { 
    id: 6, 
    name: "Profile", 
    element: <ProfileIcon fillColor="text-secondary-15" isFilled={false} width="w-[22px]" height="h-[22px]" /> 
  },
  { 
    id: 7, 
    name: "More", 
    element: <MoreIcon fillColor="text-secondary-15" isFilled={false} width="w-[22px]" height="h-[22px]" /> 
  },
]