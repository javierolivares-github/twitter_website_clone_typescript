import { UserCollectionTypes } from '../lib/types';

export const userCollection: UserCollectionTypes = [
  {
    id: 1,
		imageUrl : '/images/Google.jpg',
		username : 'Google',
		account  : '@google',
    isVerified: true,
	},
  {
    id: 2,
		imageUrl : '/images/Figma.png',
		username : 'Figma',
		account  : '@figma',
    isVerified: true,
	},
  {
    id: 3,
		imageUrl : '/images/Strapi.jpg',
		username : 'Strapi',
		account  : '@strapijs',
    isVerified: true,
	},
  {
    id: 4,
    imageUrl: '/images/profile2.png',
    username: 'Jane Doe',
    account: '@janedoe27',
    isVerified: false,
  },
  {
    id: 5,
    imageUrl: '/images/profile3.png',
    username: 'Pancho Olivares',
    account: '@pancho-git',
    isVerified: false,
  },
];