import { Server } from "miragejs";
import { tweetCollection } from '../data/tweetCollection';
import { userProfileInfo } from '../data/userProfileInfo';
import { newsCollection } from '../data/newsCollection';
import { userCollection } from '../data/userCollection';

let server = new Server();

export const mockServer = () => {
  server.get('/api/tweets', {
    data: tweetCollection,
  });
  server.get('/api/user-profile', {
    data: userProfileInfo,
  });
  server.get('/api/news', {
    data: newsCollection,
  });
  server.get('/api/who-to-follow', {
    data: userCollection,
  });
}