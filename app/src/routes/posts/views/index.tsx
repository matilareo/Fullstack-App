import { useQuery,useLazyQuery ,useMutation} from "@apollo/client";
import React, { useEffect , useState} from "react";
import { GET_POSTS , DELETE_POST,CREATE_POST} from "../../../Apollo/queries/posts";
import { Message } from 'semantic-ui-react'
import './test.css'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { create } from "node:domain";

const PostContainer=()=>{
  const [state,setState] = useState({
    error: false,
    loading: true,
  })
  const [newPost,setNewPost] = useState("");
  const [triggerGetPosts,{data, loading}] = useLazyQuery(GET_POSTS,{
    fetchPolicy: 'network-only',
    onError:(error)=>{
      setState(prev=>({...prev, error: !!error}))
    }
  });
  useEffect(()=>{
    triggerGetPosts();
  },[])
  const [triggerCreatePost,{loading:createPostLoading}] = useMutation(CREATE_POST,{
    onCompleted:()=>{
      triggerGetPosts()
    },
    onError:(error)=>{
      setState(prev=>({...prev, error: !!error}))
    }
  });
  const [deletePost, { loading:deleteLoading}] = useMutation(DELETE_POST,{
    onCompleted:()=>{
      triggerGetPosts()
    },
    onError:(error)=>{
      setState(prev=>({...prev, error: !!error}))
    }
  })
  useEffect(()=>{
    setState(prev=>({...prev, loading: deleteLoading|| loading||createPostLoading}))
  },[ deleteLoading, loading, createPostLoading])

  const handleCreatePost = ()=>{
    triggerCreatePost({
      variables:
      {
        title:newPost
      }
    })
  }
  const handleChange = (e, {name, value}) => setNewPost(value)

  
  // const [deleteQuery] = useMutation(DELETE_POST);
  if(state.error){return `Error!`}
  
  return (<>
          <Form onSubmit={()=>handleCreatePost()}>
            <Form.Input 
              onChange={handleChange} 
              placeholder='New Post'
              name='New Post'
              value={newPost}/>
            <Button type='submit'>Submit</Button>
            
          </Form>
          {state.loading ?
          <div className="ui active centered inline loader"></div>:
          (data ? data.getPosts.map((elm)=>{
            return (
            <>
            <Message
            key = {elm.id}
            floating
            onDismiss={()=>{deletePost({
              variables:{
                id: elm.id
              }
            });}
            }
            header={`Post Id: ${elm.id}`}
            content={`${elm.title}`}
          />
          </>)
            }):<div></div>)}</>)
}

export default PostContainer;