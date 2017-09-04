import React from 'react';
import ArticleView from './ArticleView';

const ArticleList = ({posts}) => {
  console.log("Posts are:", posts);
  return(
  <div>
    <h1>ArticleList</h1>
    {!posts.length ? null
    : posts.map(article => {
      return <ArticleView article={article} />
    })
    }
  </div>

  )
}

export default ArticleList;
