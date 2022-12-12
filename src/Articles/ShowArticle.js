import React from 'react';

const ShowArticle = ({ article }) => {
  return (
    <div className='border-2 border-blue-900 w-56 m-0 p-4 mx-auto'>
      <h1>{article.title}</h1>
      <img src={article.image} alt="" />
      <h2>{article.subtitle}</h2>
      <p>{article.content}</p>
    </div>
  );
};

export default ShowArticle;
