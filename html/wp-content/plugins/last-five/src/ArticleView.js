import React from 'react';
import EditPost from './EditPost';

const ArticleView = ({article}) => {
  const { id, title, content, featured_media } = article;

  const imageUrl = () => {
    return fetch(`/wp-json/wp/v2/media/${featured_media}`)
    .then( res => res.json())
    .then( data => data.guid.rendered )
  }

  return(
    <div>
      <div>{id}</div>
      <img src={'/abc'} alt='feature image' />
      <div>{title.rendered}</div>
      <div>{content.rendered}</div>
      <EditPost post={article} />
    </div>
  )
}

export default ArticleView;
