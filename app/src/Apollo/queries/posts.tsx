import { gql } from '@apollo/client';

export const GET_POSTS = gql`
	{
    getPosts{
      id
      title
    }
  }
`;

export const DELETE_POST = gql`
	mutation deletePost($id:String!){
    deletePost(id:$id)
    }
`;

export const CREATE_POST = gql `
  mutation createPost($title:String!){ createPost(title:$title){
    id
  }}
`
