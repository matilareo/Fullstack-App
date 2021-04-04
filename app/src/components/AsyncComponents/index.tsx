
 import React from 'react';
 import Loadable from 'react-loadable';
 import { Loader } from 'semantic-ui-react';
 

 const AsyncPostsComponent = Loadable({
   loader: () => import('../../routes/posts/views'),
   loading: () => <Loader active inline='centered' />,
 });
 
 const AsyncNotFoundComponent = Loadable({
  loader: () => import('../../routes/notFound/views'),
  loading: () => <Loader active inline='centered' />,
});

 
 export {
   AsyncPostsComponent,
   AsyncNotFoundComponent
 };
 