export type IconProps = {
  fillColor: "text-primary-50" | "text-secondary-40" | "text-black-900" | "text-gray-40" | "text-secondary-15" | "text-gray-100" | "text-black-100";
  width: string;
  height:string;
  smWidth?: string;
  smHeight?: string;
  isFilled?: boolean;
}

export type TextProps = {
  children: string;
  weight: "font-bold" | "font-semibold" | "font-medium" | "font-normal" | "font-light";
  color: "text-secondary-15" | "text-secondary-50" | "text-gray-100" | "text-gray-40" | "text-red-600";
}

export type ImageProps = {
  imageUrl: string | undefined;
  width?: string;
  height?: string;
  smWidth?: string;
  smHeight?: string;
}

export type TweetListProps = {
  status: string;
  data: {
    id: number,
    status: "liked" | "retweeted" | "followed" | "promoted" | "pinned" | "none", 
    profileImageUrl: string,
    username: string,
    account: string,
    verified: boolean,
    timestamp: string,
    content: string,
    contentImageUrl: string,
    commentAmount: string,
    retweetAmount: string,
    likeAmount: string,
  }[] | [];
}

export type tweetCollectionType = {
  id: number;
  status: string;
  profileImageUrl: string;
	username: string;
  account: string;
  verified: boolean;
  timestamp: string;
  content: string;
  contentImageUrl: string;
  commentAmount: string;
  retweetAmount: string;
  likeAmount: string;
}[];

export type UserProfileInfoTypes = {
  id: number;
  imageUrl: string;
  username: string;
  account: string;
}[] | [] ;

