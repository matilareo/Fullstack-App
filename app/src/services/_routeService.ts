// routes
import Posts from '../routes/posts';
import NotFound from '../routes/notFound';

const prefix = 'app/'
export default [
  {
    path: prefix + 'posts',
    component: Posts,
  },
  {
    path: '*',
    component: NotFound
  }
];
