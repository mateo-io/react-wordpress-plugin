import React from 'react';
import { authenticatedRequest, initialAuthentication } from './AuthenticationAPI';


const submitPost = (post) => {
  console.log(initialAuthentication());
  const { id, ...rest } = post;

  const options = {
    url: `/wp-json/wp/v2/posts/${id}`,
  	method: 'POST',
  	headers: {
      'Content-Type': 'application/json',
  	},
  	body: JSON.stringify(rest)
  }

  return authenticatedRequest(options)
    .then( res => console.log("Edit2 responded with", res))
    .catch( err => console.log("there was an error", err))
  }


const EditPost = ({post}) => {
  return(
    <div>
    some input and some modals
    <button onClick={() => submitPost({...post, title: 'Hola' })}>click me</button>
    </div>
  )
}

export default EditPost;
